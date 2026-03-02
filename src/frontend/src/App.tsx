import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "./context/LanguageContext";
import { type Language, translations } from "./i18n/translations";
import Slide1Title from "./slides/Slide1Title";
import Slide2Subsidy from "./slides/Slide2Subsidy";
import Slide3Phase1 from "./slides/Slide3Phase1";
import Slide4Phase2 from "./slides/Slide4Phase2";
import Slide5Phase3 from "./slides/Slide5Phase3";
import Slide6Phase4 from "./slides/Slide6Phase4";
import Slide7WhyChoose from "./slides/Slide7WhyChoose";
import Slide8Contact from "./slides/Slide8Contact";

const TOTAL_SLIDES = 8;

const SLIDE_INDICES = [0, 1, 2, 3, 4, 5, 6, 7] as const;

const slides = [
  Slide1Title,
  Slide2Subsidy,
  Slide3Phase1,
  Slide4Phase2,
  Slide5Phase3,
  Slide6Phase4,
  Slide7WhyChoose,
  Slide8Contact,
];

type Direction = 1 | -1;

const WHATSAPP_URL =
  "https://wa.me/918249286318?text=Hello%2C%20I%20would%20like%20a%20free%20site%20visit%20%2F%20inquiry%20for%20solar%20installation.";

const LANG_OPTIONS: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिं" },
  { code: "or", label: "ଓ" },
];

const NAV_SLIDE_KEYS = [
  "navHome",
  "navSubsidy",
  "navPhase1",
  "navPhase2",
  "navPhase3",
  "navPhase4",
  "navWhyUs",
  "navContact",
] as const;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating || idx === current) return;
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
      setIsAnimating(true);
    },
    [isAnimating, current],
  );

  const goPrev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  const goNext = useCallback(() => {
    if (current < TOTAL_SLIDES - 1) goTo(current + 1);
  }, [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const variants = {
    enter: (dir: Direction) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: Direction) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const CurrentSlide = slides[current];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden select-none"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, oklch(0.85 0.06 215 / 0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, oklch(0.90 0.04 200 / 0.3) 0%, transparent 50%), oklch(0.97 0.02 90)",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Sticky Top Navigation Bar ── */}
      <nav
        className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-5"
        style={{
          height: "52px",
          background: "oklch(0.95 0.02 88 / 0.92)",
          borderBottom: "1px solid oklch(0.80 0.06 220 / 0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Left: Logo + Name */}
        <button
          type="button"
          className="flex items-center gap-2 flex-shrink-0"
          onClick={() => goTo(0)}
          aria-label="Go to home"
        >
          <img
            src="/assets/generated/bhagyalaxmi-logo-transparent.dim_400x200.png"
            alt="Bhagyalaxmi Construction"
            className="h-6 w-auto object-contain flex-shrink-0"
            style={{
              filter: "drop-shadow(0 0 8px oklch(0.55 0.18 75 / 0.4))",
            }}
          />
          <span className="flex flex-col leading-tight">
            <span
              className="text-xs sm:text-sm font-black tracking-widest"
              style={{ color: "oklch(0.55 0.18 75)" }}
            >
              BHAGYALAXMI
            </span>
            <span
              className="text-[10px] sm:text-xs font-bold tracking-[0.2em]"
              style={{ color: "oklch(0.50 0.16 72)" }}
            >
              CONSTRUCTION
            </span>
          </span>
        </button>

        {/* Center: Slide nav links (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-0.5 overflow-x-auto">
          {NAV_SLIDE_KEYS.map((key, i) => (
            <button
              type="button"
              key={key}
              onClick={() => goTo(i)}
              className="px-2.5 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap"
              style={{
                color:
                  current === i
                    ? "oklch(0.45 0.12 220)"
                    : "oklch(0.40 0.06 220)",
                background:
                  current === i ? "oklch(0.45 0.12 220 / 0.10)" : "transparent",
                border:
                  current === i
                    ? "1px solid oklch(0.45 0.12 220 / 0.3)"
                    : "1px solid transparent",
              }}
            >
              {t[key]}
            </button>
          ))}
        </div>

        {/* Right: Language switcher */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {LANG_OPTIONS.map(({ code, label }) => (
            <button
              type="button"
              key={code}
              onClick={() => setLang(code)}
              className="px-2.5 py-1 rounded-md text-xs font-bold transition-all"
              style={{
                color:
                  lang === code
                    ? "oklch(0.97 0.01 80)"
                    : "oklch(0.40 0.06 220)",
                background:
                  lang === code
                    ? "oklch(0.45 0.12 220)"
                    : "oklch(0.88 0.04 215 / 0.6)",
                border:
                  lang === code
                    ? "1px solid oklch(0.45 0.12 220)"
                    : "1px solid oklch(0.75 0.05 220)",
              }}
              aria-label={`Switch to ${code} language`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Decorative sun rays background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              from 0deg at 50% 120%,
              oklch(0.45 0.12 220) 0deg 3deg,
              transparent 3deg 15deg
            )
          `,
        }}
      />

      {/* Slide area — padded top for nav bar */}
      <div className="absolute inset-0" style={{ top: "52px", bottom: "56px" }}>
        <AnimatePresence
          initial={false}
          custom={direction}
          onExitComplete={() => setIsAnimating(false)}
        >
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 overflow-y-auto"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div
        className="absolute inset-x-0 flex items-center justify-between px-2 sm:px-4 pointer-events-none"
        style={{ top: "52px", bottom: "56px" }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goPrev}
          disabled={current === 0}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          style={{
            background:
              current === 0
                ? "oklch(0.88 0.03 215 / 0.5)"
                : "oklch(0.45 0.12 220 / 0.12)",
            border: "1px solid oklch(0.45 0.12 220 / 0.3)",
            backdropFilter: "blur(8px)",
          }}
          aria-label="Previous slide"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="oklch(0.35 0.12 225)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-label="Previous"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goNext}
          disabled={current === TOTAL_SLIDES - 1}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          style={{
            background:
              current === TOTAL_SLIDES - 1
                ? "oklch(0.88 0.03 215 / 0.5)"
                : "oklch(0.45 0.12 220 / 0.12)",
            border: "1px solid oklch(0.45 0.12 220 / 0.3)",
            backdropFilter: "blur(8px)",
          }}
          aria-label="Next slide"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="oklch(0.35 0.12 225)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-label="Next"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.button>
      </div>

      {/* Bottom bar: dot indicators + counter */}
      <div className="absolute bottom-0 inset-x-0 z-50 flex flex-col items-center gap-1 pb-3">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {SLIDE_INDICES.map((i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full transition-all focus-visible:outline-none focus-visible:ring-2"
              style={{
                width: i === current ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                background:
                  i === current
                    ? "oklch(0.45 0.12 220)"
                    : "oklch(0.70 0.05 220 / 0.4)",
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <span
          className="text-xs font-body font-semibold tracking-widest"
          style={{ color: "oklch(0.50 0.06 215)" }}
        >
          {current + 1} / {TOTAL_SLIDES}
        </span>
      </div>

      {/* ── WhatsApp Floating Button ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 sm:right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ background: "#25D366", zIndex: 60 }}
        title={t.whatsappTooltip}
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="white"
          role="img"
          aria-label="WhatsApp"
        >
          <title>WhatsApp</title>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
