import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Shield,
  CheckCircle,
  DollarSign,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Package,
} from "lucide-react";
import { categories, getFeaturedProducts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { AnimationWrapper, StaggerContainer } from "@/components/AnimationWrapper";

export default async function HomePage() {
  const products = getFeaturedProducts();

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-green via-secondary-blue to-secondary-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-gold rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-rust rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary-gold rounded-full animate-pulse opacity-60" />
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-primary-gold rounded-full animate-pulse opacity-50" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container-custom relative py-24 md:py-32">
          <div className="max-w-3xl">
            <AnimationWrapper animation="fade-up" delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-gold/20 text-primary-gold rounded-full text-sm font-medium mb-6 animate-pulse-glow">
                <Globe className="w-4 h-4" />
                Serving 1000+ African Retailers
              </span>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 text-balance leading-tight">
                Premium Used Clothing for{" "}
                <span className="gradient-text">Africa</span>
              </h1>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={200}>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Direct sourcing from USA & Europe. Professional quality inspection.
                Reliable sea freight to Nigeria, Ghana, Kenya, and more.
              </p>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary text-lg group">
                  Start Shopping
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/wholesale" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-blue">
                  Wholesale Plans
                </Link>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={500}>
              <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "15K+", label: "Happy Customers" },
                  { value: "50+", label: "African Countries" },
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className="hover-lift cursor-default"
                  >
                    <div className="text-3xl font-bold text-primary-gold">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimationWrapper>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      <section className="py-16 bg-neutral-bg">
        <div className="container-custom">
          <StaggerContainer staggerDelay={100} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "Direct Sourcing", desc: "USA & Europe brands" },
              { icon: Shield, title: "Quality Check", desc: "3-level inspection" },
              { icon: Truck, title: "Sea Freight", desc: "30-45 days delivery" },
              { icon: CheckCircle, title: "Best Prices", desc: "Factory direct" },
            ].map((item, i) => (
              <div
                key={i}
                className="stagger-item bg-white rounded-xl p-6 text-center group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-green/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="font-semibold text-neutral-dark mb-1 group-hover:text-primary-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-gray">{item.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <h2 className="section-title">Shop by Category</h2>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <p className="section-subtitle">
              Explore our wide range of quality used clothing
            </p>
          </AnimationWrapper>

          <StaggerContainer staggerDelay={80} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="stagger-item group relative overflow-hidden rounded-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 16vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-white font-semibold group-hover:translate-x-1 transition-transform">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {category.productCount} items
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-20">
                  <ArrowRight className="w-4 h-4 text-primary-green" />
                </div>
              </Link>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-neutral-bg">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <AnimationWrapper animation="fade-left">
              <div>
                <h2 className="section-title text-left mb-2">
                  Featured Products
                </h2>
                <p className="text-neutral-gray">Top picks for African retailers</p>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-right" delay={100}>
              <Link
                href="/products"
                className="text-primary-green font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
              >
                View All Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimationWrapper>
          </div>

          <StaggerContainer staggerDelay={100} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="stagger-item group bg-white rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden rounded-t-xl">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-primary-rust text-white text-xs font-medium rounded z-10">
                    Grade {product.grade}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="btn-primary text-sm">View Details</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-neutral-gray mb-1 flex items-center gap-1">
                    <Package className="w-3 h-3" />
                    {product.origin} Origin
                  </p>
                  <h3 className="font-medium text-neutral-dark mb-2 line-clamp-2 group-hover:text-primary-green transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary-green">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-xs text-neutral-gray">/pc</span>
                    </div>
                    <span className="text-xs text-neutral-gray flex items-center gap-1">
                      <Zap className="w-3 h-3 text-primary-gold" />
                      MOQ: {product.moq}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-green to-secondary-blue text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="fade-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Wholesale Bales Available
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Get the best deals with our wholesale bale packages. Each bale
                  contains 45-50kg of carefully selected, graded, and packed used
                  clothing ready for your market.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Grade A Premium Selection",
                    "45-50kg per Bale",
                    "Mixed Sizes & Styles",
                    "Factory Direct Prices",
                  ].map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/wholesale" className="btn-primary group">
                  View Wholesale Options
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-right" delay={200}>
              <div className="relative group">
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                    alt="Wholesale bales"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary-gold text-secondary-blue p-6 rounded-xl shadow-xl hover:-translate-y-1 transition-transform cursor-pointer z-10">
                  <div className="text-3xl font-bold">From $120</div>
                  <div className="text-sm opacity-80">per 50kg Bale</div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <h2 className="section-title">Why Choose AfriThrift?</h2>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <p className="section-subtitle">
              Trusted by thousands of retailers across Africa
            </p>
          </AnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Quality Guaranteed",
                desc: "Every item passes our 3-level inspection process before shipping. Grade A/B/C clearly labeled.",
              },
              {
                icon: DollarSign,
                title: "Direct Sourcing",
                desc: "We source directly from USA and Europe, cutting out middlemen for better prices.",
              },
              {
                icon: Shield,
                title: "Expert Support",
                desc: "Our team speaks English, French, and local African languages. WhatsApp support available.",
              },
            ].map((item, i) => (
              <AnimationWrapper 
                key={i} 
                animation="fade-up" 
                delay={i * 100}
                className="text-center p-8 bg-white rounded-2xl hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-gray leading-relaxed">{item.desc}</p>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-bg">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <h2 className="section-title">What Our Customers Say</h2>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <p className="section-subtitle">
              Trusted by retailers across Africa
            </p>
          </AnimationWrapper>

          <StaggerContainer staggerDelay={150} className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Kwame A.",
                location: "Accra, Ghana",
                text: "Best quality used clothes I've sourced. The Grade A bales are excellent for my boutique customers.",
                rating: 5,
              },
              {
                name: "Amina B.",
                location: "Lagos, Nigeria",
                text: "Fast delivery and great communication. I've been ordering for 2 years now. Highly recommend!",
                rating: 5,
              },
              {
                name: "Jean-Pierre M.",
                location: "Douala, Cameroon",
                text: "Professional service and fair prices. The WhatsApp support helps a lot with my broken English.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div 
                key={i} 
                className="stagger-item bg-white rounded-xl p-6 shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-lg relative"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-primary-gold text-primary-gold"
                    />
                  ))}
                </div>
                <p className="text-neutral-gray mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-neutral-gray flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-secondary-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-green rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative">
          <AnimationWrapper animation="fade-up">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get in touch with us today for a free consultation. We help you
                choose the right products for your market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/8613888888888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  WhatsApp Us
                  <WhatsAppIcon className="w-5 h-5 ml-2" />
                </a>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-blue">
                  Contact Form
                </Link>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  );
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
