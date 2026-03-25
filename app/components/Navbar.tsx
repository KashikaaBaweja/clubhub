"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Users, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Features", href: "/#features" },
  { name: "Support", href: "/support" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex justify-center w-[90%] max-w-[1100px] ${
        isScrolled 
          ? "py-2.5 bg-white/75 backdrop-blur-xl border border-black/5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] rounded-full scale-[0.98]" 
          : "py-4 bg-white/60 backdrop-blur-lg border border-white/20 shadow-sm rounded-full"
      }`}
    >
      <div className="w-full px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#008080] to-[#00A896] flex items-center justify-center text-white shadow-md active:scale-95 transition-all">
              <Users size={22} />
            </div>
            <span className="text-xl font-black tracking-tight text-[#021C1E] hidden sm:block">
              ClubHub
            </span>
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-bold text-[#0f172a]/60 hover:text-[#0f172a] transition-all relative group/link"
            >
              {link.name}
              <span className="absolute bottom-1 left-5 right-5 h-[2px] bg-teal-500 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link
            href="/#features"
            className="hidden sm:flex px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#008080] to-[#02C39A] text-white font-black text-sm shadow-[0_8px_20px_rgba(0,128,128,0.2)] hover:scale-[1.05] active:scale-[0.98] transition-all items-center gap-2 group"
          >
            Get Started
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#021C1E] p-2 hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-2xl border border-black/5 rounded-[2.5rem] overflow-hidden shadow-2xl lg:hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-black text-[#021C1E]/80 hover:text-teal-600 px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-black/5 mx-4" />
              <Link
                href="/#features"
                className="w-full py-5 text-center rounded-[2rem] bg-gradient-to-r from-[#008080] to-[#00A896] text-white font-black shadow-xl flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
