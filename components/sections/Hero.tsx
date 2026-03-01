"use client";

import { phoneNumber } from "@/lib/constants";

const services = [
  {
    id: "installation",
    icon: "🔧",
    label: "Installation",
    sublabel: "/ Uninstall",
  },
  {
    id: "service",
    icon: "❄️",
    label: "Service",
    sublabel: "& Cleaning",
  },
  {
    id: "repair",
    icon: "⚙️",
    label: "Repair",
    sublabel: "All Brands",
  },
  {
    id: "gas",
    icon: "🧯",
    label: "Gas",
    sublabel: "Charging",
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Hero() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative bg-white overflow-hidden">

        {/* ── POSTER IMAGE ── */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden bg-gradient-to-br from-[#1a3a6e] via-[#1e5799] to-[#0a1f45]">
          {/* Background texture dots */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Glow blob */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-400 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full px-5 md:px-14 py-8 max-w-2xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3 border border-white/20">
              ⭐ 4.8 &nbsp;•&nbsp; 500+ Happy Customers
            </span>

            {/* Headline */}
            <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-2">
              Want{" "}
              <span className="text-cyan-300">Ultra‑Max</span>
              <br />
              Cooling?
            </h1>

            <p className="text-white/80 text-sm md:text-base font-medium mb-4">
              100% Cooling Guaranteed{" "}
              <span className="text-yellow-300 font-bold">or New AC FREE!</span>
            </p>

            {/* Sub-line */}
            <p className="text-white/60 text-xs md:text-sm">
              Same Day Visit &nbsp;·&nbsp; 30‑Day Warranty &nbsp;·&nbsp; No Hidden Charges
            </p>
          </div>

          {/* Decorative AC unit silhouette (pure CSS) */}
          <div className="absolute right-4 bottom-4 md:right-10 md:bottom-6 opacity-20 hidden sm:block">
            <div className="w-24 h-10 bg-white rounded-lg" />
            <div className="w-20 h-2 bg-white/60 rounded mx-auto mt-1" />
          </div>

          {/* Rating pill - bottom right */}
          <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/20 font-medium">
            🏆 Best AC Service in Gurgaon
          </div>
        </div>

        {/* ── 4 SERVICE ICON TABS ── */}
        <div className="bg-white border-b border-gray-100 shadow-sm">
          <div className="grid grid-cols-4 max-w-lg mx-auto">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => scrollToSection(svc.id)}
                className="group flex flex-col items-center gap-1 py-4 px-2 transition-all hover:bg-blue-50 active:bg-blue-100 focus:outline-none relative"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 group-active:scale-95 transition-all flex items-center justify-center text-2xl shadow-sm border border-blue-100">
                  {svc.icon}
                </div>
                <span className="text-[11px] font-semibold text-gray-800 leading-tight text-center">
                  {svc.label}
                </span>
                <span className="text-[10px] text-gray-400 leading-tight text-center">
                  {svc.sublabel}
                </span>
                {/* Active underline indicator */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-0.5 bg-blue-500 rounded-full transition-all duration-200" />
              </button>
            ))}
          </div>
        </div>

        {/* ── TRUST STRIP ── */}
        <div className="flex items-center justify-center gap-3 py-3 px-4 bg-green-50 border-b border-green-100">
          <span className="text-green-700 text-xs font-semibold flex items-center gap-1">
            ✅ Verified Technicians
          </span>
          <span className="text-green-300">|</span>
          <span className="text-green-700 text-xs font-semibold flex items-center gap-1">
            🕐 Same Day Service
          </span>
          <span className="text-green-300">|</span>
          <span className="text-green-700 text-xs font-semibold flex items-center gap-1">
            💰 Affordable Pricing
          </span>
        </div>
      </section>

  

    </>
  );
}