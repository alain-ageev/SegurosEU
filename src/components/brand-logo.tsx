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
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="E Dias Corretora de Seguros — página inicial"
    >
      {isLight ? (
        <Image
          src="/images/logo-edias-mark.png"
          alt="E Dias Corretora de Seguros"
          width={182}
          height={62}
          className="h-9 w-auto brightness-0 invert sm:h-11"
          priority
        />
      ) : (
        <Image
          src="/images/logo-edias.png"
          alt="E Dias Corretora de Seguros"
          width={182}
          height={62}
          className="h-8 w-auto max-w-[150px] object-contain sm:h-11 sm:max-w-none"
          priority
        />
      )}
    </Link>
  );
}
