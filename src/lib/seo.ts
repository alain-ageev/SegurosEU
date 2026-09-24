import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const baseUrl = siteConfig.url;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle =
    title === siteConfig.name
      ? `${siteConfig.name} | Seguros e consultoria em Recife`
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: absoluteUrl("/og.png"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — consultoria em seguros`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/og.png")],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
