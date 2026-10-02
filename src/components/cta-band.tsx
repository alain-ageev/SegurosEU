import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

type CtaBandProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  description,
  primaryHref = "/contato",
  primaryLabel = "Solicitar atendimento",
  secondaryHref = "/checklist",
  secondaryLabel = "Abrir checklist",
}: CtaBandProps) {
  return (
    <section className="bg-[var(--v2-abyss)] text-white">
      <div className="v2-container flex flex-col gap-6 py-12 sm:py-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="v2-h2 v2-h2-on-blue text-white">{title}</h2>
          <p className="mt-3 text-[17px] leading-snug text-white/90">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primaryHref} className="v2-btn v2-btn-accent">
            {primaryLabel}
            <ArrowRightIcon className="size-4" />
          </Link>
          <Link
            href={secondaryHref}
            className="v2-btn border border-white/45 bg-white/10 text-white hover:bg-white/18"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
