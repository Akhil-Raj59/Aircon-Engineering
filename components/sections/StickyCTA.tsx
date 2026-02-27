"use client";

import { phoneNumber } from "@/lib/constants";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t md:hidden z-50">
      <div className="flex">

        {/* Call Button */}
        <a
          href={`tel:+${phoneNumber}`}
          className="w-1/2 text-center py-4 bg-blue-600 text-white font-semibold"
        >
          📞 Call Now
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          className="w-1/2 text-center py-4 bg-green-500 text-white font-semibold"
        >
          💬 WhatsApp
        </a>

      </div>
    </div>
  );
}