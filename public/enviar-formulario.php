<?php
/**
 * Recebe qualquer formulário do site e envia dois e-mails:
 * 1. para a equipe (alainageev+11@gmail.com)
 * 2. uma cópia para o e-mail preenchido no cadastro
 *
 * POST JSON: { formulario, email, website, campos: [{ label, value }] }
 * Também aceita application/x-www-form-urlencoded com os mesmos campos.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Use POST.'], JSON_UNESCAPED_UNICODE);
    exit;
}

const ADMIN_EMAIL = 'alainageev+11@gmail.com';
const FROM_HEADER = 'E DIAS Corretora <noreply@ediasconsultoria.com.br>';
const ENVELOPE = 'noreply@ediasconsultoria.com.br';

function payload(): array
{
    $type = $_SERVER['CONTENT_TYPE'] ?? '';
    if (stripos($type, 'application/json') !== false) {
        $decoded = json_decode(file_get_contents('php://input') ?: '', true);
        return is_array($decoded) ? $decoded : [];
    }

    return $_POST;
}

function clean(string $value, int $limit): string
{
    $value = str_replace(["\r", "\n", "%0a", "%0d", "%0A", "%0D"], ' ', $value);
    $value = trim($value);
    if (strlen($value) > $limit) {
        $value = substr($value, 0, $limit);
    }

    return $value;
}

function is_email(string $value): bool
{
    return (bool) filter_var($value, FILTER_VALIDATE_EMAIL);
}

function subject(string $value): string
{
    return '=?UTF-8?B?' . base64_encode(clean($value, 160)) . '?=';
}

function send_mail(string $to, string $title, string $body, string $replyTo): bool
{
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . FROM_HEADER,
    ];
    if (is_email($replyTo)) {
        $headers[] = 'Reply-To: ' . $replyTo;
    }

    return mail($to, subject($title), $body, implode("\r\n", $headers), '-f ' . ENVELOPE);
}

$data = payload();

if (trim((string) ($data['website'] ?? '')) !== '') {
    echo json_encode(['ok' => true, 'copia' => false], JSON_UNESCAPED_UNICODE);
    exit;
}

$formulario = clean((string) ($data['formulario'] ?? 'Formulário do site'), 160);
if ($formulario === '') {
    $formulario = 'Formulário do site';
}

$lines = [];
$emails = [];
$campos = $data['campos'] ?? [];

if (is_array($campos)) {
    foreach ($campos as $campo) {
        if (!is_array($campo)) {
            continue;
        }
        $label = clean((string) ($campo['label'] ?? 'Campo'), 200);
        $value = trim((string) ($campo['value'] ?? ''));
        $value = str_replace(["\r\n", "\r"], "\n", $value);
        if (strlen($value) > 5000) {
            $value = substr($value, 0, 5000);
        }
        if ($value === '') {
            continue;
        }
        $lines[] = $label . ': ' . $value;
        if (is_email($value)) {
            $emails[] = $value;
        }
    }
}

$explicit = trim((string) ($data['email'] ?? ''));
if (is_email($explicit)) {
    array_unshift($emails, $explicit);
}

$emails = array_values(array_unique(array_filter($emails, 'is_email')));
$visitors = array_values(array_filter(
    $emails,
    static fn (string $email): bool => strcasecmp($email, ADMIN_EMAIL) !== 0
));

if ($lines === []) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Envie os dados do formulário.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$resumo = implode("\n", $lines);
$adminBody = "Novo envio pelo site E DIAS.\n\nFormulário: {$formulario}\n\n{$resumo}\n";
$adminOk = send_mail(
    ADMIN_EMAIL,
    'Site E DIAS — ' . $formulario,
    $adminBody,
    $visitors[0] ?? ''
);

if (!$adminOk) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Não foi possível enviar o e-mail agora.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$copia = false;
if ($visitors !== []) {
    $userBody = "Olá,\n\nRecebemos o formulário \"{$formulario}\" no site da E DIAS Corretora de Seguros. Nossa equipe vai retornar em breve.\n\nResumo do que você enviou:\n\n{$resumo}\n\nE DIAS Corretora de Seguros\n(81) 3105.7588\n";
    foreach ($visitors as $to) {
        if (send_mail($to, 'Recebemos seu contato — E DIAS', $userBody, ADMIN_EMAIL)) {
            $copia = true;
        }
    }
}

echo json_encode(['ok' => true, 'copia' => $copia], JSON_UNESCAPED_UNICODE);
