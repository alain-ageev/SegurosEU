import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Seguro Incêndio",
  description:
    "Seguro contra incêndio para residências, comércios e indústrias: proteção do imóvel, conteúdo e lucros cessantes com orientação da E DIAS.",
  path: "/incendio",
  keywords: [
    "seguro incêndio",
    "seguro incêndio Recife",
    "seguro patrimonial",
    "ramos elementares",
  ],
});

const coverages = [
  "Incêndio, raio e explosão",
  "Danos elétricos e curto-circuito",
  "Vendaval, granizo e impacto de veículos",
  "Responsabilidade civil do imóvel (conforme apólice)",
  "Perda ou dano a conteúdo e mercadorias",
  "Lucros cessantes e despesas fixas em operações comerciais",
];

const profiles = [
  {
    title: "Residencial",
    body: "Casa ou apartamento com proteção do imóvel e bens — alinhada ao valor de reconstrução e ao perfil de uso.",
  },
  {
    title: "Comercial",
    body: "Lojas, escritórios e serviços com cobertura de estrutura, estoque e interrupção de atividades.",
  },
  {
    title: "Industrial",
    body: "Plantas e galpões com análise de risco, prevenção e limites adequados à operação.",
  },
];

export default function IncendioPage() {
  const pageLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Seguro Incêndio",
    description:
      "Consultoria e contratação de seguro contra incêndio para residências, comércios e indústrias.",
    provider: {
      "@type": "InsuranceAgency",
      name: "E DIAS Corretora de Seguros",
    },
    areaServed: "BR",
  };

  return (
    <>
      <JsonLd data={pageLd} />
      <Hero
        brand="Incêndio"
        title="Seguro contra incêndio para proteger patrimônio e operação"
        description="Imóvel, conteúdo e continuidade do negócio com análise objetiva de risco — residencial, comercial ou industrial."
        primaryCta={{ label: "Solicitar cotação", href: siteConfig.whatsappHref }}
        secondaryCta={{ label: "Falar no WhatsApp", href: siteConfig.whatsappHref }}
        compact
        imageSrc="/images/home/incendio-ig-limpo.jpg"
        imageAlt="Escritório em chamas — proteção contra risco de incêndio"
      />

      <section className="bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.16em] text-[var(--edias-gold)] uppercase">
            Para quem é
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-[var(--edias-navy)]">
            Perfis de proteção
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {profiles.map((item) => (
              <li
                key={item.title}
                className="rounded-[16px] border border-[var(--edias-line)] bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading text-xl font-semibold text-[var(--edias-navy)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-[var(--edias-navy)]">
            Coberturas mais solicitadas
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
        title="Avalie o risco do seu imóvel ou operação"
        description="Comparamos coberturas e franquias para você não pagar a mais nem ficar descoberto em caso de sinistro."
        primaryLabel="Pedir análise de incêndio"
        secondaryHref="/#solucoes"
        secondaryLabel="Ver outras soluções"
      />
    </>
  );
}
