import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const WHATSAPP_URL =
  "https://wa.me/918249286318?text=Hello%2C%20I%20would%20like%20a%20free%20site%20visit%20%2F%20inquiry%20for%20solar%20installation.";

export default function Slide1Title() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-6 py-12">
      {/* Animated sun orb background */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, oklch(0.45 0.12 220 / 0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
        }}
      />

      {/* Horizontal lines decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[15, 29, 43, 57, 71, 85].map((topPct, i) => (
          <motion.div
            key={topPct}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.08 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
            className="absolute w-full"
            style={{
              height: "1px",
              background: "oklch(0.45 0.12 220)",
              top: `${topPct}%`,
              transformOrigin: "left",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-1"
        >
          <img
            src="/assets/generated/bhagyalaxmi-logo-transparent.dim_400x200.png"
            alt="BHAGYALAXMI CONSTRUCTION"
            className="w-52 sm:w-64 object-contain"
            style={{
              filter: "drop-shadow(0 0 16px oklch(0.55 0.18 75 / 0.4))",
            }}
          />
        </motion.div>

        {/* Odisha 2026 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="phase-badge px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase"
        >
          🌅 {t.slide1Badge}
        </motion.div>

        {/* Hero Illustration Image */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-2xl"
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow:
              "0 8px 40px oklch(0.45 0.12 220 / 0.20), 0 2px 12px oklch(0.55 0.18 75 / 0.12)",
            border: "1px solid oklch(0.85 0.04 220)",
          }}
        >
          <img
            src="/assets/generated/solar-hero.dim_1200x600.jpg"
            alt="Solar panels on Indian home"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "220px", objectPosition: "center 30%" }}
          />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight"
          style={{ color: "oklch(0.15 0.04 240)" }}
        >
          {t.slide1Title}{" "}
          <span className="text-gradient-gold block mt-1">
            {t.slide1TitleHighlight}
          </span>
          <span
            className="text-lg sm:text-xl lg:text-2xl font-bold mt-1 block"
            style={{ color: "oklch(0.35 0.08 220)" }}
          >
            {t.slide1TitleSub}
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-24 h-1 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.55 0.18 75), oklch(0.48 0.18 55))",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-body text-base sm:text-lg lg:text-xl font-medium"
          style={{ color: "oklch(0.35 0.08 220)" }}
        >
          {t.slide1Subtitle}
        </motion.p>

        {/* Company name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl font-black tracking-wider leading-tight"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.60 0.20 75) 0%, oklch(0.55 0.19 65) 40%, oklch(0.50 0.18 55) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 2px 6px oklch(0.55 0.18 75 / 0.3))",
          }}
        >
          {t.slide1CompanyName}
        </motion.div>

        {/* WhatsApp CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-body font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{
              background: "#25D366",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="white"
              role="img"
              aria-label="WhatsApp"
            >
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.slide1WhatsAppCTA}
          </a>
        </motion.div>

        {/* CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex items-center gap-2 mt-1"
          style={{ color: "oklch(0.55 0.06 220)" }}
        >
          <span className="text-sm font-body">{t.slide1NavHint}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            role="img"
            aria-label="Navigate forward"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
