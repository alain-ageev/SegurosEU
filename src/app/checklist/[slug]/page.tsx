import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { checklistItems, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const detailHints: Record<string, string[]> = {
  consorcio: [
    "Dados pessoais do titular",
    "Modalidade desejada (imóvel, veículo, pesados, solar, bike)",
    "Faixa de crédito e prazo preferencial",
    "Renda e composição para análise de grupo",
  ],
  saude: [
    "Vidas a incluir e datas de nascimento",
    "Cidade de uso da rede",
    "Preferência de acomodação",
    "Operadoras de interesse e plano atual (se houver)",
  ],
  veiculos: [
    "Marca, modelo, ano e placa",
    "CEP de pernoite",
    "Dados do principal condutor",
    "Uso (particular, app, comercial)",
  ],
  residencial: [
    "Endereço e tipo do imóvel",
    "Valor em risco (continente e conteúdo)",
    "Sistemas de segurança",
    "Sinistros anteriores",
  ],
  empresarial: [
    "Atividade e CNAE",
    "Localização e área construída",
    "Faturamento e número de colaboradores",
    "Coberturas desejadas (incêndio, RC, lucros cessantes etc.)",
  ],
  rcg: [
    "Objeto da cobertura",
    "Limites desejados",
    "Histórico de sinistros",
    "Contratos ou editais relacionados",
  ],
  transporte: [
    "Tipo de carga e rotas",
    "Valores médios e máximos por embarque",
    "Modal (rodoviário, aéreo, marítimo)",
    "Frequência de operações",
  ],
  "placa-solar": [
    "Potência do sistema (kWp)",
    "Local de instalação",
    "Orçamento ou projeto",
    "Dados do titular",
  ],
  "deposito-recursal": [
    "Dados do processo",
    "Valor do depósito",
    "Tribunal e comarca",
    "Documentação jurídica solicitada",
  ],
  "garantia-judicial": [
    "Tipo de garantia",
    "Valor e prazo",
    "Partes envolvidas",
    "Peças processuais essenciais",
  ],
};

export async function generateStaticParams() {
  return checklistItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = checklistItems.find((entry) => entry.slug === slug);
  if (!item) return {};
  return createPageMetadata({
    title: `Checklist ${item.title}`,
    description: `${item.description} Checklist Edias para agilizar sua cotação.`,
    path: `/checklist/${item.slug}`,
  });
}

export default async function ChecklistDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = checklistItems.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const hints = detailHints[slug] ?? [
    "Dados do titular",
    "Objetivo da cotação",
    "Documentos de identificação",
    "Informações do risco",
  ];

  return (
    <>
      <Hero
        brand="Checklist"
        title={item.title}
        description={item.description}
        primaryCta={{ label: "Enviar por e-mail", href: `mailto:${siteConfig.email}?subject=Checklist%20${encodeURIComponent(item.title)}` }}
        secondaryCta={{ label: "Todos os checklists", href: "/checklist" }}
        compact
      />

      <section className="bg-[var(--edias-canvas)] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-raleway)] text-2xl font-semibold text-[var(--edias-navy)]">
            O que preparar
          </h2>
          <p className="mt-3 text-sm text-[var(--edias-ink-muted)]">
            Esta página organiza o essencial para cotação. No site anterior,
            vários checklists eram formulários Wix — aqui priorizamos a lista
            consultiva e o contato direto com a corretora.
          </p>
          <ol className="mt-8 space-y-3">
            {hints.map((hint, index) => (
              <li
                key={hint}
                className="flex gap-3 bg-white p-4 text-sm text-[var(--edias-ink-muted)]"
              >
                <span className="font-[family-name:var(--font-raleway)] font-semibold text-[var(--edias-gold-deep)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {hint}
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<a href={`mailto:${siteConfig.email}`} />}
              className="bg-[var(--edias-navy)] text-white hover:bg-[var(--edias-deep)]"
            >
              Enviar informações
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/contato" />}
              variant="outline"
            >
              Página de contato
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Precisa de ajuda para preencher?"
        description="A equipe Edias indica o mínimo indispensável para cada produto e evita idas e vindas."
      />
    </>
  );
}
