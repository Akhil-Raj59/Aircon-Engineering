export const areas = [
  "sector-37", "sector-56", "basai", "dwarka-expressway", 
  "sector-90", "sector-110", "dlf-phase-1", "dlf-phase-2", 
  "dlf-phase-3", "sohna-road", "golf-course-road", "palam-vihar", 
  "udyog-vihar", "mg-road"
];

export const brands = [
  "voltas", "daikin", "lg", "blue-star", "hitachi", 
  "samsung", "o-general", "carrier", "panasonic", 
  "haier", "godrej", "whirlpool"
];

// Reusable formatting helpers
export function formatAreaName(slug: string) {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export function formatBrandName(slug: string) {
  if (slug === "o-general") return "O General";
  if (slug === "blue-star") return "Blue Star";
  if (slug === "lg") return "LG";
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
