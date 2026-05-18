"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-slate-900 leading-tight">
              House of Dentistry
            </h1>
            <p className="text-xs text-slate-500">Your Smile, Our Priority</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+918072982811"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all"
          >
            <Phone size={16} />
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 bg-white border-t border-slate-100 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-slate-700 hover:text-emerald-600 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+918072982811"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold"
          >
            <Phone size={16} />
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
