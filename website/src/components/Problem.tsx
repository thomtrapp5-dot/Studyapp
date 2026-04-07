"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const notifications = [
  { app: "Instagram", msg: "sarah_ib posted a story", icon: "📸", delay: 0 },
  {
    app: "TikTok",
    msg: "Your FYP is waiting...",
    icon: "🎵",
    delay: 1.5,
  },
  { app: "Snapchat", msg: "3 new snaps!", icon: "👻", delay: 3 },
  {
    app: "Discord",
    msg: "study-group: anyone doing Bio IA?",
    icon: "💬",
    delay: 4.5,
  },
  {
    app: "YouTube",
    msg: "New video from your sub",
    icon: "▶️",
    delay: 6,
  },
];

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="font-[Courier_Prime]">
      {count}
      {suffix}
    </span>
  );
}

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const stripX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Diagonal stripe accent */}
      <motion.div
        style={{ x: stripX }}
        className="absolute top-20 -left-20 w-[120%] h-24 bg-[#FFC107]/[0.03] -rotate-3 stripe-pattern"
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-[Courier_Prime] text-xs text-[#FFC107]/60 tracking-[0.3em] uppercase">
            01 / The Problem
          </span>
        </motion.div>

        {/* Main statement */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-[Crimson_Pro] text-4xl md:text-6xl font-bold leading-[1.1] mb-8"
            >
              You&apos;re not lazy.
              <br />
              <span className="text-[#FFC107]">
                You&apos;re distracted.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-[Spectral] text-lg text-[#F5F5F5]/50 leading-relaxed mb-12"
            >
              The average IB student loses nearly half their study time to
              notifications, social media, and &ldquo;just one more
              video.&rdquo; That&apos;s not a discipline problem — it&apos;s
              a design problem. Your phone was built to steal your attention.
              We built something to steal it back.
            </motion.p>

            {/* Distraction stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  value: 96,
                  suffix: "×",
                  label: "Phone checks per day",
                  color: "text-red-400",
                },
                {
                  value: 45,
                  suffix: "%",
                  label: "Study time wasted",
                  color: "text-red-400",
                },
                {
                  value: 23,
                  suffix: "min",
                  label: "To refocus after interruption",
                  color: "text-[#FFC107]",
                },
                {
                  value: 7,
                  suffix: "hrs",
                  label: "Daily screen time (ages 16-19)",
                  color: "text-[#FFC107]",
                },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 border border-[#F5F5F5]/5 bg-[#F5F5F5]/[0.02]"
                >
                  <p className={`text-3xl font-bold ${stat.color}`}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-[Spectral] text-xs text-[#F5F5F5]/30 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive distraction simulator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Phone mockup */}
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              {/* Phone frame */}
              <div className="relative bg-[#141414] rounded-[2.5rem] p-3 border border-[#F5F5F5]/10 shadow-2xl shadow-black/50">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl" />

                {/* Screen */}
                <div className="relative bg-[#0A0A0A] rounded-[2rem] overflow-hidden h-[500px] md:h-[560px]">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-8 pb-2">
                    <span className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/40">
                      9:41
                    </span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 border border-[#F5F5F5]/40 rounded-sm">
                        <div className="w-2/3 h-full bg-[#FFC107] rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Essay text (being written) */}
                  <div className="px-6 pt-4">
                    <p className="font-[Courier_Prime] text-[10px] text-[#FFC107]/40 mb-2">
                      Extended Essay — Draft 3
                    </p>
                    <div className="space-y-2">
                      <div className="h-2 bg-[#F5F5F5]/10 rounded w-full" />
                      <div className="h-2 bg-[#F5F5F5]/10 rounded w-4/5" />
                      <div className="h-2 bg-[#F5F5F5]/10 rounded w-full" />
                      <div className="h-2 bg-[#F5F5F5]/10 rounded w-3/5" />
                      <div className="h-2 bg-[#FFC107]/20 rounded w-2/5 animate-pulse" />
                    </div>

                    <p className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/20 mt-4">
                      Word count: 1,847 / 4,000
                    </p>
                  </div>

                  {/* Notifications flooding in */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 space-y-2">
                    {notifications.map((notif, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            delay: notif.delay,
                            type: "spring",
                            stiffness: 100,
                          },
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 bg-[#1a1a1a]/95 backdrop-blur-sm rounded-xl px-3 py-2.5 border border-[#F5F5F5]/5"
                      >
                        <span className="text-lg">{notif.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/60">
                            {notif.app}
                          </p>
                          <p className="font-[Spectral] text-xs text-[#F5F5F5]/40 truncate">
                            {notif.msg}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow effect behind phone */}
              <div className="absolute -inset-10 bg-[#FFC107]/5 rounded-full blur-3xl -z-10" />
            </div>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 7 }}
              className="text-center mt-8 font-[Courier_Prime] text-xs text-red-400/60"
            >
              ↑ This is your &ldquo;study session&rdquo; right now
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
