import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { siteConfig } from "@/lib/site";

type HeroProps = {
  /** Assunto da página (eyebrow). Não usar marca/institucional. */
  brand?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isInstitutionalLabel(value?: string) {
  if (!value) return true;
  const normalized = value.trim().toLowerCase();
  return (
    normalized === "e dias" ||
    normalized.includes("corretora de seguros") ||
    normalized.includes("edias corretora")
  );
}

export function Hero({
  brand,
  title,
  description,
  primaryCta = { label: "Falar com especialista", href: siteConfig.whatsappHref },
  secondaryCta = { label: "Ver soluções", href: "/#solucoes" },
  compact = false,
  imageSrc = "/images/home/meeting.jpg",
  imageAlt = "Consultoria E DIAS em atendimento",
}: HeroProps) {
  const eyebrow = isInstitutionalLabel(brand) ? null : brand?.trim() || null;

  const primaryExternal = isExternal(primaryCta.href);
  const secondaryExternal = isExternal(secondaryCta.href);

  return (
    <section
      className={`relative overflow-hidden text-white ${
        compact ? "min-h-[42vh]" : "min-h-[70vh]"
      }`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={!compact}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[var(--v2-abyss)] via-[var(--v2-abyss)]/88 to-[var(--v2-abyss)]/55"
      />

      <div
        className={`v2-container relative flex flex-col justify-end ${
          compact ? "pb-12 pt-16 sm:pb-14 sm:pt-20" : "pb-16 pt-20 sm:pb-20 sm:pt-24"
        }`}
      >
        {eyebrow ? (
          <p className="v2-eyebrow v2-eyebrow-ember">{eyebrow}</p>
        ) : null}
        <h1
          className={`v2-display v2-display-ember max-w-3xl text-[clamp(28px,4vw,42px)] ${
            eyebrow ? "mt-2" : ""
          }`}
        >
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-[18px] leading-snug text-white/92">
          {description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {primaryExternal ? (
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn v2-btn-accent w-full justify-center sm:w-auto"
            >
              {primaryCta.label}
              <ArrowRightIcon className="size-4" />
            </a>
          ) : (
            <Link
              href={primaryCta.href}
              className="v2-btn v2-btn-accent w-full justify-center sm:w-auto"
            >
              {primaryCta.label}
              <ArrowRightIcon className="size-4" />
            </Link>
          )}
          {secondaryExternal ? (
            <a
              href={secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn w-full justify-center border border-white/45 bg-white/10 text-white hover:bg-white/18 sm:w-auto"
            >
              {secondaryCta.label}
            </a>
          ) : (
            <Link
              href={secondaryCta.href}
              className="v2-btn w-full justify-center border border-white/45 bg-white/10 text-white hover:bg-white/18 sm:w-auto"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
        {!compact ? (
          <p className="mt-8 text-[13px] font-medium tracking-[0.08em] text-white/70 uppercase">
            Recife · {siteConfig.phone} · Atendimento consultivo
          </p>
        ) : null}
      </div>
    </section>
  );
}
