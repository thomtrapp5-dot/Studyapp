"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Free",
    tagline: "Dip your toes",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Basic Pomodoro timer",
      "3 blocked apps per session",
      "1 writing template",
      "50 flashcards",
      "Basic analytics",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    tagline: "The real deal",
    monthlyPrice: 7.99,
    yearlyPrice: 59,
    features: [
      "Unlimited app blocking",
      "AI-powered scheduling",
      "All IB writing templates",
      "Unlimited flashcards + past papers",
      "Full analytics dashboard",
      "Energy-aware scheduling",
      "Calendar integrations",
      "Priority support",
    ],
    cta: "Lock In",
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "School",
    tagline: "For coordinators & institutions",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Everything in Pro",
      "Coordinator dashboard",
      "Bulk student licenses",
      "ManageBac integration",
      "Academic integrity reports",
      "Custom blocking policies",
      "Dedicated support",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#FFC107_0%,transparent_50%)] opacity-[0.03]" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-[Courier_Prime] text-xs text-[#FFC107]/60 tracking-[0.3em] uppercase">
            05 / Investment
          </span>
          <h2 className="font-[Crimson_Pro] text-4xl md:text-6xl font-bold mt-4">
            Less than a coffee
            <br />
            <span className="text-[#FFC107]">per week.</span>
          </h2>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            className={`font-[Spectral] text-sm ${
              !yearly ? "text-[#F5F5F5]" : "text-[#F5F5F5]/30"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            className="relative w-14 h-7 bg-[#1a1a1a] border border-[#FFC107]/20 rounded-full p-1"
            aria-label="Toggle billing period"
          >
            <motion.div
              animate={{ x: yearly ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-5 h-5 bg-[#FFC107] rounded-full"
            />
          </button>
          <span
            className={`font-[Spectral] text-sm flex items-center gap-2 ${
              yearly ? "text-[#F5F5F5]" : "text-[#F5F5F5]/30"
            }`}
          >
            Yearly
            {yearly && (
              <span className="font-[Courier_Prime] text-[10px] text-green-400 px-2 py-0.5 border border-green-400/20 bg-green-400/5">
                SAVE 38%
              </span>
            )}
          </span>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-8 flex flex-col ${
                plan.highlight
                  ? "bg-[#141414] border-2 border-[#FFC107] shadow-[0_0_60px_-15px_rgba(255,193,7,0.2)]"
                  : "bg-[#141414] border border-[#F5F5F5]/5"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-[#FFC107] text-[#0A0A0A]">
                  <span className="font-[Courier_Prime] text-[10px] font-bold tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-[Crimson_Pro] text-2xl font-bold text-[#F5F5F5]">
                  {plan.name}
                </h3>
                <p className="font-[Spectral] text-sm text-[#F5F5F5]/40 mt-1">
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-8">
                <AnimatePresence mode="wait">
                  {plan.monthlyPrice !== null ? (
                    <motion.div
                      key={yearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-baseline gap-1"
                    >
                      <span className="font-[Courier_Prime] text-5xl font-bold text-[#FFC107]">
                        $
                        {yearly
                          ? plan.yearlyPrice
                          : plan.monthlyPrice}
                      </span>
                      <span className="font-[Spectral] text-sm text-[#F5F5F5]/30">
                        /{yearly ? "year" : "month"}
                      </span>
                    </motion.div>
                  ) : (
                    <p className="font-[Courier_Prime] text-2xl text-[#FFC107]">
                      Custom
                    </p>
                  )}
                </AnimatePresence>
                {plan.yearlyPrice !== null &&
                  plan.yearlyPrice > 0 &&
                  yearly && (
                    <p className="font-[Courier_Prime] text-xs text-[#F5F5F5]/20 mt-2">
                      That&apos;s ${(plan.yearlyPrice / 12).toFixed(2)}/month
                    </p>
                  )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#FFC107] rotate-45 mt-2 shrink-0" />
                    <span className="font-[Spectral] text-sm text-[#F5F5F5]/50">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-3.5 font-[Crimson_Pro] font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#FFC107] text-[#0A0A0A] hover:bg-[#FFD700]"
                    : "border border-[#F5F5F5]/20 text-[#F5F5F5]/60 hover:border-[#FFC107]/50 hover:text-[#FFC107]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-[Courier_Prime] text-xs text-[#F5F5F5]/20"
        >
          14-day free trial on Pro • No credit card required • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
