export interface ExpertiseItem {
  id: string;
  title: string;
  badge: string;
  category: "development" | "software" | "marketing" | "design";
  description: string;
  highlights: string[];
  technologies: string[];
  gradient: string;
  icon: string;
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    badge: "High Performance",
    category: "development",
    description:
      "Blazing-fast, SEO-optimized web applications with modern architectures built to scale gracefully from day one.",
    highlights: [
      "Next.js App Router & React 19 architecture",
      "Robust REST & GraphQL APIs with Node.js / Go",
      "SSR, SSG & Edge server rendering",
      "Sub-second page load times and Core Web Vitals perfection",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    gradient: "from-purple-500 to-indigo-500",
    icon: "code",
  },
  {
    id: "app-dev",
    title: "Mobile App Development",
    badge: "iOS & Android",
    category: "development",
    description:
      "Fluid, native and cross-platform mobile apps delivering smooth 60fps animations, offline capabilities, and delightful user experiences.",
    highlights: [
      "Cross-platform mastery with React Native & Flutter",
      "Native device API access (Biometrics, Camera, Geolocation)",
      "Offline-first architecture and background sync",
      "End-to-end App Store & Google Play publishing support",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    gradient: "from-blue-500 to-cyan-500",
    icon: "mobile",
  },
  {
    id: "desktop-app",
    title: "Desktop Applications",
    badge: "Cross-Platform",
    category: "software",
    description:
      "Powerful, lightweight desktop software running natively on macOS, Windows, and Linux with native OS integration.",
    highlights: [
      "Modern desktop engines using Tauri & Electron",
      "High performance with minimal memory footprints",
      "Native OS tray, menus, file system, and hardware access",
      "Automated over-the-air (OTA) updates and code signing",
    ],
    technologies: ["Tauri", "Electron", "Rust", "TypeScript", "C++"],
    gradient: "from-emerald-500 to-teal-500",
    icon: "desktop",
  },
  {
    id: "custom-software",
    title: "Custom Software & Enterprise Solutions",
    badge: "Bespoke Logic",
    category: "software",
    description:
      "Mission-critical internal tools, ERPs, CRMs, and automation pipelines designed strictly around your unique organizational workflows.",
    highlights: [
      "Role-Based Access Control (RBAC) & Enterprise SSO",
      "Complex multi-tenant databases and microservices",
      "Automated business logic, webhooks, and third-party sync",
      "Data audit logging and bank-grade security protocols",
    ],
    technologies: ["PostgreSQL", "Docker", "Redis", "Prisma", "Python"],
    gradient: "from-amber-500 to-orange-500",
    icon: "cube",
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    badge: "Organic Growth",
    category: "marketing",
    description:
      "Data-driven technical, on-page, and local SEO strategies that elevate your search rankings and drive high-intent commercial traffic.",
    highlights: [
      "Deep technical audits: crawling, indexing, structured data",
      "Google Business Profile (GMB) & local map pack dominance",
      "Targeted keyword clustering & programmatic SEO setups",
      "Competitor gap analysis and continuous rank monitoring",
    ],
    technologies: [
      "Schema.org",
      "Google Search Console",
      "Ahrefs",
      "Semrush",
      "Lighthouse",
    ],
    gradient: "from-pink-500 to-rose-500",
    icon: "search",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    badge: "ROI Focused",
    category: "marketing",
    description:
      "Strategic multi-channel marketing campaigns engineered to turn visitors into qualified leads and recurring paying clients.",
    highlights: [
      "Conversion Rate Optimization (CRO) & A/B testing",
      "Precision PPC campaigns across Google Ads & Meta",
      "Automated email marketing funnels and lead nurturing",
      "Advanced analytics dashboards tracking customer acquisition cost",
    ],
    technologies: [
      "Meta Ads",
      "Google Ads",
      "HubSpot",
      "Google Analytics 4",
      "PostHog",
    ],
    gradient: "from-violet-500 to-fuchsia-500",
    icon: "chart",
  },
  {
    id: "ui-ux",
    title: "UI/UX & Product Design",
    badge: "High Conversion",
    category: "design",
    description:
      "Award-worthy, human-centered digital experiences that captivate attention and streamline complex user journeys into intuitive interactions.",
    highlights: [
      "Wireframing, interactive prototyping & user testing",
      "Comprehensive design systems and component libraries",
      "Accessibility compliance (WCAG 2.1 AA standards)",
      "Micro-interactions and motion design that elevate perceived quality",
    ],
    technologies: [
      "Figma",
      "Design Tokens",
      "Framer",
      "Storybook",
      "Tailwind CSS",
    ],
    gradient: "from-sky-500 to-indigo-500",
    icon: "brush",
  },
  {
    id: "cloud-devops",
    title: "Cloud Architecture & DevOps",
    badge: "99.99% Uptime",
    category: "software",
    description:
      "Automated CI/CD pipelines, container orchestration, and multi-region infrastructure that eliminates downtime and scaling bottlenecks.",
    highlights: [
      "Automated GitHub Actions CI/CD deployment pipelines",
      "Containerized microservices with Docker & Kubernetes",
      "Serverless functions and edge computing networks",
      "Zero-downtime rolling releases and real-time observability",
    ],
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Cloudflare",
      "GitHub Actions",
    ],
    gradient: "from-blue-600 to-violet-600",
    icon: "cloud",
  },
];
