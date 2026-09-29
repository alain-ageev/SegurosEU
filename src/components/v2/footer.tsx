import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/lib/site";
import { v2Nav, v2Solutions } from "@/lib/v2-content";

export function V2Footer() {
  return (
    <footer className="bg-[var(--v2-abyss)] text-white">
      <div className="v2-container grid gap-12 py-16 lg:grid-cols-4">
        <div>
          <p className="text-[16px] font-semibold tracking-[-0.01em]">E DIAS</p>
          <p className="mt-1 text-[12px] font-medium text-[var(--v2-mist)]">
            Corretora de Seguros
          </p>
          <p className="mt-4 max-w-xs text-[14px] leading-[1.43] text-[var(--v2-mist)]">
            Consultoria B2B em proteção empresarial e familiar em Recife.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <h2 className="text-[14px] font-semibold tracking-[-0.01em]">Soluções</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-[var(--v2-mist)]">
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
          <h2 className="text-[14px] font-semibold tracking-[-0.01em]">Institucional</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-[var(--v2-mist)]">
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
          <h2 className="text-[14px] font-semibold tracking-[-0.01em]">Contato</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-[var(--v2-mist)]">
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

      <div className="border-t border-white/10">
        <div className="v2-container flex flex-col gap-2 py-5 text-[12px] text-[var(--v2-steel)] sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. CNPJ {siteConfig.cnpj}.
          </p>
          <p>Versão conversão · /v2</p>
        </div>
      </div>
    </footer>
  );
}
