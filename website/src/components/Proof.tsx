"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    quote:
      "I went from a 4 to a 6 in History after using Focus IB for two months. The blocking feature alone changed everything.",
    name: "Priya K.",
    school: "IB DP Year 2, Singapore",
    score: "38 → 42 predicted",
  },
  {
    quote:
      "My Extended Essay felt impossible until the writing suite broke it into manageable chunks with the rubric tracker.",
    name: "Marcus L.",
    school: "IB DP Year 2, Toronto",
    score: "EE Grade: A",
  },
  {
    quote:
      "The scheduler knows when I'm tired before I do. It moved my Math HL to mornings and my CAS reflections to evenings. Genius.",
    name: "Aisha M.",
    school: "IB DP Year 1, Dubai",
    score: "41 predicted",
  },
  {
    quote:
      "I deleted TikTok 3 times and re-downloaded it 3 times. Focus IB just... made it impossible. Finally.",
    name: "Tom H.",
    school: "IB DP Year 2, London",
    score: "Saved 2hrs/day",
  },
];

const competitors = [
  {
    name: "Forest",
    blocking: "Gamified only",
    scheduling: "❌",
    ibSpecific: "❌",
    writing: "❌",
  },
  {
    name: "Freedom",
    blocking: "Basic",
    scheduling: "❌",
    ibSpecific: "❌",
    writing: "❌",
  },
  {
    name: "MyStudyLife",
    blocking: "❌",
    scheduling: "Basic",
    ibSpecific: "Partial",
    writing: "❌",
  },
  {
    name: "Quizlet",
    blocking: "❌",
    scheduling: "❌",
    ibSpecific: "Partial",
    writing: "❌",
  },
  {
    name: "Focus IB",
    blocking: "OS-Level",
    scheduling: "AI-Powered",
    ibSpecific: "✅ Full",
    writing: "✅ Full",
    highlight: true,
  },
];

export default function Proof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section id="proof" ref={sectionRef} className="relative py-32 md:py-48">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="font-[Courier_Prime] text-xs text-[#FFC107]/60 tracking-[0.3em] uppercase">
            04 / The Evidence
          </span>
          <h2 className="font-[Crimson_Pro] text-4xl md:text-6xl font-bold mt-4">
            Don&apos;t take our word.
            <br />
            <span className="text-[#FFC107]">Take theirs.</span>
          </h2>
        </motion.div>

        {/* Testimonial cards - horizontal scroll feel */}
        <div className="relative mb-32">
          <motion.div
            style={{ x: marqueeX }}
            className="flex gap-6 pb-4"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="min-w-[320px] md:min-w-[380px] p-8 bg-[#141414] border border-[#F5F5F5]/5 hover:border-[#FFC107]/20 transition-colors flex-shrink-0 group"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className="w-3 h-3 bg-[#FFC107] rotate-45"
                    />
                  ))}
                </div>
                <p className="font-[Spectral] text-base text-[#F5F5F5]/60 leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[Crimson_Pro] text-sm font-semibold text-[#F5F5F5]">
                      {t.name}
                    </p>
                    <p className="font-[Spectral] text-xs text-[#F5F5F5]/30">
                      {t.school}
                    </p>
                  </div>
                  <span className="font-[Courier_Prime] text-xs text-[#FFC107] px-3 py-1 border border-[#FFC107]/20">
                    {t.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="font-[Crimson_Pro] text-3xl font-bold mb-8 text-center">
            Why settle for <span className="line-through text-[#F5F5F5]/30">half-measures</span>?
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#F5F5F5]/10">
                  <th className="font-[Courier_Prime] text-xs text-[#F5F5F5]/30 text-left py-4 px-4 tracking-wider uppercase">
                    App
                  </th>
                  <th className="font-[Courier_Prime] text-xs text-[#F5F5F5]/30 text-center py-4 px-4 tracking-wider uppercase">
                    Blocking
                  </th>
                  <th className="font-[Courier_Prime] text-xs text-[#F5F5F5]/30 text-center py-4 px-4 tracking-wider uppercase">
                    Scheduling
                  </th>
                  <th className="font-[Courier_Prime] text-xs text-[#F5F5F5]/30 text-center py-4 px-4 tracking-wider uppercase">
                    IB-Specific
                  </th>
                  <th className="font-[Courier_Prime] text-xs text-[#F5F5F5]/30 text-center py-4 px-4 tracking-wider uppercase">
                    Writing Suite
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-[#F5F5F5]/5 ${
                      c.highlight
                        ? "bg-[#FFC107]/5 border-[#FFC107]/20"
                        : ""
                    }`}
                  >
                    <td
                      className={`font-[Crimson_Pro] text-sm py-4 px-4 ${
                        c.highlight
                          ? "text-[#FFC107] font-bold"
                          : "text-[#F5F5F5]/60"
                      }`}
                    >
                      {c.name}
                    </td>
                    <td className="text-center py-4 px-4 font-[Spectral] text-sm text-[#F5F5F5]/40">
                      {c.blocking}
                    </td>
                    <td className="text-center py-4 px-4 font-[Spectral] text-sm text-[#F5F5F5]/40">
                      {c.scheduling}
                    </td>
                    <td className="text-center py-4 px-4 font-[Spectral] text-sm text-[#F5F5F5]/40">
                      {c.ibSpecific}
                    </td>
                    <td className="text-center py-4 px-4 font-[Spectral] text-sm text-[#F5F5F5]/40">
                      {c.writing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Big stat callout */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              number: "$22M+",
              label: "Market opportunity in IB space alone",
              sublabel: "TAM at full penetration",
            },
            {
              number: "200K+",
              label: "IB students every exam session",
              sublabel: "Growing 5% year-over-year",
            },
            {
              number: "0",
              label: "Competitors doing all four",
              sublabel: "Block + Schedule + Write + Study",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 border border-[#FFC107]/10 bg-[#FFC107]/[0.02] text-center"
            >
              <p className="font-[Courier_Prime] text-4xl md:text-5xl text-[#FFC107] font-bold">
                {stat.number}
              </p>
              <p className="font-[Spectral] text-base text-[#F5F5F5]/60 mt-3">
                {stat.label}
              </p>
              <p className="font-[Courier_Prime] text-xs text-[#F5F5F5]/20 mt-1">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
