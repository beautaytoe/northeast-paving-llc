"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white shadow-lg">
      {/* Top bar */}
      <div className="bg-orange text-white text-sm py-1.5 px-4 text-center font-medium">
        Serving Southeastern CT for 30+ Years — Licensed & Insured — W.B.E.
        Certified
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-heading text-2xl font-bold tracking-wide uppercase">
            Northeast Paving
          </span>
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            LLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide hover:text-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:860-447-1518"
            className="hidden sm:flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-5 py-2.5 rounded-md transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            860-447-1518
          </a>
          <a
            href="tel:860-447-1518"
            className="sm:hidden flex items-center justify-center w-10 h-10 bg-orange rounded-md"
            aria-label="Call 860-447-1518"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-charcoal border-t border-white/10"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium uppercase tracking-wide py-3 px-3 rounded-md hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/free-estimate"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center bg-orange hover:bg-orange-dark text-white font-bold py-3 px-4 rounded-md transition-colors uppercase tracking-wide text-sm"
              >
                Get a Free Estimate
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
