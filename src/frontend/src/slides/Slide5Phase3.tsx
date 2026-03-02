import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Slide5Phase3() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const points = [
    {
      icon: "🔧",
      title: t.slide5P1Title,
      desc: t.slide5P1Desc,
      color: "0.50 0.15 70",
      borderColor: "0.55 0.18 75",
    },
    {
      icon: "🏆",
      title: t.slide5P2Title,
      desc: t.slide5P2Desc,
      color: "0.40 0.14 160",
      borderColor: "0.45 0.15 155",
    },
    {
      icon: "⚡",
      title: t.slide5P3Title,
      desc: t.slide5P3Desc,
      color: "0.40 0.12 220",
      borderColor: "0.45 0.12 220",
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
            {t.slide5Phase}
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
          {t.slide5Title}{" "}
          <span className="text-gradient-gold">{t.slide5TitleHighlight}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-base sm:text-lg"
          style={{ color: "oklch(0.35 0.06 220)" }}
        >
          {t.slide5Intro}
        </motion.p>

        {/* Points */}
        <div className="flex flex-col gap-4">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="flex gap-4 items-start p-5 rounded-xl card-glow transition-all"
              style={{
                background: "oklch(0.93 0.02 85)",
                border: `1px solid oklch(${point.borderColor} / 0.25)`,
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Icon bubble */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: `oklch(${point.borderColor} / 0.10)`,
                  border: `1px solid oklch(${point.borderColor} / 0.25)`,
                }}
              >
                {point.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="font-body font-bold text-lg sm:text-xl mb-1"
                  style={{ color: `oklch(${point.color})` }}
                >
                  {point.title}
                </h3>
                <p
                  className="font-body text-sm sm:text-base leading-relaxed"
                  style={{ color: "oklch(0.30 0.06 225)" }}
                >
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Completion note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-3 px-4 py-3 rounded-lg"
          style={{
            background: "oklch(0.40 0.14 160 / 0.07)",
            border: "1px solid oklch(0.45 0.15 155 / 0.2)",
          }}
        >
          <span className="text-xl">📋</span>
          <p
            className="font-body text-sm"
            style={{ color: "oklch(0.35 0.12 160)" }}
          >
            {t.slide5Note}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
