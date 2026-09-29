import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://devlooperstudio.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/api/",
        "/dashboard/",
        "/auth/",
        "/_next/",
        "/private/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
