"use client";

import { useState } from "react";
import { ArticleBlock, publicAssetUrl } from "@/lib/blogApi";

interface ArticleBodyProps {
  blocks: ArticleBlock[];
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };

  return (
    <div className="relative my-8 rounded-2xl overflow-hidden border border-white/15 bg-[#070b14] shadow-2xl">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
          <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
            {language || "code"}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
        >
          {copied ? (
            <>
              <svg
                className="w-3.5 h-3.5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <svg
                className="w-3.5 h-3.5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Text Content */}
      <pre className="p-5 overflow-x-auto text-sm font-mono text-slate-200 leading-relaxed scrollbar-thin">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function ArticleBody({ blocks }: ArticleBodyProps) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="py-12 text-center text-slate-500 text-sm">
        No content blocks available for this article.
      </div>
    );
  }

  return (
    <div className="article-body space-y-6 text-slate-200 leading-relaxed text-base sm:text-lg">
      {blocks.map((block) => {
        switch (block.type) {
          case "heading": {
            // Must use block.text (NOT tocLabel) and block.id
            const scrollClass =
              "scroll-mt-28 font-bold tracking-tight text-white";
            if (block.level === 1) {
              return (
                <h1
                  key={block.id}
                  id={block.id}
                  className={`${scrollClass} text-3xl sm:text-4xl mt-12 mb-4`}
                >
                  {block.text}
                </h1>
              );
            }
            if (block.level === 2) {
              return (
                <h2
                  key={block.id}
                  id={block.id}
                  className={`${scrollClass} text-2xl sm:text-3xl mt-10 mb-4 pb-2 border-b border-white/5`}
                >
                  {block.text}
                </h2>
              );
            }
            if (block.level === 3) {
              return (
                <h3
                  key={block.id}
                  id={block.id}
                  className={`${scrollClass} text-xl sm:text-2xl mt-8 mb-3`}
                >
                  {block.text}
                </h3>
              );
            }
            return (
              <h4
                key={block.id}
                id={block.id}
                className={`${scrollClass} text-lg sm:text-xl mt-6 mb-2 text-cyan-200`}
              >
                {block.text}
              </h4>
            );
          }

          case "paragraph": {
            return (
              <p
                key={block.id}
                className="leading-relaxed text-slate-300 [&_u]:underline [&_u]:underline-offset-2 [&_strong]:text-white [&_strong]:font-bold [&_b]:text-white [&_b]:font-bold"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );
          }

          case "code": {
            return (
              <CodeBlock
                key={block.id}
                code={block.code}
                language={block.language}
              />
            );
          }

          case "image": {
            return (
              <figure key={block.id} className="my-8">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#070b14] shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={publicAssetUrl(block.url)}
                    alt={block.alt || "Article illustration"}
                    className="w-full h-auto object-cover max-h-[600px]"
                    loading="lazy"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-xs text-slate-400 mt-2.5 italic">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
