"use client";

import { useState, type FormEvent } from "react";
import { enviarFormulario } from "@/lib/enviar-formulario";
import { siteConfig } from "@/lib/site";
import { v2Form } from "@/lib/v2-content";

type Status = "idle" | "sending" | "done" | "error";

export function V2LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [delivery, setDelivery] = useState<"enviado" | "cliente" | null>(null);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const need = String(data.get("need") || "").trim();
    const company = String(data.get("company") || "").trim();

    if (!name || !phone || !email || !need) {
      setStatus("error");
      setError("Preencha nome, WhatsApp, e-mail e o que você precisa.");
      return;
    }

    setStatus("sending");

    const message = [
      "Olá! Vim pelo site E DIAS (versão conversão).",
      `Nome: ${name}`,
      company ? `Empresa: ${company}` : null,
      `WhatsApp: ${phone}`,
      `E-mail: ${email}`,
      `Necessidade: ${need}`,
    ]
      .filter(Boolean)
      .join("\n");

    const result = await enviarFormulario({
      formulario: v2Form.title,
      email,
      campos: [
        { label: "Nome", value: name },
        { label: "Empresa", value: company },
        { label: "WhatsApp", value: phone },
        { label: "E-mail", value: email },
        { label: "Necessidade", value: need },
      ],
    });
    setDelivery(result);

    const href = `${siteConfig.whatsappHref}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setStatus("done");
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="v2-card"
      noValidate
      aria-describedby="v2-form-privacy"
    >
      <h3 className="v2-h3">{v2Form.title}</h3>
      <p className="v2-body mt-2">{v2Form.description}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-[14px] font-medium tracking-[-0.01em] text-[var(--v2-ink)]">
          Nome*
          <input name="name" type="text" autoComplete="name" required className="v2-input mt-1.5" />
        </label>
        <label className="block text-[14px] font-medium tracking-[-0.01em] text-[var(--v2-ink)]">
          Empresa
          <input
            name="company"
            type="text"
            autoComplete="organization"
            className="v2-input mt-1.5"
          />
        </label>
        <label className="block text-[14px] font-medium tracking-[-0.01em] text-[var(--v2-ink)] sm:col-span-2">
          E-mail*
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="v2-input mt-1.5"
          />
        </label>
        <label className="block text-[14px] font-medium tracking-[-0.01em] text-[var(--v2-ink)] sm:col-span-2">
          WhatsApp*
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            placeholder="(81) 9xxxx-xxxx"
            className="v2-input mt-1.5"
          />
        </label>
        <label className="block text-[14px] font-medium tracking-[-0.01em] text-[var(--v2-ink)] sm:col-span-2">
          O que você precisa?*
          <select name="need" required defaultValue="" className="v2-select mt-1.5">
            <option value="" disabled>
              Selecione
            </option>
            <option value="Diagnóstico de benefícios / saúde">
              Diagnóstico de benefícios / saúde
            </option>
            <option value="Seguro empresarial">Seguro empresarial</option>
            <option value="Revisão de custos">Revisão de custos</option>
            <option value="Consórcio">Consórcio</option>
            <option value="Vida ou viagem">Vida ou viagem</option>
            <option value="Outro">Outro</option>
          </select>
        </label>
      </div>

      {status === "error" ? (
        <p className="mt-4 text-[14px] font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {status === "done" ? (
        <p className="mt-4 text-[14px] font-medium text-[var(--v2-ink)]" role="status">
          {delivery === "enviado"
            ? "Mensagem enviada por e-mail, com cópia para o endereço informado. Também abrimos o WhatsApp."
            : "Abrimos seu e-mail para concluir o envio, com cópia para o endereço informado, e o WhatsApp com a mensagem."}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="v2-btn v2-btn-accent mt-6 w-full sm:w-auto"
      >
        {status === "sending" ? "Preparando…" : "Receber uma análise"}
      </button>

      <p id="v2-form-privacy" className="v2-caption mt-4">
        {v2Form.privacy}
      </p>
    </form>
  );
}
