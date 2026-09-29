import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";
import { checklistItems } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Checklists",
  description:
    "Checklists Edias para agilizar cotações: consórcio, saúde, veículos, residencial, empresarial, RCG, transporte e mais.",
  path: "/checklist",
});

export default function ChecklistPage() {
  return (
    <>
      <Hero
        brand="Checklist"
        title="Prepare a cotação com os dados certos"
        description="Formulários e listas por produto para acelerar análise, evitar retrabalho e receber propostas mais precisas."
        primaryCta={{ label: "Falar com a equipe", href: "/contato" }}
        secondaryCta={{ label: "Cadastro cliente", href: "/contato" }}
        compact
      />

      <section className="bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {checklistItems.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/checklist/${item.slug}`}
                  className="group flex h-full flex-col justify-between gap-4 border border-[var(--edias-line)] bg-white p-5 transition-colors hover:border-[var(--edias-gold)]"
                >
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-[var(--edias-navy)]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--edias-ink-muted)]">
                      {item.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--edias-navy)]">
                    Abrir
                    <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Já tem os documentos em mãos?"
        description="Envie o checklist preenchido ou peça orientação sobre o que é indispensável para a sua cotação."
      />
    </>
  );
}
