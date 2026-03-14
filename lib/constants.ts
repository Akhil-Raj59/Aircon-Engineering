export const phoneNumber = "918920741906";

export const serviceCategories = [
  {
    id: "service",
    title: "Expert AC Maintenance & Servicing in Gurgaon",
    cards: [
      {
        id: "premium-service",
        title: "Premium AC Servicing",
        startingPrice: 469,
        description: "High-Pressure Jet Cleaning - Eliminates dust and debris to improve airflow",
        options: 2,
        subServices: [
          { id: "split-premium", name: "Split AC Premium Service", price: 469 },
          { id: "window-premium", name: "Window AC Premium Service", price: 469 },
        ],
        details: {
          includes: ["High-pressure jet wash", "Condenser cleaning", "Cooling efficiency test"],
          excludes: ["Gas refill", "Spare parts"],
        },
      },
      {
        id: "foam-blast-service",
        title: "Advanced Foam Jet AC Cleaning",
        startingPrice: 599,
        description: "Ultra Max Cooling - Deep cleaning with foam jet spray for faster and more efficient cooling. Highly recommended for dust-heavy environments in NCR.",
        options: 2,
        subServices: [
          { id: "split-foam-service", name: "Split AC Foam Service", price: 599 },
          { id: "window-foam-service", name: "Window AC Foam Service", price: 599 },
        ],
        details: {
          includes: ["Deep foam jet cleaning", "Filter cleaning", "Drain tray cleaning", "Post-service performance check", "30-Day Service Warranty"],
          excludes: ["Spare parts", "Gas charging", "Ladder or bucket not provided"],
        },
      },
      {
        id: "featured-service-combo",
        title: "Foam Jet AC Service Combo (4 ACs)",
        startingPrice: 2279,
        description: "Bulk service package for multiple units with high-pressure cleaning. Perfect for large apartments & offices.",
        options: 2,
        subServices: [
          { id: "split-premium-combo", name: "Split AC Premium Service (4 Units)", price: 2279 },
          { id: "window-premium-combo", name: "Window AC Premium Service (4 Units)", price: 2279 },
        ],
        details: {
          includes: ["High-pressure jet wash for 4 units", "Condenser cleaning", "Cooling efficiency test"],
          excludes: ["Gas refill", "Spare parts"],
        },
      },
    ],
  },

  {
    id: "repair",
    title: "Professional AC Repair Services",
    cards: [
      {
        id: "inspection",
        title: "Comprehensive AC Inspection",
        startingPrice: 299,
        description: "Accurate diagnosis, comprehensive inspection, and prompt repairs for cooling issues, PCB faults, or strange noises.",
        options: 2,
        subServices: [
          { id: "split-inspection", name: "Split AC Repair (Inspection Charges)", price: 299 },
          { id: "window-inspection", name: "Window AC Repair (Inspection Charges)", price: 299 },
        ],
        details: {
          includes: ["Pre-Job Inspection", "Gas level check", "Detailed quotation", "Post-Job Inspection", "30-Day Warranty"],
          excludes: ["Spare parts cost extra", "Gas charging extra", "Ladder not provided"],
        },
      },
      {
        id: "water-leakage-repair",
        title: "AC Water Leakage Repair",
        startingPrice: 569,
        description: "Thorough inspection of water leakage from indoor unit, slope issues, and drain pipe dust blockages.",
        options: 1,
        subServices: [
          { id: "split-water-repair", name: "Split AC Water Leakage Repair", price: 569 },
        ],
        details: {
          includes: ["Leak inspection", "Drain pipe cleaning", "Blockage removal"],
          excludes: ["Spare parts extra"],
        },
      },
      {
        id: "noise-smell-repair",
        title: "Unwanted Noise/Smelling Repair",
        startingPrice: 449,
        description: "Fixing irritating sounds and foul odors from your AC units",
        options: 2,
        subServices: [
          { id: "split-noise-repair", name: "Split AC Noise/Smell Repair", price: 549 },
          { id: "window-noise-repair", name: "Window AC Noise/Smell Repair", price: 449 },
        ],
        details: {
          includes: ["Noise source identification", "Blower cleaning", "Internal deodorizing"],
          excludes: ["Motor replacement extra", "Spare parts extra"],
        },
      },
    ],
  },

  {
    id: "installation",
    title: "AC Installation & Uninstallation",
    cards: [
      {
        id: "ac-installation",
        title: "Professional AC Installation",
        startingPrice: 1149,
        description: "Expert installation of both indoor and outdoor units with core cutting and proper gas pressure check.",
        options: 1,
        subServices: [
          { id: "split-install", name: "Split AC Installation", price: 1549 },
        ],
        details: {
          includes: ["Indoor unit mounting", "Outdoor unit fitting", "Basic testing"],
          excludes: ["Stand cost extra", "Copper pipe extra"],
        },
      },
      {
        id: "ac-uninstallation",
        title: "AC Uninstallation",
        startingPrice: 699,
        description: "Safe uninstallation of both indoor and outdoor units",
        options: 1,
        subServices: [
          { id: "split-uninstall", name: "Split AC Uninstallation", price: 899 },
        ],
        details: {
          includes: ["Gas pumping/storage", "Safe removal", "Pipe sealing"],
          excludes: ["Wall repair/painting", "Transport"],
        },
      },
    ],
  },

  {
    id: "gas",
    title: "AC Gas Charging & Refilling",
    cards: [
      {
        id: "gas-refill",
        title: "AC Gas Refill with Leak Testing",
        startingPrice: 2699,
        description: "Nitrogen leak detection, brazing repair, vacuuming, and genuine refrigerant gas refilling for optimal cooling.",
        options: 4,
        subServices: [
          { id: "gas-1-ton", name: "Ac Gas Charging <= 1 Ton", price: 2699 },
          { id: "gas-1-5-ton", name: "Ac Gas Charging <= 1.5 Ton", price: 2849 },
          { id: "gas-2-ton", name: "Ac Gas Charging <= 2 Ton", price: 2999 },
          { id: "gas-2-5-ton", name: "Ac Gas Charging <= 2.5 Ton", price: 3199 },
        ],
        details: {
          includes: ["Leak detection", "Gas refill", "Cooling test"],
          excludes: ["Major coil repairs"],
        },
      },
    ],
  },
];
