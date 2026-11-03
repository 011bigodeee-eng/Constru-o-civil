import type { MetadataRoute } from "next";
import { company } from "@/config/company";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/privacidade",
    ...projects.map((p) => `/projetos/${p.slug}`),
  ].map((path) => ({ url: `${company.siteUrl}${path}` }));
}
