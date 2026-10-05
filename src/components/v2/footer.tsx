import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { odontoHref, siteConfig } from "@/lib/site";
import { v2Nav, v2Solutions } from "@/lib/v2-content";

function FooterLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");
  const classes = `v2-footer-link ${className}`.trim();
  if (external) {
    return (
      <a
        href={href}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function V2Footer() {
  return (
    <footer className="rounded-t-[2.5rem] bg-[var(--v2-chrome)] px-4 pt-4 text-white sm:rounded-t-[4rem] sm:px-6 sm:pt-6">
      <div className="v2-container grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.15fr_1fr_1fr_1.35fr]">
        <div>
          <Link href="/" aria-label={`${siteConfig.shortName} — início`}>
            <Image
              src="/images/logo-edias-footer.png"
              alt="E DIAS Corretora de Seguros"
              width={320}
              height={154}
              className="h-auto w-44 sm:w-48"
              priority={false}
            />
          </Link>
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/75">
            Consultoria B2B em proteção empresarial e familiar em Recife.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <h2 className="text-[14px] font-bold">Soluções</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-white/75">
            {v2Solutions.slice(0, 5).map((item) => (
              <li key={item.title}>
                <FooterLink href={item.href}>{item.title}</FooterLink>
              </li>
            ))}
            <li>
              <FooterLink href={odontoHref}>Odonto SulAmérica</FooterLink>
            </li>
            <li>
              <FooterLink href="/consorcio/tabelas">Tabelas de consórcio</FooterLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[14px] font-bold">Institucional</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-white/75">
            {v2Nav.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
            <li>
              <FooterLink href="/#parceiros">Parceiros</FooterLink>
            </li>
          </ul>
        </div>

        <div className="min-w-0">
          <h2 className="text-[14px] font-bold">Contato</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-white/75">
            <li>
              <FooterLink href={siteConfig.phoneHref}>{siteConfig.phone}</FooterLink>
            </li>
            <li>
              <FooterLink
                href={`mailto:${siteConfig.email}`}
                className="v2-footer-email"
              >
                {siteConfig.email}
              </FooterLink>
            </li>
            <li>
              {siteConfig.address.neighborhood}, {siteConfig.address.city}/
              {siteConfig.address.state}
            </li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="v2-container flex flex-col gap-2 py-5 text-[12px] text-white/55 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. CNPJ {siteConfig.cnpj}.
          </p>
          <p>Recife · Boa Viagem</p>
        </div>
      </div>
    </footer>
  );
}
