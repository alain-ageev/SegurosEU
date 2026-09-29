import type { MetadataRoute } from "next";
import { checklistItems, saudeOperators, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/v2",
    "/consorcio",
    "/consorcio/tabelas",
    "/consorcio/duvidas",
    "/vida",
    "/viagem",
    "/saude",
    "/checklist",
    "/contato",
  ];

  const saudeRoutes = saudeOperators.map((op) => `/saude/${op.slug}`);
  const checklistRoutes = checklistItems.map((item) => `/checklist/${item.slug}`);

  return [...staticRoutes, ...saudeRoutes, ...checklistRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
