import Link from "next/link";
import { PackageItem } from "@/data/packagesData";

interface PackageCardProps {
  pkg: PackageItem;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const isStartingPrice = typeof pkg.starting_price_inr === "number";
  const price = isStartingPrice ? pkg.starting_price_inr : pkg.price_inr;
  const formattedPrice = price ? `₹${price.toLocaleString("en-IN")}` : "Custom";

  return (
    <div
      className={`relative glass-panel rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 ${
        pkg.popular ? "border-purple-500/50 shadow-lg shadow-purple-500/10" : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
          Most Popular
        </div>
      )}

      <div>
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
          <div className="flex items-baseline gap-1.5">
            {isStartingPrice && (
              <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider">
                Starting at
              </span>
            )}
            <span className="text-3xl md:text-4xl font-extrabold text-white">
              {formattedPrice}
            </span>
          </div>

          {pkg.max_pages && (
            <div className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-purple-300">
              Up to {pkg.max_pages} Pages Included
            </div>
          )}
        </div>

        {/* Features List */}
        <div className="border-t border-white/10 pt-5 mb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Included Features
          </p>
          <ul className="space-y-3">
            {pkg.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-gray-300 leading-snug"
              >
                <svg
                  className="w-5 h-5 text-purple-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
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
            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 shadow-md shadow-purple-600/20"
            : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
        }`}
      >
        Choose {pkg.name}
      </Link>
    </div>
  );
}
