import Link from "next/link";
import { PackageItem } from "@/data/packagesData";
import { theme } from "@/theme/themeConfig";

interface PackageCardProps {
  pkg: PackageItem;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const isStartingPrice = typeof pkg.starting_price_inr === "number";
  const price = isStartingPrice ? pkg.starting_price_inr : pkg.price_inr;
  const formattedPrice = price ? `₹${price.toLocaleString("en-IN")}` : "Custom";

  return (
    <div
      className={`relative glass-panel rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
        pkg.popular
          ? "border-blue-500/50 shadow-xl shadow-blue-500/10 hover:border-blue-400/70"
          : "border-white/10 hover:border-white/25"
      }`}
    >
      {pkg.popular && (
        <div
          className="absolute -top-3.5 right-6 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md"
          style={{ background: theme.gradients.primaryButton }}
        >
          Most Popular
        </div>
      )}

      <div>
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-100 mb-2">{pkg.name}</h3>
          <div className="flex items-baseline gap-1.5">
            {isStartingPrice && (
              <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider">
                Starting at
              </span>
            )}
            <span className="text-3xl md:text-4xl font-extrabold text-slate-100">
              {formattedPrice}
            </span>
          </div>

          {pkg.max_pages && (
            <div className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-300">
              Up to {pkg.max_pages} Pages Included
            </div>
          )}
        </div>

        {/* Features List */}
        <div className="border-t border-white/10 pt-5 mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Included Features
          </p>
          <ul className="space-y-3">
            {pkg.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-slate-300 leading-snug"
              >
                <div className="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <Link
        href="/#contact"
        className={`w-full py-3 px-5 rounded-xl font-semibold text-sm text-center transition-all duration-200 block ${
          pkg.popular
            ? "text-white hover:opacity-95 shadow-lg shadow-blue-500/20"
            : "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10"
        }`}
        style={
          pkg.popular
            ? { background: theme.gradients.primaryButton }
            : undefined
        }
      >
        Choose {pkg.name}
      </Link>
    </div>
  );
}
