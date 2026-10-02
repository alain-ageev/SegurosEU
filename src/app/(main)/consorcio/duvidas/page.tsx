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
  title: "Dúvidas sobre Consórcio",
  description:
    "Perguntas frequentes sobre consórcio Porto Bank: contemplação, lances, prazos e modalidades com a Edias.",
  path: "/consorcio/duvidas",
});

const faqs = [
  {
    q: "O consórcio tem juros?",
    a: "O consórcio não trabalha com juros bancários. Há taxa de administração diluída nas parcelas, conforme o regulamento do grupo.",
  },
  {
    q: "Como funciona a contemplação?",
    a: "Por sorteio ou lance, conforme as regras do grupo. A Edias orienta estratégias de lance e acompanhamento das assembleias.",
  },
  {
    q: "Posso usar o crédito para quitar financiamento?",
    a: "No consórcio de imóvel, a quitação de financiamento é uma das finalidades possíveis, dentro das condições do grupo.",
  },
  {
    q: "Consórcio solar e bike estão disponíveis?",
    a: "Sim. Há modalidades sustentáveis para placa solar e planos para bicicletas urbanas e elétricas.",
  },
];

export default function ConsorcioDuvidasPage() {
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
        brand="Dúvidas"
        title="Consórcio sem mistério"
        description="Respostas objetivas para decidir com segurança — e um consultor Edias quando a pergunta for a sua."
        primaryCta={{ label: "Falar com consultor", href: "/contato" }}
        secondaryCta={{ label: "Ver planos", href: "/consorcio" }}
        compact
        imageSrc="/images/home/consorcio.jpg"
        imageAlt="Dúvidas sobre consórcio"
      />
      <section className="bg-[var(--edias-canvas)] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion>
            {faqs.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`}>
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
      </section>
      <CtaBand
        title="Ainda tem dúvidas?"
        description="Envie sua pergunta ou abra o checklist de consórcio para agilizar a análise."
        secondaryHref="/checklist/consorcio"
        secondaryLabel="Checklist consórcio"
      />
    </>
  );
}
