import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";
import { saudeOperators } from "@/lib/site";

type PageProps = {
  params: Promise<{ brand: string }>;
};

const brandExtras: Record<
  string,
  { highlights: string[]; externalHints: { label: string; note: string }[] }
> = {
  sulamerica: {
    highlights: [
      "Planos com foco em rede e opções de reembolso",
      "Soluções para famílias e empresas",
      "Orientação Edias na escolha de acomodação e coparticipação",
    ],
    externalHints: [
      { label: "Rede credenciada", note: "Consulte a rede atualizada com seu consultor ou no portal da operadora." },
      { label: "Coparticipação", note: "Modalidades variam por produto — validamos o impacto no custo mensal." },
      { label: "Reembolso", note: "Regras e percentuais conforme o plano contratado." },
    ],
  },
  bradesco: {
    highlights: [
      "Marca consolidada com ampla aceitação",
      "Planos empresariais e familiares",
      "Análise de rede local em Recife e outras praças",
    ],
    externalHints: [
      { label: "Rede credenciada", note: "Mapeamos hospitais e clínicas prioritários para o seu perfil." },
      { label: "Coparticipação", note: "Comparamos cenários com e sem coparticipação." },
      { label: "Reembolso", note: "Disponibilidade conforme linha de produto." },
    ],
  },
  amil: {
    highlights: [
      "Rede nacional e opções de acomodação",
      "Planos com flexibilidade comercial",
      "Suporte Edias na documentação e implantação",
    ],
    externalHints: [
      { label: "Rede credenciada", note: "Confirmamos cobertura na sua região antes da adesão." },
      { label: "Coparticipação", note: "Explicamos regras de uso e impacto no bolso." },
      { label: "Reembolso", note: "Orientações conforme o regulamento do plano." },
    ],
  },
};

export async function generateStaticParams() {
  return saudeOperators.map((op) => ({ brand: op.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { brand } = await params;
  const op = saudeOperators.find((item) => item.slug === brand);
  if (!op) return {};
  return createPageMetadata({
    title: op.name,
    description: `${op.name}: rede, coparticipação e reembolso com consultoria Edias em Recife. ${op.summary}`,
    path: `/saude/${op.slug}`,
  });
}

export default async function SaudeBrandPage({ params }: PageProps) {
  const { brand } = await params;
  const op = saudeOperators.find((item) => item.slug === brand);
  const extras = brandExtras[brand];
  if (!op || !extras) notFound();

  return (
    <>
      <Hero
        brand={op.name}
        title={`Planos ${op.name} com orientação Edias`}
        description={op.summary}
        primaryCta={{ label: "Solicitar cotação", href: "/contato" }}
        secondaryCta={{ label: "Voltar às operadoras", href: "/saude" }}
        compact
      />

      <section className="bg-[var(--edias-canvas)] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-raleway)] text-2xl font-semibold text-[var(--edias-navy)] sm:text-3xl">
            O que avaliamos com você
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {extras.highlights.map((item) => (
              <li
                key={item}
                className="border-t-2 border-[var(--edias-gold)] bg-white p-5 text-sm leading-relaxed text-[var(--edias-ink-muted)]"
              >
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-[family-name:var(--font-raleway)] text-xl font-semibold text-[var(--edias-navy)]">
            Rede, coparticipação e reembolso
          </h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {extras.externalHints.map((item) => (
              <li key={item.label} className="bg-white p-5">
                <p className="font-medium text-[var(--edias-navy)]">{item.label}</p>
                <p className="mt-2 text-sm text-[var(--edias-ink-muted)]">
                  {item.note}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-[var(--edias-ink-muted)]">
            <Link href="/saude" className="font-medium text-[var(--edias-navy)] underline-offset-4 hover:underline">
              ← Todas as operadoras
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title={`Cotação ${op.name}`}
        description="Informe vidas, idades e preferência de hospital. Retornamos com opções alinhadas ao orçamento."
        secondaryHref="/checklist/saude"
        secondaryLabel="Checklist saúde"
      />
    </>
  );
}
