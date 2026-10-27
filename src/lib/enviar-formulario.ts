export const formularioInbox = "alainageev+11@gmail.com";

export type CampoFormulario = {
  label: string;
  value: string;
};

export async function enviarFormulario(input: {
  formulario: string;
  email: string;
  campos: CampoFormulario[];
}): Promise<"enviado" | "cliente"> {
  const campos = input.campos
    .map((campo) => ({ label: campo.label.trim(), value: campo.value.trim() }))
    .filter((campo) => campo.value !== "");

  try {
    const response = await fetch("/enviar-formulario.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        formulario: input.formulario,
        email: input.email.trim(),
        website: "",
        campos,
      }),
    });
    const data = (await response.json()) as { ok?: boolean };
    if (response.ok && data.ok) return "enviado";
  } catch {
    // O host atual pode não executar PHP. O cliente de e-mail completa o envio.
  }

  const texto = campos.map((campo) => `${campo.label}: ${campo.value}`).join("\n");
  const cc = input.email.trim()
    ? `&cc=${encodeURIComponent(input.email.trim())}`
    : "";
  const mailto = `mailto:${formularioInbox}?subject=${encodeURIComponent(input.formulario)}${cc}&body=${encodeURIComponent(texto)}`;
  if (mailto.length < 1900) {
    window.location.href = mailto;
  }
  return "cliente";
}
