import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service - AfriThrift",
  description: "Terms and conditions for using AfriThrift wholesale services.",
};

export default function TermsPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="bg-gradient-to-r from-primary-green to-secondary-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="prose prose-neutral max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the AfriThrift website and services, you agree to be bound 
                by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2>2. Product Information</h2>
              <p>
                All products are pre-owned/used clothing items sourced from USA and Europe. Product 
                descriptions and images are for reference only. Actual items may vary in exact 
                composition, brand mix, and condition within stated grade parameters.
              </p>

              <h2>3. Ordering and Payment</h2>
              <ul>
                <li>Orders are confirmed upon receipt of deposit payment (30-50% for T/T)</li>
                <li>Balance payment is required before shipment</li>
                <li>Prices are quoted in USD unless otherwise specified</li>
                <li>Payment methods: T/T bank transfer, PayPal, Western Union</li>
              </ul>

              <h2>4. Shipping and Delivery</h2>
              <ul>
                <li>Shipping costs are calculated based on weight, destination, and shipping method</li>
                <li>Delivery times are estimates and may vary due to customs and logistics</li>
                <li>Risk transfers to buyer upon delivery to shipping port</li>
                <li>Buyers are responsible for customs duties and local taxes</li>
              </ul>

              <h2>5. Quality Standards</h2>
              <p>
                Our grading system (Grade A/B/C) indicates quality levels with defect tolerances. 
                Grade A items have less than 3% defect rate. Detailed grading criteria are 
                available upon request.
              </p>

              <h2>6. Returns and Refunds</h2>
              <ul>
                <li>Due to the nature of used clothing, returns are generally not accepted</li>
                <li>Claims for shipping damage must be reported within 48 hours of receipt</li>
                <li>Quality disputes require photo evidence and are handled case-by-case</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is 
                property of AfriThrift and protected by copyright laws.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                AfriThrift shall not be liable for any indirect, incidental, or consequential 
                damages arising from the use of our products or services.
              </p>

              <h2>9. Contact Information</h2>
              <p>
                For questions about these terms, please contact us at info@afrithrift.com or 
                via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
