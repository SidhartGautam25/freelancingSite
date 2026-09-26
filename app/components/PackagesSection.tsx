"use client";

import { useState } from "react";
import Link from "next/link";
import { packagesData } from "@/data/packagesData";
import PackageCard from "./PackageCard";

export default function PackagesSection() {
  const { services } = packagesData.agency;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = services[activeCategoryIndex] || services[0];

  return (
    <section id="packages" className="relative py-24 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Transparent Pricing & Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Packages & <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/25 border border-transparent"
                  : "glass-panel text-gray-300 hover:text-white hover:bg-white/10"
              }`}
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
          <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-4xl mx-auto border border-purple-500/20">
            <div className="max-w-2xl mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Tailored Architecture & Add-on Deliverables
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
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
              <Link
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity text-center"
              >
                Request Custom Proposal
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
