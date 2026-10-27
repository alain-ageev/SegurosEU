import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
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
  variant = "stack",
}: {
  title: string;
  intro: string;
  simulateHref: string;
  items: readonly { title: string; body: string; image: string }[];
  tone?: "white" | "canvas";
  variant?: "stack" | "legacy";
}) {
  const legacy = variant === "legacy";

  return (
    <section
      className={`py-16 sm:py-20 ${tone === "canvas" ? "bg-[var(--edias-canvas)]" : "bg-white"}`}
    >
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${legacy ? "text-center" : ""}`}>
        <h2
          className={`font-heading text-3xl font-semibold text-[var(--edias-navy)] ${
            legacy ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-3 text-[var(--edias-ink-muted)] ${
            legacy ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {intro}
        </p>
        <ul
          className={`mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 ${
            legacy ? "justify-items-center gap-x-5 gap-y-6 sm:gap-x-6" : ""
          }`}
        >
          {items.map((item) => (
            <li key={item.title} className={legacy ? "w-full max-w-[210px]" : "flex flex-col items-center text-center"}>
              {legacy ? (
                <div className="overflow-hidden rounded-[14px] bg-white shadow-[0_10px_28px_rgba(5,46,68,0.14)] transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(5,46,68,0.2)]">
                  <Image
                    src={item.image}
                    alt={`${item.title}. ${item.body}`}
                    width={420}
                    height={504}
                    className="h-auto w-full"
                  />
                </div>
              ) : (
                <>
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
                </>
              )}
            </li>
          ))}
        </ul>
        <div className={`mt-10 ${legacy ? "flex justify-center" : ""}`}>
          <ExternalAction
            href={vidaSimulateHref(simulateHref)}
            label="Simule agora"
            className={legacy ? "v2-btn v2-btn-accent" : outlineButton}
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
                  <div className="mt-auto pt-5">
                    <a
                      href={plan.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="v2-btn v2-btn-accent w-full"
                    >
                      Acesse Aqui
                      <ArrowRightIcon className="size-4" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InfoCards {...vidaCoverageSection} variant="legacy" />
      <InfoCards {...vidaBenefitSection} tone="canvas" />

      <CtaBand
        title="Monte a proteção da sua família"
        description="A Edias ajuda a escolher capital, coberturas e assistências sem excesso nem lacuna."
      />
    </>
  );
}
