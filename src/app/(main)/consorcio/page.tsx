import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { ConsorcioVideo } from "@/components/consorcio-video";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { consorcioPlans, consorcioTables } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Consórcio",
  description:
    "Consórcio Porto Bank com a Edias: veículos, imóveis, pesados, solar e bike. Parcelas planejadas e grupos com qualidade.",
  path: "/consorcio",
  keywords: ["consórcio Recife", "consórcio Porto Bank", "consórcio imóvel", "consórcio veículo"],
});

const tabelaShortcuts = [
  {
    title: "Automóvel",
    body: "Tabelas PF e PJ para carros, motos e veículos da empresa.",
    href: "/consorcio/tabelas#auto-pf",
  },
  {
    title: "Imóvel",
    body: "Tabelas PF e PJ para casa, apartamento, terreno e reforma.",
    href: "/consorcio/tabelas#imovel-pf",
  },
  {
    title: "Pesados",
    body: "Tabelas PF e PJ para caminhões, ônibus, tratores e linha amarela.",
    href: "/consorcio/tabelas#pesados-pf",
  },
] as const;

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
        brand="Consórcio"
        title="Consórcio com parcelas planejadas para o seu sonho"
        description="Grupos Porto Bank para imóvel, veículo, pesados e soluções sustentáveis — com orientação da Edias em cada etapa."
        primaryCta={{ label: "Pedir cotação", href: "/contato" }}
        secondaryCta={{ label: "Ver tabelas", href: "/consorcio/tabelas" }}
        compact
        imageSrc="/images/home/viagem3.jpg"
        imageAlt="Casal conquistando o carro com consórcio"
      />

      <section
        id="tabelas"
        className="overflow-x-clip bg-white py-16 sm:py-20"
      >
        <div className="mx-auto grid min-w-0 max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:px-8">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-[0.16em] text-[var(--edias-gold)] uppercase">
              Tabelas
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-[var(--edias-navy)]">
              Consulte as tabelas do Consórcio Porto Bank
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--edias-ink-muted)]">
              Como no site anterior: automóvel, imóvel e pesados — com todas as
              tabelas PF/PJ, solar e bike em um só lugar.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {tabelaShortcuts.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col justify-between rounded-[16px] border border-[var(--edias-line)] bg-white p-6 transition hover:border-[var(--edias-navy)]"
                  >
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-[var(--edias-navy)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                        {item.body}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--edias-navy)]">
                      Ver tabelas
                      <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-[var(--edias-navy)]">
              {consorcioTables.map((table) => (
                <li key={table.id}>
                  <Link
                    href={`/consorcio/tabelas#${table.id}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {table.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/consorcio/tabelas"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--edias-navy)] underline-offset-4 hover:underline"
              >
                Todas as tabelas de consórcio
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>

          <ConsorcioVideo />
        </div>
      </section>

      <section className="border-t border-[var(--edias-line)] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-[var(--edias-navy)]">
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
                className="rounded-[16px] border-l-2 border-[var(--edias-gold)] bg-[#f4f4f4] p-6"
              >
                <h3 className="font-heading text-xl font-semibold text-[var(--edias-navy)]">
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

      <section className="border-t border-[var(--edias-line)] bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-[var(--edias-navy)] sm:text-3xl">
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
