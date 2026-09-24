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
};

export function Hero({
  brand = "Edias Consultoria",
  title,
  description,
  primaryCta = { label: "Falar com especialista", href: "/contato" },
  secondaryCta = { label: "Ver soluções", href: "/#solucoes" },
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[var(--edias-navy)] text-white ${
        compact ? "min-h-[52vh]" : "min-h-[92vh]"
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-0 hero-atmosphere"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] mix-blend-soft-light hero-grain"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[var(--edias-gold)]/15 blur-3xl animate-drift"
      />
      <div
        aria-hidden
        className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div
        className={`relative mx-auto flex max-w-6xl flex-col justify-end px-4 sm:px-6 lg:px-8 ${
          compact ? "pb-14 pt-28 sm:pb-16 sm:pt-32" : "pb-20 pt-36 sm:pb-24 sm:pt-44"
        }`}
      >
        <p className="animate-rise font-[family-name:var(--font-raleway)] text-3xl font-semibold tracking-[0.02em] text-[var(--edias-gold)] sm:text-4xl md:text-5xl lg:text-6xl">
          {brand}
        </p>
        <h1 className="animate-rise-delay mt-5 max-w-3xl font-[family-name:var(--font-raleway)] text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          {description}
        </p>
        <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <Button
            nativeButton={false}
            render={<Link href={primaryCta.href} />}
            size="lg"
            className="h-11 bg-[var(--edias-gold)] px-5 text-[var(--edias-navy)] hover:bg-[var(--edias-gold-soft)]"
          >
            {primaryCta.label}
            <ArrowRightIcon />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href={secondaryCta.href} />}
            variant="outline"
            size="lg"
            className="h-11 border-white/30 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
          >
            {secondaryCta.label}
          </Button>
        </div>
        {!compact ? (
          <p className="mt-10 text-xs tracking-[0.16em] text-white/45 uppercase">
            Recife · {siteConfig.phone} · Atendimento consultivo
          </p>
        ) : null}
      </div>
    </section>
  );
}
