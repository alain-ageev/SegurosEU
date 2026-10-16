import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChecklistForm } from "@/components/checklist-form";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";
import { checklistRoutes } from "@/lib/checklist";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return checklistRoutes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = checklistRoutes.find((entry) => entry.slug === slug);
  if (!item) return {};
  return createPageMetadata({
    title: item.title,
    description: item.description,
    path: `/checklist/${item.slug}`,
  });
}

export default async function ChecklistDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = checklistRoutes.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Hero
        brand="Checklist"
        title={item.title}
        description={item.description}
        primaryCta={{ label: "Preencher formulário", href: "#formulario" }}
        secondaryCta={{ label: "Todos os checklists", href: "/checklist" }}
        compact
        imageSrc="/images/home/finance.jpg"
        imageAlt={item.title}
      />

      {item.files.length ? (
        <section className="border-b border-[var(--edias-line)] bg-white py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-semibold text-[var(--edias-navy)]">
              Arquivos
            </h2>
            <ul className="mt-6 space-y-3">
              {item.files.map((file) => (
                <li key={file.href}>
                  <a
                    href={file.href}
                    {...(file.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : { download: true })}
                    className="flex items-center justify-between gap-4 border border-[var(--edias-line)] bg-[var(--edias-canvas)] px-4 py-3 text-sm font-medium text-[var(--edias-navy)] hover:border-[var(--edias-gold)]"
                  >
                    {file.label}
                    <span className="text-xs tracking-wide text-[var(--edias-gold-deep)] uppercase">
                      {file.external ? "Link" : "PDF"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section id="formulario" className="scroll-mt-24 bg-[var(--edias-canvas)] py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ChecklistForm
            title={item.form.title}
            description={item.form.description}
            fields={item.form.fields}
          />
          <p className="mt-6 text-sm">
            <Link href="/checklist" className="text-[var(--edias-navy)] underline-offset-4 hover:underline">
              Voltar para todos os checklists
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
