import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import {
  siteConfig,
  vidaBenefitSection,
  vidaCoverageSection,
  vidaPlans,
  vidaSimulateHref,
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Seguro de Vida",
  description:
    "Seguro de vida SulAmérica com a Edias: coberturas de doenças graves, invalidez, telemedicina e proteção familiar sob medida.",
  path: "/vida",
  keywords: ["seguro de vida Recife", "SulAmérica vida", "doenças graves", "telemedicina"],
});

const solidButton =
  "inline-flex h-11 items-center justify-center bg-[var(--edias-gold)] px-5 text-sm font-medium text-[var(--edias-navy)] hover:bg-[var(--edias-gold-soft)]";
const outlineButton =
  "inline-flex h-11 items-center justify-center border border-[var(--edias-navy)] px-5 text-sm font-medium text-[var(--edias-navy)] hover:bg-[var(--edias-navy)] hover:text-white";

function ExternalAction({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {label}
    </a>
  );
}

function InfoCards({
  title,
  intro,
  simulateHref,
  items,
  tone = "white",
}: {
  title: string;
  intro: string;
  simulateHref: string;
  items: readonly { title: string; body: string; image: string }[];
  tone?: "white" | "canvas";
}) {
  return (
    <section
      className={`py-16 sm:py-20 ${tone === "canvas" ? "bg-[var(--edias-canvas)]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-3xl font-heading text-3xl font-semibold text-[var(--edias-navy)]">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--edias-ink-muted)]">{intro}</p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col items-center text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={184}
                height={208}
                className="h-auto w-[168px]"
              />
              <p className="mt-3 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ExternalAction
            href={vidaSimulateHref(simulateHref)}
            label="Simule agora"
            className={outlineButton}
          />
        </div>
      </div>
    </section>
  );
}

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
        primaryCta={{ label: "Simular agora", href: siteConfig.whatsappHref }}
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
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {vidaPlans.map((plan) => (
              <li key={plan.title} className="flex flex-col bg-white">
                <Image
                  src={plan.image}
                  alt={plan.imageAlt}
                  width={720}
                  height={960}
                  className="aspect-[3/4] w-full object-cover object-top"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-[var(--edias-navy)]">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--edias-ink-muted)]">{plan.range}</p>
                  <div className="mt-auto flex flex-col gap-3 pt-5">
                    <ExternalAction href={plan.href} label="Acesse aqui" className={solidButton} />
                    <ExternalAction
                      href={vidaSimulateHref(plan.simulateHref)}
                      label="Simule agora"
                      className={outlineButton}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InfoCards {...vidaCoverageSection} />
      <InfoCards {...vidaBenefitSection} tone="canvas" />

      <CtaBand
        title="Monte a proteção da sua família"
        description="A Edias ajuda a escolher capital, coberturas e assistências sem excesso nem lacuna."
      />
    </>
  );
}
