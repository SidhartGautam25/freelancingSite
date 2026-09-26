export interface PackageItem {
  id: string;
  name: string;
  price_inr?: number;
  starting_price_inr?: number;
  max_pages?: number;
  popular?: boolean;
  features: string[];
}

export interface ServiceCategory {
  category: string;
  description?: string;
  packages?: PackageItem[];
  deliverables?: string[];
}

export interface AgencyData {
  agency: {
    name: string;
    services: ServiceCategory[];
  };
}

export const packagesData: AgencyData = {
  agency: {
    name: "devlooper studio",
    services: [
      {
        category: "Web Development",
        description:
          "Custom, responsive, high-performance websites for local businesses and modern enterprises.",
        packages: [
          {
            id: "web-starter",
            name: "Starter Business",
            price_inr: 8000,
            max_pages: 5,
            popular: false,
            features: [
              "Custom Responsive Design",
              "Live Development Preview",
              "WhatsApp & Phone Call Integration",
              "Lead Capture Forms",
              "SSL Certificate Installed",
              "Free Domain & 1 Year Web Hosting",
              "1 Year Dedicated Support",
              "Social Media Integration",
            ],
          },
          {
            id: "web-growth",
            name: "Growth Business",
            price_inr: 10000,
            max_pages: 10,
            popular: false,
            features: [
              "Everything in Starter Package",
              "Basic On-Page SEO Setup",
              "Light Mode / Dark Mode Support",
              "Free Business Email Setup",
              "Logo Designing",
            ],
          },
          {
            id: "web-pro",
            name: "Pro Business",
            price_inr: 12000,
            max_pages: 10,
            popular: true,
            features: [
              "Everything in Growth Package",
              "Standard Admin Panel",
              "Enhanced Speed & Performance Optimization",
              "Structured On-Page SEO",
              "High Conversion CTAs",
            ],
          },
          {
            id: "web-adv-pro",
            name: "Advanced Pro",
            price_inr: 15000,
            max_pages: 15,
            popular: false,
            features: [
              "Everything in Pro Package",
              "Advanced Custom Admin Panel",
              "High-Tier SEO & Speed Performance Tuning",
              "Advanced Lead Management Dashboard",
            ],
          },
        ],
      },
      {
        category: "E-Commerce & Mobile Apps",
        description:
          "Scalable storefronts and native/cross-platform mobile apps built for conversions.",
        packages: [
          {
            id: "ecom-starter",
            name: "E-Commerce Storefront",
            starting_price_inr: 25000,
            popular: true,
            features: [
              "User Authentication & Profile Management",
              "Product Catalog & Shopping Cart System",
              "Comprehensive Admin Section for Inventory & Orders",
              "Integrated Payment Gateways (Razorpay / Stripe)",
              "Order Notifications & Automated Invoicing",
              "Free Domain Name & 1 Year Hosting",
              "1 Year Maintenance & Support",
            ],
          },
          {
            id: "app-android",
            name: "Android Mobile App",
            starting_price_inr: 25000,
            popular: false,
            features: [
              "Native / Cross-Platform Design",
              "Custom High-Fidelity UI/UX",
              "Live Development Progress Updates",
              "On-Time Delivery Guarantee",
              "Google Play Store Readiness & Deployment",
              "RESTful API & Database Integration",
            ],
          },
          {
            id: "app-ios",
            name: "iOS Mobile App",
            starting_price_inr: 30000,
            popular: false,
            features: [
              "Custom Apple Human Interface Design",
              "Swift / Cross-Platform Architecture",
              "Live Preview & TestFlight Builds",
              "App Store Deployment & Review Readiness",
              "Rigorous Security Compliance",
              "On-Time Delivery Guarantee",
            ],
          },
        ],
      },
      {
        category: "Custom Software & Add-on Services",
        description:
          "Tailored enterprise solutions and growth services engineered for operational scale.",
        deliverables: [
          "Bespoke Business Logic & Workflow Automation",
          "Secure Admin Panels with SSO & Magic Links",
          "Role-Based Access Control (RBAC) & Data Auditing",
          "Custom Internal Dashboards, ERPs & CRMs",
          "Technical & Local Business SEO (Google Business Profile)",
          "Branding: Vector Logos, Color Palette & Typography",
        ],
      },
    ],
  },
};
