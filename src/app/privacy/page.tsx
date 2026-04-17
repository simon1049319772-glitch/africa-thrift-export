import { Shield, Lock, Eye, Trash2 } from "lucide-react";
import { AnimationWrapper } from "@/components/AnimationWrapper";

export const metadata = {
  title: "Privacy Policy - AfriThrift",
  description: "How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
                <Shield className="w-7 h-7" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold">Privacy Policy</h1>
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
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-neutral-light">
              <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-green" />
              </div>
              <h2 className="text-2xl font-display font-bold text-neutral-dark">Your Privacy Matters</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-neutral-dark mb-4">Information We Collect</h3>
                <p className="text-neutral-gray leading-relaxed mb-4">We collect information you provide directly to us, including:</p>
                <ul className="list-disc list-inside text-neutral-gray space-y-2">
                  <li>Contact information (name, email, phone number, company name)</li>
                  <li>Business information (shipping address, billing address)</li>
                  <li>Communication preferences</li>
                  <li>Inquiry and order history</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-neutral-dark mb-4">How We Use Your Information</h3>
                <ul className="list-disc list-inside text-neutral-gray space-y-2">
                  <li>Process and fulfill orders</li>
                  <li>Communicate about products and services</li>
                  <li>Provide customer support</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Improve our services</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-neutral-dark mb-4">Information Sharing</h3>
                <p className="text-neutral-gray leading-relaxed mb-4">We do not sell your personal information. We may share information with:</p>
                <ul className="list-disc list-inside text-neutral-gray space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Logistics partners for shipping purposes</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </div>

              <div className="bg-primary-green/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-primary-green" />
                  <h3 className="font-display text-xl font-bold text-neutral-dark">Data Security</h3>
                </div>
                <p className="text-neutral-gray leading-relaxed">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-neutral-dark mb-4">Cookies</h3>
                <p className="text-neutral-gray leading-relaxed">
                  Our website may use cookies to enhance user experience. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-neutral-dark mb-4">Your Rights</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start gap-3 p-4 bg-neutral-bg rounded-xl">
                    <Eye className="w-5 h-5 text-primary-green mt-0.5" />
                    <div>
                      <p className="font-semibold text-neutral-dark">Access</p>
                      <p className="text-sm text-neutral-gray">View your personal information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-neutral-bg rounded-xl">
                    <Trash2 className="w-5 h-5 text-primary-green mt-0.5" />
                    <div>
                      <p className="font-semibold text-neutral-dark">Deletion</p>
                      <p className="text-sm text-neutral-gray">Request removal of your data</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-light">
                <h3 className="font-display text-xl font-bold text-neutral-dark mb-4">Contact Us</h3>
                <p className="text-neutral-gray leading-relaxed">
                  For privacy-related questions or to exercise your rights, contact us at <a href="mailto:info@afrithrift.com" className="text-primary-green hover:underline font-semibold">info@afrithrift.com</a> or via WhatsApp.
                </p>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
}
