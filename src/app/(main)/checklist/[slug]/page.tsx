import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { ChecklistForm } from "@/components/checklist-form";
import { Hero } from "@/components/hero";
import type { ChecklistFile } from "@/lib/checklist";
import { checklistRoutes } from "@/lib/checklist";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function PdfMark() {
  return (
    <svg viewBox="0 0 40 48" className="size-11 shrink-0" aria-hidden>
      <path
        d="M6 1.5h18.2L34.5 12v30.5A4 4 0 0 1 30.5 46.5h-24.5a4 4 0 0 1-4-4V5.5a4 4 0 0 1 4-4z"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M24 1.8V12h10.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="7" y="30" width="22" height="10" rx="1.5" fill="#b42318" />
      <text
        x="18"
        y="37.4"
        textAnchor="middle"
        fill="#fff"
        fontSize="7"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}

function ChecklistFileCard({ file }: { file: ChecklistFile }) {
  const pdf = !file.external;
  return (
    <a
      href={file.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-24 items-center gap-4 border border-[var(--edias-line)] bg-white p-4 text-[var(--edias-navy)] transition-colors hover:border-[var(--edias-gold)]"
    >
      {pdf ? (
        <PdfMark />
      ) : (
        <span className="flex size-11 shrink-0 items-center justify-center border border-[var(--edias-line)] text-[var(--edias-gold-deep)]">
          <ArrowUpRightIcon className="size-5" />
        </span>
      )}
      <span className="min-w-0">
        <span className="block font-heading text-base font-semibold leading-snug">
          {file.label}
        </span>
        <span className="mt-1 block text-xs tracking-wide text-[var(--edias-ink-muted)] uppercase">
          {pdf ? "Abrir PDF" : "Abrir link"}
        </span>
      </span>
    </a>
  );
}

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
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.files.map((file) => (
                <li key={file.href}>
                  <ChecklistFileCard file={file} />
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
