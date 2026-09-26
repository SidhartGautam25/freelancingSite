import Link from "next/link";
import { ExpertiseItem } from "@/data/expertiseData";

interface ExpertiseCardProps {
  item: ExpertiseItem;
}

function renderIcon(icon: string) {
  switch (icon) {
    case "code":
      return (
        <svg
          className="w-6 h-6 text-white"
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
      );
    case "mobile":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    case "desktop":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "cube":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      );
    case "chart":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      );
    case "brush":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M7 21a4 4 0 01-4-4 4 4 0 014-4h2.5a2.5 2.5 0 002.5-2.5V8a4 4 0 014-4 4 4 0 014 4v1a4 4 0 01-4 4h-2.5A2.5 2.5 0 0011 15.5V17a4 4 0 01-4 4z"
          />
        </svg>
      );
    case "cloud":
    default:
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      );
  }
}

export default function ExpertiseCard({ item }: ExpertiseCardProps) {
  return (
    <div className="group relative glass-panel rounded-3xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Background glow on hover */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 pointer-events-none`}
      />

      <div>
        {/* Top Header: Icon + Badge */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-lg shadow-blue-500/10 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}
          >
            <div className="w-full h-full bg-[#0f172a] rounded-[14px] flex items-center justify-center">
              {renderIcon(item.icon)}
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
            {item.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
          {item.title}
        </h3>
        <p className="text-slate-300/90 text-sm leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-2.5 mb-6 border-t border-white/5 pt-5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Core Capabilities
          </p>
          {item.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300"
            >
              <span className="text-blue-400 font-bold shrink-0 mt-0.5">✦</span>
              <span className="leading-snug">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills & CTA */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
          {item.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-cyan-300 transition-colors"
        >
          <span>Discuss your {item.title.split(" ")[0]} project</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
    </div>
  );
}
