"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function LiveTimer() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  return (
    <span className="font-[Courier_Prime] text-[#FFC107] tabular-nums">
      {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
    </span>
  );
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FFC107_0%,transparent_60%)] opacity-[0.05]"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="max-w-[900px] mx-auto px-6 md:px-10 text-center relative z-10"
      >
        {/* Timer callout */}
        <div className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 border border-[#FFC107]/20 bg-[#FFC107]/5">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="font-[Courier_Prime] text-xs text-[#F5F5F5]/40">
            Time on this page:{" "}
          </span>
          <LiveTimer />
        </div>

        <h2 className="font-[Crimson_Pro] text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8">
          <span className="text-[#F5F5F5]">That time?</span>
          <br />
          <span className="gradient-text">Gone forever.</span>
        </h2>

        <p className="font-[Spectral] text-lg md:text-xl text-[#F5F5F5]/40 max-w-xl mx-auto mb-12 leading-relaxed">
          Every minute you spend deciding is a minute you&apos;re not studying.
          Your IB exams don&apos;t care about your excuses. Neither do we.
        </p>

        {/* Big CTA */}
        <motion.a
          href="#pricing"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block relative group"
        >
          <div className="absolute -inset-1 bg-[#FFC107] opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
          <div className="relative px-16 py-6 bg-[#FFC107] text-[#0A0A0A] font-[Crimson_Pro] font-black text-2xl">
            Stop Scrolling. Start Focusing.
          </div>
        </motion.a>

        <p className="mt-6 font-[Courier_Prime] text-xs text-[#F5F5F5]/15">
          Free trial • No credit card • Your future self is watching
        </p>

        {/* Floating decorative elements */}
        <div className="absolute top-1/2 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#FFC107]/20 to-transparent hidden md:block" />
        <div className="absolute top-1/2 right-10 w-px h-40 bg-gradient-to-b from-transparent via-[#FFC107]/20 to-transparent hidden md:block" />
      </motion.div>
    </section>
  );
}
