import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";
import { consorcioTables } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Tabelas de Consórcio",
  description:
    "Tabelas de consórcio Porto Bank: automóvel PF/PJ, imóvel PF/PJ e pesados PF/PJ com a E DIAS.",
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
] as const;

export default function ConsorcioTabelasPage() {
  const byId = Object.fromEntries(consorcioTables.map((item) => [item.id, item]));

  return (
    <>
      <Hero
        brand="Tabelas"
        title="Tabelas Consórcio Porto Bank"
        description="Cada modalidade tem a própria página, com as tabelas do site anterior em tamanho original."
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
                    <Link
                      key={item.id}
                      href={`/consorcio/tabelas/${item.id}`}
                      className="group overflow-hidden rounded-[20px] border border-[var(--edias-line)] bg-[#f4f4f4] transition hover:border-[var(--edias-navy)]"
                    >
                      <div className="relative aspect-[4/5] bg-white">
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 480px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-xl font-semibold text-[var(--edias-navy)]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                          {item.body}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--edias-navy)]">
                          Abrir tabela
                          <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand
        title="Receba a tabela atualizada"
        description="Informe a modalidade desejada e retornamos com opções de grupos e simulação."
      />
    </>
  );
}
