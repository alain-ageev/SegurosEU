import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { V2Footer } from "@/components/v2/footer";
import { V2Header } from "@/components/v2/header";
import { createPageMetadata } from "@/lib/seo";
import "./v2.css";

/** Neutra, próxima de Calibri — evita serifa pontiaguda na /v2 */
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

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
    <div className={`v2-shell ${lato.variable}`}>
      <V2Header />
      <main id="conteudo">{children}</main>
      <V2Footer />
    </div>
  );
}
