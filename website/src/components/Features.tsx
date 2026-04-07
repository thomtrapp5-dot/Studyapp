"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Feature {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  visual: React.ReactNode;
}

function BlockingVisual() {
  const apps = [
    { name: "Instagram", blocked: true },
    { name: "TikTok", blocked: true },
    { name: "YouTube", blocked: true },
    { name: "Google Scholar", blocked: false },
    { name: "JSTOR", blocked: false },
    { name: "ChatGPT", blocked: true },
  ];

  return (
    <div className="space-y-2">
      {apps.map((app, i) => (
        <motion.div
          key={app.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center justify-between px-4 py-3 border ${
            app.blocked
              ? "border-red-500/20 bg-red-500/5"
              : "border-green-500/20 bg-green-500/5"
          }`}
        >
          <span className="font-[Spectral] text-sm text-[#F5F5F5]/70">
            {app.name}
          </span>
          <span
            className={`font-[Courier_Prime] text-xs px-2 py-1 ${
              app.blocked
                ? "bg-red-500/10 text-red-400"
                : "bg-green-500/10 text-green-400"
            }`}
          >
            {app.blocked ? "BLOCKED" : "ALLOWED"}
          </span>
        </motion.div>
      ))}
      <div className="mt-4 p-3 border border-[#FFC107]/20 bg-[#FFC107]/5">
        <p className="font-[Courier_Prime] text-[10px] text-[#FFC107] tracking-wider">
          FOCUS SESSION ACTIVE — 47:23 remaining
        </p>
        <div className="mt-2 h-1 bg-[#FFC107]/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "62%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h-full bg-[#FFC107] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

function SchedulerVisual() {
  const tasks = [
    {
      time: "08:00",
      task: "Biology IA Research",
      energy: "high",
      tag: "🔬",
    },
    {
      time: "10:30",
      task: "Math HL Problem Set",
      energy: "high",
      tag: "📐",
    },
    { time: "13:00", task: "English Lit Essay Plan", energy: "med", tag: "📝" },
    { time: "15:00", task: "TOK Exhibition Prep", energy: "low", tag: "🤔" },
    {
      time: "17:00",
      task: "Spanish Vocab Review",
      energy: "low",
      tag: "🇪🇸",
    },
  ];

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-green-400 rounded-full" />
        <span className="font-[Courier_Prime] text-[10px] text-green-400">
          ENERGY-AWARE SCHEDULING
        </span>
      </div>
      {tasks.map((t, i) => (
        <motion.div
          key={t.task}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="flex items-center gap-3 p-3 bg-[#F5F5F5]/[0.02] border border-[#F5F5F5]/5 hover:border-[#FFC107]/20 transition-colors group"
        >
          <span className="font-[Courier_Prime] text-xs text-[#F5F5F5]/30 w-12">
            {t.time}
          </span>
          <span className="text-base">{t.tag}</span>
          <span className="font-[Spectral] text-sm text-[#F5F5F5]/70 flex-1 group-hover:text-[#F5F5F5]">
            {t.task}
          </span>
          <div
            className={`w-2 h-2 rounded-full ${
              t.energy === "high"
                ? "bg-green-400"
                : t.energy === "med"
                ? "bg-yellow-400"
                : "bg-blue-400"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

function WritingSuiteVisual() {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-[#FFC107] rounded-full" />
        <span className="font-[Courier_Prime] text-[10px] text-[#FFC107]">
          EXTENDED ESSAY — BIOLOGY
        </span>
      </div>
      <div className="space-y-3 p-4 bg-[#F5F5F5]/[0.02] border border-[#F5F5F5]/5">
        <div className="flex items-center gap-2">
          <span className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/30">
            01
          </span>
          <div className="h-2 bg-[#F5F5F5]/10 rounded flex-1" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/30">
            02
          </span>
          <div className="h-2 bg-[#F5F5F5]/10 rounded w-4/5" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/30">
            03
          </span>
          <div className="h-2 bg-[#FFC107]/30 rounded w-3/5 animate-pulse" />
        </div>
      </div>

      {/* Rubric checklist */}
      <div className="mt-4 space-y-2">
        {[
          { label: "Research Question", done: true },
          { label: "Methodology", done: true },
          { label: "Analysis & Discussion", done: false },
          { label: "Conclusion", done: false },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className={`w-4 h-4 border flex items-center justify-center ${
                item.done
                  ? "border-green-500/50 bg-green-500/10"
                  : "border-[#F5F5F5]/20"
              }`}
            >
              {item.done && (
                <svg
                  className="w-3 h-3 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span
              className={`font-[Spectral] text-xs ${
                item.done ? "text-[#F5F5F5]/50" : "text-[#F5F5F5]/30"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-[Courier_Prime] text-[10px] text-[#F5F5F5]/20">
          2,847 / 4,000 words
        </span>
        <span className="font-[Courier_Prime] text-[10px] text-[#FFC107]">
          71% complete
        </span>
      </div>
    </div>
  );
}

function StudyVaultVisual() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-purple-400 rounded-full" />
        <span className="font-[Courier_Prime] text-[10px] text-purple-400">
          SPACED REPETITION — CHEMISTRY HL
        </span>
      </div>

      {/* Flashcard */}
      <motion.div
        whileInView={{
          rotateY: [0, 180, 180, 0],
        }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 0.5 }}
        className="relative h-40 bg-[#F5F5F5]/[0.03] border border-[#F5F5F5]/10 flex items-center justify-center p-6"
      >
        <div className="text-center">
          <p className="font-[Spectral] text-sm text-[#F5F5F5]/60 mb-2">
            What is the hybridization of SF₆?
          </p>
          <p className="font-[Courier_Prime] text-xs text-[#FFC107]">
            sp³d² — octahedral geometry
          </p>
        </div>
      </motion.div>

      {/* Streak & stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Streak", value: "12 days" },
          { label: "Mastered", value: "67%" },
          { label: "Due today", value: "23" },
        ].map((s) => (
          <div
            key={s.label}
            className="p-3 bg-[#F5F5F5]/[0.02] border border-[#F5F5F5]/5 text-center"
          >
            <p className="font-[Courier_Prime] text-sm text-[#FFC107]">
              {s.value}
            </p>
            <p className="font-[Spectral] text-[10px] text-[#F5F5F5]/30 mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    id: "blocking",
    number: "01",
    title: "Hard Block.",
    tagline: "Not a gentle reminder — a wall.",
    description:
      "OS-level distraction blocking that you can't bypass. Whitelist research tools, block everything else. Your future self will thank you.",
    visual: <BlockingVisual />,
  },
  {
    id: "scheduler",
    number: "02",
    title: "Smart Schedule.",
    tagline: "Your brain has peak hours. We know them.",
    description:
      "AI-powered scheduling that maps your energy levels to your tasks. Hard problems when you're sharp. Reviews when you're fading. Integrated with ManageBac, Google Calendar, and your IB deadlines.",
    visual: <SchedulerVisual />,
  },
  {
    id: "writing",
    number: "03",
    title: "Write Better.",
    tagline: "IB rubrics built in. No more guessing.",
    description:
      "A writing suite with IB-specific templates, rubric checklists, and AI feedback on structure and clarity — not ghostwriting, genuine improvement. Track your EE, IA, and TOK all in one place.",
    visual: <WritingSuiteVisual />,
  },
  {
    id: "vault",
    number: "04",
    title: "Study Vault.",
    tagline: "Active recall. Spaced repetition. Actually learning.",
    description:
      "Flashcards, past paper banks, and spaced review — all IB-subject-specific. Stop re-reading notes. Start actually remembering.",
    visual: <StudyVaultVisual />,
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const featureOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity: featureOpacity }}
      className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
        !isEven ? "md:[direction:rtl]" : ""
      }`}
    >
      {/* Text */}
      <div className={!isEven ? "md:[direction:ltr]" : ""}>
        <span className="font-[Courier_Prime] text-xs text-[#FFC107]/40 tracking-[0.3em]">
          {feature.number}
        </span>
        <h3 className="font-[Crimson_Pro] text-4xl md:text-5xl font-bold text-[#F5F5F5] mt-2 mb-3">
          {feature.title}
        </h3>
        <p className="font-[Crimson_Pro] text-xl text-[#FFC107] italic mb-6">
          {feature.tagline}
        </p>
        <p className="font-[Spectral] text-base text-[#F5F5F5]/45 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Visual */}
      <div
        className={`${
          !isEven ? "md:[direction:ltr]" : ""
        } bg-[#141414] p-6 md:p-8 border border-[#F5F5F5]/5`}
      >
        {feature.visual}
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 md:py-48">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="font-[Courier_Prime] text-xs text-[#FFC107]/60 tracking-[0.3em] uppercase">
            03 / The Arsenal
          </span>
          <h2 className="font-[Crimson_Pro] text-4xl md:text-6xl font-bold mt-4">
            Four weapons.
            <br />
            <span className="text-[#FFC107]">Zero excuses.</span>
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="space-y-32 md:space-y-48">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
