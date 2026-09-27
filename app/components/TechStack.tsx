"use client";

import { technologiesData, TechnologyItem } from "@/data/technologiesData";
import { theme } from "@/theme/themeConfig";

function TechBadge({ tech }: { tech: TechnologyItem }) {
  return (
    <div className="group relative flex items-center gap-3.5 px-5 py-3 rounded-2xl glass-panel border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-105 select-none shrink-0 shadow-sm hover:shadow-lg">
      {/* Subtle brand glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: tech.brandColor }}
      />

      {/* Brand Icon Container */}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center p-2 border border-white/10 shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
        style={{ backgroundColor: `${tech.brandColor}18` }}
      >
        <svg
          className="w-full h-full"
          viewBox={tech.viewBox || "0 0 24 24"}
          fill={tech.brandColor}
        >
          <path d={tech.svgPath} />
        </svg>
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-white whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200">
            {tech.name}
          </span>
          <span className="text-[10px] font-semibold text-gray-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/5 whitespace-nowrap">
            {tech.category}
          </span>
        </div>
        <span className="text-[11px] text-gray-400 max-w-[200px] truncate">
          {tech.tagline}
        </span>
      </div>
    </div>
  );
}

export default function TechStack() {
  const row1 = technologiesData.slice(0, 8);
  const row2 = technologiesData.slice(8);

  return (
    <section
      id="tech-stack"
      className="relative py-16 px-4 z-10 border-t border-b border-white/5 overflow-hidden"
      style={theme.sections.techStack.style}
    >
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border ${theme.sections.techStack.badgeClass}`}
        >
          Technologies We Master
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-100">
          Our <span className="text-gradient">Technology Stack</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm mt-2">
          Battle-tested frameworks, runtimes, cloud platforms, and security libraries engineered for production.
        </p>
      </div>

      {/* Edge Gradient Overlays for seamless infinite fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-36 bg-gradient-to-r from-[#0b0f19] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-36 bg-gradient-to-l from-[#0b0f19] to-transparent z-20 pointer-events-none" />

      {/* Dual Row Auto-Moving Marquee Container */}
      <div className="marquee-container space-y-4 relative w-full overflow-hidden py-1">
        {/* Row 1 - Moving Left */}
        <div className="flex w-full overflow-x-hidden">
          <div className="flex animate-marquee gap-4 shrink-0 pr-4">
            {row1.map((tech) => (
              <TechBadge key={`r1-a-${tech.id}`} tech={tech} />
            ))}
          </div>
          <div className="flex animate-marquee gap-4 shrink-0 pr-4" aria-hidden="true">
            {row1.map((tech) => (
              <TechBadge key={`r1-b-${tech.id}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-full overflow-x-hidden">
          <div className="flex animate-marquee-reverse gap-4 shrink-0 pr-4">
            {row2.map((tech) => (
              <TechBadge key={`r2-a-${tech.id}`} tech={tech} />
            ))}
          </div>
          <div className="flex animate-marquee-reverse gap-4 shrink-0 pr-4" aria-hidden="true">
            {row2.map((tech) => (
              <TechBadge key={`r2-b-${tech.id}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
