import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const footerLinks = {
  products: [
    { name: "T-Shirts", href: "/products/t-shirts" },
    { name: "Pants & Jeans", href: "/products/pants" },
    { name: "Jackets", href: "/products/jackets" },
    { name: "Shoes", href: "/products/shoes" },
    { name: "Bales", href: "/products/bales" },
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

export function Footer() {
  return (
    <footer className="bg-secondary-blue text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-gold rounded-lg flex items-center justify-center">
                <span className="text-secondary-blue font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-xl">AfriThrift</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for premium used clothing export to Africa.
              We source directly, inspect quality, and deliver reliability.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="tel:+8613888888888"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                +86 138 8888 8888
              </a>
              <a
                href="mailto:info@afrithrift.com"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@afrithrift.com
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Guangzhou, China</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/8613888888888"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold mb-3">We Ship To</h4>
              <div className="flex flex-wrap gap-2">
                {targetCountries.map((country) => (
                  <span
                    key={country.name}
                    className="px-2 py-1 bg-white/10 rounded text-sm"
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
              © 2024 AfriThrift. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
