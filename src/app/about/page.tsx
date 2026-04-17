import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, Award, Truck, ArrowRight, Target, Heart, Globe } from "lucide-react";
import { AnimationWrapper, StaggerContainer } from "@/components/AnimationWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AfriThrift - your trusted partner for premium used clothing export to Africa with 10+ years of experience.",
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="relative bg-gradient-to-br from-primary-green via-secondary-blue to-primary-green text-white pt-28 pb-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-pattern" />
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <AnimationWrapper animation="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Globe className="w-4 h-4 text-primary-gold" />
                10+ Years of Excellence
              </span>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                About AfriThrift
              </h1>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={200}>
              <p className="text-xl text-white/80 leading-relaxed">
                Your trusted partner for premium used clothing export to Africa. We connect quality sourcing with reliable logistics to serve retailers across the continent.
              </p>
            </AnimationWrapper>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-bg to-transparent" />
      </section>

      <section className="py-24 -mt-16 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimationWrapper animation="fade-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-6">
                  Our Story
                </h2>
                <div className="space-y-5 text-neutral-gray text-lg leading-relaxed">
                  <p>
                    Founded in 2014, AfriThrift started with a simple mission: to provide African retailers with access to high-quality used clothing at fair prices.
                  </p>
                  <p>
                    Based in Guangzhou, China, we leverage our strategic location near major textile sourcing hubs to curate the best selection of used clothing from the USA and Europe.
                  </p>
                  <p>
                    Over the past 10 years, we have served over 15,000 retailers across 50+ African countries, earning a reputation for reliability, quality, and exceptional customer service.
                  </p>
                  <p>
                    Our team speaks English, French, and local African languages, ensuring smooth communication with our diverse customer base.
                  </p>
                </div>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-right" delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-gold/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
                    alt="Our warehouse"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-gold text-secondary-blue p-6 rounded-2xl shadow-2xl animate-bounce-in">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-sm opacity-80">Years Experience</div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Numbers</h2>
              <p className="section-subtitle">
                Key statistics that define our business
              </p>
            </div>
          </AnimationWrapper>

          <StaggerContainer staggerDelay={100} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years in Business", icon: Award },
              { number: "15K+", label: "Happy Customers", icon: Users },
              { number: "50+", label: "Countries Served", icon: Globe },
              { number: "50M+", label: "Pieces Delivered", icon: Package },
            ].map((stat, i) => (
              <div key={i} className="stagger-item stat-card">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-gold/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary-gold" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-green mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-neutral-bg" id="quality">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="section-title">Quality Control Process</h2>
              <p className="section-subtitle">
                Every piece of clothing goes through rigorous inspection
              </p>
            </div>
          </AnimationWrapper>

          <StaggerContainer staggerDelay={100} className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: 1, title: "Sourcing", desc: "Direct collection from USA & Europe", icon: Package },
              { step: 2, title: "Arrival", desc: "Import to Guangzhou warehouse", icon: Truck },
              { step: 3, title: "Sorting", desc: "Categorization by type & size", icon: ArrowRight },
              { step: 4, title: "Inspection", desc: "3-level quality check", icon: CheckCircle },
              { step: 5, title: "Grading", desc: "Grade A/B/C classification", icon: Award },
              { step: 6, title: "Packing", desc: "Secure packaging for shipping", icon: Package },
            ].map((item, i) => (
              <div key={i} className="stagger-item feature-card text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-green to-primary-gold text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {item.step}
                </div>
                <div className="w-14 h-14 mx-auto mb-4 mt-4 rounded-2xl bg-primary-green/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="font-display font-semibold text-neutral-dark mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-gray">{item.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Values</h2>
              <p className="section-subtitle">
                The principles that guide everything we do
              </p>
            </div>
          </AnimationWrapper>

          <StaggerContainer staggerDelay={150} className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Quality First", desc: "We never compromise on quality. Every item is inspected before it reaches you." },
              { icon: Heart, title: "Customer Focus", desc: "Our customers are our priority. We provide personalized service and support in multiple languages." },
              { icon: CheckCircle, title: "Transparency", desc: "Clear pricing, honest descriptions, and no hidden fees. What you see is what you get." },
            ].map((value, i) => (
              <div key={i} className="stagger-item feature-card">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary-green/10 to-primary-gold/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-gray leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-green via-secondary-blue to-primary-green rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-pattern" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of successful retailers who trust AfriThrift for their used clothing supply. Let us help you grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/contact" className="btn-primary text-lg group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/products" className="btn-outline-white text-lg">
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Package({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
