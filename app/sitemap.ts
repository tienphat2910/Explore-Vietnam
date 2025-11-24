import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://explorevietnam.vercel.app";
  const locales = ["en", "vi"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Thêm entry cho root của mỗi locale
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    });
  });

  // Thêm các trang khác nếu có (ví dụ: destinations, culture, etc.)
  // Ví dụ: destinations page
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/destinations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    });
  });

  return sitemapEntries;
}
