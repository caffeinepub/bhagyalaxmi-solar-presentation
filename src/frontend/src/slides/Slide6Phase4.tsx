import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Slide6Phase4() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const financeItems = [
    { icon: "💳", text: t.slide6F1, highlight: true },
    { icon: "🔓", text: t.slide6F2, highlight: false },
    { icon: "📉", text: t.slide6F3, highlight: false },
    { icon: "🏛️", text: t.slide6F4, highlight: false },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-16 slide-scroll">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-5">
        {/* Phase badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="phase-badge px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
            {t.slide6Phase}
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
          {t.slide6Title}{" "}
          <span className="text-gradient-gold">{t.slide6TitleHighlight}</span>
        </motion.h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 90% Bank Finance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-5 rounded-xl"
            style={{
              background: "oklch(0.93 0.02 85)",
              border: "1px solid oklch(0.55 0.18 75 / 0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "oklch(0.55 0.18 75 / 0.12)" }}
              >
                🏦
              </div>
              <h3
                className="font-body font-black text-lg sm:text-xl"
                style={{ color: "oklch(0.45 0.15 70)" }}
              >
                {t.slide6FinanceTitle}
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {financeItems.map((item, i) => (
                <motion.div
                  key={item.icon}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-2.5"
                >
                  <span className="text-base">{item.icon}</span>
                  <span
                    className="font-body text-sm sm:text-base"
                    style={{
                      color: item.highlight
                        ? "oklch(0.45 0.15 70)"
                        : "oklch(0.30 0.06 225)",
                      fontWeight: item.highlight ? "700" : "400",
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Direct Subsidy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-5 rounded-xl"
            style={{
              background: "oklch(0.93 0.02 85)",
              border: "1px solid oklch(0.40 0.14 160 / 0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "oklch(0.40 0.14 160 / 0.12)" }}
              >
                💰
              </div>
              <h3
                className="font-body font-black text-lg sm:text-xl"
                style={{ color: "oklch(0.38 0.14 160)" }}
              >
                {t.slide6SubsidyTitle}
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              <p
                className="font-body text-sm sm:text-base leading-relaxed"
                style={{ color: "oklch(0.30 0.06 225)" }}
              >
                {t.slide6SubsidyDesc}
              </p>

              {/* Big number highlight */}
              <div
                className="rounded-lg p-4 text-center"
                style={{
                  background: "oklch(0.40 0.14 160 / 0.08)",
                  border: "1px solid oklch(0.40 0.14 160 / 0.2)",
                }}
              >
                <div
                  className="font-display text-3xl sm:text-4xl font-black"
                  style={{ color: "oklch(0.38 0.16 160)" }}
                >
                  ₹1,38,000
                </div>
                <div
                  className="font-body text-xs mt-1"
                  style={{ color: "oklch(0.45 0.08 200)" }}
                >
                  {t.slide6MaxLabel}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-base">⏰</span>
                <span
                  className="font-body text-sm"
                  style={{ color: "oklch(0.38 0.12 160)" }}
                >
                  {t.slide6CreditedIn}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6 px-4 py-3 rounded-lg"
          style={{
            background: "oklch(0.55 0.18 75 / 0.07)",
            border: "1px solid oklch(0.55 0.18 75 / 0.2)",
          }}
        >
          {[
            { label: t.slide6StatDown, value: t.slide6StatDownVal },
            { label: t.slide6StatMax, value: t.slide6StatMaxVal },
            { label: t.slide6StatDays, value: t.slide6StatDaysVal },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="font-body font-black text-lg sm:text-xl"
                style={{ color: "oklch(0.50 0.16 70)" }}
              >
                {item.value}
              </div>
              <div
                className="font-body text-xs"
                style={{ color: "oklch(0.45 0.06 215)" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
