"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { enviarFormulario } from "@/lib/enviar-formulario";

export function ContatoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "enviado" | "cliente">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();
    const assunto = String(data.get("assunto") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();

    if (!nome || !email || !telefone || !mensagem) {
      setError("Preencha nome, e-mail, telefone e mensagem.");
      setStatus("idle");
      return;
    }

    setError("");
    setStatus("sending");
    const result = await enviarFormulario({
      formulario: assunto || "Mensagem rápida",
      email,
      campos: [
        { label: "Nome", value: nome },
        { label: "E-mail", value: email },
        { label: "Telefone", value: telefone },
        { label: "Assunto", value: assunto },
        { label: "Mensagem", value: mensagem },
      ],
    });
    setStatus(result);
    if (result === "enviado") event.currentTarget.reset();
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="nome" className="text-sm font-medium text-[var(--edias-navy)]">
          Nome
        </label>
        <Input id="nome" name="nome" required autoComplete="name" className="mt-1.5" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-[var(--edias-navy)]">
          E-mail
        </label>
        <Input id="email" name="email" type="email" required autoComplete="email" className="mt-1.5" />
      </div>
      <div>
        <label htmlFor="telefone" className="text-sm font-medium text-[var(--edias-navy)]">
          Telefone
        </label>
        <Input id="telefone" name="telefone" required autoComplete="tel" className="mt-1.5" />
      </div>
      <div>
        <label htmlFor="assunto" className="text-sm font-medium text-[var(--edias-navy)]">
          Assunto
        </label>
        <Input
          id="assunto"
          name="assunto"
          placeholder="Consórcio, vida, viagem, saúde…"
          className="mt-1.5"
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="text-sm font-medium text-[var(--edias-navy)]">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </div>
      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {status === "enviado" ? (
        <p className="text-sm text-[var(--edias-navy)]" role="status">
          Mensagem enviada. Uma cópia segue para o e-mail informado.
        </p>
      ) : null}
      {status === "cliente" ? (
        <p className="text-sm text-[var(--edias-navy)]" role="status">
          Abrimos seu e-mail para concluir o envio, com cópia para o endereço informado.
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="edias-attention h-11 bg-[var(--edias-gold)] px-4 text-base font-bold text-[var(--edias-navy)] hover:bg-[var(--edias-gold-soft)]"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensagem"}
      </Button>
    </form>
  );
}
