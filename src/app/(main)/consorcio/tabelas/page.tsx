import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";
import { consorcioTables } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Tabelas de Consórcio",
  description:
    "Tabelas de consórcio Porto Bank: automóvel PF/PJ, imóvel PF/PJ, pesados, solar e bike com a E DIAS.",
  path: "/consorcio/tabelas",
});

const groups = [
  {
    id: "automovel",
    title: "Automóvel",
    ids: ["auto-pf", "auto-pj"] as const,
  },
  {
    id: "imovel",
    title: "Imóvel",
    ids: ["imovel-pf", "imovel-pj"] as const,
  },
  {
    id: "pesados",
    title: "Pesados",
    ids: ["pesados-pf", "pesados-pj"] as const,
  },
  {
    id: "sustentavel",
    title: "Sustentável e mobilidade",
    ids: ["solar", "bike"] as const,
  },
] as const;

export default function ConsorcioTabelasPage() {
  const byId = Object.fromEntries(
    consorcioTables.map((item) => [item.id, item])
  );

  return (
    <>
      <Hero
        brand="Tabelas"
        title="Tabelas Consórcio Porto Bank"
        description="Como no site anterior: tabela auto PF/PJ, imóvel PF/PJ, pesados, solar e bike. As faixas variam por grupo — a E DIAS envia a versão vigente."
        primaryCta={{ label: "Solicitar tabela", href: "/contato" }}
        secondaryCta={{ label: "Voltar ao consórcio", href: "/consorcio" }}
        compact
        imageSrc="/images/home/house.jpg"
        imageAlt="Tabelas de consórcio Porto Bank"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
          {groups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <h2 className="font-heading text-2xl font-semibold text-[var(--edias-navy)]">
                {group.title}
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {group.ids.map((id) => {
                  const item = byId[id];
                  if (!item) return null;
                  return (
                    <article
                      key={item.id}
                      id={item.id}
                      className="scroll-mt-28 rounded-[20px] border border-[var(--edias-line)] bg-[#f4f4f4] p-6"
                    >
                      <h3 className="font-heading text-xl font-semibold text-[var(--edias-navy)]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                        {item.body}
                      </p>
                      <Link
                        href="/contato"
                        className="mt-4 inline-flex text-sm font-bold text-[var(--edias-navy)] underline-offset-4 hover:underline"
                      >
                        Solicitar esta tabela
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-4 text-sm text-[var(--edias-ink-muted)] sm:px-6 lg:px-8">
          Prefere tirar dúvidas antes? Veja também as{" "}
          <Link
            href="/consorcio/duvidas"
            className="font-medium text-[var(--edias-navy)] underline-offset-4 hover:underline"
          >
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
