import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { vidaPlans } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Seguro de Vida",
  description:
    "Seguro de vida SulAmérica com a Edias: coberturas de doenças graves, invalidez, telemedicina e proteção familiar sob medida.",
  path: "/vida",
  keywords: ["seguro de vida Recife", "SulAmérica vida", "doenças graves", "telemedicina"],
});

const coverages = [
  "Segurança para familiares em caso de falecimento",
  "Invalidez por acidente ou doença",
  "Doenças graves — até 30 patologias (maior cobertura do Brasil)",
  "Assistência funeral e suporte à família",
  "Telemedicina grátis 24h para você e sua família",
  "Clube de vantagens com descontos em parceiros e farmácias",
];

export default function VidaPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quais diferenciais do seguro de vida SulAmérica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maior cobertura de doenças graves (até 30 patologias), telemedicina, clube de vantagens e sorteios mensais conforme plano.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <Hero
        brand="Seguro de vida"
        title="Seguro de vida sob medida para você e sua família"
        description="Planos SulAmérica com coberturas de renda, doenças graves e assistências que acompanham a rotina da família."
        primaryCta={{ label: "Simular agora", href: "/contato" }}
        secondaryCta={{ label: "Checklist Vida Flex", href: "/checklist/vida" }}
        compact
        imageSrc="/images/home/familia2.jpg"
        imageAlt="Família feliz protegida com seguro de vida"
      />

      <section className="bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-[var(--edias-navy)]">
            Linhas de produto
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {vidaPlans.map((plan) => (
              <li key={plan.title} className="bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-[var(--edias-navy)]">
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--edias-ink-muted)]">
                  {plan.range}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-[var(--edias-navy)]">
            Coberturas e benefícios
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {coverages.map((item) => (
              <li
                key={item}
                className="border-l-2 border-[var(--edias-gold)] pl-4 text-sm leading-relaxed text-[var(--edias-ink-muted)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Monte a proteção da sua família"
        description="A Edias ajuda a escolher capital, coberturas e assistências sem excesso nem lacuna."
      />
    </>
  );
}
