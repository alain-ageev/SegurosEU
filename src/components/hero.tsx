import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

type HeroProps = {
  brand?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export function Hero({
  brand = "E DIAS",
  title,
  description,
  primaryCta = { label: "Falar com especialista", href: "/contato" },
  secondaryCta = { label: "Ver soluções", href: "/#solucoes" },
  compact = false,
  imageSrc = "/images/home/brand-hero.jpg",
  imageAlt = "Identidade visual E DIAS Corretora de Seguros",
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[var(--edias-navy)] text-white ${
        compact ? "min-h-[52vh]" : "min-h-[92vh]"
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
        className="absolute inset-0 bg-gradient-to-r from-[var(--edias-deep)]/94 via-[var(--edias-navy)]/80 to-[var(--edias-navy)]/55"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] mix-blend-soft-light brand-pattern"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.2] mix-blend-soft-light hero-grain"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[var(--edias-gold)]/15 blur-3xl animate-drift"
      />

      <div
        className={`relative mx-auto flex max-w-6xl flex-col justify-end px-4 sm:px-6 lg:px-8 ${
          compact ? "pb-14 pt-16 sm:pb-16 sm:pt-20" : "pb-20 pt-20 sm:pb-24 sm:pt-28"
        }`}
      >
        <p className="animate-rise font-heading text-3xl font-semibold tracking-[0.08em] text-[var(--edias-gold)] uppercase sm:text-4xl md:text-5xl lg:text-6xl">
          {brand}
        </p>
        <p className="animate-rise mt-1 font-heading text-[0.7rem] tracking-[0.28em] text-white/70 uppercase sm:text-xs">
          Corretora de Seguros
        </p>
        <h1 className="animate-rise-delay mt-5 max-w-3xl font-heading text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="animate-rise-delay-2 font-description mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
          {description}
        </p>
        <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <Button
            nativeButton={false}
            render={<Link href={primaryCta.href} />}
            size="lg"
            className="h-11 rounded-none bg-[var(--edias-gold)] px-5 text-[var(--edias-navy)] hover:bg-[var(--edias-gold-soft)]"
          >
            {primaryCta.label}
            <ArrowRightIcon />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href={secondaryCta.href} />}
            variant="outline"
            size="lg"
            className="h-11 rounded-none border-white/30 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
          >
            {secondaryCta.label}
          </Button>
        </div>
        {!compact ? (
          <p className="mt-10 font-heading text-xs tracking-[0.16em] text-white/45 uppercase">
            Recife · {siteConfig.phone} · Atendimento consultivo
          </p>
        ) : null}
      </div>
    </section>
  );
}
