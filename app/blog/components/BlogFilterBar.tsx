"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { TechStack } from "@/lib/blogApi";

interface BlogFilterBarProps {
  techStacks: TechStack[];
  activeTechStack?: string;
  activeQuery?: string;
}

export default function BlogFilterBar({
  techStacks,
  activeTechStack,
  activeQuery,
}: BlogFilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(activeQuery || "");
  const [isPending, startTransition] = useTransition();

  const updateFilters = (newParams: { techStack?: string; q?: string }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newParams.techStack !== undefined) {
      if (newParams.techStack) {
        params.set("techStack", newParams.techStack);
      } else {
        params.delete("techStack");
      }
    }

    if (newParams.q !== undefined) {
      if (newParams.q.trim()) {
        params.set("q", newParams.q.trim());
      } else {
        params.delete("q");
      }
    }

    startTransition(() => {
      router.push(`/blog?${params.toString()}`);
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ q: searchTerm });
  };

  return (
    <div className="mb-12 space-y-6">
      {/* Search Input Bar */}
      <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles by title, keywords, or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/10 rounded-full pl-12 pr-28 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all backdrop-blur-md"
          />
          <svg
            className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md cursor-pointer disabled:opacity-50"
            disabled={isPending}
          >
            {isPending ? "Filtering..." : "Search"}
          </button>
        </div>
      </form>

      {/* Tech Stack Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <button
          type="button"
          onClick={() => updateFilters({ techStack: "" })}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            !activeTechStack
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
              : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
          }`}
        >
          All Topics
        </button>

        {techStacks.map((stack) => {
          const isActive =
            activeTechStack === stack.slug || activeTechStack === stack.name;
          return (
            <button
              key={stack.id}
              type="button"
              onClick={() =>
                updateFilters({ techStack: isActive ? "" : stack.slug })
              }
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                  : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {stack.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
