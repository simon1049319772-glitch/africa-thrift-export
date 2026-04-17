import { FileText } from "lucide-react";
import { AnimationWrapper } from "@/components/AnimationWrapper";

export const metadata = {
  title: "Terms of Service - AfriThrift",
  description: "Terms and conditions for using AfriThrift wholesale services.",
};

export default function TermsPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="relative bg-gradient-to-r from-primary-green via-secondary-blue to-primary-green text-white pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-pattern" />
        </div>
        <div className="container-custom relative">
          <AnimationWrapper animation="fade-up">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <FileText className="w-7 h-7" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold">Terms of Service</h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <p className="text-xl text-white/80">Last updated: April 2026</p>
          </AnimationWrapper>
        </div>
      </section>

      <section className="py-16 -mt-16 relative">
        <div className="container-custom max-w-4xl">
          <AnimationWrapper animation="fade-up" className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-neutral max-w-none">
              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-4">1. Acceptance of Terms</h2>
              <p className="text-neutral-gray leading-relaxed mb-8">
                By accessing and using the AfriThrift website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-4">2. Product Information</h2>
              <p className="text-neutral-gray leading-relaxed mb-8">
                All products are pre-owned/used clothing items sourced from USA and Europe. Product descriptions and images are for reference only. Actual items may vary in exact composition, brand mix, and condition within stated grade parameters.
              </p>

              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-4">3. Ordering and Payment</h2>
              <ul className="list-disc list-inside text-neutral-gray space-y-2 mb-8">
                <li>Orders are confirmed upon receipt of deposit payment (30-50% for T/T)</li>
                <li>Balance payment is required before shipment</li>
                <li>Prices are quoted in USD unless otherwise specified</li>
                <li>Payment methods: T/T bank transfer, PayPal, Western Union</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-4">4. Shipping and Delivery</h2>
              <ul className="list-disc list-inside text-neutral-gray space-y-2 mb-8">
                <li>Shipping costs are calculated based on weight, destination, and shipping method</li>
                <li>Delivery times are estimates and may vary due to customs and logistics</li>
                <li>Risk transfers to buyer upon delivery to shipping port</li>
                <li>Buyers are responsible for customs duties and local taxes</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-4">5. Quality Standards</h2>
              <p className="text-neutral-gray leading-relaxed mb-8">
                Our grading system (Grade A/B/C) indicates quality levels with defect tolerances. Grade A items have less than 3% defect rate. Detailed grading criteria are available upon request.
              </p>

              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-4">6. Returns and Refunds</h2>
              <ul className="list-disc list-inside text-neutral-gray space-y-2 mb-8">
                <li>Due to the nature of used clothing, returns are generally not accepted</li>
                <li>Claims for shipping damage must be reported within 48 hours of receipt</li>
                <li>Quality disputes require photo evidence and are handled case-by-case</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-4">7. Intellectual Property</h2>
              <p className="text-neutral-gray leading-relaxed mb-8">
                All content on this website, including text, graphics, logos, and images, is property of AfriThrift and protected by copyright laws.
              </p>

              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-4">8. Limitation of Liability</h2>
              <p className="text-neutral-gray leading-relaxed mb-8">
                AfriThrift shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.
              </p>

              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-4">9. Contact Information</h2>
              <p className="text-neutral-gray leading-relaxed">
                For questions about these terms, please contact us at <a href="mailto:info@afrithrift.com" className="text-primary-green hover:underline">info@afrithrift.com</a> or via WhatsApp.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
}
