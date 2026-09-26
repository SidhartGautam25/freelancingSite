import Link from "next/link";
import { theme } from "@/theme/themeConfig";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden"
      style={theme.sections.hero.style}
    >
      {/* Ambient Cosmic Orbs */}
      <div className="orb orb-cyan w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-[-10%] left-[-10%]" />
      <div
        className="orb orb-blue w-[400px] h-[400px] md:w-[700px] md:h-[700px] bottom-[-20%] right-[-10%]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="orb orb-purple w-[250px] h-[250px] md:w-[450px] md:h-[450px] top-[20%] right-[15%]"
        style={{ animationDelay: "-8s", opacity: 0.2 }}
      />

      {/* Subtle Top Center Radial Haze */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={theme.patterns.hazyCyanBlue}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Centralized Theme Badge */}
        <div
          className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border shadow-sm ${theme.sections.hero.badgeClass}`}
        >
          {theme.sections.hero.badgeText}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white">
          We Build <span className="text-gradient">Next-Gen</span> Digital
          Experiences
        </h1>

        <p className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Partner with our elite engineering studio to design, build, and deploy
          high-performance web applications, mobile platforms, and bespoke
          enterprise software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-black bg-white hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2"
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
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm text-white glass-panel hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Explore Packages & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
