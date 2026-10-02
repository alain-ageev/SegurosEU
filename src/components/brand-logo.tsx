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
          src="/images/logo-edias-footer.png"
          alt="E DIAS Corretora de Seguros"
          width={320}
          height={85}
          className="h-9 w-auto object-contain sm:h-11"
          priority
        />
      ) : (
        <Image
          src="/images/logo-edias-3d.png"
          alt="E DIAS Corretora de Seguros"
          width={720}
          height={360}
          className="h-11 w-auto max-w-[180px] object-contain object-left sm:h-12 sm:max-w-[220px] lg:h-[3.25rem] lg:max-w-[240px]"
          priority
          sizes="(max-width: 640px) 180px, 240px"
        />
      )}
    </Link>
  );
}
