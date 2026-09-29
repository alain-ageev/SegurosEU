import type { Metadata } from "next";
import { V2Footer } from "@/components/v2/footer";
import { V2Header } from "@/components/v2/header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Consultoria de seguros B2B | E DIAS",
  description:
    "Diagnóstico de riscos e benefícios para empresas: reduzir custo, proteger patrimônio e cuidar do RH com a E DIAS Corretora de Seguros em Recife.",
  path: "/v2",
  keywords: [
    "consultoria de seguros B2B",
    "seguro empresarial Recife",
    "diagnóstico de benefícios",
    "corretora de seguros PME",
    "E DIAS",
  ],
});

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <V2Header />
      <main id="conteudo">{children}</main>
      <V2Footer />
    </>
  );
}
