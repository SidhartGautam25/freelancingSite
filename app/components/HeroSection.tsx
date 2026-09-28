"use client";

import Link from "next/link";
import Image from "next/image";
import { useInquiryModal } from "@/app/context/InquiryModalContext";

const highlightCards = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Modern, scalable web applications",
    iconBg: "bg-[#24133d] border border-purple-500/30 text-purple-300",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    subtitle: "iOS & Android apps that perform",
    iconBg: "bg-[#0d2243] border border-blue-500/30 text-blue-300",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "custom-software",
    title: "Custom Software",
    subtitle: "Tailored solutions for your business",
    iconBg: "bg-[#0a2e27] border border-emerald-500/30 text-emerald-300",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Deploy, scale and maintain with confidence",
    iconBg: "bg-[#331f0f] border border-amber-500/30 text-amber-300",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
];

const brandLogos = [
  {
    name: "Next.js",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.72 14.28l-4.9-6.37v6.37H10.5V7.72h1.32l4.9 6.37V7.72h1.32v8.56h-1.32z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0-7C6.48 2.5 2 6.75 2 12s4.48 9.5 10 9.5 10-4.25 10-9.5S17.52 2.5 12 2.5zm0 17c-4.41 0-8-3.36-8-7.5S7.59 4.5 12 4.5s8 3.36 8 7.5-3.59 7.5-8 7.5z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L2 7.7v8.6L12 22l10-5.7V7.7L12 2zm0 2.4l7.8 4.5v6.8L12 20.2l-7.8-4.5V8.9L12 4.4zM11 8v8h2V8h-2z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M11.9 2c-3.1 0-5.1.7-5.1 2.4v2.4h5.2V8H4.6C2.6 8 2 9.4 2 11.9s.7 4 2.7 4h1.7v-2.3c0-1.8 1.5-3.3 3.3-3.3h5.2c1.4 0 2.6-1.1 2.6-2.6V4.4c0-1.7-2.5-2.4-5.6-2.4zm-2.4 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm2.6 18.5c3.1 0 5.1-.7 5.1-2.4v-2.4H12V16h7.4c2 0 2.6-1.4 2.6-3.9s-.7-4-2.7-4h-1.7v2.3c0 1.8-1.5 3.3-3.3 3.3H9.1c-1.4 0-2.6 1.1-2.6 2.6v3.3c0 1.7 2.5 2.4 5.6 2.4zm2.4-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.8 15.3c-2.4 1.8-5.8 2.7-8.8 2.7-4.2 0-7.9-1.5-10.7-4-.2-.2 0-.5.2-.3 3.1 1.8 7 2.8 10.9 2.8 2.7 0 5.6-.6 8.2-2 .4-.2.6.2.2.8zm1.7-1.1c-.3-.4-2-.2-3-.1-.3 0-.4-.3-.1-.4 1.6-.9 4.3-.6 4.7-.2.4.4.2 3.1-1.3 4.2-.2.2-.4.1-.3-.1.4-.9.3-3 0-3.4zm-5.7-4.9c-.8.5-1.5.8-2.4.8-1.6 0-2.3-.9-2.3-2.3 0-1.8 1.4-2.8 3.5-2.8.5 0 .9 0 1.2.1v4.2zm2.1 3.5h-1.9v-.9c-.7.7-1.8 1.1-3 1.1-2.3 0-3.8-1.5-3.8-3.8 0-2.5 1.7-4 4.7-4 .7 0 1.4.1 2.1.2v-.4c0-1.1-.7-1.7-2.1-1.7-.9 0-1.9.3-2.7.7-.2.1-.3 0-.4-.1l-.4-.6c-.1-.2 0-.3.2-.4 1.1-.6 2.4-.9 3.6-.9 2.4 0 3.8 1.2 3.8 3.4v4.4c0 .7.1 1.3.3 1.8 0 .2-.1.3-.2.3h-1.8c-.1-.1-.2-.4-.2-.6z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zm15 7.5c-.3-.2-1.3-.4-2.3-.1-.3-.6-.8-1.2-1.5-1.5-.1 0-.3-.1-.4-.1-.5-.2-1-.3-1.6-.3-.3 0-.6 0-.9.1-.1-1.3-.8-2.4-1.9-3.1-.2-.1-.4-.3-.6-.4L16 7h-2V4h-3v1H8v2H5v3H2v3c0 2.2 1.3 4.2 3.3 5.1C7.8 19.3 10.7 20 13.9 20c4.9 0 9.1-2.3 9.6-6.8.1-.2.1-.5.1-.7H22zm-7.6 5.5c-2.8 0-5.3-.6-7.3-1.5-1.5-.7-2.4-2.1-2.5-3.8h15.8c-.3 3.1-2.8 5.3-6 5.3z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const { openInquiryModal } = useInquiryModal();

  return (
    <section className="relative w-full flex flex-col overflow-hidden bg-[#030813]">
      {/* Full-bleed hero — edge to edge, fills viewport below nav */}
      <div className="relative w-full min-h-[calc(100svh-5.5rem)] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 70% at 72% 42%, rgba(6, 182, 212, 0.22) 0%, rgba(37, 99, 235, 0.14) 42%, transparent 72%)",
            }}
            aria-hidden
          />
          <Image
            src="/hero-keyboard-wide.png"
            alt="devlooper studio high-performance software engineering workstation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%] sm:object-center pointer-events-none select-none"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#030813]/92 via-[#030813]/45 to-transparent lg:via-[#030813]/12 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030813] to-transparent pointer-events-none"
            aria-hidden
          />
        </div>

        <div className="relative z-10 w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="w-full max-w-2xl lg:max-w-[36rem] xl:max-w-[38rem] 2xl:max-w-[42rem]">
            {/* <div className="inline-flex w-fit items-center gap-2 mb-6 sm:mb-7 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium tracking-wide bg-[#0a1228]/75 border border-blue-500/20 text-slate-200 backdrop-blur-sm">
              <span className="text-amber-400">✨</span>
              <span>Turning Ideas into Scalable Digital Products</span>
            </div> */}

            <h1 className="text-[2.125rem] sm:text-5xl md:text-[3rem] lg:text-[3.4rem] xl:text-[3.85rem] 2xl:text-[4.25rem] font-extrabold tracking-tight leading-[1.1] text-white mb-6 sm:mb-7">
              <span className="whitespace-nowrap">
                Build <span className="text-slate-400 font-light mx-1">•</span>{" "}
                Develop{" "}
                <span className="text-slate-400 font-light mx-1">•</span> Scale
              </span>
              <span className="block mt-1.5 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] via-[#c4b5fd] to-[#a5b4fc]">
                Your Ideas with Us
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 mb-8 sm:mb-9 leading-relaxed max-w-[36rem] xl:max-w-[38rem]">
              We design, build, and deploy high-performance web applications,
              mobile apps, and custom software solutions that help businesses
              scale and innovate.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                type="button"
                onClick={() =>
                  openInquiryModal({ sourceComponent: "hero-cta" })
                }
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg text-slate-950 bg-white hover:bg-slate-100 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_22px_rgba(255,255,255,0.18)] flex items-center gap-2 group cursor-pointer"
              >
                <span>Start Your Project</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              <Link
                href="/#work"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg text-white/95 bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full mb-10 border-y border-white/[0.06] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
            {highlightCards.map((card) => (
              <Link
                key={card.id}
                href="/#services"
                className="flex items-start sm:items-center gap-3 sm:gap-4 px-4 sm:px-5 py-5 sm:py-6 transition-colors duration-300 hover:bg-white/[0.02] group"
              >
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${card.iconBg}`}
                >
                  {card.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-[15px] font-bold text-white group-hover:text-blue-200 transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    {card.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="w-full pt-4 border-t border-white/[0.05] text-center">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-5">
              TRUSTED BY STARTUPS AND BUSINESSES
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 text-slate-400 text-xs sm:text-sm font-semibold">
              {brandLogos.map((brand, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 hover:text-slate-200 transition-colors cursor-default"
                >
                  <span className="text-slate-400">{brand.icon}</span>
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
