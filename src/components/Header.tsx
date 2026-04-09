"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Globe } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Wholesale", href: "/wholesale" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-xl text-primary-green">
                AfriThrift
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-dark hover:text-primary-green font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-neutral-gray hover:text-primary-green">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </button>

            <a
              href="https://wa.me/8613888888888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get Quote
            </a>
          </div>

          <button
            className="md:hidden p-2 text-neutral-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-dark hover:text-primary-green font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/8613888888888"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
