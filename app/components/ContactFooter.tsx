"use client";

import Link from "next/link";
import Image from "next/image";
import { theme } from "@/theme/themeConfig";
import { useInquiryModal } from "@/app/context/InquiryModalContext";

export default function ContactFooter() {
  const { openInquiryModal } = useInquiryModal();
  return (
    <footer
      id="contact"
      className="relative pb-12 px-6 border-t border-slate-800/60 bg-[#0b0f19] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: theme.colors.primary }}
      />

      <div className="max-w-7xl mx-auto pt-20 pb-12">
        {/* Banner Card Inspired by User's Reference Screenshot (Image 4) */}
        <div
          className="rounded-3xl p-8 sm:p-12 md:p-16 mb-20 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8"
          style={theme.sections.contactBanner.style}
        >
          {/* Subtle light streak / haze */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-400/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 mb-4 tracking-tight leading-tight">
              Ready to build something{" "}
              <span className="text-gradient">impactful?</span>
            </h2>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed">
              From concept to scalable production deployment — we are ready to
              partner with you. Let&apos;s discuss your vision and delivery
              timeline.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              type="button"
              onClick={() =>
                openInquiryModal({ sourceComponent: "footer-banner" })
              }
              className="inline-flex items-center gap-2.5 bg-white text-[#0a1128] px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              <span>Get in touch</span>
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
            </button>
          </div>
        </div>

        {/* Footer Navigation & Credits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-sm text-gray-400 border-b border-white/5 pb-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white flex items-center gap-3 mb-3 group"
            >
              <div className="relative w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[#010818] border border-blue-500/25 shadow-[0_0_12px_rgba(6,182,212,0.3)] shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-icon.png"
                  alt="devlooper studio logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold tracking-tight">
                <span className="text-white">devlooper</span>
                <span className="text-slate-200">studio</span>
              </span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-4">
              High-end bespoke web engineering, cross-platform apps, and custom
              enterprise software for modern businesses.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Q3/Q4 Project Bookings
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-white font-semibold mb-3">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Core Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/#tech-stack"
                  className="hover:text-white transition-colors"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="hover:text-white transition-colors"
                >
                  Packages & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  className="hover:text-white transition-colors"
                >
                  Featured Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-white font-semibold mb-3">
              Direct Contact
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="mailto:contact@devlooperstudio.com"
                  className="hover:text-white transition-colors"
                >
                  contact@devlooperstudio.com
                </a>
              </li>
              <li>
                <span className="text-gray-500">
                  Bangalore & Remote Globally
                </span>
              </li>
              <li className="pt-2 flex gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div suppressHydrationWarning>
            &copy; {new Date().getFullYear()} devlooperstudio. All rights
            reserved.
          </div>
          <div className="text-gray-500">
            Engineered with Next.js, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
