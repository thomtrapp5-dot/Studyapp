"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const distractions = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Netflix",
  "Twitter",
  "Reddit",
  "Snapchat",
  "Discord",
  "ChatGPT",
  "WhatsApp",
];

export default function Hero() {
  const [blockedCount, setBlockedCount] = useState(0);
  const [currentDistraction, setCurrentDistraction] = useState(0);
  const [showBlocked, setShowBlocked] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDistraction((prev) => (prev + 1) % distractions.length);
      setShowBlocked(true);
      setBlockedCount((prev) => prev + 1);
      setTimeout(() => setShowBlocked(false), 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_70%)]" />

      {/* Floating blocked notifications */}
      <div className="absolute top-32 right-8 md:right-16 z-10">
        {showBlocked && (
          <motion.div
            key={blockedCount}
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="bg-[#1a1a1a] border border-red-500/30 px-5 py-3 flex items-center gap-3 shadow-2xl"
          >
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <div>
              <p className="font-[Courier_Prime] text-xs text-red-400">
                BLOCKED
              </p>
              <p className="font-[Spectral] text-sm text-[#F5F5F5]/80">
                {distractions[currentDistraction]}
              </p>
            </div>
            <span className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/30 ml-4">
              ×
            </span>
          </motion.div>
        )}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-[1200px] mx-auto px-6 text-center"
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#FFC107]/20 bg-[#FFC107]/5"
        >
          <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse" />
          <span className="font-[Courier_Prime] text-xs text-[#FFC107] tracking-widest uppercase">
            Built for 200,000+ IB students worldwide
          </span>
        </motion.div>

        {/* Main heading - dramatic split layout */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-[Crimson_Pro] text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight"
          >
            <span className="text-[#F5F5F5]">Your IB is</span>
            <br />
            <span className="relative inline-block">
              <span className="gradient-text">not a joke.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFC107] origin-left"
              />
            </span>
          </motion.h1>

          {/* Crossed out distractions floating behind */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 1.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          >
            <span className="font-[Crimson_Pro] text-[20vw] font-black text-[#FFC107] line-through decoration-4">
              FOCUS
            </span>
          </motion.div>
        </div>

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-[Spectral] text-lg md:text-xl text-[#F5F5F5]/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Stop pretending to study. Focus IB{" "}
          <span className="text-[#FFC107]">blocks your distractions</span>,{" "}
          <span className="text-[#FFC107]">owns your schedule</span>, and{" "}
          <span className="text-[#FFC107]">forces results</span> — because your
          Extended Essay won&apos;t write itself.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#pricing"
            className="group relative px-10 py-4 bg-[#FFC107] text-[#0A0A0A] font-[Crimson_Pro] font-bold text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Lock In Now
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#FFD700] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#features"
            className="px-10 py-4 border border-[#F5F5F5]/20 text-[#F5F5F5]/70 font-[Spectral] text-lg hover:border-[#FFC107]/50 hover:text-[#FFC107] transition-all duration-300"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stats ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { number: "200K+", label: "IB Students Globally" },
            { number: "7hrs", label: "Avg. Daily Screen Time" },
            { number: "45%", label: "Time Lost to Distractions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[Courier_Prime] text-2xl md:text-3xl text-[#FFC107] font-bold">
                {stat.number}
              </p>
              <p className="font-[Spectral] text-xs text-[#F5F5F5]/30 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/20 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#FFC107] to-transparent"
        />
      </motion.div>
    </section>
  );
}
