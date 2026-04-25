import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowRight, Clock, Ship } from "lucide-react";
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
    { name: "Privacy Policy", href: "/privacy" },
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
  { icon: MessageCircle, href: "https://wa.me/8613702915479", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-secondary-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 footer-pattern" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-gold to-primary-gold/80 flex items-center justify-center shadow-lg shadow-primary-gold/30 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                <span className="text-secondary-blue font-bold text-xl font-display">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl">AfriThrift</span>
                <span className="block text-xs text-white/60 -mt-1">Premium Quality</span>
              </div>
            </div>
            <p className="text-white/70 mb-8 max-w-md leading-relaxed">
              Your trusted partner for premium used clothing export to Africa. We source directly, inspect quality, and deliver reliability to 50+ countries.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-gold" />
              </div>
              <div>
                <p className="font-semibold">Support Hours</p>
                <p className="text-sm text-white/60">Mon-Sat: 9AM - 6PM (GMT+8)</p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <a
                href="tel:+8613702915479"
                className="flex items-center gap-3 min-h-[48px] px-3 -mx-3 text-white/70 hover:text-primary-gold transition-colors group rounded-xl hover:bg-white/5"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary-gold/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+86 137 0291 5479</span>
              </a>
              <a
                href="mailto:simon1049319772@gmail.com, 1049319772@qq.com"
                className="flex items-center gap-3 min-h-[48px] px-3 -mx-3 text-white/70 hover:text-primary-gold transition-colors group rounded-xl hover:bg-white/5"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary-gold/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>simon1049319772@gmail.com, 1049319772@qq.com</span>
              </a>
              <div className="flex items-start gap-3 min-h-[48px] px-3 -mx-3 text-white/70 py-2 rounded-xl hover:bg-white/5">
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
                  className={cn(
                    "w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center",
                    "transition-all duration-300 ease-out",
                    "hover:bg-primary-gold hover:scale-110 hover:shadow-lg hover:shadow-primary-gold/30"
                  )}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6 relative inline-block">
              Products
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-gold rounded" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-gold flex items-center gap-2 transition-colors group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-gold rounded" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-gold flex items-center gap-2 transition-colors group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-gold rounded" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-gold flex items-center gap-2 transition-colors group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-display font-semibold mb-4 relative inline-block">
                We Ship To
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-gold rounded" />
              </h4>
              <div className="flex flex-wrap gap-2">
                {targetCountries.map((country) => (
                  <span
                    key={country.name}
                    className="px-3 py-1.5 bg-white/10 rounded-lg text-sm hover:bg-primary-gold/20 hover:text-primary-gold transition-all duration-200 cursor-default"
                  >
                    {country.flag} {country.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Ship className="w-4 h-4" />
                <span>Sea Freight Available</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>30-45 Days Delivery</span>
              </div>
            </div>
            <p className="text-white/60 text-sm">
              © 2024-{new Date().getFullYear()} AfriThrift. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
