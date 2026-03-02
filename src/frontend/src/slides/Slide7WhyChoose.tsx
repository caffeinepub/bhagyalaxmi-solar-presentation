import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Slide7WhyChoose() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const cards = [
    {
      icon: "🏅",
      title: t.slide7C1Title,
      desc: t.slide7C1Desc,
      color: "0.50 0.15 70",
      borderColor: "0.55 0.18 75",
      delay: 0.3,
    },
    {
      icon: "📁",
      title: t.slide7C2Title,
      desc: t.slide7C2Desc,
      color: "0.40 0.12 220",
      borderColor: "0.45 0.12 220",
      delay: 0.45,
    },
    {
      icon: "📍",
      title: t.slide7C3Title,
      desc: t.slide7C3Desc,
      color: "0.38 0.14 160",
      borderColor: "0.40 0.14 160",
      delay: 0.6,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-16 slide-scroll">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
            style={{ color: "oklch(0.15 0.04 240)" }}
          >
            {t.slide7Title}{" "}
            <span className="text-gradient-gold block mt-1">
              {t.slide7TitleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.6 }}
              whileHover={{ translateY: -4 }}
              className="flex flex-col gap-3 p-6 rounded-2xl card-glow transition-all"
              style={{
                background: "oklch(0.93 0.02 85 / 0.85)",
                border: `1px solid oklch(${card.borderColor} / 0.25)`,
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{
                  background: `oklch(${card.borderColor} / 0.10)`,
                  border: `1px solid oklch(${card.borderColor} / 0.3)`,
                  boxShadow: `0 0 20px oklch(${card.borderColor} / 0.10)`,
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="font-body font-bold text-lg sm:text-xl"
                style={{ color: `oklch(${card.color})` }}
              >
                {card.title}
              </h3>

              {/* Desc */}
              <p
                className="font-body text-sm sm:text-base leading-relaxed"
                style={{ color: "oklch(0.35 0.06 220)" }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {[
            { num: t.slide7Stat1Num, label: t.slide7Stat1Label },
            { num: t.slide7Stat2Num, label: t.slide7Stat2Label },
            { num: t.slide7Stat3Num, label: t.slide7Stat3Label },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display text-3xl font-black"
                style={{ color: "oklch(0.55 0.18 75)" }}
              >
                {stat.num}
              </div>
              <div
                className="font-body text-xs mt-0.5"
                style={{ color: "oklch(0.45 0.06 215)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
