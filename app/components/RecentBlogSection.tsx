"use client";

import Link from "next/link";
import { useRecentArticles } from "@/app/hooks/useRecentArticles";
import BlogCard from "./BlogCard";
import { theme } from "@/theme/themeConfig";

export default function RecentBlogSection() {
  const { articles, loading, error } = useRecentArticles(3);

  return (
    <section
      id="blog-preview"
      className="relative py-24 px-6 z-10 overflow-hidden border-b border-slate-800/60 bg-[#090e1a]"
    >
      {/* Technical Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={theme.patterns.gridBoxes}
      />

      {/* Atmospheric Radial Illumination */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={theme.patterns.hazySapphireViolet}
      />

      {/* Ambient background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border bg-cyan-500/10 border-cyan-500/20 text-cyan-300">
            Technical Publications
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-100">
            Latest From Our{" "}
            <span className="text-gradient">Engineering Blog</span>
          </h2>
          <p className="text-slate-300/90 max-w-2xl mx-auto text-base leading-relaxed">
            In-depth architectural blueprints, production optimization
            strategies, and real-world full-stack development insights.
          </p>
        </div>

        {/* Content State: Loading Skeleton, Error, or 3 Article Cards */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-3xl glass-panel border border-white/10 p-6 flex flex-col justify-between h-[420px] animate-pulse"
              >
                <div>
                  <div className="w-full aspect-[16/9] rounded-2xl bg-white/5 mb-6" />
                  <div className="w-24 h-5 rounded-full bg-white/10 mb-3" />
                  <div className="w-3/4 h-6 rounded-md bg-white/10 mb-3" />
                  <div className="w-full h-4 rounded-md bg-white/5 mb-2" />
                  <div className="w-2/3 h-4 rounded-md bg-white/5" />
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="w-20 h-4 rounded bg-white/10" />
                  <div className="w-12 h-4 rounded bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        ) : error && articles.length === 0 ? (
          <div className="text-center py-12 px-6 rounded-3xl glass-panel border border-white/5 max-w-lg mx-auto">
            <p className="text-slate-400 text-sm mb-4">
              Our latest articles are currently updating. Browse the complete
              publication archive.
            </p>
            <Link
              href="/blog"
              className="inline-flex px-6 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors"
            >
              Browse Blog Archive
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {/* Action Button: Explore All Articles */}
        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-slate-950 bg-white hover:bg-slate-100 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_24px_rgba(255,255,255,0.18)] group cursor-pointer"
          >
            <span>View All Articles</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
