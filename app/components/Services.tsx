"use client";

import { useState } from "react";
import { expertiseData } from "@/data/expertiseData";
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
    <section id="services" className="relative py-28 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Full-Spectrum Digital Engineering
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Core Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            From cross-platform mobile and desktop applications to bespoke
            enterprise software, digital marketing, and technical SEO, we
            engineer comprehensive software solutions tailored to growth.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/25 border border-transparent"
                  : "glass-panel text-gray-300 hover:text-white hover:bg-white/10"
              }`}
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
