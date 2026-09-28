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

        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((partner) => (
            <li key={partner.name}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                title={partner.name}
                aria-label={`${partner.name} — abrir site oficial`}
                className="flex h-24 items-center justify-center transition-opacity hover:opacity-80 sm:h-28"
              >
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={280}
                  height={120}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 45vw, 25vw"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--edias-ink-muted)] uppercase">
            Apoio institucional
          </p>
          <ul className="mt-4 flex flex-wrap gap-8">
            {institutionalPartners.map((partner) => (
              <li key={partner.name} className="h-20 w-44 sm:h-24 sm:w-56">
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.name}
                  aria-label={`${partner.name} — abrir site oficial`}
                  className="flex h-full w-full items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={240}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
