import Link from "next/link";
import Image from "next/image";
import { Package, Truck, Shield, DollarSign, CheckCircle, ArrowRight, Calculator, Star } from "lucide-react";
import { AnimationWrapper, StaggerContainer } from "@/components/AnimationWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale",
  description: "Get the best deals with our wholesale bale packages. Premium used clothing bales at factory-direct prices with quality guaranteed.",
};

export default function WholesalePage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="relative bg-gradient-to-r from-primary-green to-secondary-blue text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <AnimationWrapper animation="fade-up">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Wholesale Bales Solutions
              </h1>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={100}>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get the best deals with our wholesale bale packages. Each bale contains 
                45-50kg of carefully selected, graded, and packed used clothing ready for your market.
              </p>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={200}>
              <Link href="/contact" className="btn-primary group">
                Request Wholesale Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <h2 className="section-title">Our Bale Options</h2>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <p className="section-subtitle">
              Choose the perfect wholesale package for your business
            </p>
          </AnimationWrapper>

          <StaggerContainer staggerDelay={150} className="grid md:grid-cols-3 gap-8">
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
                className={`stagger-item card-interactive bg-white rounded-xl overflow-hidden ${
                  plan.popular ? "ring-2 ring-primary-gold" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-gold text-secondary-blue text-center py-2 font-semibold animate-pulse-glow">
                    Most Popular
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm text-neutral-gray">Grade {plan.grade}</p>
                    <p className="font-bold text-primary-green">{plan.weight}/bale</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2 group-hover:text-primary-green transition-colors">
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
                        <CheckCircle className="w-4 h-4 text-secondary-green flex-shrink-0" />
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
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="fade-left">
              <div>
                <h2 className="text-3xl font-display font-bold text-neutral-dark mb-6">
                  Price Calculator
                </h2>
                <p className="text-neutral-gray mb-8 leading-relaxed">
                  Estimate your total cost including product, shipping, and duties. 
                  Contact us for a detailed quote.
                </p>
                <div className="bg-neutral-bg rounded-xl p-6 space-y-4 border border-neutral-light">
                  {[
                    { label: "Product Cost", value: "$150 - $180 / bale", icon: Package },
                    { label: "Sea Freight", value: "$30 - $50 / 100kg", icon: Truck },
                    { label: "Customs Duty", value: "~15-20% CIF", icon: Shield },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-white transition-colors">
                      <span className="text-neutral-gray flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-primary-green" />
                        {item.label}
                      </span>
                      <span className="font-semibold text-neutral-dark">{item.value}</span>
                    </div>
                  ))}
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
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-right" delay={200}>
              <div className="relative group">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                  alt="Shipping containers"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg transition-shadow duration-500 group-hover:shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary-gold text-secondary-blue p-6 rounded-xl shadow-xl animate-bounce-in hover-lift cursor-pointer">
                  <div className="text-3xl font-bold">30-45</div>
                  <div className="text-sm">Days Delivery</div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-bg">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <h2 className="section-title">Why Choose Our Wholesale?</h2>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <p className="section-subtitle">
              AfriThrift is your trusted partner for used clothing wholesale
            </p>
          </AnimationWrapper>

          <StaggerContainer staggerDelay={100} className="grid md:grid-cols-4 gap-6">
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
              <div key={i} className="stagger-item card-interactive bg-white rounded-xl p-6 text-center">
                <div className="feature-icon mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="font-semibold text-neutral-dark mb-2 group-hover:text-primary-green transition-colors">{item.title}</h3>
                <p className="text-sm text-neutral-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-secondary-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-green rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative">
          <AnimationWrapper animation="fade-up">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Start Wholesale?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact us today to discuss your wholesale needs. We offer personalized 
                service and flexible solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary group">
                  Get Wholesale Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
}
