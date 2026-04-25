import Link from "next/link";
import Image from "next/image";
import { Package, Truck, Shield, DollarSign, CheckCircle, ArrowRight, Calculator, Star, Zap } from "lucide-react";
import { AnimationWrapper, StaggerContainer } from "@/components/AnimationWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale",
  description: "Get the best deals with our wholesale bale packages. Premium used clothing bales at factory-direct prices with quality guaranteed.",
};

export default function WholesalePage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="relative bg-gradient-to-r from-primary-green via-secondary-blue to-primary-green text-white pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-pattern" />
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <AnimationWrapper animation="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Zap className="w-4 h-4 text-primary-gold" />
                Best Value for Business
              </span>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Wholesale Bales Solutions
              </h1>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={200}>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Get the best deals with our wholesale bale packages. Each bale contains 45-50kg of carefully selected, graded, and packed used clothing ready for your market.
              </p>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={300}>
              <Link href="/contact" className="btn-primary text-lg group">
                Request Wholesale Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-24 -mt-16 relative">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Bale Options</h2>
              <p className="section-subtitle">
                Choose the perfect wholesale package for your business
              </p>
            </div>
          </AnimationWrapper>

          <StaggerContainer staggerDelay={150} className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Bale",
                price: "$180",
                weight: "45kg",
                grade: "A+",
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
                className={`stagger-item relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular ? "ring-2 ring-primary-gold shadow-2xl shadow-primary-gold/20" : "bg-white shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-gold text-secondary-blue text-center py-3 font-bold text-sm">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                    <Star className="w-4 h-4 inline ml-1" />
                  </div>
                )}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
                    <p className="text-sm text-neutral-gray font-medium">Grade {plan.grade}</p>
                    <p className="font-bold text-primary-green text-lg">{plan.weight}/bale</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-neutral-dark mb-3">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-primary-green">
                      {plan.price}
                    </span>
                    <span className="text-neutral-gray">/ bale</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-neutral-gray">
                        <div className="w-6 h-6 rounded-full bg-primary-green/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-primary-green" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={plan.popular ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimationWrapper animation="fade-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-6">
                  Price Calculator
                </h2>
                <p className="text-neutral-gray text-lg mb-10 leading-relaxed">
                  Estimate your total cost including product, shipping, and duties. Contact us for a detailed quote tailored to your needs.
                </p>
                <div className="bg-neutral-bg rounded-2xl p-8 space-y-4">
                  {[
                    { label: "Product Cost", value: "$120 - $180 / bale", icon: Package },
                    { label: "Sea Freight", value: "$30 - $50 / 100kg", icon: Truck },
                    { label: "Customs Duty", value: "~15-20% CIF", icon: Shield },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                      <span className="text-neutral-gray flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-primary-green" />
                        {item.label}
                      </span>
                      <span className="font-semibold text-neutral-dark">{item.value}</span>
                    </div>
                  ))}
                  <div className="border-t-2 border-primary-gold/20 pt-4 flex justify-between items-center">
                    <span className="font-display font-bold text-neutral-dark text-lg">Estimated Total</span>
                    <span className="text-2xl font-bold text-primary-green">$2.8 - $3.5 / kg</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-secondary mt-10 group">
                  <Calculator className="w-5 h-5 mr-2" />
                  Request Detailed Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-right" delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-gold/20 to-primary-green/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                    alt="Shipping containers"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-primary-gold text-secondary-blue p-6 rounded-2xl shadow-2xl animate-bounce-in">
                  <div className="text-4xl font-bold">30-45</div>
                  <div className="text-sm">Days Delivery</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white text-secondary-blue px-5 py-3 rounded-xl shadow-xl animate-float">
                  <div className="text-sm font-semibold">Sea Freight</div>
                  <div className="text-xs text-neutral-gray">Worldwide</div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-bg">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="section-title">Why Choose Our Wholesale?</h2>
              <p className="section-subtitle">
                AfriThrift is your trusted partner for used clothing wholesale
              </p>
            </div>
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
              <div key={i} className="stagger-item feature-card text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary-green/10 to-primary-gold/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="font-display font-semibold text-lg text-neutral-dark mb-2">{item.title}</h3>
                <p className="text-neutral-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary-green via-secondary-blue to-primary-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative">
          <AnimationWrapper animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Start Wholesale?
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Contact us today to discuss your wholesale needs. We offer personalized service and flexible solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/contact" className="btn-primary text-lg group">
                  Get Wholesale Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/8613702915479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white text-lg"
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
