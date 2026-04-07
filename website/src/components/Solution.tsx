"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden bg-[#FFC107]"
    >
      {/* Ink splash pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0A0A0A] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center relative z-10">
        {/* Horizontal rule reveal */}
        <motion.div
          style={{ width: lineWidth }}
          className="h-[2px] bg-[#0A0A0A] mx-auto mb-16"
        />

        <motion.div style={{ opacity: textOpacity }}>
          <p className="font-[Courier_Prime] text-xs text-[#0A0A0A]/50 tracking-[0.3em] uppercase mb-8">
            02 / The Intervention
          </p>

          <h2 className="font-[Crimson_Pro] text-5xl md:text-7xl lg:text-8xl font-black text-[#0A0A0A] leading-[0.95] mb-8">
            What if your
            <br />
            study app
            <br />
            <span className="relative inline-block">
              actually worked?
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 400 12"
                fill="none"
              >
                <motion.path
                  d="M2 8 C 50 2, 100 12, 150 6 S 250 2, 300 8 S 380 2, 398 6"
                  stroke="#0A0A0A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
              </svg>
            </span>
          </h2>

          <p className="font-[Spectral] text-xl md:text-2xl text-[#0A0A0A]/60 max-w-2xl mx-auto mt-12 leading-relaxed">
            Not another timer. Not another to-do list.
            <br />
            <strong className="text-[#0A0A0A]">
              A strict, brilliant system
            </strong>{" "}
            that blocks what steals your time, schedules what matters, and
            refuses to let you fail.
          </p>
        </motion.div>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-8 mx-auto text-[#0A0A0A]/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
