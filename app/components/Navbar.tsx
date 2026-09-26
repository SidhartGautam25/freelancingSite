import Link from "next/link";
import { theme } from "@/theme/themeConfig";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <span>
            <span className="text-gradient">devlooper</span>studio
          </span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
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
          className="hidden md:inline-flex text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-blue-500/20"
          style={{ background: theme.gradients.primaryButton }}
        >
          Start Project
        </Link>
      </div>
    </nav>
  );
}
