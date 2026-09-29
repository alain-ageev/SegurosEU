import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/lib/site";
import { v2Nav, v2Solutions } from "@/lib/v2-content";

export function V2Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--edias-deep)] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 brand-pattern opacity-40" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <p className="font-heading text-lg tracking-[0.12em] text-[var(--edias-gold)] uppercase">
            E DIAS
          </p>
          <p className="mt-1 text-xs tracking-[0.2em] text-white/60 uppercase">
            Corretora de Seguros
          </p>
          <p className="font-description mt-4 text-base text-white/75">
            Consultoria B2B em proteção empresarial e familiar em Recife.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <h2 className="font-heading text-sm tracking-[0.14em] text-[var(--edias-gold)] uppercase">
            Soluções
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {v2Solutions.slice(0, 5).map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm tracking-[0.14em] text-[var(--edias-gold)] uppercase">
            Institucional
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {v2Nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/" className="hover:text-white">
                Site atual
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm tracking-[0.14em] text-[var(--edias-gold)] uppercase">
            Contato
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              {siteConfig.address.neighborhood}, {siteConfig.address.city}/
              {siteConfig.address.state}
            </li>
            <li className="text-white/55">{siteConfig.hours}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. CNPJ{" "}
            {siteConfig.cnpj}.
          </p>
          <p>Versão paralela de conversão · /v2</p>
        </div>
      </div>
    </footer>
  );
}
