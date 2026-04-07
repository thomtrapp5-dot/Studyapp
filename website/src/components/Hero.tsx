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
  "Discord",
  "Snapchat",
  "WhatsApp",
  "ChatGPT",
];

export default function Hero() {
  const [phase, setPhase] = useState<"loading" | "blocking" | "revealed">("loading");
  const [blockedIndex, setBlockedIndex] = useState(0);
  const [timerValue, setTimerValue] = useState("00:00:00");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("blocking"), 800);
    const t2 = setTimeout(() => setPhase("revealed"), 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (phase !== "blocking") return;
    const interval = setInterval(() => {
      setBlockedIndex((prev) => (prev + 1) % distractions.length);
    }, 250);
    return () => clearInterval(interval);
  }, [phase]);

  // Timer effect after revealed
  useEffect(() => {
    if (phase !== "revealed") return;
    let seconds = 0;
    const interval = setInterval(() => {
      seconds++;
      const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
      const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      setTimerValue(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFC107]/5 rounded-full blur-[200px]" />

      {/* Phase: Blocking animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "revealed" ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 flex items-center justify-center z-20 ${
          phase === "revealed" ? "pointer-events-none" : ""
        }`}
      >
        {phase === "loading" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 border-2 border-[#FFC107] border-t-transparent rounded-full animate-spin" />
            <span className="font-[family-name:var(--font-mono)] text-[#FFC107] text-sm tracking-widest uppercase">
              Scanning distractions...
            </span>
          </motion.div>
        )}

        {phase === "blocking" && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="w-32 h-32 border-4 border-red-500 rounded-full flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-red-500"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="absolute -inset-4 border-2 border-red-500/30 rounded-full animate-pulse-ring" />
            </div>
            <div className="font-[family-name:var(--font-mono)] text-red-500 text-xl tracking-wider">
              BLOCKING:{" "}
              <span className="text-white">{distractions[blockedIndex]}</span>
            </div>
            <div className="flex gap-2">
              {distractions.slice(0, 6).map((d, i) => (
                <motion.span
                  key={d}
                  initial={{ opacity: 0.3 }}
                  animate={{
                    opacity: blockedIndex === i ? 1 : 0.3,
                    scale: blockedIndex === i ? 1.1 : 1,
                  }}
                  className="px-3 py-1 text-xs font-[family-name:var(--font-mono)] bg-red-500/10 border border-red-500/20 rounded-sm text-red-400 line-through"
                >
                  {d}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Main hero content (revealed) */}
      <motion.div
        style={{ y: titleY, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "revealed" ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Timer badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: phase === "revealed" ? 0 : -20, opacity: phase === "revealed" ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 px-6 py-3 border border-[#FFC107]/30 rounded-full bg-[#FFC107]/5 backdrop-blur-sm"
          >
            <span className="font-[family-name:var(--font-mono)] text-[#FFC107] text-sm tracking-[0.3em]">
              FOCUS SESSION ACTIVE — {timerValue}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            style={{ opacity: subtitleOpacity }}
            className="font-[family-name:var(--font-heading)] text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight"
          >
            <span className="block text-[#F5F5F5]">Stop</span>
            <span
              className="block gradient-text glitch-text"
              data-text="Pretending"
            >
              Pretending
            </span>
            <span className="block text-[#F5F5F5]">
              to Study<span className="text-[#FFC107]">.</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase === "revealed" ? 1 : 0, y: phase === "revealed" ? 0 : 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 max-w-xl font-[family-name:var(--font-body)] text-lg md:text-xl text-[#F5F5F5]/60 leading-relaxed"
          >
            The first productivity platform that doesn&apos;t ask you to focus
            — it <span className="text-[#FFC107] font-medium">forces</span> it.
            Built exclusively for IB students.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: phase === "revealed" ? 1 : 0, y: phase === "revealed" ? 0 : 30 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#pricing"
              className="group relative px-10 py-4 bg-[#FFC107] text-[#0A0A0A] font-[family-name:var(--font-heading)] font-bold text-lg rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,193,7,0.4)]"
            >
              <span className="relative z-10">Start Your Free Trial</span>
              <div className="absolute inset-0 bg-[#FFD700] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#features"
              className="px-10 py-4 border border-[#F5F5F5]/20 text-[#F5F5F5] font-[family-name:var(--font-heading)] font-medium text-lg rounded-sm hover:border-[#FFC107]/50 hover:text-[#FFC107] transition-all duration-300"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Social proof line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "revealed" ? 1 : 0 }}
            transition={{ delay: 1.5 }}
            className="mt-16 flex items-center gap-6 text-sm text-[#F5F5F5]/40 font-[family-name:var(--font-mono)]"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              2,847 students focusing now
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">
              Trusted by IB students in 40+ countries
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "revealed" ? 1 : 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[#F5F5F5]/30 uppercase">
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
