"use client";

import { useRef, useState } from "react";
import { useSearch } from "../SearchContext";
import { serviceCategories } from "@/lib/constants";
import { phoneNumber } from "@/lib/constants";

const ALL_SUGGESTIONS = serviceCategories.flatMap((cat) =>
  cat.cards.map((card) => ({
    label: card.title,
    sub: cat.title,
    categoryId: cat.id,
  }))
);

export default function Header() {
  const { query, setQuery } = useSearch();
  const [focused, setFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? ALL_SUGGESTIONS.filter(
        (s) =>
          s.label.toLowerCase().includes(query.toLowerCase()) ||
          s.sub.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  function handleSelect(suggestion: (typeof ALL_SUGGESTIONS)[0]) {
    setQuery(suggestion.label);
    setFocused(false);

    const el = document.getElementById(suggestion.categoryId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleClear() {
    setQuery("");
    inputRef.current?.focus();
  }

  const showDropdown = focused && filtered.length > 0;

  return (
    <header className="sticky top-0 z-40 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4">

{/* Top Row */}
<div className="flex items-center justify-between py-3">

  {/* Logo */}
  <div className="flex items-center">
    <a href="/"
    className="flex gap-0.5"
    >
      <img
        src="/assets/logo.png"
        alt="Aircon Engineering"
        className="h-8 w-auto"
      />
      <img
        src="/assets/logo_text.png"
        alt="Aircon Engineering"
        className="h-9 w-auto"
      />
      
    </a>
  </div>

  {/* Navigation (Desktop) */}
  <nav className="hidden md:flex gap-6 items-center">
    <a href="/#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Services</a>
    <a href="/#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Pricing</a>
    <a href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">About</a>
    <a href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Contact</a>
  </nav>

  {/* Location / Call */}
  <div className="flex items-center gap-2 md:gap-4">
    <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-600">
      <span>Gurgaon ▾</span>
    </div>
    <a href={`tel:+${phoneNumber}`} className="bg-blue-600 hover:bg-orange-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm font-bold transition flex items-center gap-1">
      <span>📞</span> <span className="hidden sm:inline">Book Now</span><span className="sm:hidden">Call</span>
    </a>
    
    {/* Hamburger Menu Toggle (Mobile) */}
    <button 
      className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isMobileMenuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  </div>

</div>

{/* Mobile Menu Dropdown */}
{isMobileMenuOpen && (
  <div className="md:hidden border-t border-gray-100 py-2 animate-in slide-in-from-top-2 fade-in duration-200">
    <nav className="flex flex-col gap-1 px-2">
      <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Services</a>
      <a href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Pricing</a>
      <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">About</a>
      <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Contact</a>
    </nav>
  </div>
)}

        {/* Search Bar */}
        <div className="pb-3 relative">
          <div
            className={`flex items-center gap-2 border rounded-xl px-3 py-2 transition ${
              focused
                ? "border-blue-500 bg-white"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 150)}
              placeholder="Search service, repair, gas filling..."
              className="flex-1 bg-transparent text-sm outline-none"
            />

            {query && (
              <button
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleClear}
                className="text-gray-400 text-sm hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-xl shadow-lg z-50">
              {filtered.map((s, i) => (
                <button
                  key={i}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(s)}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 border-b last:border-0"
                >
                  <p className="font-medium text-gray-800">{s.label}</p>
                  <p className="text-xs text-gray-400">{s.sub}</p>
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </header>
  );
}