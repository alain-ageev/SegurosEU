import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="relative overflow-hidden bg-[var(--edias-navy)] text-white">
      <div aria-hidden className="absolute inset-0 brand-pattern opacity-45" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(120deg, rgba(5,46,68,0.75), rgba(5,46,68,0.45) 50%, rgba(182,165,113,0.2))",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold tracking-[0.04em] sm:text-3xl">
            {title}
          </h2>
          <p className="font-description mt-3 text-lg leading-relaxed text-white/75">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={<Link href={primaryHref} />}
            size="lg"
            className="h-11 bg-[var(--edias-gold)] px-5 text-[var(--edias-navy)] hover:bg-[var(--edias-gold-soft)]"
          >
            {primaryLabel}
            <ArrowRightIcon />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href={secondaryHref} />}
            variant="outline"
            size="lg"
            className="h-11 border-white/30 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
