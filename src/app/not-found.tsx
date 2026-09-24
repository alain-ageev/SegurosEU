import Link from "next/link";
import { Hero } from "@/components/hero";

export default function NotFound() {
  return (
    <Hero
      brand="404"
      title="Página não encontrada"
      description="O endereço pode ter mudado. Volte à página inicial ou escolha uma solução no menu."
      primaryCta={{ label: "Ir para o início", href: "/" }}
      secondaryCta={{ label: "Ver soluções", href: "/#solucoes" }}
      compact
    />
  );
}
