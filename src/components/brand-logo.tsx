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
          src="/images/logo-edias-menu.png"
          alt="E DIAS Corretora de Seguros"
          width={334}
          height={92}
          className="h-8 w-auto max-w-[150px] object-contain object-left sm:h-9 sm:max-w-[170px] lg:h-10 lg:max-w-[190px]"
          priority
          sizes="(max-width: 640px) 150px, 190px"
        />
      )}
    </Link>
  );
}
