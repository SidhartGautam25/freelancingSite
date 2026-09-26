"use client";

import { useState } from "react";
import { expertiseData } from "@/data/expertiseData";
import { theme } from "@/theme/themeConfig";
import ExpertiseCard from "./ExpertiseCard";

const filterTabs = [
  { id: "all", label: "All Capabilities" },
  { id: "development", label: "Web & Mobile" },
  { id: "software", label: "Desktop & Custom Software" },
  { id: "marketing", label: "Marketing & SEO" },
  { id: "design", label: "UI/UX & Cloud" },
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = expertiseData.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "development") return item.category === "development";
    if (activeFilter === "software") return item.category === "software";
    if (activeFilter === "marketing") return item.category === "marketing";
    if (activeFilter === "design")
      return item.category === "design" || item.id === "cloud-devops";
    return true;
  });

  return (
    <section
      id="services"
      className="relative py-28 px-6 z-10 overflow-hidden border-t border-b border-blue-500/10"
    >
      {/* "Small Little Boxes" Technical Grid Background (from themeConfig) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={theme.patterns.gridBoxes}
      />

      {/* Atmospheric Hazy Radial Illumination behind the grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={theme.patterns.hazySapphireViolet}
      />

      {/* Bottom fade mask to seamlessly blend grid into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border ${theme.sections.services.badgeClass}`}
          >
            Engineering & Strategic Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-gradient">Core Expertise</span>
          </h2>
          <p className="text-gray-300/80 max-w-2xl mx-auto text-base leading-relaxed">
            From cross-platform mobile and desktop applications to bespoke
            enterprise software, digital marketing, and technical SEO, we
            engineer comprehensive software solutions tailored to growth.
          </p>
        </div>

        {/* Technical Divider with Center Node (Inspired by Image 2 & 3) */}
        <div className="relative flex items-center justify-center my-8 max-w-md mx-auto">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "text-white shadow-lg shadow-blue-500/20 border border-transparent"
                  : "glass-panel text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              style={
                activeFilter === tab.id
                  ? { background: theme.gradients.primaryButton }
                  : undefined
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <ExpertiseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
