import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";
import { saudeOperators } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Planos de Saúde",
  description:
    "Comparativo consultivo de planos de saúde: SulAmérica, Bradesco e Amil com a Edias em Recife.",
  path: "/saude",
  keywords: ["plano de saúde Recife", "SulAmérica saúde", "Bradesco saúde", "Amil"],
});

export default function SaudePage() {
  return (
    <>
      <Hero
        brand="Planos de saúde"
        title="Planos de saúde: a melhor escolha para a sua necessidade"
        description="Analisamos rede, coparticipação e reembolso para indicar a operadora certa — individual, familiar ou empresarial."
        primaryCta={{ label: "Pedir análise", href: "/contato" }}
        secondaryCta={{ label: "Checklist saúde", href: "/checklist/saude" }}
        compact
        imageSrc="/images/home/health.jpg"
        imageAlt="Orientação em planos de saúde"
      />

      <section className="bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-[var(--edias-navy)]">
            Operadoras
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--edias-ink-muted)]">
            Páginas dedicadas com links para rede credenciada, coparticipação e
            reembolso de cada marca.
          </p>
          <ul className="mt-10 grid gap-px overflow-hidden bg-[var(--edias-line)] sm:grid-cols-3">
            {saudeOperators.map((op) => (
              <li key={op.slug} className="bg-white">
                <Link
                  href={op.href}
                  className="group flex h-full flex-col justify-between gap-6 p-6 sm:p-8"
                >
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-[var(--edias-navy)]">
                      {op.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                      {op.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--edias-navy)]">
                    Ver detalhes
                    <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Compare planos com critério"
        description="Envie idade, cidade e preferência de rede. Montamos cenários objetivos entre as operadoras."
        secondaryHref="/checklist/saude"
        secondaryLabel="Abrir checklist"
      />
    </>
  );
}
