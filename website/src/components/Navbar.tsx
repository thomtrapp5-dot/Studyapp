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
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#FFC107]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FFC107] rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
              <span className="relative font-[Courier_Prime] font-bold text-[#0A0A0A] text-lg">
                F
              </span>
            </div>
            <span className="font-[Crimson_Pro] text-xl font-semibold tracking-tight text-[#F5F5F5]">
              Focus<span className="text-[#FFC107]">IB</span>
            </span>
          </a>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-5 py-2 text-sm font-[Spectral] text-[#F5F5F5]/60 hover:text-[#FFC107] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-6 h-[2px] bg-[#FFC107] transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-6">
            <span className="font-[Courier_Prime] text-xs text-[#F5F5F5]/30 tabular-nums">
              {time}
            </span>
            <a
              href="#pricing"
              className="relative px-6 py-2.5 bg-[#FFC107] text-[#0A0A0A] font-[Crimson_Pro] font-semibold text-sm overflow-hidden group"
            >
              <span className="relative z-10">Start Focusing</span>
              <div className="absolute inset-0 bg-[#FFD700] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-[#FFC107] block"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-[#FFC107] block"
            />
            <motion.span
              animate={
                menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className="w-6 h-[2px] bg-[#FFC107] block"
            />
          </button>
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
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-[Crimson_Pro] text-4xl font-semibold text-[#F5F5F5] hover:text-[#FFC107] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 px-10 py-4 bg-[#FFC107] text-[#0A0A0A] font-[Crimson_Pro] font-bold text-xl"
            >
              Start Focusing
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
