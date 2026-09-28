import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { services } from "@/lib/site";

export function ServiceGrid() {
  return (
    <section id="solucoes" className="bg-[var(--edias-canvas)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--edias-gold-deep)] uppercase">
            Soluções
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-raleway)] text-3xl font-semibold text-[var(--edias-navy)] sm:text-4xl">
            Um produto para cada necessidade
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--edias-ink-muted)]">
            Consórcio, vida, viagem e saúde com a mesma lógica: diagnóstico
            claro, parceiros confiáveis e acompanhamento próximo.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.slug}>
              <Link
                href={service.href}
                className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden bg-[var(--edias-deep)] text-white"
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[var(--edias-deep)] via-[var(--edias-deep)]/70 to-transparent"
                />
                <div className="relative z-10 flex flex-col gap-3 p-6 sm:p-8">
                  <span className="font-[family-name:var(--font-raleway)] text-xs tracking-[0.2em] text-[var(--edias-gold)]">
                    0{index + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-raleway)] text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75">
                    {service.summary}
                  </p>
                  <div className="mt-1 flex items-center justify-between text-sm font-medium text-[var(--edias-gold-soft)]">
                    <span>{service.accent}</span>
                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
