import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 bg-gray-50">
      <Header />
      <div className="flex-grow max-w-4xl mx-auto px-6 py-12 bg-white mt-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm lg:text-base">
          <p>
            At <strong>Townairncr</strong>, accessible from https://www.aircon-engineering.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Townairncr and how we use it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly via phone or WhatsApp (+91-8920741906), we may receive additional information about you such as your name, email address, phone number, location (sector in Gurgaon), the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our AC repair & installation services in Gurgaon.</li>
            <li>Improve, personalize, and expand our website and services.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Communicate with you, either directly or through one of our customer service representatives, to provide you with updates and other information relating to the service/repair.</li>
            <li>Find and prevent fraud.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Log Files</h2>
          <p>
            Townairncr follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Cookies and Web Beacons</h2>
          <p>
            Like any other website, Townairncr uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Children's Information</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            Townairncr does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at care@townairncr.com.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
