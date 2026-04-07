"use client";

import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Roadmap", "Changelog"],
  },
  {
    title: "Resources",
    links: ["IB Study Guide", "Blog", "Templates", "API Docs"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "GDPR", "Accessibility"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#F5F5F5]/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-6 gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#FFC107] rotate-45" />
                <span className="relative font-[Courier_Prime] font-bold text-[#0A0A0A] text-sm">
                  F
                </span>
              </div>
              <span className="font-[Crimson_Pro] text-lg font-semibold text-[#F5F5F5]">
                Focus<span className="text-[#FFC107]">IB</span>
              </span>
            </div>
            <p className="font-[Spectral] text-sm text-[#F5F5F5]/30 leading-relaxed mb-6 max-w-xs">
              Mastering the IB through Deep Work, Not Busy Work. The only
              productivity platform built exclusively for IB students.
            </p>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/20 hover:text-[#FFC107] transition-colors uppercase tracking-wider"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-[Courier_Prime] text-xs text-[#FFC107]/60 tracking-[0.2em] uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-[Spectral] text-sm text-[#F5F5F5]/30 hover:text-[#F5F5F5] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#F5F5F5]/5 gap-4">
          <p className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/15">
            &copy; {new Date().getFullYear()} Focus IB. All rights reserved.
          </p>

          {/* Giant watermark */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.02 }}
            viewport={{ once: true }}
            className="font-[Crimson_Pro] text-[8rem] md:text-[12rem] font-black absolute bottom-0 right-0 text-[#F5F5F5] leading-none select-none pointer-events-none"
          >
            IB
          </motion.p>

          <p className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/15">
            Built with obsession in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
