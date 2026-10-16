"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import type { ChecklistField } from "@/lib/checklist";
import { siteConfig } from "@/lib/site";

const controlClass =
  "mt-1.5 w-full border border-[var(--edias-line)] bg-white px-3 py-2 text-sm text-[var(--edias-ink)]";

function isAttachment(label: string) {
  return /anexo|assinatura/i.test(label);
}

export function ChecklistForm({
  title,
  description,
  fields,
}: {
  title: string;
  description: string;
  fields: ChecklistField[];
}) {
  const [draft, setDraft] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const missing = fields.filter((field) => {
      if (!field.required) return false;
      return data.getAll(field.name).every((value) => String(value).trim() === "");
    });
    if (missing.length) {
      setError("Preencha os campos obrigatórios antes de enviar.");
      setDraft(null);
      return;
    }
    const lines = fields.flatMap((field) => {
      const values = data
        .getAll(field.name)
        .map((value) => String(value).trim())
        .filter(Boolean);
      if (!values.length) return [];
      return [`${field.label}: ${values.join(", ")}`];
    });
    const body = lines.join("\n");
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    setError(null);
    setDraft(body);
    if (mailto.length < 1900) {
      window.location.href = mailto;
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 bg-white p-5 sm:p-8">
      <div>
        <h2 className="font-heading text-2xl font-semibold text-[var(--edias-navy)]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
          {description}
        </p>
      </div>
      {fields.map((field) => (
        <div key={field.name}>
          <label className="text-sm font-medium text-[var(--edias-navy)]" htmlFor={field.name}>
            {field.label}
            {field.required ? <span className="text-[var(--edias-gold-deep)]"> *</span> : null}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={4}
              className={controlClass}
            />
          ) : null}
          {field.type === "select" ? (
            <select id={field.name} name={field.name} required={field.required} className={controlClass} defaultValue="">
              <option value="">Selecione</option>
              {field.options?.map((option, index) => (
                <option key={`${field.name}-${index}`} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : null}
          {field.type === "radio" || field.type === "checkbox" ? (
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {field.options?.map((option, index) => (
                <label key={`${field.name}-${index}`} className="flex items-start gap-2 text-sm text-[var(--edias-ink-muted)]">
                  <input
                    type={field.type === "radio" ? "radio" : "checkbox"}
                    name={field.name}
                    value={option}
                    className="mt-1"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          ) : null}
          {field.type !== "textarea" &&
          field.type !== "select" &&
          field.type !== "radio" &&
          field.type !== "checkbox" ? (
            <Input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              className="mt-1.5 h-10 bg-white"
            />
          ) : null}
          {isAttachment(field.label) ? (
            <p className="mt-1 text-xs text-[var(--edias-ink-muted)]">
              Anexe o arquivo na mensagem para {siteConfig.email}.
            </p>
          ) : null}
        </div>
      ))}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button type="submit" className="v2-btn v2-btn-accent">
        Enviar
      </button>
      <p className="text-xs leading-relaxed text-[var(--edias-ink-muted)]">
        O envio abre o e-mail com as respostas para a equipe Edias, no mesmo
        destino dos formulários do site anterior.
      </p>
      {draft ? (
        <div className="border border-[var(--edias-line)] bg-[var(--edias-canvas)] p-4">
          <p className="text-sm font-medium text-[var(--edias-navy)]">
            Respostas prontas para envio
          </p>
          <pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap text-xs text-[var(--edias-ink-muted)]">
            {draft}
          </pre>
        </div>
      ) : null}
    </form>
  );
}
