"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Features", href: "#features" },
  { label: "Proof", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 300) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#FFC107]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-[#FFC107] rounded-sm rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
              <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-mono)] text-[#0A0A0A] font-bold text-lg">
                F
              </span>
            </div>
            <span className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight text-[#F5F5F5]">
              Focus<span className="text-[#FFC107]">IB</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-[family-name:var(--font-body)] transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#FFC107]"
                    : "text-[#F5F5F5]/60 hover:text-[#F5F5F5]"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#FFC107]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#pricing"
              className="hidden md:block px-6 py-2.5 bg-[#FFC107] text-[#0A0A0A] font-[family-name:var(--font-heading)] font-semibold text-sm rounded-sm hover:bg-[#FFD700] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.3)]"
            >
              Start Focusing
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-[#F5F5F5]"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[2px] bg-[#F5F5F5]"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-[#F5F5F5]"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#F5F5F5] hover:text-[#FFC107] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 px-10 py-4 bg-[#FFC107] text-[#0A0A0A] font-[family-name:var(--font-heading)] font-bold text-lg rounded-sm"
            >
              Start Focusing
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
