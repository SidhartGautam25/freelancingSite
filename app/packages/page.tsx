import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PackagesSection from "../components/PackagesSection";
import ContactFooter from "../components/ContactFooter";

export const metadata: Metadata = {
  title: "Packages & Pricing | devlooper studio",
  description:
    "Explore our comprehensive web development, e-commerce, mobile app, and enterprise software packages with transparent pricing.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 pt-16">
      <Navbar />
      <PackagesSection isStandalonePage={true} />
      <ContactFooter />
    </main>
  );
}
