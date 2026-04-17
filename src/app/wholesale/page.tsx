import Link from "next/link";
import Image from "next/image";
import { Package, Truck, Shield, DollarSign, CheckCircle, ArrowRight, Calculator } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale",
  description: "Get the best deals with our wholesale bale packages. Premium used clothing bales at factory-direct prices with quality guaranteed.",
};

export default function WholesalePage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="bg-gradient-to-r from-primary-green to-secondary-blue text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Wholesale Bales Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Get the best deals with our wholesale bale packages. Each bale contains 
              45-50kg of carefully selected, graded, and packed used clothing ready for your market.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Wholesale Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Bale Options</h2>
          <p className="section-subtitle">
            Choose the perfect wholesale package for your business
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Bale",
                price: "$180",
                weight: "45kg",
                grade: "A",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
                features: [
                  "Grade A+ Quality Only",
                  "Brand Name Items Included",
                  "Low Defect Rate (<3%)",
                  "Mixed Sizes",
                  "Premium Packaging",
                ],
                popular: true,
              },
              {
                title: "Standard Bale",
                price: "$150",
                weight: "50kg",
                grade: "A/B",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
                features: [
                  "Grade A & B Mix",
                  "Popular Brands",
                  "Defect Rate (<8%)",
                  "Mixed Sizes",
                  "Standard Packaging",
                ],
                popular: false,
              },
              {
                title: "Economy Bale",
                price: "$120",
                weight: "50kg",
                grade: "B/C",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
                features: [
                  "Grade B & C Mix",
                  "Value Brands",
                  "Defect Rate (<15%)",
                  "Mixed Sizes",
                  "Basic Packaging",
                ],
                popular: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                  plan.popular ? "ring-2 ring-primary-gold" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-gold text-secondary-blue text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="relative h-48">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg">
                    <p className="text-sm text-neutral-gray">Grade {plan.grade}</p>
                    <p className="font-bold text-primary-green">{plan.weight}/bale</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-primary-green">
                      {plan.price}
                    </span>
                    <span className="text-neutral-gray">/ bale</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-neutral-gray">
                        <CheckCircle className="w-4 h-4 text-secondary-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={plan.popular ? "btn-primary w-full" : "btn-secondary w-full"}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-neutral-dark mb-6">
                Price Calculator
              </h2>
              <p className="text-neutral-gray mb-8">
                Estimate your total cost including product, shipping, and duties. 
                Contact us for a detailed quote.
              </p>
              <div className="bg-neutral-bg rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-gray">Product Cost</span>
                  <span className="font-semibold">$150 - $180 / bale</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-gray">Sea Freight</span>
                  <span className="font-semibold">$30 - $50 / 100kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-gray">Customs Duty</span>
                  <span className="font-semibold">~15-20% CIF</span>
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="font-semibold text-neutral-dark">Estimated Total</span>
                  <span className="text-xl font-bold text-primary-green">$2.8 - $3.5 / kg</span>
                </div>
              </div>
              <Link href="/contact" className="btn-primary mt-6">
                <Calculator className="w-5 h-5 mr-2" />
                Request Detailed Quote
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                alt="Shipping containers"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-gold text-secondary-blue p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">30-45</div>
                <div className="text-sm">Days Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-bg">
        <div className="container-custom">
          <h2 className="section-title">Why Choose Our Wholesale?</h2>
          <p className="section-subtitle">
            AfriThrift is your trusted partner for used clothing wholesale
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Package,
                title: "Direct Sourcing",
                desc: "We source directly from USA and Europe, cutting out middlemen for better prices.",
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                desc: "Every bale passes our 3-level quality inspection before shipping.",
              },
              {
                icon: Truck,
                title: "Reliable Shipping",
                desc: "We work with trusted logistics partners for safe and timely delivery.",
              },
              {
                icon: DollarSign,
                title: "Competitive Prices",
                desc: "Factory-direct pricing with flexible payment terms for regular customers.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="font-semibold text-neutral-dark mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Wholesale?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your wholesale needs. We offer personalized 
            service and flexible solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Wholesale Quote
            </Link>
            <a
              href="https://wa.me/8613888888888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-secondary-blue"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
