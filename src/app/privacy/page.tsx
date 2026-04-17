import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - AfriThrift",
  description: "How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="bg-gradient-to-r from-primary-green to-secondary-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary-green" />
              <h2 className="text-2xl font-bold text-neutral-dark">Your Privacy Matters</h2>
            </div>
            
            <div className="prose prose-neutral max-w-none">
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul>
                <li>Contact information (name, email, phone number, company name)</li>
                <li>Business information (shipping address, billing address)</li>
                <li>Communication preferences</li>
                <li>Inquiry and order history</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <ul>
                <li>Process and fulfill orders</li>
                <li>Communicate about products and services</li>
                <li>Provide customer support</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our services</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>We do not sell your personal information. We may share information with:</p>
              <ul>
                <li>Service providers who assist in our operations</li>
                <li>Logistics partners for shipping purposes</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information 
                from unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience. You can control cookie 
                settings through your browser preferences.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                For privacy-related questions or to exercise your rights, contact us at 
                info@afrithrift.com or via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
