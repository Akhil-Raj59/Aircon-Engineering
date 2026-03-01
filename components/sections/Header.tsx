"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useSearch } from "../SearchContext";
import { serviceCategories } from "@/lib/constants";

// ── Build a flat suggestion list from all cards ──────────────────────────────
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
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep inputVal in sync when query is cleared externally
  useEffect(() => {
    if (query === "") setInputVal("");
  }, [query]);

  const filtered = inputVal.trim()
    ? ALL_SUGGESTIONS.filter(
        (s) =>
          s.label.toLowerCase().includes(inputVal.toLowerCase()) ||
          s.sub.toLowerCase().includes(inputVal.toLowerCase())
      )
    : [];

  function handleSelect(suggestion: (typeof ALL_SUGGESTIONS)[0]) {
    setInputVal(suggestion.label);
    setQuery(suggestion.label);
    setFocused(false);
    // Scroll to category section
    const el = document.getElementById(suggestion.categoryId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setInputVal(val);
    setQuery(val); // live rank update
  }

  function handleClear() {
    setInputVal("");
    setQuery("");
    inputRef.current?.focus();
  }

  const showDropdown = focused && filtered.length > 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .header-root { font-family: 'DM Sans', sans-serif; }

        .search-wrap {
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .search-wrap.active {
          box-shadow: 0 0 0 3px rgba(59,130,246,0.18);
          border-color: #3b82f6;
        }

        .suggestion-item {
          transition: background 0.12s;
        }
        .suggestion-item:hover, .suggestion-item:focus {
          background: #eff6ff;
        }

        .location-chip {
          background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
        }
      `}</style>

      <header className="header-root sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4">

          {/* ── Row 1: Logo + Location ── */}
          <div className="flex items-center justify-between py-3 gap-3">

            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-8 h-8">
                {/* Replace /assets/logo.png with your actual logo path */}
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  onError={(e) => {
                    // fallback: hide broken image, show text logo
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <p
                  className="text-base font-extrabold text-gray-900 leading-none"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  CoolFix
                </p>
                <p className="text-[10px] text-gray-400 leading-none mt-0.5">
                  AC Experts
                </p>
              </div>
            </div>

            {/* Location chip */}
            <div className="location-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-100 flex-shrink-0">
              <span className="text-base leading-none">📍</span>
              <span className="text-xs font-semibold text-blue-700">Gurgaon</span>
              <span className="text-[10px] text-blue-400 font-medium hidden sm:inline">
                · Haryana
              </span>
            </div>
          </div>

          {/* ── Row 2: Search Bar ── */}
          <div className="pb-3 relative">
            <div
              className={`search-wrap flex items-center gap-2 border border-gray-200 rounded-2xl bg-gray-50 px-3 py-2.5 ${
                focused ? "active" : ""
              }`}
            >
              {/* Search icon */}
              <svg
                className="w-4 h-4 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>

              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder="Search: service, repair, gas..."
                className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
              />

              {/* Clear button */}
              {inputVal && (
                <button
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleClear}
                  className="text-gray-400 hover:text-gray-600 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* ── Dropdown Suggestions ── */}
            {showDropdown && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50">
                {filtered.map((s, i) => (
                  <button
                    key={i}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSelect(s)}
                    className="suggestion-item w-full flex items-center gap-3 px-4 py-3 text-left border-b border-gray-50 last:border-0"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-base flex-shrink-0">
                      🔍
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{s.label}</p>
                      <p className="text-xs text-gray-400">{s.sub}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}