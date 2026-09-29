"use client";

import { useEffect, useState } from "react";
import { ArticleTocItem } from "@/lib/blogApi";

interface TableOfContentsProps {
  toc: ArticleTocItem[];
}

export default function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!toc || toc.length === 0) return;

    const headingElements = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry or the one closest to top
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-100px 0% -60% 0%",
        threshold: 0,
      },
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [toc]);

  if (!toc || toc.length === 0) return null;

  const scrollToHeading = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="p-5 rounded-2xl bg-white/[0.025] border border-white/10 backdrop-blur-md"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <svg
          className="w-4 h-4 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h10M4 18h14"
          />
        </svg>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
          Table of Contents
        </span>
      </div>

      <ul className="space-y-1 text-xs">
        {toc.map((item) => {
          const isActive = activeId === item.id;
          const indentClass =
            item.level === 1
              ? "pl-0 font-semibold"
              : item.level === 2
                ? "pl-2"
                : item.level === 3
                  ? "pl-5 text-slate-400"
                  : "pl-8 text-slate-500";

          return (
            <li key={item.id} className={indentClass}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToHeading(e, item.id)}
                className={`block py-1.5 transition-all leading-snug rounded-md px-2 ${
                  isActive
                    ? "text-cyan-300 bg-cyan-500/10 font-bold border-l-2 border-cyan-400 pl-2.5"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
