import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { consorcioPlans } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Consórcio",
  description:
    "Consórcio Porto Bank com a Edias: veículos, imóveis, pesados, solar e bike. Parcelas planejadas e grupos com qualidade.",
  path: "/consorcio",
  keywords: ["consórcio Recife", "consórcio Porto Bank", "consórcio imóvel", "consórcio veículo"],
});

export default function ConsorcioPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quais modalidades de consórcio a Edias oferece?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veículos, imóveis, pesados, sustentável (placa solar) e bike, com planos Porto Bank.",
        },
      },
      {
        "@type": "Question",
        name: "Quais benefícios do consórcio Porto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Parcelas reduzidas até a contemplação, uso parcial do crédito em lances, parcelamento no cartão Porto Bank e grupos com segurança.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <Hero
        brand="Edias Consultoria"
        title="Consórcio com parcelas planejadas para o seu sonho"
        description="Grupos Porto Bank para imóvel, veículo, pesados e soluções sustentáveis — com orientação da Edias em cada etapa."
        primaryCta={{ label: "Pedir cotação", href: "/contato" }}
        secondaryCta={{ label: "Ver tabelas", href: "/consorcio/tabelas" }}
        compact
      />

      <section className="bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-raleway)] text-3xl font-semibold text-[var(--edias-navy)]">
                Conheça os planos Porto Bank
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--edias-ink-muted)]">
                Modalidades com prazos e faixas de crédito alinhados ao seu
                objetivo — da bike ao imóvel.
              </p>
            </div>
            <div className="flex gap-4 text-sm font-medium text-[var(--edias-navy)]">
              <Link href="/consorcio/tabelas" className="underline-offset-4 hover:underline">
                Tabelas
              </Link>
              <Link href="/consorcio/duvidas" className="underline-offset-4 hover:underline">
                Dúvidas
              </Link>
            </div>
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {consorcioPlans.map((plan) => (
              <li
                key={plan.title}
                className="border-l-2 border-[var(--edias-gold)] bg-white p-6 shadow-[0_1px_0_rgba(0,48,91,0.04)]"
              >
                <h3 className="font-[family-name:var(--font-raleway)] text-xl font-semibold text-[var(--edias-navy)]">
                  {plan.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                  {plan.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-raleway)] text-2xl font-semibold text-[var(--edias-navy)] sm:text-3xl">
            Benefícios para fechar com a Porto
          </h2>
          <ul className="mt-8 grid gap-4 text-sm text-[var(--edias-ink-muted)] sm:grid-cols-2">
            <li>Parcelas reduzidas até a contemplação.</li>
            <li>Uso de parte do crédito para potencializar lances.</li>
            <li>Parcelamento facilitado no cartão Porto Bank.</li>
            <li>Grupos com qualidade e segurança.</li>
          </ul>
        </div>
      </section>

      <CtaBand
        title="Quer simular seu consórcio?"
        description="Envie o checklist ou fale com a equipe para receber orientação sobre prazo, crédito e modalidade."
        secondaryHref="/checklist/consorcio"
        secondaryLabel="Checklist consórcio"
      />
    </>
  );
}
