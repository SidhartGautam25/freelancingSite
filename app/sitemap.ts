import type { MetadataRoute } from "next";
import { packagesData } from "@/data/packagesData";

export default function sitemap(): MetadataRoute.Sitemap {
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

  return routes;
}
