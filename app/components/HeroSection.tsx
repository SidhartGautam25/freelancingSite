import Link from "next/link";
import { theme } from "@/theme/themeConfig";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] h-[100dvh] w-full flex flex-col justify-between items-center pt-24 pb-6 px-6 overflow-hidden"
      style={theme.sections.hero.style}
    >
      {/* Ambient Cosmic Orbs with soft diffusions */}
      <div className="orb orb-cyan w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-[-10%] left-[-10%]" />
      <div
        className="orb orb-blue w-[400px] h-[400px] md:w-[700px] md:h-[700px] bottom-[-20%] right-[-10%]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="orb orb-purple w-[250px] h-[250px] md:w-[450px] md:h-[450px] top-[20%] right-[15%]"
        style={{ animationDelay: "-8s", opacity: 0.12 }}
      />

      {/* Subtle Top Center Radial Haze */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={theme.patterns.hazyCyanBlue}
      />

      {/* Centered Main Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto flex flex-col items-center justify-center">
        {/* Centralized Theme Badge */}
        <div
          className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border shadow-sm ${theme.sections.hero.badgeClass}`}
        >
          {theme.sections.hero.badgeText}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-tight text-slate-100">
          We Build <span className="text-gradient">Next-Gen</span> Digital
          Experiences
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Partner with our elite engineering studio to design, build, and deploy
          high-performance web applications, mobile platforms, and bespoke
          enterprise software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Link
            href="/#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
          >
            <span>Explore Our Work</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
          <Link
            href="/packages"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm text-slate-200 glass-panel hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Explore Packages & Pricing
          </Link>
        </div>
      </div>

      {/* Sleek Bottom Scroll Indicator (anchors hero cleanly to bottom) */}
      <div className="relative z-10 pt-4 pb-2">
        <Link
          href="/#services"
          className="inline-flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors duration-300 group"
          aria-label="Scroll to explore services"
        >
          <span className="text-[11px] tracking-widest uppercase font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors">
            Scroll to explore
          </span>
          <svg
            className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-cyan-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
