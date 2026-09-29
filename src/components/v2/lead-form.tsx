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
          Abrimos o WhatsApp com sua mensagem. Se não abriu, use o botão flutuante.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="v2-btn v2-btn-primary mt-6 w-full sm:w-auto"
      >
        {status === "sending" ? "Preparando…" : "Receber uma análise"}
      </button>

      <p id="v2-form-privacy" className="v2-caption mt-4">
        {v2Form.privacy}
      </p>
    </form>
  );
}
