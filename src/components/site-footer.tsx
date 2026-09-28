import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[var(--edias-deep)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 10% 0%, rgba(182,165,113,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(0,48,91,0.9), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8 lg:py-16">
        <div>
          <Image
            src="/images/logo-edias-mark.png"
            alt="E Dias Corretora de Seguros"
            width={182}
            height={62}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Corretora e consultoria de seguros em Recife. Proteção corporativa e
            familiar com análise de risco, parceiros sólidos e atendimento
            próximo.
          </p>
          <p className="mt-4 text-xs tracking-wide text-white/50">
            {siteConfig.legalName} · CNPJ {siteConfig.cnpj}
          </p>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-raleway)] text-sm font-semibold tracking-[0.14em] text-[var(--edias-gold)] uppercase">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contato" className="hover:text-white">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-raleway)] text-sm font-semibold tracking-[0.14em] text-[var(--edias-gold)] uppercase">
            Contato
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2.5">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-[var(--edias-gold)]" />
              <div>
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
                <span className="block text-white/55">
                  {siteConfig.phoneSecondary}
                </span>
              </div>
            </li>
            <li className="flex gap-2.5">
              <MailIcon className="mt-0.5 size-4 shrink-0 text-[var(--edias-gold)]" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-[var(--edias-gold)]" />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.neighborhood}, {siteConfig.address.city}/
                {siteConfig.address.state}
                <br />
                CEP {siteConfig.address.postalCode}
              </span>
            </li>
            <li className="text-white/55">{siteConfig.hours}</li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <span
                  aria-hidden
                  className="inline-flex size-4 items-center justify-center rounded-[3px] border border-[var(--edias-gold)] text-[9px] font-bold text-[var(--edias-gold)]"
                >
                  ig
                </span>
                @edias_seguros
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos os
            direitos reservados.
          </p>
          <p>Recife · Boa Viagem</p>
        </div>
      </div>
    </footer>
  );
}
