"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const fakeNotifications = [
  { app: "Instagram", text: "sarah_ib posted a story", icon: "📸", delay: 0.5 },
  { app: "TikTok", text: "Your FYP is waiting...", icon: "🎵", delay: 1.8 },
  { app: "WhatsApp", text: "Study group: 23 new messages", icon: "💬", delay: 3.0 },
  { app: "YouTube", text: "New video from your sub", icon: "▶️", delay: 4.5 },
  { app: "Discord", text: "Game night starts in 10 min", icon: "🎮", delay: 5.8 },
  { app: "Snapchat", text: "3 friends sent snaps", icon: "👻", delay: 7.0 },
];

const stats = [
  { value: "4.7h", label: "Average daily screen time for teens", source: "Common Sense Media" },
  { value: "23min", label: "Time to refocus after each distraction", source: "UC Irvine Research" },
  { value: "47%", label: "Of IB students report burnout before exams", source: "IBO Survey" },
  { value: "6x", label: "More likely to miss deadlines without structure", source: "Focus IB Research" },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [showBlock, setShowBlock] = useState(false);
  const [blockedNotifs, setBlockedNotifs] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setShowBlock(true), 8000);
    return () => clearTimeout(t);
  }, [isInView]);

  useEffect(() => {
    if (!showBlock) return;
    const interval = setInterval(() => {
      setBlockedNotifs((prev) => {
        const next = new Set(prev);
        if (next.size < fakeNotifications.length) {
          next.add(next.size);
        }
        return next;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [showBlock]);

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Section label */}
      <div className="absolute top-12 left-6 lg:left-12">
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.5em] text-[#FFC107]/40 uppercase">
          01 / The Problem
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Big statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,5rem)] font-bold leading-[1.05] max-w-4xl">
            Your brain is under
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">siege</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-red-500/30 origin-left -z-0"
              />
            </span>
            .
            <br />
            <span className="text-[#F5F5F5]/30">
              And you&apos;re losing.
            </span>
          </h2>
        </motion.div>

        {/* Interactive notification area */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left: Phone mockup with notifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Phone frame */}
            <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/18] bg-[#111] rounded-[2.5rem] border border-[#333] p-3 shadow-2xl">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0A0A0A] rounded-b-2xl" />

              {/* Screen */}
              <div className="w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#0a0a1a] rounded-[2rem] overflow-hidden relative pt-10 px-3">
                {/* "Studying" header */}
                <div className="text-center mb-4">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[#F5F5F5]/40">
                    Extended Essay — Draft 2
                  </span>
                  <div className="mt-2 w-full h-1 bg-[#F5F5F5]/10 rounded-full">
                    <div className="w-[15%] h-full bg-[#FFC107]/50 rounded-full" />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#F5F5F5]/20 mt-1 block">
                    247 / 4000 words
                  </span>
                </div>

                {/* Notifications sliding in */}
                <div className="space-y-2 mt-4">
                  {fakeNotifications.map((notif, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 300, opacity: 0 }}
                      animate={
                        isInView
                          ? blockedNotifs.has(i)
                            ? { x: 300, opacity: 0, transition: { duration: 0.3 } }
                            : { x: 0, opacity: 1 }
                          : {}
                      }
                      transition={{ delay: notif.delay, duration: 0.5, type: "spring" }}
                      className="relative flex items-center gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/5"
                    >
                      <span className="text-lg">{notif.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-[#F5F5F5]/80">{notif.app}</div>
                        <div className="text-[9px] text-[#F5F5F5]/50 truncate">{notif.text}</div>
                      </div>
                      {blockedNotifs.has(i) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 bg-red-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                        >
                          <span className="text-red-400 font-[family-name:var(--font-mono)] text-xs font-bold">
                            BLOCKED
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Focus IB shield */}
                {showBlock && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-md flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 border-2 border-[#FFC107] rounded-full flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                          stroke="#FFC107"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path d="M9 12l2 2 4-4" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-[family-name:var(--font-mono)] text-[#FFC107] text-sm font-bold tracking-wider">
                      FOCUS IB ACTIVE
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-[#F5F5F5]/40 text-xs mt-2">
                      6 distractions blocked
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#FFC107]/10 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-[#FFC107]/10 rounded-full" />
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#F5F5F5]/70 leading-relaxed mb-8">
              Every <span className="text-[#FFC107]">23 minutes</span>. That&apos;s
              how long it takes your brain to fully refocus after a single
              notification. And you get dozens every hour.
            </p>
            <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#F5F5F5]/70 leading-relaxed mb-8">
              IB doesn&apos;t care about your screen time. Your Extended Essay
              deadline doesn&apos;t move because TikTok was &ldquo;just for a
              minute.&rdquo;
            </p>
            <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#F5F5F5]/50 leading-relaxed">
              Other apps ask you to be disciplined.
              <br />
              <span className="text-[#FFC107] font-medium text-2xl block mt-4 font-[family-name:var(--font-heading)]">
                We remove the choice entirely.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
              className="relative p-6 md:p-8 border border-[#F5F5F5]/5 rounded-sm bg-[#F5F5F5]/[0.02] hover:border-[#FFC107]/20 transition-colors duration-500 group"
            >
              <div className="font-[family-name:var(--font-mono)] text-3xl md:text-4xl font-bold text-[#FFC107] mb-3">
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-body)] text-sm text-[#F5F5F5]/60 leading-relaxed">
                {stat.label}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-[9px] text-[#F5F5F5]/20 mt-3 uppercase tracking-wider">
                {stat.source}
              </div>
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#FFC107] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
