import type { MetadataRoute } from "next";

const BASE_URL = "https://extaticaa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "vi"];
  const pages = ["", "/events", "/about", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "/events" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page === "/events" ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
