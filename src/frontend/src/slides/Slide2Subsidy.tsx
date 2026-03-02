import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const rows = [
  {
    capacity: "1 kW",
    central: "₹30,000",
    state: "₹25,000",
    total: "₹55,000",
    highlight: false,
  },
  {
    capacity: "2 kW",
    central: "₹60,000",
    state: "₹50,000",
    total: "₹1,10,000",
    highlight: false,
  },
  {
    capacity: "3 kW+",
    central: "₹78,000",
    state: "₹60,000",
    total: "₹1,38,000",
    highlight: true,
  },
];

export default function Slide2Subsidy() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-16 slide-scroll">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{
              background: "oklch(0.45 0.12 220 / 0.12)",
              border: "1px solid oklch(0.45 0.12 220 / 0.3)",
              color: "oklch(0.35 0.12 225)",
            }}
          >
            💰 {t.slide2Badge}
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black"
            style={{ color: "oklch(0.15 0.04 240)" }}
          >
            {t.slide2Title}
            <span
              className="block text-xl sm:text-2xl font-bold mt-1"
              style={{ color: "oklch(0.55 0.18 75)" }}
            >
              {t.slide2TitleSub}
            </span>
          </h2>
        </motion.div>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center font-body text-base sm:text-lg"
          style={{ color: "oklch(0.35 0.06 220)" }}
        >
          {t.slide2Intro}{" "}
          <strong style={{ color: "oklch(0.35 0.12 225)" }}>
            {t.slide2IntroHighlight}
          </strong>{" "}
          {t.slide2IntroRest}
        </motion.p>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full overflow-x-auto rounded-xl"
          style={{
            border: "1px solid oklch(0.45 0.12 220 / 0.2)",
            background: "oklch(0.93 0.02 85 / 0.9)",
            backdropFilter: "blur(8px)",
          }}
        >
          <table className="w-full subsidy-table">
            <thead>
              <tr>
                <th
                  className="py-4 px-4 sm:px-6 text-left text-xs font-bold tracking-widest uppercase"
                  style={{
                    color: "oklch(0.35 0.12 225)",
                    borderBottom: "1px solid oklch(0.45 0.12 220 / 0.2)",
                  }}
                >
                  {t.slide2ColCapacity}
                </th>
                <th
                  className="py-4 px-4 sm:px-6 text-center text-xs font-bold tracking-widest uppercase"
                  style={{
                    color: "oklch(0.35 0.12 225)",
                    borderBottom: "1px solid oklch(0.45 0.12 220 / 0.2)",
                  }}
                >
                  {t.slide2ColCentral}
                </th>
                <th
                  className="py-4 px-4 sm:px-6 text-center text-xs font-bold tracking-widest uppercase"
                  style={{
                    color: "oklch(0.35 0.12 225)",
                    borderBottom: "1px solid oklch(0.45 0.12 220 / 0.2)",
                  }}
                >
                  {t.slide2ColState}
                </th>
                <th
                  className="py-4 px-4 sm:px-6 text-center text-xs font-bold tracking-widest uppercase"
                  style={{
                    color: "oklch(0.35 0.12 225)",
                    borderBottom: "1px solid oklch(0.45 0.12 220 / 0.2)",
                  }}
                >
                  {t.slide2ColTotal}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.capacity}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  style={{
                    background: row.highlight
                      ? "oklch(0.55 0.18 75 / 0.08)"
                      : i % 2 === 0
                        ? "oklch(0.88 0.03 215 / 0.3)"
                        : "transparent",
                    borderBottom: "1px solid oklch(0.45 0.12 220 / 0.10)",
                  }}
                >
                  <td
                    className="py-4 px-4 sm:px-6 font-body font-bold text-base sm:text-lg"
                    style={{
                      color: row.highlight
                        ? "oklch(0.18 0.05 240)"
                        : "oklch(0.22 0.04 240)",
                    }}
                  >
                    ☀️ {row.capacity}
                  </td>
                  <td
                    className="py-4 px-4 sm:px-6 text-center font-body text-base sm:text-lg"
                    style={{ color: "oklch(0.35 0.08 225)" }}
                  >
                    {row.central}
                  </td>
                  <td
                    className="py-4 px-4 sm:px-6 text-center font-body text-base sm:text-lg"
                    style={{ color: "oklch(0.40 0.10 210)" }}
                  >
                    {row.state}
                  </td>
                  <td
                    className="py-4 px-4 sm:px-6 text-center font-body font-black text-base sm:text-xl"
                    style={{
                      color: row.highlight
                        ? "oklch(0.50 0.18 70)"
                        : "oklch(0.45 0.10 200)",
                    }}
                  >
                    {row.total}
                    {row.highlight && (
                      <span
                        className="ml-2 text-xs px-2 py-0.5 rounded-full font-bold"
                        style={{
                          background: "oklch(0.55 0.18 75)",
                          color: "oklch(0.97 0.01 80)",
                        }}
                      >
                        MAX
                      </span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-sm font-body"
          style={{ color: "oklch(0.50 0.05 215)" }}
        >
          {t.slide2Note}
        </motion.p>
      </div>
    </div>
  );
}
