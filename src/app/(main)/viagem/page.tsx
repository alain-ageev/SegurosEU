import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Seguro Viagem",
  description:
    "Seguro viagem SulAmérica com a Edias: planos Brasil e Mundo, assistência 24h, bagagem e descontos na contratação.",
  path: "/viagem",
  keywords: ["seguro viagem", "SulAmérica viagem", "seguro viagem Recife"],
});

const faqs = [
  {
    q: "Vou viajar para vários países. Tem problema?",
    a: "Não, desde que você contrate o plano adequado aos destinos e respeite as condições gerais. O plano Brasil cobre destinos nacionais; o plano Mundo cobre destinos internacionais.",
  },
  {
    q: "É possível renovar o Seguro Viagem?",
    a: "Não é permitido renovar ou estender a contratação, conforme as condições gerais do produto.",
  },
  {
    q: "E se minha bagagem for extraviada?",
    a: "Com a bagagem sob responsabilidade de transporte regular, você pode acionar a assistência para indenização conforme o capital contratado em casos de extravio, roubo ou furto em viagens aéreas ou marítimas.",
  },
  {
    q: "Como pedir atendimento médico no exterior?",
    a: "Contate a Central 24h gratuita para viagens internacionais: +55 11 4126 7463. A equipe orienta os próximos passos.",
  },
];

export default function ViagemPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <Hero
        brand="Seguro viagem"
        title="Seguro viagem com tranquilidade onde você estiver"
        description="SulAmérica com contratação rápida, assistência 24h e condições especiais — inclusive opções com desconto e parcelamento."
        primaryCta={{ label: "Simular viagem", href: "/contato" }}
        secondaryCta={{ label: "Ver dúvidas", href: "#duvidas" }}
        compact
        imageSrc="/images/home/travel.jpg"
        imageAlt="Viagem protegida com seguro viagem"
      />

      <section className="bg-[var(--edias-canvas)] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-[var(--edias-navy)]">
            Contratação simples em poucos passos
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Informe destino e período",
              "Escolha o plano adequado",
              "Confirme dados dos viajantes",
              "Receba a apólice digital",
            ].map((step, index) => (
              <li key={step} className="bg-white p-5">
                <span className="font-heading text-xs tracking-[0.18em] text-[var(--edias-gold-deep)]">
                  0{index + 1}
                </span>
                <p className="mt-3 text-sm font-medium text-[var(--edias-navy)]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-[var(--edias-ink-muted)]">
            Destaque comercial vigente no site de origem: condições promocionais
            com desconto e parcelamento — confirme valores atualizados com a
            equipe Edias.
          </p>
        </div>
      </section>

      <section id="duvidas" className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-[var(--edias-navy)]">
            Dúvidas frequentes
          </h2>
          <div className="mt-8">
            <Accordion>
              {faqs.map((item, index) => (
                <AccordionItem key={item.q} value={`v-${index}`}>
                  <AccordionTrigger className="text-left font-heading text-base text-[var(--edias-navy)]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--edias-ink-muted)]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaBand
        title="Viaje protegido"
        description="Conte destino, datas e número de viajantes — retornamos com a melhor opção SulAmérica."
      />
    </>
  );
}
