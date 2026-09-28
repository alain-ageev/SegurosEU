import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function BrandLogo({ variant = "light", className = "" }: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
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
          className="h-10 w-auto sm:h-12"
          priority
        />
      )}
    </Link>
  );
}
