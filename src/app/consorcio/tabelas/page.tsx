import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tabelas de Consórcio",
  description:
    "Consulte as tabelas de consórcio Porto Bank com a Edias: automóvel, imóvel e pesados.",
  path: "/consorcio/tabelas",
});

const tables = [
  {
    title: "Automóvel",
    body: "Planos para carros e motos com diferentes prazos e créditos. Solicite a tabela atualizada ao seu consultor.",
  },
  {
    title: "Imóvel",
    body: "Faixas de crédito para casa, apartamento, terreno, construção e reforma. Parcelas a partir de valores acessíveis.",
  },
  {
    title: "Pesados",
    body: "Caminhões, ônibus, tratores e equipamentos — tabelas sob demanda conforme grupo disponível.",
  },
];

export default function ConsorcioTabelasPage() {
  return (
    <>
      <Hero
        brand="Tabelas"
        title="Consórcio com números claros"
        description="As tabelas variam por grupo e momento. A Edias envia a versão vigente e ajuda a comparar prazos e lances."
        primaryCta={{ label: "Solicitar tabela", href: "/contato" }}
        secondaryCta={{ label: "Voltar ao consórcio", href: "/consorcio" }}
        compact
      />
      <section className="bg-[var(--edias-canvas)] py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {tables.map((item) => (
            <article key={item.title} className="bg-white p-6">
              <h2 className="font-heading text-xl font-semibold text-[var(--edias-navy)]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-4 text-sm text-[var(--edias-ink-muted)] sm:px-6 lg:px-8">
          Prefere tirar dúvidas antes? Veja também as{" "}
          <Link href="/consorcio/duvidas" className="font-medium text-[var(--edias-navy)] underline-offset-4 hover:underline">
            perguntas frequentes
          </Link>
          .
        </p>
      </section>
      <CtaBand
        title="Receba a tabela atualizada"
        description="Informe a modalidade desejada e retornamos com opções de grupos e simulação."
      />
    </>
  );
}
