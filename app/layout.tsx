import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InquiryModalProvider } from "@/app/context/InquiryModalContext";
import InquiryModal from "@/app/components/InquiryModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://devlooperstudio.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b0f19",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "devlooperstudio | Bespoke Web Engineering, Mobile Apps & Custom Software",
    template: "%s | devlooper studio",
  },
  description:
    "Full-cycle web development, high-performance cross-platform mobile apps, and custom enterprise software engineering for modern startups and businesses.",
  applicationName: "devlooper studio",
  keywords: [
    "web development studio",
    "custom software development",
    "mobile app development",
    "Next.js agency",
    "React Native developers",
    "bespoke engineering",
    "enterprise software India",
    "full stack development",
    "UI UX design",
    "devlooper studio",
  ],
  authors: [{ name: "devlooper studio", url: siteUrl }],
  creator: "devlooper studio",
  publisher: "devlooper studio",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/brand-logo.png", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/brand-logo.png"],
    apple: [
      { url: "/brand-logo.png", sizes: "any" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title:
      "devlooperstudio | Bespoke Web Engineering, Mobile Apps & Custom Software",
    description:
      "Full-cycle web development, high-performance cross-platform mobile apps, and custom enterprise software engineering for modern startups and businesses.",
    siteName: "devlooper studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "devlooper studio - Premium Web & Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "devlooperstudio | Bespoke Web Engineering & Software Architecture",
    description:
      "Full-cycle web development, high-performance cross-platform mobile apps, and custom enterprise software engineering.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "devlooper studio",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/brand-logo.png`,
        width: 512,
        height: 512,
      },
      image: `${siteUrl}/brand-logo.png`,
      description:
        "High-end bespoke web engineering, cross-platform apps, and custom software studio.",
      sameAs: [
        "https://github.com",
        "https://linkedin.com",
        "https://twitter.com",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "contact@devlooperstudio.com",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "devlooper studio",
      description:
        "High-end bespoke web development, design, and software engineering for modern startups and businesses.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "devlooper studio",
      url: siteUrl,
      logo: `${siteUrl}/brand-logo.png`,
      image: `${siteUrl}/og-image.png`,
      priceRange: "₹₹",
      email: "contact@devlooperstudio.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          id="schema-org-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
        <InquiryModalProvider>
          {children}
          <InquiryModal />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
