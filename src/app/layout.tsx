import type { Metadata } from "next";
import { Abhaya_Libre, Cinzel, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/** Manual da Marca — tipografia principal */
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Corbel (manual) não está no Google Fonts.
 * Source Sans 3 é a alternativa web humanista mais próxima.
 */
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

/** Manual da Marca — fonte de descrição */
const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
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
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${sourceSans.variable} ${abhayaLibre.variable}`}
    >
      <body className="min-h-dvh font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-[var(--edias-navy)]"
        >
          Ir para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
