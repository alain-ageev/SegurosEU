import Image from "next/image";
import Link from "next/link";
import { institutionalPartners, partners } from "@/lib/site";

export function PartnersGrid() {
  return (
    <section
      id="parceiros"
      className="border-y border-[var(--edias-line)] bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--edias-gold-deep)] uppercase">
              Nossos parceiros
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-raleway)] text-2xl font-semibold text-[var(--edias-navy)] sm:text-3xl">
              Principais seguradoras e operadoras
            </h2>
          </div>
          <Link
            href="/checklist"
            className="text-sm font-medium text-[var(--edias-navy)] underline-offset-4 hover:underline"
          >
            Preparar cotação com checklist
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex h-20 items-center justify-center border border-[var(--edias-line)] bg-[var(--edias-canvas)] px-3 transition-colors hover:bg-white"
            >
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={140}
                height={56}
                className="max-h-10 w-auto object-contain"
                loading="lazy"
                sizes="(max-width: 640px) 40vw, 140px"
              />
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--edias-ink-muted)] uppercase">
            Apoio institucional
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {institutionalPartners.map((partner) => (
              <li
                key={partner.name}
                className="flex h-16 items-center justify-center border border-[var(--edias-line)] bg-white px-5"
              >
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={160}
                  height={48}
                  className="max-h-10 w-auto object-contain"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
