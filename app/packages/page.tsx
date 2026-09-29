import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PackagesSection from "../components/PackagesSection";
import ContactFooter from "../components/ContactFooter";
import { packagesData } from "@/data/packagesData";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://devlooperstudio.com";

export const metadata: Metadata = {
  title: "Packages & Transparent Pricing Plans",
  description:
    "Explore curated web development, e-commerce storefront, mobile app, and enterprise software engineering packages with transparent milestone pricing and 1-year dedicated support.",
  alternates: {
    canonical: `${siteUrl}/packages`,
  },
  openGraph: {
    title: "Packages & Transparent Pricing Plans | devlooper studio",
    description:
      "Explore curated web development, e-commerce storefront, mobile app, and enterprise software packages with transparent milestone pricing.",
    url: `${siteUrl}/packages`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "devlooper studio packages and transparent pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packages & Pricing Plans | devlooper studio",
    description:
      "Explore curated web development, e-commerce, and mobile app packages with transparent pricing.",
    images: ["/og-image.png"],
  },
};

export default function PackagesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Packages & Pricing",
        item: `${siteUrl}/packages`,
      },
    ],
  };

  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Engineering & Development Packages",
    itemListElement: packagesData.agency.services.flatMap((svc) =>
      (svc.packages || []).map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
        price: pkg.price_inr ?? pkg.starting_price_inr ?? "Contact for Quote",
        priceCurrency: "INR",
        description: `${pkg.name} including ${pkg.features.slice(0, 3).join(", ")}.`,
        url: `${siteUrl}/packages#${pkg.id}`,
      })),
    ),
  };

  return (
    <>
      <script
        id="packages-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        id="packages-catalog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(catalogSchema),
        }}
      />
      <main className="min-h-screen bg-[#0b0f19] text-slate-100 pt-16">
        <Navbar />
        <PackagesSection isStandalonePage={true} />
        <ContactFooter />
      </main>
    </>
  );
}
