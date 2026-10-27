import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { siteConfig } from "@/lib/site";

type CtaBandProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** light = fundo branco + dourado (padrão); navy = faixa azul */
  variant?: "navy" | "light";
  compact?: boolean;
};

export function CtaBand({
  title,
  description,
  primaryHref = siteConfig.whatsappHref,
  primaryLabel = "Falar com a equipe",
  secondaryHref = "/checklist",
  secondaryLabel = "Abrir checklist",
  variant = "light",
  compact = false,
}: CtaBandProps) {
  const bandPadding = compact ? "py-6 sm:py-8" : "py-12 sm:py-14";
  const primaryExternal = primaryHref.startsWith("http");
  const secondaryExternal = secondaryHref.startsWith("http");
  const primaryClass = "v2-btn v2-btn-accent";
  const secondaryClass =
    variant === "navy"
      ? "v2-btn border border-white/45 bg-white/10 text-white hover:bg-white/18"
      : "v2-btn border border-[var(--v2-ember)] text-[var(--v2-ember)] hover:bg-[var(--v2-ember)] hover:text-[var(--v2-ink)]";

  const primary = primaryExternal ? (
    <a href={primaryHref} target="_blank" rel="noopener noreferrer" className={primaryClass}>
      {primaryLabel}
      <ArrowRightIcon className="size-4" />
    </a>
  ) : (
    <Link href={primaryHref} className={primaryClass}>
      {primaryLabel}
      <ArrowRightIcon className="size-4" />
    </Link>
  );

  const secondary = secondaryExternal ? (
    <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className={secondaryClass}>
      {secondaryLabel}
    </a>
  ) : (
    <Link href={secondaryHref} className={secondaryClass}>
      {secondaryLabel}
    </Link>
  );
  if (variant === "navy") {
    return (
      <section className="bg-[var(--v2-abyss)] text-white">
        <div className={`v2-container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${bandPadding}`}>
          <div className="max-w-2xl">
            <h2 className="v2-h2 v2-h2-on-blue text-white">{title}</h2>
            <p className="mt-3 text-[17px] leading-snug text-white/90">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {primary}
            {secondary}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-[var(--edias-line)] bg-white">
      <div className={`v2-container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${bandPadding}`}>
        <div className="max-w-2xl">
          <h2 className="v2-h2 text-[var(--v2-ember)]">{title}</h2>
          <p className="mt-3 text-[17px] leading-snug text-[var(--v2-mist)]">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {primary}
          {secondary}
        </div>
      </div>
    </section>
  );
}
