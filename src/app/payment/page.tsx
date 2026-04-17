import { CreditCard, Building, Globe, Shield, CheckCircle, Lock } from "lucide-react";
import { AnimationWrapper, StaggerContainer } from "@/components/AnimationWrapper";

export const metadata = {
  title: "Payment Methods - AfriThrift",
  description: "Learn about our secure payment methods for international transactions.",
};

export default function PaymentPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="relative bg-gradient-to-r from-primary-green via-secondary-blue to-primary-green text-white pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-pattern" />
        </div>
        <div className="container-custom relative">
          <AnimationWrapper animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Payment Methods</h1>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <p className="text-xl text-white/80">Secure and flexible payment options for international trade</p>
          </AnimationWrapper>
        </div>
      </section>

      <section className="py-16 -mt-16 relative">
        <div className="container-custom max-w-5xl">
          <StaggerContainer staggerDelay={100} className="space-y-8 mb-10">
            <div className="stagger-item feature-card">
              <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-primary-green" />
              </div>
              <h2 className="text-2xl font-display font-bold text-neutral-dark mb-4">Bank Transfer (T/T)</h2>
              <p className="text-neutral-gray text-lg mb-6">
                The most common and recommended payment method for international wholesale transactions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-secondary-green" />
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-dark">30-50% deposit</span> upon order confirmation
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-secondary-green" />
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-dark">Balance payment</span> before shipment
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-secondary-green" />
                  </div>
                  <span>Bank fees shared between sender and receiver</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="stagger-item feature-card">
                <div className="w-14 h-14 rounded-2xl bg-primary-gold/10 flex items-center justify-center mb-5">
                  <CreditCard className="w-7 h-7 text-primary-gold" />
                </div>
                <h2 className="text-xl font-display font-bold text-neutral-dark mb-4">PayPal</h2>
                <ul className="space-y-3 text-neutral-gray">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Suitable for orders under $5,000
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Additional 5% transaction fee
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Fast and secure
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Buyer protection included
                  </li>
                </ul>
              </div>

              <div className="stagger-item feature-card">
                <div className="w-14 h-14 rounded-2xl bg-secondary-blue/10 flex items-center justify-center mb-5">
                  <Globe className="w-7 h-7 text-secondary-blue" />
                </div>
                <h2 className="text-xl font-display font-bold text-neutral-dark mb-4">Western Union</h2>
                <ul className="space-y-3 text-neutral-gray">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Available for small orders
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Quick processing time
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    100% upfront payment required
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Valid ID required
                  </li>
                </ul>
              </div>
            </div>

            <div className="stagger-item bg-gradient-to-br from-primary-green to-secondary-blue rounded-2xl p-10 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Shield className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-display font-bold">Payment Security</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Secure Transactions</h3>
                    <p className="text-white/80">
                      All payments are processed through secure channels with encryption.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Verified Suppliers</h3>
                    <p className="text-white/80">
                      We verify all transactions to ensure security for both parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
