export const phoneNumber = "918920741906";

export const serviceCategories = [
  {
    id: "service", 
    title: "AC Maintenance Service",
    cards: [
      {
        id: "foam-blast-service",
        title: "Foam Blast AC Service",
        startingPrice: 579,
        description:
          "Ultra Max Cooling - Deep cleaning with foam jet spray for faster and more efficient cooling",
        options: 2,

        subServices: [
          {
            id: "split-foam-service",
            name: "Split AC Foam Service",
            price: 579,
          },
          {
            id: "window-foam-service",
            name: "Window AC Foam Service",
            price: 579,
          },
        ],

        details: {
          includes: [
            "Deep foam jet cleaning",
            "Filter cleaning",
            "Drain tray cleaning",
            "Post-service performance check",
            "30-Day Service Warranty",
          ],
          excludes: [
            "Spare parts",
            "Gas charging",
            "Ladder or bucket not provided",
          ],
        },
      },

      {
        id: "premium-service",
        title: "Premium AC Service",
        startingPrice: 469,
        description:
          "High-Pressure Jet Cleaning - Eliminates dust and debris to improve airflow",
        options: 2,

        subServices: [
          {
            id: "split-premium",
            name: "Split AC Premium Service",
            price: 469,
          },
          {
            id: "window-premium",
            name: "Window AC Premium Service",
            price: 469,
          },
        ],

        details: {
          includes: [
            "High-pressure jet wash",
            "Condenser cleaning",
            "Cooling efficiency test",
          ],
          excludes: ["Gas refill", "Spare parts"],
        },
      },
    ],
  },

  {
    id: "repair",
    title: "AC Repair",
    cards: [
      {
        id: "inspection",
        title: "AC Inspection",
        startingPrice: 289,
        description:
          "Accurate diagnosis, comprehensive inspection, and prompt repairs",
        options: 2,

        subServices: [
          {
            id: "split-inspection",
            name: "Split AC Repair (Inspection Charges)",
            price: 289,
          },
          {
            id: "window-inspection",
            name: "Window AC Repair (Inspection Charges)",
            price: 289,
          },
        ],

        details: {
          includes: [
            "Pre-Job Inspection",
            "Gas level check",
            "Detailed quotation",
            "Post-Job Inspection",
            "30-Day Warranty",
          ],
          excludes: [
            "Spare parts cost extra",
            "Gas charging extra",
            "Ladder not provided",
          ],
        },
      },

      {
        id: "water-leakage-repair",
        title: "Water Leakage Repair",
        startingPrice: 469,
        description:
          "Thorough inspection of water leakage, slope issues, and dust blockages",
        options: 2,

        subServices: [
          {
            id: "split-water-repair",
            name: "Split AC Water Leakage Repair",
            price: 469,
          },
        ],

        details: {
          includes: [
            "Leak inspection",
            "Drain pipe cleaning",
            "Blockage removal",
          ],
          excludes: ["Spare parts extra"],
        },
      },
    ],
  },

  {
    id: "installation",
    title: "AC Installation / Uninstallation",
    cards: [
      {
        id: "ac-installation",
        title: "AC Installation",
        startingPrice: 1029,
        description:
          "Installation of both indoor and outdoor units",
        options: 2,

        subServices: [
          {
            id: "split-install",
            name: "Split AC Installation",
            price: 1029,
          },
        ],

        details: {
          includes: [
            "Indoor unit mounting",
            "Outdoor unit fitting",
            "Basic testing",
          ],
          excludes: [
            "Stand cost extra",
            "Copper pipe extra",
          ],
        },
      },
    ],
  },

  {
    id: "gas",
    title: "AC Gas Charging",
    cards: [
      {
        id: "gas-refill",
        title: "AC Gas Refill",
        startingPrice: 2529,
        description:
          "Leak detection, repair, and gas refilling for optimal performance",
        options: 4,

        subServices: [
          {
            id: "r22-gas",
            name: "R22 Gas Refill",
            price: 2529,
          },
          {
            id: "r32-gas",
            name: "R32 Gas Refill",
            price: 2529,
          },
        ],

        details: {
          includes: [
            "Leak detection",
            "Gas refill",
            "Cooling test",
          ],
          excludes: ["Major repairs"],
        },
      },
    ],
  },
];