"use client";

import { useState } from "react";
import Link from "next/link";
import { packagesData } from "@/data/packagesData";
import { theme } from "@/theme/themeConfig";
import { useInquiryModal } from "@/app/context/InquiryModalContext";
import PackageCard from "./PackageCard";

interface PackagesSectionProps {
  showViewAllButton?: boolean;
  isStandalonePage?: boolean;
}

export default function PackagesSection({
  showViewAllButton = false,
  isStandalonePage = false,
}: PackagesSectionProps) {
  const { openInquiryModal } = useInquiryModal();
  const { services } = packagesData.agency;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = services[activeCategoryIndex] || services[0];

  return (
    <section
      id="packages"
      className="relative py-28 px-6 z-10 overflow-hidden border-t border-slate-800/60 bg-[#0c1220]"
    >
      {/* Dot Matrix Shading Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={theme.patterns.dotMatrix}
      />

      {/* Atmospheric Hazy Violet Ambient Glow (soft and gentle on eyes) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 45% at 50% 15%, rgba(139, 92, 246, 0.08), transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Standalone Page Back Navigation */}
        {isStandalonePage && (
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border ${theme.sections.packages.badgeClass}`}
          >
            {isStandalonePage
              ? "Full Service Catalog"
              : "Transparent Pricing & Services"}
          </div>
          {isStandalonePage ? (
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-100">
              All Packages &{" "}
              <span className="text-gradient">Service Plans</span>
            </h1>
          ) : (
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-100">
              Packages & <span className="text-gradient">Pricing Plans</span>
            </h2>
          )}
          <p className="text-slate-300/90 max-w-2xl mx-auto text-base">
            Clear, honest pricing with zero hidden fees. Select a package
            tailored to your business scale, or reach out for a custom
            enterprise solution.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {services.map((svc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategoryIndex === idx
                  ? "text-white shadow-lg shadow-purple-600/25 border border-transparent"
                  : "glass-panel text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              style={
                activeCategoryIndex === idx
                  ? { background: theme.gradients.primaryButton }
                  : undefined
              }
            >
              {svc.category}
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        {activeCategory.description && (
          <div className="text-center mb-10 -mt-4">
            <p className="text-sm text-gray-400 max-w-xl mx-auto italic">
              {activeCategory.description}
            </p>
          </div>
        )}

        {/* Standard Tier Packages Grid */}
        {activeCategory.packages && activeCategory.packages.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeCategory.packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}

        {/* Enterprise & Custom Software Deliverables View */}
        {activeCategory.deliverables && (
          <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-4xl mx-auto border border-blue-500/20 shadow-xl shadow-blue-500/5">
            <div className="max-w-2xl mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Tailored Architecture & Add-on Deliverables
              </h3>
              <p className="text-gray-300/80 text-sm leading-relaxed">
                Have specific business requirements, complex internal workflows,
                or high-security needs? We design and build enterprise-grade
                software to your exact specifications.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {activeCategory.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5"
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
                  </div>
                  <span className="text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                  Pricing Model
                </p>
                <p className="text-lg font-bold text-white">
                  Milestone-Based & Custom Scoped
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  openInquiryModal({
                    selectedPackage: {
                      id: activeCategory.category
                        .toLowerCase()
                        .replace(/\s+/g, "-"),
                      name: `${activeCategory.category} Enterprise Proposal`,
                      priceInr: null,
                    },
                    sourceComponent: "packages-enterprise-proposal",
                  })
                }
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-95 transition-opacity text-center shadow-lg shadow-blue-600/25 cursor-pointer"
                style={{ background: theme.gradients.primaryButton }}
              >
                Request Custom Proposal
              </button>
            </div>
          </div>
        )}

        {/* View All Packages Button for Home Section */}
        {showViewAllButton && (
          <div className="mt-16 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] group"
            >
              <span>Explore All Packages & In-Depth Details</span>
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
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
