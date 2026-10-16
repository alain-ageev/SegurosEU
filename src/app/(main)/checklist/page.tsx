import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { ChecklistForm } from "@/components/checklist-form";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";
import { checklistCatalog } from "@/lib/checklist";

export const metadata: Metadata = createPageMetadata({
  title: "Checklists",
  description:
    "Formulários Edias para cotação: cadastro, consórcio, depósito recursal, garantia judicial, empresarial, saúde, vida, transporte e veículo.",
  path: "/checklist",
});

const consorcio = checklistCatalog.find((item) => item.slug === "consorcio");

export default function ChecklistPage() {
  return (
    <>
      <Hero
        brand="Checklist"
        title="Prepare a cotação com os dados certos"
        description="Os mesmos formulários do site anterior, na ordem do menu: cadastro, consórcio, garantia, empresarial, saúde, vida e os demais produtos."
        primaryCta={{ label: "Falar com a equipe", href: "/contato" }}
        secondaryCta={{ label: "Consórcio", href: "#consorcio" }}
        compact
        imageSrc="/images/home/finance.jpg"
        imageAlt="Organização de documentos para cotação"
      />

      <section className="bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {checklistCatalog.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between gap-4 border border-[var(--edias-line)] bg-white p-5 transition-colors hover:border-[var(--edias-gold)]"
                >
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-[var(--edias-navy)]">
                      {item.menuLabel}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--edias-ink-muted)]">
                      {item.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--edias-navy)]">
                    {item.route ? "Abrir formulário" : "Preencher aqui"}
                    <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {consorcio ? (
        <section id="consorcio" className="scroll-mt-24 border-t border-[var(--edias-line)] bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ChecklistForm
              title={consorcio.form.title}
              description={consorcio.description}
              fields={consorcio.form.fields}
            />
          </div>
        </section>
      ) : null}
    </>
  );
}
