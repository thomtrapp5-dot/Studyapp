"use client";

import { motion } from "framer-motion";

interface MarqueeStripProps {
  text: string;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export default function MarqueeStrip({
  text,
  direction = "left",
  speed = 30,
  className = "",
}: MarqueeStripProps) {
  const repeated = Array(20).fill(text).join(" — ");

  return (
    <div
      className={`overflow-hidden whitespace-nowrap border-y border-[#FFC107]/10 py-4 ${className}`}
    >
      <motion.div
        animate={{
          x: direction === "left" ? [0, -2000] : [-2000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block font-[family-name:var(--font-heading)] text-sm md:text-base tracking-[0.2em] uppercase text-[#FFC107]/20"
      >
        {repeated}
      </motion.div>
    </div>
  );
}
