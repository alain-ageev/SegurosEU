import type { MetadataRoute } from "next";
import { checklistRoutes } from "@/lib/checklist";
import { consorcioTables, saudeOperators, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/consorcio",
    "/consorcio/tabelas",
    "/consorcio/duvidas",
    "/vida",
    "/viagem",
    "/saude",
    "/incendio",
    "/checklist",
    "/contato",
    "/sobre",
  ];

  const saudeRoutes = saudeOperators.map((op) => `/saude/${op.slug}`);
  const tabelaRoutes = consorcioTables.map((item) => `/consorcio/tabelas/${item.id}`);
  const checklistPaths = checklistRoutes.map((item) => `/checklist/${item.slug}`);

  return [...staticRoutes, ...saudeRoutes, ...tabelaRoutes, ...checklistPaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
