import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { siteConfig } from "@/lib/site";

type HeroProps = {
  /** Rótulo curto (eyebrow) — não é logo sobre a imagem */
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

export function Hero({
  brand,
  title,
  description,
  primaryCta = { label: "Falar com especialista", href: "/contato" },
  secondaryCta = { label: "Ver soluções", href: "/#solucoes" },
  compact = false,
  imageSrc = "/images/home/meeting.jpg",
  imageAlt = "Consultoria E DIAS em atendimento",
}: HeroProps) {
  const eyebrow =
    brand && brand.trim().toUpperCase() !== "E DIAS" ? brand : "E DIAS · Recife";

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
        <p className="v2-eyebrow text-[var(--v2-ember)]">{eyebrow}</p>
        <h1 className="v2-display mt-2 max-w-3xl text-[clamp(28px,4vw,42px)] text-white">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-[18px] leading-snug text-white/92">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {primaryExternal ? (
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn v2-btn-accent"
            >
              {primaryCta.label}
              <ArrowRightIcon className="size-4" />
            </a>
          ) : (
            <Link href={primaryCta.href} className="v2-btn v2-btn-accent">
              {primaryCta.label}
              <ArrowRightIcon className="size-4" />
            </Link>
          )}
          {secondaryExternal ? (
            <a
              href={secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn border border-white/45 bg-white/10 text-white hover:bg-white/18"
            >
              {secondaryCta.label}
            </a>
          ) : (
            <Link
              href={secondaryCta.href}
              className="v2-btn border border-white/45 bg-white/10 text-white hover:bg-white/18"
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
