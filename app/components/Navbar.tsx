import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link
          href="/"
          className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2.5 group justify-self-start"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          <span className="font-semibold">
            <span className="text-white">devlooper</span>
            <span className="text-slate-200">studio</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-slate-300">
          <Link
            href="/#services"
            className="hover:text-white transition-colors"
          >
            Expertise
          </Link>
          <Link
            href="/#tech-stack"
            className="hover:text-white transition-colors"
          >
            Technologies
          </Link>
          <Link href="/packages" className="hover:text-white transition-colors">
            Packages & Pricing
          </Link>
          <Link href="/#work" className="hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:opacity-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.45)] hover:scale-105 justify-self-end"
          style={{
            background: "linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)",
          }}
        >
          <span>Start Project</span>
          <svg
            className="w-3.5 h-3.5"
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
    </nav>
  );
}
