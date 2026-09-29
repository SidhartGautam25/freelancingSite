import type { MetadataRoute } from "next";
import { packagesData } from "@/data/packagesData";
import { listArticles } from "@/lib/blogApi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://devlooperstudio.com";

  const currentDate = new Date();

  // Core Static Routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Dynamic Service / Package Catalog References
  try {
    const services = packagesData.agency.services;
    for (const service of services) {
      if (service.packages) {
        for (const pkg of service.packages) {
          routes.push({
            url: `${baseUrl}/packages#${pkg.id}`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: pkg.popular ? 0.85 : 0.75,
          });
        }
      }
    }
  } catch (error) {
    console.error("[Sitemap] Error building package entries:", error);
  }

  // Dynamic Published Articles
  try {
    const articles = await listArticles();
    for (const article of articles) {
      routes.push({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: article.updatedAt
          ? new Date(article.updatedAt)
          : currentDate,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  } catch (error) {
    console.error(
      "[Sitemap] Error fetching published articles for sitemap:",
      error,
    );
  }

  return routes;
}
