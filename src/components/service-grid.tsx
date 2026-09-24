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

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm bg-[var(--edias-line)] sm:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className="group bg-[var(--edias-canvas)] transition-colors duration-300 hover:bg-white"
            >
              <Link
                href={service.href}
                className="flex h-full flex-col justify-between gap-8 p-6 sm:p-8"
              >
                <div>
                  <span className="font-[family-name:var(--font-raleway)] text-xs tracking-[0.2em] text-[var(--edias-gold-deep)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-raleway)] text-2xl font-semibold text-[var(--edias-navy)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                    {service.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm font-medium text-[var(--edias-navy)]">
                  <span>{service.accent}</span>
                  <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
