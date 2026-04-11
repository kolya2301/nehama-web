import { MetadataRoute } from "next";

const LOCALES = ["he", "ru", "en", "ar"];
const CATEGORY_SLUGS = [
  "wheelchair-accessories",
  "toilet-chairs",
  "bed-accessories",
  "inserts",
  "wheelchair-upholstery",
  "pressure-cushions",
  "custom",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nehama2006.com";

  // Home pages for all locales
  const homePages = LOCALES.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  // Catalog pages for all locales × categories
  const catalogPages = LOCALES.flatMap((locale) =>
    CATEGORY_SLUGS.map((slug) => ({
      url: `${baseUrl}/${locale}/catalog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [...homePages, ...catalogPages];
}
