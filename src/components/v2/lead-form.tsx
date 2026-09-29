"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";
import { v2Form } from "@/lib/v2-content";

type Status = "idle" | "sending" | "done" | "error";

export function V2LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const need = String(data.get("need") || "").trim();
    const company = String(data.get("company") || "").trim();

    if (!name || !phone || !need) {
      setStatus("error");
      setError("Preencha nome, WhatsApp e o que você precisa.");
      return;
    }

    setStatus("sending");

    const message = [
      "Olá! Vim pelo site E DIAS (versão conversão).",
      `Nome: ${name}`,
      company ? `Empresa: ${company}` : null,
      `WhatsApp: ${phone}`,
      `Necessidade: ${need}`,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `${siteConfig.whatsappHref}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setStatus("done");
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-[var(--edias-navy)]/10 bg-white p-5 sm:p-6"
      noValidate
      aria-describedby="v2-form-privacy"
    >
      <h3 className="font-heading text-xl text-[var(--edias-navy)]">{v2Form.title}</h3>
      <p className="font-description mt-2 text-base text-[var(--edias-ink-muted)]">
        {v2Form.description}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-[var(--edias-navy)]">
          Nome*
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-1.5 h-11 w-full border border-[var(--edias-line)] bg-[var(--edias-canvas)] px-3 text-base outline-none focus-visible:border-[var(--edias-gold)] focus-visible:ring-2 focus-visible:ring-[var(--edias-gold)]/40"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--edias-navy)]">
          Empresa
          <input
            name="company"
            type="text"
            autoComplete="organization"
            className="mt-1.5 h-11 w-full border border-[var(--edias-line)] bg-[var(--edias-canvas)] px-3 text-base outline-none focus-visible:border-[var(--edias-gold)] focus-visible:ring-2 focus-visible:ring-[var(--edias-gold)]/40"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--edias-navy)] sm:col-span-2">
          WhatsApp*
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            placeholder="(81) 9xxxx-xxxx"
            className="mt-1.5 h-11 w-full border border-[var(--edias-line)] bg-[var(--edias-canvas)] px-3 text-base outline-none focus-visible:border-[var(--edias-gold)] focus-visible:ring-2 focus-visible:ring-[var(--edias-gold)]/40"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--edias-navy)] sm:col-span-2">
          O que você precisa?*
          <select
            name="need"
            required
            defaultValue=""
            className="mt-1.5 h-11 w-full border border-[var(--edias-line)] bg-[var(--edias-canvas)] px-3 text-base outline-none focus-visible:border-[var(--edias-gold)] focus-visible:ring-2 focus-visible:ring-[var(--edias-gold)]/40"
          >
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
        <p className="mt-4 text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {status === "done" ? (
        <p className="mt-4 text-sm font-semibold text-[var(--edias-navy)]" role="status">
          Abrimos o WhatsApp com sua mensagem. Se não abriu, use o botão flutuante.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center bg-[var(--edias-gold)] px-5 text-sm font-extrabold text-[var(--edias-navy)] transition hover:bg-[var(--edias-gold-soft)] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Preparando…" : "Receber uma análise"}
      </button>

      <p id="v2-form-privacy" className="mt-4 text-xs leading-relaxed text-[var(--edias-ink-muted)]">
        {v2Form.privacy}
      </p>
    </form>
  );
}
