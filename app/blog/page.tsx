import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import BlogFilterBar from "./components/BlogFilterBar";
import {
  listArticles,
  listTechStacks,
  publicAssetUrl,
  ArticleSummary,
} from "@/lib/blogApi";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://devlooperstudio.com";

export const metadata: Metadata = {
  title: "Engineering Blog & Architecture Insights",
  description:
    "In-depth articles, production architecture blueprints, and modern engineering patterns for Next.js, TypeScript, cloud scalability, and high-performance applications.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Engineering Blog & Architecture Insights | devlooper studio",
    description:
      "In-depth articles, production blueprints, and modern engineering patterns from devlooper studio.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "devlooper studio engineering blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog | devlooper studio",
    description:
      "Production blueprints, modern software engineering, and fullstack guides.",
    images: ["/og-image.png"],
  },
};

interface BlogIndexProps {
  searchParams: Promise<{
    techStack?: string;
    language?: string;
    q?: string;
    query?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogIndexProps) {
  const resolvedParams = await searchParams;
  const activeTechStack = resolvedParams.techStack;
  const activeLanguage = resolvedParams.language;
  const activeQuery = resolvedParams.q || resolvedParams.query;

  let articles: ArticleSummary[] = [];
  let techStacks: { id: string; name: string; slug: string }[] = [];

  try {
    const [fetchedArticles, fetchedStacks] = await Promise.all([
      listArticles({
        techStack: activeTechStack,
        language: activeLanguage,
        q: activeQuery,
      }),
      listTechStacks(),
    ]);
    articles = fetchedArticles || [];
    techStacks = fetchedStacks || [];
  } catch (err) {
    console.error("[BlogPage] Error fetching articles or tech stacks:", err);
  }

  const formatDate = (isoString: string | null) => {
    if (!isoString) return null;
    try {
      return new Date(isoString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-60 right-10 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
              DevLooper Engineering Publication
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              Engineering Blueprints &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] via-[#c4b5fd] to-[#a5b4fc]">
                Architecture Guides
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed">
              Technical deep dives, production engineering insights, and
              practical architecture guides authored by our studio engineering
              team.
            </p>
          </div>

          {/* Interactive Search & Filter Bar */}
          <BlogFilterBar
            techStacks={techStacks}
            activeTechStack={activeTechStack}
            activeQuery={activeQuery}
          />

          {/* Active Filter Indicators */}
          {(activeTechStack || activeQuery) && (
            <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10 text-sm text-slate-400">
              <div className="flex items-center gap-2 flex-wrap">
                <span>Showing results for:</span>
                {activeTechStack && (
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                    Topic: {activeTechStack}
                  </span>
                )}
                {activeQuery && (
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
                    &ldquo;{activeQuery}&rdquo;
                  </span>
                )}
              </div>
              <Link
                href="/blog"
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
              >
                Clear Filters &times;
              </Link>
            </div>
          )}

          {/* Articles Grid or Empty State */}
          {articles.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-white/[0.02] border border-white/5 max-w-xl mx-auto p-8">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                No Articles Found
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {activeTechStack || activeQuery
                  ? "We couldn't find any articles matching your search filters. Try clearing your filters or exploring another topic."
                  : "New engineering case studies and technical articles are currently being prepared. Check back soon!"}
              </p>
              {(activeTechStack || activeQuery) && (
                <Link
                  href="/blog"
                  className="inline-flex px-6 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shadow-lg"
                >
                  View All Articles
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => {
                const dateStr = formatDate(article.publishedAt);
                return (
                  <article
                    key={article.id}
                    className="group relative rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div>
                      {/* Hero Image or Fallback Gradient Header */}
                      <Link
                        href={`/blog/${article.slug}`}
                        className="block relative aspect-[16/9] overflow-hidden bg-[#070b14]"
                      >
                        {article.heroImageUrl ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={publicAssetUrl(article.heroImageUrl)}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c1830] via-[#091124] to-[#040813] relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_50%)]" />
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.8}
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                            </div>
                            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                              {article.language || "Technical Article"}
                            </span>
                          </div>
                        )}
                      </Link>

                      {/* Content Area */}
                      <div className="p-6">
                        {/* Tech Stacks Chips */}
                        {article.techStacks &&
                          article.techStacks.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3.5">
                              {article.techStacks.map((stack) => (
                                <span
                                  key={stack.id}
                                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                                >
                                  {stack.name}
                                </span>
                              ))}
                            </div>
                          )}

                        {/* Title */}
                        <h2 className="text-xl font-bold text-white mb-2.5 leading-snug group-hover:text-cyan-200 transition-colors line-clamp-2">
                          <Link href={`/blog/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        {article.excerpt && (
                          <p className="text-sm text-slate-300/80 leading-relaxed line-clamp-3 mb-4">
                            {article.excerpt}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Byline & Action Footer */}
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <div>
                        {article.authorName && (
                          <span className="font-medium text-slate-200 block">
                            {article.authorName}
                          </span>
                        )}
                        {dateStr && <span>{dateStr}</span>}
                      </div>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                      >
                        <span>Read</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
