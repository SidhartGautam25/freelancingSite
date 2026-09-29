"use client";

import { useState, useMemo } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-java";
import "prismjs/components/prism-css";

import { ArticleBlock, publicAssetUrl } from "@/lib/blogApi";

interface ArticleBodyProps {
  blocks: ArticleBlock[];
}

const LANG_MAP: Record<string, string> = {
  ts: "typescript",
  typescript: "typescript",
  js: "javascript",
  javascript: "javascript",
  jsx: "jsx",
  tsx: "tsx",
  py: "python",
  python: "python",
  golang: "go",
  go: "go",
  rust: "rust",
  rs: "rust",
  java: "java",
  sql: "sql",
  bash: "bash",
  sh: "bash",
  shell: "bash",
  zsh: "bash",
  json: "json",
  css: "css",
  html: "markup",
  markup: "markup",
  xml: "markup",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const displayLanguage = (language || "CODE").toUpperCase();

  const highlightedHtml = useMemo(() => {
    const rawLang = (language || "").toLowerCase().trim();
    const prismLang = LANG_MAP[rawLang] || rawLang;
    const grammar =
      Prism.languages[prismLang] ||
      Prism.languages.typescript ||
      Prism.languages.javascript;

    if (!grammar) {
      return escapeHtml(code);
    }

    try {
      return Prism.highlight(code, grammar, prismLang);
    } catch {
      return escapeHtml(code);
    }
  }, [code, language]);

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
    <div className="relative my-8 rounded-2xl overflow-hidden border border-slate-700/60 bg-[#0F172A] shadow-2xl">
      {/* IDE Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161F30] border-b border-slate-700/60 select-none">
        {/* macOS colored window dots + language badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full bg-[#EF4444] inline-block shadow-sm"
              title="Close"
            />
            <span
              className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block shadow-sm"
              title="Minimize"
            />
            <span
              className="w-3 h-3 rounded-full bg-[#10B981] inline-block shadow-sm"
              title="Fullscreen"
            />
          </div>
          <span className="font-mono text-[11px] font-bold tracking-wider text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/10">
            {displayLanguage}
          </span>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
          aria-label="Copy code to clipboard"
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
              <span className="text-emerald-400 font-semibold">Copied!</span>
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

      {/* Code Text Content with Prism Syntax Highlighting */}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed scrollbar-thin bg-[#0F172A]">
        <code
          className={`code-ide font-mono text-sm leading-relaxed block text-slate-200 language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
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
            const size = block.size || "default";
            const imgSizeClasses =
              size === "small"
                ? "w-auto max-w-sm max-h-56 object-contain"
                : size === "medium"
                  ? "w-auto max-w-xl max-h-96 object-contain"
                  : size === "original"
                    ? "w-auto max-w-full max-h-[700px] object-contain"
                    : "w-full max-w-full object-cover";

            return (
              <figure
                key={block.id}
                className="my-6 flex flex-col items-center justify-center space-y-2 text-center"
              >
                <img
                  src={publicAssetUrl(block.url)}
                  alt={block.alt || "Article illustration"}
                  className={`mx-auto rounded-xl shadow-md ${imgSizeClasses}`}
                  loading="lazy"
                />
                {block.caption ? (
                  <figcaption className="text-center text-xs text-slate-400">
                    {block.caption}
                  </figcaption>
                ) : null}
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
