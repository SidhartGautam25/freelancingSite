"use client";

import React, { useState, useEffect } from "react";
import { useInquiryModal } from "@/app/context/InquiryModalContext";
import { submitLeadInquiry } from "@/lib/api";

const availablePackages = [
  {
    id: "web-starter",
    name: "Starter Business",
    category: "Web Development",
    priceInr: 8000,
  },
  {
    id: "web-growth",
    name: "Growth Business",
    category: "Web Development",
    priceInr: 10000,
  },
  {
    id: "web-pro",
    name: "Pro Business",
    category: "Web Development",
    priceInr: 12000,
  },
  {
    id: "web-adv-pro",
    name: "Advanced Pro",
    category: "Web Development",
    priceInr: 15000,
  },
  {
    id: "ecom-starter",
    name: "E-Commerce Storefront",
    category: "E-Commerce",
    priceInr: 25000,
  },
  {
    id: "app-android",
    name: "Android App",
    category: "Mobile App Development",
    priceInr: 25000,
  },
  {
    id: "app-ios",
    name: "iOS App",
    category: "Mobile App Development",
    priceInr: 30000,
  },
  {
    id: "custom-software",
    name: "Custom Enterprise Software",
    category: "Custom Software",
    priceInr: null,
  },
];

export default function InquiryModal() {
  const { isOpen, closeInquiryModal, selectedPackage, sourceComponent } =
    useInquiryModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [packageChoice, setPackageChoice] = useState<string>("none");
  const [projectDetails, setProjectDetails] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    message: string;
    leadId: string;
  } | null>(null);

  // Dynamically include selected package in options if not in predefined list
  const packageOptions = React.useMemo(() => {
    if (
      selectedPackage?.id &&
      !availablePackages.some((p) => p.id === selectedPackage.id)
    ) {
      return [
        ...availablePackages,
        {
          id: selectedPackage.id,
          name: selectedPackage.name,
          category: selectedPackage.category || "Specialized Service",
          priceInr: selectedPackage.priceInr ?? null,
        },
      ];
    }
    return availablePackages;
  }, [selectedPackage]);

  // Sync package selection when modal opens
  useEffect(() => {
    if (selectedPackage?.id) {
      setPackageChoice(selectedPackage.id);
    } else {
      setPackageChoice("none");
    }
    setErrorMessage(null);
    setSuccessData(null);
  }, [selectedPackage, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !loading) {
        closeInquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, loading, closeInquiryModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate name
    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    // Validate email or phone requirement
    if (!email.trim() && !phone.trim()) {
      setErrorMessage(
        "Please provide either an email address or a phone number so we can reach you.",
      );
      return;
    }

    setLoading(true);

    // Determine package payload
    let packagePayload:
      | {
          id: string;
          name: string;
          category?: string;
          priceInr?: number | null;
        }
      | undefined = undefined;

    if (packageChoice !== "none") {
      const found = packageOptions.find((p) => p.id === packageChoice);
      if (found) {
        packagePayload = {
          id: found.id,
          name: found.name,
          category: found.category,
          priceInr: found.priceInr,
        };
      } else if (selectedPackage) {
        packagePayload = selectedPackage;
      }
    }

    const payload = {
      name: name.trim(),
      email: email.trim() || undefined,
      phone: phone.trim() || undefined,
      company: company.trim() || undefined,
      selectedPackage: packagePayload,
      projectDetails: projectDetails.trim() || undefined,
      sourceUrl:
        typeof window !== "undefined" ? window.location.href : undefined,
      sourceComponent,
    };

    const res = await submitLeadInquiry(payload);

    setLoading(false);

    if (res.success) {
      setSuccessData({
        message: res.message,
        leadId: res.data.leadId,
      });
      // Clear form inputs
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setProjectDetails("");
    } else {
      setErrorMessage(
        res.details && res.details.length > 0
          ? res.details.join(", ")
          : res.error,
      );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => !loading && closeInquiryModal()}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-[#0b0f19] border border-blue-500/25 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(59,130,246,0.15)] z-10 overflow-hidden my-auto">
        {/* Glow ambient decoration */}
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={closeInquiryModal}
          disabled={loading}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer disabled:opacity-40"
          aria-label="Close modal"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {successData ? (
          /* SUCCESS STATE */
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/10">
              <svg
                className="w-8 h-8"
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

            <h3 className="text-2xl font-bold text-white mb-2">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              {successData.message}
            </p>

            <div className="inline-block bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 mb-8 text-left">
              <p className="text-xs uppercase text-slate-500 tracking-wider font-semibold mb-0.5">
                Reference ID
              </p>
              <p className="text-xs sm:text-sm font-mono text-cyan-300 select-all">
                {successData.leadId}
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={closeInquiryModal}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* INQUIRY FORM */
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1 block">
                Let&apos;s Build Together
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Start Your Project
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Fill in your details below and our team will prepare a custom
                proposal and scope timeline.
              </p>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sidharth Gautam"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Requirement reminder */}
              <p className="text-[11px] text-slate-400 italic">
                * Please provide either email or phone so we can reach you.
              </p>

              {/* Selected Package Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Interested Package / Service
                </label>
                <select
                  value={packageChoice}
                  onChange={(e) => setPackageChoice(e.target.value)}
                  className="w-full bg-[#0a0f1d] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all cursor-pointer"
                >
                  <option value="none">
                    Custom Quote / General Discussion
                  </option>
                  {packageOptions.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name}{" "}
                      {pkg.priceInr
                        ? `— ₹${pkg.priceInr.toLocaleString("en-IN")}`
                        : "(Custom)"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company / Brand Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Company / Startup Name{" "}
                  <span className="text-slate-500 text-[10px] lowercase">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Innovations"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all"
                />
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Project Details / Requirements{" "}
                  <span className="text-slate-500 text-[10px] lowercase">
                    (optional)
                  </span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe what you are looking to build, desired features, or launch timeline..."
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <span>Submit Project Inquiry &rarr;</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
