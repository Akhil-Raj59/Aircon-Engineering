import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 bg-gray-50">
      <Header />
      <div className="flex-grow max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Aircon Engineering</h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Welcome to Aircon Engineering, the leading AC repair and service company in Gurgaon. With years of experience and a team of highly certified technicians, we are dedicated to providing the best AC service across all sectors and localities.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our mission is to ensure you have a comfortable, ultra-max cooling experience during the harsh summers. We specialize in AC repair, gas charging, AC installation, and deep AC cleaning for all major brands including Voltas, Daikin, LG, Blue Star, Hitachi, and more.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li><strong>Same-Day Service:</strong> We value your time and offer prompt, same-day technician visits.</li>
          <li><strong>Certified Technicians:</strong> All our mechanics are trained and background-verified.</li>
          <li><strong>Transparent Pricing:</strong> No hidden charges. Get a clear upfront quote before any work begins.</li>
          <li><strong>30-Day Warranty:</strong> We stand behind our work with a 30-day service warranty.</li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Whether you need a Split AC service in Sector 56, Window AC installation in DLF Phase 1, or urgent AC repair on Sohna Road, Aircon Engineering is your trusted partner. Our team uses genuine spare parts and advanced cleaning techniques (like Foam Blast) to restore your AC to its peak performance.
        </p>
        <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Our Commitment</h3>
          <p className="text-blue-800 text-sm">
            We offer a 100% cooling guarantee. If your AC doesn't achieve full cooling after our service, we'll make it right — or you get a new AC free!
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
