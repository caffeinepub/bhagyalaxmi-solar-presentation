import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Slide3Phase1() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const steps = [
    {
      icon: "🌐",
      title: t.slide3Step1Title,
      desc: (
        <>
          <a
            href="https://pmsuryaghar.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
            style={{ color: "oklch(0.45 0.12 220)" }}
            onClick={(e) => e.stopPropagation()}
          >
            pmsuryaghar.gov.in
          </a>{" "}
          — {t.slide3Step1Desc}
        </>
      ),
    },
    {
      icon: "📋",
      title: t.slide3Step2Title,
      desc: t.slide3Step2Desc,
    },
    {
      icon: "⚡",
      title: t.slide3Step3Title,
      desc: t.slide3Step3Desc,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-16 slide-scroll">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
        {/* Phase badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="phase-badge px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
            {t.slide3Phase}
          </div>
          <div
            className="h-px flex-1"
            style={{ background: "oklch(0.45 0.12 220 / 0.2)" }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-black"
          style={{ color: "oklch(0.15 0.04 240)" }}
        >
          {t.slide3Title}{" "}
          <span className="text-gradient-gold">{t.slide3TitleHighlight}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-base sm:text-lg"
          style={{ color: "oklch(0.35 0.06 220)" }}
        >
          {t.slide3Intro}
        </motion.p>

        {/* Steps */}
        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="flex gap-4 items-start p-5 rounded-xl card-glow transition-all"
              style={{
                background: "oklch(0.93 0.02 85)",
                border: "1px solid oklch(0.80 0.05 220)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Step number */}
              <div className="step-number text-base font-black">{i + 1}</div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{step.icon}</span>
                  <h3
                    className="font-body font-bold text-lg sm:text-xl"
                    style={{ color: "oklch(0.20 0.05 240)" }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="font-body text-sm sm:text-base leading-relaxed"
                  style={{ color: "oklch(0.30 0.06 225)" }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center gap-3 px-4 py-3 rounded-lg"
          style={{
            background: "oklch(0.55 0.18 75 / 0.07)",
            border: "1px solid oklch(0.55 0.18 75 / 0.2)",
          }}
        >
          <span className="text-xl">⏱️</span>
          <p
            className="font-body text-sm"
            style={{ color: "oklch(0.35 0.10 200)" }}
          >
            {t.slide3TimelineNote}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
