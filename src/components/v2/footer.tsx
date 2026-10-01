import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { odontoHref, siteConfig } from "@/lib/site";
import { v2Nav, v2Solutions } from "@/lib/v2-content";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="hover:text-white">
      {children}
    </Link>
  );
}

export function V2Footer() {
  return (
    <footer className="bg-[var(--v2-chrome)] text-white">
      <div className="v2-container grid gap-10 py-14 lg:grid-cols-4">
        <div>
          <p className="text-[17px] font-bold">E DIAS</p>
          <p className="mt-1 text-[12px] font-semibold text-white/70">
            Corretora de Seguros
          </p>
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
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#parceiros" className="hover:text-white">
                Parceiros
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[14px] font-bold">Contato</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-white/75">
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
