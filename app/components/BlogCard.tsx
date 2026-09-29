"use client";

import Link from "next/link";
import { ArticleSummary, publicAssetUrl } from "@/lib/blogApi";

interface BlogCardProps {
  article: ArticleSummary;
}

export default function BlogCard({ article }: BlogCardProps) {
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

  const dateStr = formatDate(article.publishedAt);

  return (
    <article className="group relative rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
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
          {article.techStacks && article.techStacks.length > 0 && (
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
          <h3 className="text-xl font-bold text-white mb-2.5 leading-snug group-hover:text-cyan-200 transition-colors line-clamp-2">
            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-sm text-slate-300/80 leading-relaxed line-clamp-3 mb-4 font-normal">
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
          {dateStr && <span suppressHydrationWarning>{dateStr}</span>}
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
}
