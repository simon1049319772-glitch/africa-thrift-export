"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
  products: [
    { name: "T-Shirts", href: "/products?category=t-shirts" },
    { name: "Pants & Jeans", href: "/products?category=pants" },
    { name: "Jackets", href: "/products?category=jackets" },
    { name: "Shoes", href: "/products?category=shoes" },
    { name: "Bales", href: "/products?category=bales" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Quality Control", href: "/about#quality" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Shipping Info", href: "/shipping" },
    { name: "Payment Methods", href: "/payment" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const targetCountries = [
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Tanzania", flag: "🇹🇿" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/8613888888888", label: "WhatsApp" },
];

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <footer className="bg-secondary-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="w-10 h-10 bg-primary-gold rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary-gold/30">
                <span className="text-secondary-blue font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-xl group-hover:text-primary-gold transition-colors">
                AfriThrift
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner for premium used clothing export to Africa.
              We source directly, inspect quality, and deliver reliability.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="tel:+8613888888888"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-gold transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary-gold/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+86 138 8888 8888</span>
              </a>
              <a
                href="mailto:info@afrithrift.com"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-gold transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary-gold/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@afrithrift.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Guangzhou, China</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  onMouseEnter={() => setHoveredSocial(social.label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={cn(
                    "w-11 h-11 bg-white/10 rounded-full flex items-center justify-center",
                    "transition-all duration-300 ease-smooth",
                    "hover:bg-primary-gold hover:scale-110 hover:shadow-lg hover:shadow-primary-gold/30"
                  )}
                  style={{
                    transform: hoveredSocial === social.label ? "translateY(-3px) scale(1.1)" : "none",
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 relative inline-block">
              Products
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-gold rounded" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={cn(
                      "text-gray-300 flex items-center gap-2 transition-all duration-300",
                      "hover:text-primary-gold",
                      hoveredLink === link.name && "translate-x-2 text-primary-gold"
                    )}
                  >
                    {link.name}
                    {hoveredLink === link.name && (
                      <ArrowUpRight className="w-3 h-3 animate-scale-in" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-gold rounded" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={cn(
                      "text-gray-300 flex items-center gap-2 transition-all duration-300",
                      "hover:text-primary-gold",
                      hoveredLink === link.name && "translate-x-2 text-primary-gold"
                    )}
                  >
                    {link.name}
                    {hoveredLink === link.name && (
                      <ArrowUpRight className="w-3 h-3 animate-scale-in" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 relative inline-block">
              Support
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-gold rounded" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={cn(
                      "text-gray-300 flex items-center gap-2 transition-all duration-300",
                      "hover:text-primary-gold",
                      hoveredLink === link.name && "translate-x-2 text-primary-gold"
                    )}
                  >
                    {link.name}
                    {hoveredLink === link.name && (
                      <ArrowUpRight className="w-3 h-3 animate-scale-in" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold mb-3 relative inline-block">
                We Ship To
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-gold rounded" />
              </h4>
              <div className="flex flex-wrap gap-2">
                {targetCountries.map((country) => (
                  <span
                    key={country.name}
                    className="px-3 py-1.5 bg-white/10 rounded-lg text-sm hover:bg-primary-gold/20 hover:text-primary-gold transition-all duration-300 cursor-default"
                  >
                    {country.flag} {country.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024-{new Date().getFullYear()} AfriThrift. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Terms of Service
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
