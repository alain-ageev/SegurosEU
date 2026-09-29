import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[var(--edias-deep)] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 brand-pattern opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 10% 0%, rgba(182,165,113,0.18), transparent 55%), linear-gradient(180deg, rgba(5,46,68,0.55), rgba(5,46,68,0.92))",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8 lg:py-16">
        <div>
          <Image
            src="/images/logo-edias-mark.png"
            alt="E DIAS Corretora de Seguros"
            width={182}
            height={62}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="font-description mt-4 max-w-sm text-base leading-relaxed text-white/75">
            Soluções em proteção e segurança com compromisso de tranquilidade e
            estabilidade — atendimento personalizado em Recife.
          </p>
          <SocialLinks className="mt-5" />
          <p className="mt-4 text-xs tracking-wide text-white/50">
            {siteConfig.legalName} · CNPJ {siteConfig.cnpj}
          </p>
          <p className="mt-3">
            <Link
              href="/v2"
              className="text-xs font-semibold tracking-wide text-[var(--edias-gold)] underline-offset-2 hover:underline"
            >
              Ver versão focada em conversão (/v2)
            </Link>
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold tracking-[0.14em] text-[var(--edias-gold)] uppercase">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold tracking-[0.14em] text-[var(--edias-gold)] uppercase">
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
