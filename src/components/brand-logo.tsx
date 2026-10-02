import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "light" | "dark";
  className?: string;
  /** Destino do clique — útil na /v2 para não voltar ao site antigo */
  href?: string;
};

export function BrandLogo({
  variant = "light",
  className = "",
  href = "/",
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href={href}
      className={`inline-flex items-center ${className}`}
      aria-label="E Dias Corretora de Seguros — página inicial"
    >
      {isLight ? (
        <Image
          src="/images/logo-edias-footer.png"
          alt="E DIAS Corretora de Seguros"
          width={320}
          height={85}
          className="h-10 w-auto object-contain sm:h-12"
          priority
        />
      ) : (
        <Image
          src="/images/logo-edias-3d.png"
          alt="E DIAS Corretora de Seguros"
          width={720}
          height={240}
          className="v2-brand-logo-3d h-12 w-auto max-w-[220px] object-contain object-left sm:h-14 sm:max-w-[280px] lg:h-16 lg:max-w-[320px]"
          priority
          sizes="(max-width: 640px) 220px, 320px"
        />
      )}
    </Link>
  );
}
