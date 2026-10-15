import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";
import { consorcioTables } from "@/lib/site";

type PageProps = {
  params: Promise<{ tipo: string }>;
};

export function generateStaticParams() {
  return consorcioTables.map((item) => ({ tipo: item.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tipo } = await params;
  const item = consorcioTables.find((entry) => entry.id === tipo);
  if (!item) return {};
  return createPageMetadata({
    title: item.title,
    description: `${item.title} do Consórcio Porto Bank com a E DIAS. ${item.body}`,
    path: `/consorcio/tabelas/${item.id}`,
  });
}

export default async function ConsorcioTabelaTipoPage({ params }: PageProps) {
  const { tipo } = await params;
  const item = consorcioTables.find((entry) => entry.id === tipo);
  if (!item) notFound();

  const siblings = consorcioTables.filter((entry) => entry.id !== item.id);

  return (
    <>
      <Hero
        brand="Tabelas"
        title={item.title}
        description={item.body}
        primaryCta={{ label: "Solicitar esta tabela", href: "/contato" }}
        secondaryCta={{ label: "Todas as tabelas", href: "/consorcio/tabelas" }}
        compact
        imageSrc="/images/home/house.jpg"
        imageAlt={item.title}
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-6">
            {item.images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`${item.title} — faixa ${index + 1}`}
                width={1080}
                height={1355}
                unoptimized
                className="h-auto w-full rounded-[16px] bg-white shadow-sm"
                priority={index === 0}
              />
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xs font-bold tracking-[0.16em] text-[var(--edias-gold)] uppercase">
              Outras tabelas
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-[var(--edias-navy)]">
              {siblings.map((other) => (
                <li key={other.id}>
                  <Link
                    href={`/consorcio/tabelas/${other.id}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {other.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Quer simular com esta tabela?"
        description="A E DIAS confirma o grupo vigente e orienta prazo, crédito e lance."
        secondaryHref="/consorcio"
        secondaryLabel="Voltar ao consórcio"
      />
    </>
  );
}
