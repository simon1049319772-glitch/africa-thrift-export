import Link from "next/link";
import { Truck, Clock, Package, MapPin, CheckCircle, ArrowRight, Ship, Globe } from "lucide-react";
import { AnimationWrapper, StaggerContainer } from "@/components/AnimationWrapper";

export const metadata = {
  title: "Shipping Information - AfriThrift",
  description: "Learn about our shipping methods, delivery times, and logistics to African countries.",
};

export default function ShippingPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="relative bg-gradient-to-r from-primary-green via-secondary-blue to-primary-green text-white pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-pattern" />
        </div>
        <div className="container-custom relative">
          <AnimationWrapper animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Shipping Information</h1>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <p className="text-xl text-white/80">Reliable logistics from China to Africa</p>
          </AnimationWrapper>
        </div>
      </section>

      <section className="py-16 -mt-16 relative">
        <div className="container-custom max-w-5xl">
          <StaggerContainer staggerDelay={100} className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="stagger-item feature-card">
              <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center mb-6">
                <Ship className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-dark mb-3">Sea Freight (Recommended)</h3>
              <div className="flex items-center gap-2 text-secondary-green font-semibold mb-4">
                <Clock className="w-5 h-5" />
                <span>30-45 days delivery</span>
              </div>
              <ul className="space-y-3 text-neutral-gray">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-green mt-0.5 flex-shrink-0" />
                  <span>Most cost-effective for bulk orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-green mt-0.5 flex-shrink-0" />
                  <span>Ideal for Bales and wholesale orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-green mt-0.5 flex-shrink-0" />
                  <span>Full container load (FCL) or LCL options</span>
                </li>
              </ul>
            </div>

            <div className="stagger-item feature-card">
              <div className="w-16 h-16 rounded-2xl bg-secondary-orange/10 flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-secondary-orange" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-dark mb-3">Air Freight</h3>
              <div className="flex items-center gap-2 text-secondary-orange font-semibold mb-4">
                <Clock className="w-5 h-5" />
                <span>7-15 days delivery</span>
              </div>
              <ul className="space-y-3 text-neutral-gray">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-green mt-0.5 flex-shrink-0" />
                  <span>Faster delivery for urgent orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-green mt-0.5 flex-shrink-0" />
                  <span>Higher cost but quicker turnaround</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-green mt-0.5 flex-shrink-0" />
                  <span>Suitable for samples and small orders</span>
                </li>
              </ul>
            </div>
          </StaggerContainer>

          <AnimationWrapper animation="fade-up" className="bg-white rounded-2xl shadow-lg p-10 mb-10">
            <h2 className="text-2xl font-display font-bold text-neutral-dark mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-green" />
              </div>
              We Ship To
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Nigeria", "Ghana", "Kenya", "Tanzania",
                "Cameroon", "South Africa", "Uganda", "Zambia",
                "Zimbabwe", "Ethiopia", "Senegal", "Ivory Coast",
                "Mozambique", "Angola", "DR Congo", "Rwanda"
              ].map((country) => (
                <div key={country} className="flex items-center gap-3 p-4 bg-neutral-bg rounded-xl hover:bg-primary-green/5 transition-colors">
                  <Package className="w-5 h-5 text-primary-green" />
                  <span className="font-medium text-neutral-dark">{country}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-neutral-gray text-center">
              Don't see your country? <Link href="/contact" className="text-primary-green font-semibold hover:underline">Contact us</Link> - we may still be able to arrange delivery.
            </p>
          </AnimationWrapper>

          <AnimationWrapper animation="fade-up" className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-2xl font-display font-bold text-neutral-dark mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-primary-gold" />
              </div>
              Shipping Process
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { step: 1, title: "Place Order", desc: "Confirm your order and payment terms" },
                { step: 2, title: "Quality Inspection", desc: "We inspect all items before shipping" },
                { step: 3, title: "Packaging", desc: "Secure packaging for international transport" },
                { step: 4, title: "Departure", desc: "Ship from Guangzhou port" },
                { step: 5, title: "Arrival", desc: "Clear customs at destination port" },
                { step: 6, title: "Delivery", desc: "Final delivery to your location" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-neutral-bg rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-green to-primary-gold text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark">{item.title}</h3>
                    <p className="text-neutral-gray text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
}
