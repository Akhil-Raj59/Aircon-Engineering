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
    <img
      src="/assets/logo.png"
      alt="Aircon Engineering"
      className="h-8 w-auto"
    />
  </div>

  {/* Location */}
  <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
    
    <span>Gurgaon ▾</span>
  </div>

</div>

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