"use client";

import Link from "next/link";
import Image from "next/image";
import { useInquiryModal } from "@/app/context/InquiryModalContext";

export default function Navbar() {
  const { openInquiryModal } = useInquiryModal();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link
          href="/"
          className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-3 group justify-self-start"
        >
          <div className="relative w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[#010818] border border-blue-500/25 shadow-[0_0_15px_rgba(6,182,212,0.35)] shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-icon.png"
              alt="devlooper studio logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-semibold tracking-tight">
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

        <button
          type="button"
          onClick={() => openInquiryModal({ sourceComponent: "navbar-cta" })}
          className="hidden md:inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:opacity-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.45)] hover:scale-105 justify-self-end cursor-pointer"
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
        </button>
      </div>
    </nav>
  );
}
