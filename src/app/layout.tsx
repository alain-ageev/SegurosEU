import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/** Neutra estilo Calibri — tipografia única do site */
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
    keywords: [
      "corretora de seguros Recife",
      "consultoria de seguros",
      "seguro de vida",
      "seguro viagem",
      "plano de saúde",
      "consórcio Porto",
      "E Dias",
      "E DIAS Corretora de Seguros",
    ],
  }),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={lato.variable}>
      <body className="min-h-dvh font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-[var(--edias-navy)]"
        >
          Ir para o conteúdo
        </a>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
