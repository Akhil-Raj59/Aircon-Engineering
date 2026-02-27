"use client";

export default function ServiceAreas() {
  const areas = [
    "DLF Phase 1",
    "DLF Phase 2",
    "DLF Phase 3",
    "DLF Phase 4",
    "Sohna Road",
    "Golf Course Road",
    "Sector 14",
    "Sector 31",
    "Palam Vihar",
    "MG Road",
    "South City",
    "Udyog Vihar",
  ];

  return (
    <section id="areas" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            AC Service Areas in Gurgaon
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide fast AC repair & servicing across major locations in Gurgaon.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm"
            >
              {area}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}