"use client";

import { motion } from "framer-motion";

const items = [
  "EXTENDED ESSAY",
  "INTERNAL ASSESSMENT",
  "TOK EXHIBITION",
  "CAS REFLECTIONS",
  "MOCK EXAMS",
  "IA DEADLINES",
  "STUDY SESSIONS",
  "DEEP WORK",
  "FOCUS MODE",
  "NO DISTRACTIONS",
];

export default function Marquee() {
  return (
    <div className="relative py-6 border-y border-[#FFC107]/10 overflow-hidden bg-[#0A0A0A]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex"
      >
        <div className="animate-marquee flex shrink-0">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 px-6 font-[Courier_Prime] text-sm text-[#F5F5F5]/20 whitespace-nowrap uppercase tracking-widest"
            >
              {item}
              <span className="w-1.5 h-1.5 bg-[#FFC107]/30 rotate-45" />
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0">
          {[...items, ...items].map((item, i) => (
            <span
              key={`dup-${i}`}
              className="flex items-center gap-6 px-6 font-[Courier_Prime] text-sm text-[#F5F5F5]/20 whitespace-nowrap uppercase tracking-widest"
            >
              {item}
              <span className="w-1.5 h-1.5 bg-[#FFC107]/30 rotate-45" />
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
