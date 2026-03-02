import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import {
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileText,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sun,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { useSubmitInquiry } from "./hooks/useQueries";
import { type Language, translations } from "./i18n/translations";

// ─── Constants ─────────────────────────────────────────────────────────────

const WHATSAPP_BASE = "https://wa.me/918249286318";
const WHATSAPP_GENERAL = `${WHATSAPP_BASE}?text=Hello%2C%20I%20would%20like%20a%20free%20site%20visit%20for%20solar%20installation.`;

const ODISHA_DISTRICTS = [
  "Angul",
  "Balangir",
  "Balasore",
  "Bargarh",
  "Bhadrak",
  "Boudh",
  "Cuttack",
  "Deogarh",
  "Dhenkanal",
  "Gajapati",
  "Ganjam",
  "Jagatsinghpur",
  "Jajpur",
  "Jharsuguda",
  "Kalahandi",
  "Kandhamal",
  "Kendrapara",
  "Kendujhar",
  "Khordha",
  "Koraput",
  "Malkangiri",
  "Mayurbhanj",
  "Nabarangpur",
  "Nayagarh",
  "Nuapada",
  "Puri",
  "Rayagada",
  "Sambalpur",
  "Sonepur",
  "Sundargarh",
];

const LANG_OPTIONS: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिं" },
  { code: "or", label: "ଓ" },
];

const NAV_SECTIONS = [
  { key: "navHome", id: "hero" },
  { key: "navAbout", id: "about" },
  { key: "navSubsidy", id: "subsidy" },
  { key: "navFinance", id: "finance" },
  { key: "navProcess", id: "process" },
  { key: "navWhyUs", id: "whyus" },
  { key: "navWarranty", id: "warranty" },
  { key: "navBranches", id: "branches" },
  { key: "navContact", id: "contact" },
] as const;

// ─── Helpers ────────────────────────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── Animation variants ─────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Section Badge ───────────────────────────────────────────────────────────

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
      style={{
        background: "oklch(0.62 0.19 72 / 0.12)",
        color: "oklch(0.50 0.18 68)",
        border: "1px solid oklch(0.62 0.19 72 / 0.3)",
      }}
    >
      <Sun size={11} />
      {children}
    </span>
  );
}

// ─── WhatsApp SVG ────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-label="WhatsApp"
      role="img"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Sticky Navbar ───────────────────────────────────────────────────────────

function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 navbar-glass"
        style={{ height: "64px" }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo + Name */}
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 flex-shrink-0"
            data-ocid="nav.home.button"
            aria-label="Go to top"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.19 72), oklch(0.50 0.18 65))",
              }}
            >
              <Sun size={18} color="white" />
            </div>
            <span className="flex flex-col leading-tight">
              <span
                className="text-[13px] sm:text-sm font-black tracking-widest font-display"
                style={{ color: "oklch(0.72 0.19 78)" }}
              >
                BHAGYALAXMI
              </span>
              <span
                className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] font-display"
                style={{ color: "oklch(0.65 0.16 74)" }}
              >
                CONSTRUCTION
              </span>
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_SECTIONS.map(({ key, id }) => (
              <button
                key={key}
                type="button"
                onClick={() => scrollToSection(id)}
                data-ocid={`nav.${id}.link`}
                className="px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap"
                style={{ color: "oklch(0.80 0.04 220)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "oklch(0.72 0.19 78)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(0.62 0.19 72 / 0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "oklch(0.80 0.04 220)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                {t[key as keyof typeof t]}
              </button>
            ))}
          </div>

          {/* Right: lang + WA */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Language buttons */}
            <div className="flex items-center gap-1">
              {LANG_OPTIONS.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  data-ocid={`nav.lang.${code}.toggle`}
                  className="w-8 h-7 rounded text-[11px] font-bold transition-all"
                  style={{
                    color:
                      lang === code
                        ? "oklch(0.12 0.04 75)"
                        : "oklch(0.70 0.04 220)",
                    background:
                      lang === code ? "oklch(0.62 0.19 72)" : "transparent",
                    border:
                      lang === code ? "none" : "1px solid oklch(0.45 0.08 225)",
                  }}
                  aria-label={`Switch to ${code}`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* WhatsApp icon */}
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.whatsapp.link"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              style={{ background: "#25D366", color: "white" }}
              title={t.whatsappTooltip}
            >
              <WhatsAppIcon size={14} />
              <span>Chat</span>
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg"
              style={{ color: "oklch(0.80 0.04 220)" }}
              data-ocid="nav.mobile.toggle"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 z-40 lg:hidden"
            style={{
              top: "64px",
              background: "oklch(0.14 0.06 235 / 0.97)",
              borderBottom: "1px solid oklch(0.38 0.14 230 / 0.3)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_SECTIONS.map(({ key, id }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    scrollToSection(id);
                    setMobileOpen(false);
                  }}
                  data-ocid={`nav.mobile.${id}.link`}
                  className="text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
                  style={{ color: "oklch(0.88 0.03 215)" }}
                >
                  {t[key as keyof typeof t]}
                </button>
              ))}
              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.mobile.whatsapp.link"
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold mt-2"
                style={{ background: "#25D366", color: "white" }}
              >
                <WhatsAppIcon size={16} />
                {t.whatsappTooltip}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "64px" }}
    >
      {/* Hero image background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/odisha-solar-map-hero.dim_1400x700.jpg"
          alt="Odisha Solar Map"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.10 0.06 238 / 0.88) 0%, oklch(0.14 0.06 235 / 0.78) 50%, oklch(0.10 0.05 230 / 0.70) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.97 0.015 85))",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-24"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: "oklch(0.62 0.19 72 / 0.2)",
              color: "oklch(0.85 0.15 80)",
              border: "1px solid oklch(0.62 0.19 72 / 0.5)",
            }}
          >
            <Sun size={12} />
            {t.heroBadge}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={fadeUp}>
          <h1
            className="font-display font-black mb-4 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            <span className="text-gradient-gold">{t.heroTagline}</span>
            <br />
            <span style={{ color: "oklch(0.95 0.03 85)" }}>
              {t.heroTagline2}
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-body"
          style={{ color: "oklch(0.78 0.04 220)" }}
        >
          {t.heroSubtext}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.whatsapp.primary_button"
            className="btn-gold flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold"
          >
            <WhatsAppIcon size={18} />
            {t.heroCtaVisit}
          </a>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            data-ocid="hero.contact.secondary_button"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all"
            style={{
              background: "oklch(0.97 0.01 80 / 0.10)",
              color: "oklch(0.95 0.03 85)",
              border: "1.5px solid oklch(0.80 0.04 220 / 0.4)",
            }}
          >
            {t.heroCtaWhatsApp}
            <ChevronRight size={16} />
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {[
            { val: t.heroStat1Val, label: t.heroStat1Label, id: "districts" },
            { val: t.heroStat2Val, label: t.heroStat2Label, id: "subsidy" },
            { val: t.heroStat3Val, label: t.heroStat3Label, id: "finance" },
          ].map((stat) => (
            <motion.div key={stat.id} variants={fadeUp} className="text-center">
              <div className="text-2xl sm:text-3xl font-black font-display text-gradient-gold">
                {stat.val}
              </div>
              <div
                className="text-xs sm:text-sm font-semibold mt-0.5"
                style={{ color: "oklch(0.70 0.05 215)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "oklch(0.62 0.19 72 / 0.5)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "oklch(0.62 0.19 72)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function AboutSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const points = [t.aboutPt1, t.aboutPt2, t.aboutPt3, t.aboutPt4];

  return (
    <section id="about" className="py-20 sm:py-28 section-cream-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 24px 64px oklch(0.38 0.14 230 / 0.2)" }}
            >
              <img
                src="/assets/generated/solar-domestic-illustration.dim_900x600.jpg"
                alt="Solar installation"
                className="w-full h-auto object-cover"
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-4 left-4 right-4 p-4 rounded-xl"
                style={{
                  background: "oklch(0.12 0.06 238 / 0.88)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid oklch(0.62 0.19 72 / 0.4)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.62 0.19 72), oklch(0.50 0.18 65))",
                    }}
                  >
                    <BadgeCheck size={20} color="white" />
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "oklch(0.72 0.19 78)" }}
                    >
                      PM Surya Ghar Empaneled
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.70 0.04 215)" }}
                    >
                      Official Registered Vendor – Odisha
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.62 0.19 72), transparent 70%)",
              }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <SectionBadge>{t.aboutBadge}</SectionBadge>
            <h2
              className="mt-4 mb-6 font-display font-black leading-tight"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "oklch(0.18 0.06 238)",
              }}
            >
              {t.aboutTitle}
            </h2>
            <p
              className="text-base leading-relaxed mb-8 font-body"
              style={{ color: "oklch(0.32 0.05 230)" }}
            >
              {t.aboutDesc}
            </p>

            {/* Feature points */}
            <div className="space-y-3 mb-8">
              {points.map((pt) => (
                <div key={pt} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: "oklch(0.62 0.19 72)", flexShrink: 0 }}
                  />
                  <span
                    className="text-sm font-semibold font-body"
                    style={{ color: "oklch(0.28 0.04 230)" }}
                  >
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Address */}
            <div
              className="flex items-center gap-2 text-sm font-semibold"
              style={{ color: "oklch(0.38 0.14 230)" }}
            >
              <MapPin size={16} />
              {t.aboutAddress}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Subsidy Section ──────────────────────────────────────────────────────────

function SubsidySection() {
  const { lang } = useLanguage();
  const t = translations[lang];

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

  return (
    <section id="subsidy" className="py-20 sm:py-28 section-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionBadge>{t.subsidyBadge}</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 mb-4 font-display font-black"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "oklch(0.18 0.06 238)",
            }}
          >
            {t.subsidyTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base max-w-2xl mx-auto font-body"
            style={{ color: "oklch(0.38 0.05 225)" }}
          >
            {t.subsidySubtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Cards layout */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {rows.map((row, rowIdx) => (
              <div
                key={row.capacity}
                data-ocid={`subsidy.card.${rowIdx + 1}`}
                className="relative rounded-2xl p-6 transition-all"
                style={{
                  background: row.highlight
                    ? "linear-gradient(135deg, oklch(0.18 0.06 238), oklch(0.22 0.08 232))"
                    : "oklch(0.94 0.02 82)",
                  border: row.highlight
                    ? "2px solid oklch(0.62 0.19 72 / 0.5)"
                    : "1.5px solid oklch(0.88 0.03 215)",
                  boxShadow: row.highlight
                    ? "0 8px 32px oklch(0.62 0.19 72 / 0.2)"
                    : undefined,
                }}
              >
                {row.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.62 0.19 72), oklch(0.50 0.18 65))",
                      color: "oklch(0.12 0.04 75)",
                    }}
                  >
                    {t.subsidyMaxCap}
                  </div>
                )}

                <div
                  className="text-2xl font-black font-display mb-1"
                  style={{
                    color: row.highlight
                      ? "oklch(0.72 0.19 78)"
                      : "oklch(0.18 0.06 238)",
                  }}
                >
                  {row.capacity}
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-sm">
                    <span
                      style={{
                        color: row.highlight
                          ? "oklch(0.65 0.05 215)"
                          : "oklch(0.48 0.06 220)",
                      }}
                    >
                      {t.subsidyColCentral}
                    </span>
                    <span
                      className="font-bold"
                      style={{
                        color: row.highlight
                          ? "oklch(0.80 0.04 215)"
                          : "oklch(0.28 0.06 230)",
                      }}
                    >
                      {row.central}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span
                      style={{
                        color: row.highlight
                          ? "oklch(0.65 0.05 215)"
                          : "oklch(0.48 0.06 220)",
                      }}
                    >
                      {t.subsidyColState}
                    </span>
                    <span
                      className="font-bold"
                      style={{
                        color: row.highlight
                          ? "oklch(0.80 0.04 215)"
                          : "oklch(0.28 0.06 230)",
                      }}
                    >
                      {row.state}
                    </span>
                  </div>
                  <div
                    className="h-px mt-3 mb-3"
                    style={{
                      background: row.highlight
                        ? "oklch(0.62 0.19 72 / 0.3)"
                        : "oklch(0.85 0.03 215)",
                    }}
                  />
                  <div className="flex justify-between items-center">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{
                        color: row.highlight
                          ? "oklch(0.62 0.19 72)"
                          : "oklch(0.38 0.14 230)",
                      }}
                    >
                      {t.subsidyColTotal}
                    </span>
                    <span
                      className="text-xl font-black font-display"
                      style={{
                        color: row.highlight
                          ? "oklch(0.72 0.19 78)"
                          : "oklch(0.38 0.14 230)",
                      }}
                    >
                      {row.total}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-xs text-center font-body"
            style={{ color: "oklch(0.52 0.06 220)" }}
          >
            {t.subsidyNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Finance Section ──────────────────────────────────────────────────────────

function FinanceSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const features = [
    {
      icon: <ShieldCheck size={20} />,
      title: t.financeF1Title,
      desc: t.financeF1Desc,
    },
    {
      icon: <Banknote size={20} />,
      title: t.financeF2Title,
      desc: t.financeF2Desc,
    },
    { icon: <Zap size={20} />, title: t.financeF3Title, desc: t.financeF3Desc },
    {
      icon: <CheckCircle2 size={20} />,
      title: t.financeF4Title,
      desc: t.financeF4Desc,
    },
  ];

  return (
    <section
      id="finance"
      className="py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.14 0.06 238), oklch(0.18 0.07 232))",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: main message */}
          <div>
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                style={{
                  background: "oklch(0.62 0.19 72 / 0.15)",
                  color: "oklch(0.72 0.19 78)",
                  border: "1px solid oklch(0.62 0.19 72 / 0.3)",
                }}
              >
                <Banknote size={11} />
                {t.financeBadge}
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-black mb-4 leading-tight"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "oklch(0.95 0.03 85)",
              }}
            >
              {t.financeTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base mb-8 font-body"
              style={{ color: "oklch(0.72 0.05 215)" }}
            >
              {t.financeSubtitle}
            </motion.p>

            {/* Big highlight */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-6 mb-8"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.19 72 / 0.15), oklch(0.62 0.19 72 / 0.05))",
                border: "2px solid oklch(0.62 0.19 72 / 0.5)",
              }}
            >
              <div className="text-3xl sm:text-4xl font-black font-display mb-1 text-gradient-gold">
                {t.financeHighlight}
              </div>
              <div
                className="text-sm font-body"
                style={{ color: "oklch(0.72 0.05 215)" }}
              >
                {t.financeHighlightSub}
              </div>
              <div className="flex gap-8 mt-4">
                <div>
                  <div
                    className="text-2xl font-black font-display"
                    style={{ color: "oklch(0.72 0.19 78)" }}
                  >
                    90%
                  </div>
                  <div
                    className="text-xs font-body"
                    style={{ color: "oklch(0.65 0.05 215)" }}
                  >
                    Bank Finance
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl font-black font-display"
                    style={{ color: "oklch(0.72 0.19 78)" }}
                  >
                    10%
                  </div>
                  <div
                    className="text-xs font-body"
                    style={{ color: "oklch(0.65 0.05 215)" }}
                  >
                    You Pay
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl font-black font-display"
                    style={{ color: "oklch(0.72 0.19 78)" }}
                  >
                    ~6%
                  </div>
                  <div
                    className="text-xs font-body"
                    style={{ color: "oklch(0.65 0.05 215)" }}
                  >
                    Interest p.a.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.a
              variants={fadeUp}
              href={`${WHATSAPP_BASE}?text=Hello%2C%20I%20am%20interested%20in%2090%25%20bank%20finance%20for%20solar.`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="finance.whatsapp.primary_button"
              className="btn-gold inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold"
            >
              <WhatsAppIcon size={18} />
              {t.financeCta}
            </motion.a>
          </div>

          {/* Right: feature cards */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {features.map((f, fi) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                data-ocid={`finance.feature.card.${fi + 1}`}
                className="rounded-xl p-5 transition-all"
                style={{
                  background: "oklch(0.97 0.01 80 / 0.06)",
                  border: "1px solid oklch(0.80 0.04 220 / 0.15)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: "oklch(0.62 0.19 72 / 0.15)",
                    color: "oklch(0.72 0.19 78)",
                  }}
                >
                  {f.icon}
                </div>
                <div
                  className="text-sm font-bold mb-1"
                  style={{ color: "oklch(0.90 0.03 85)" }}
                >
                  {f.title}
                </div>
                <div
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.65 0.05 215)" }}
                >
                  {f.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Phase Card ───────────────────────────────────────────────────────────────

interface PhaseStep {
  title: string;
  desc: string;
}

interface PhaseCardProps {
  badge: string;
  title: string;
  steps: PhaseStep[];
  note?: string;
  timeline?: string;
  phaseNum: number;
}

function PhaseCard({
  badge,
  title,
  steps,
  note,
  timeline,
  phaseNum,
}: PhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: phaseNum * 0.05 }}
      data-ocid={`process.phase.card.${phaseNum}`}
      className="solar-card p-6 sm:p-8"
    >
      {/* Phase badge */}
      <span className="phase-badge inline-block px-3 py-1 rounded-full text-xs mb-4">
        {badge}
      </span>

      <h3
        className="font-display font-black text-xl sm:text-2xl mb-6"
        style={{ color: "oklch(0.18 0.06 238)" }}
      >
        {title}
      </h3>

      {/* Steps */}
      <div className="space-y-5">
        {steps.map((step, si) => (
          <div key={step.title} className="flex gap-4">
            <div className="step-circle text-sm">{si + 1}</div>
            <div className="flex-1">
              <div
                className="font-bold text-sm mb-1"
                style={{ color: "oklch(0.22 0.06 235)" }}
              >
                {step.title}
              </div>
              <div
                className="text-sm leading-relaxed font-body"
                style={{ color: "oklch(0.42 0.05 225)" }}
              >
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      {note && (
        <div
          className="mt-6 px-4 py-3 rounded-lg text-xs font-semibold"
          style={{
            background: "oklch(0.38 0.14 230 / 0.08)",
            color: "oklch(0.38 0.14 230)",
          }}
        >
          ✓ {note}
        </div>
      )}

      {/* Timeline */}
      {timeline && (
        <div
          className="mt-4 flex items-center gap-2 text-xs font-bold"
          style={{ color: "oklch(0.62 0.19 72)" }}
        >
          <Zap size={13} />
          {timeline}
        </div>
      )}
    </motion.div>
  );
}

// ─── Process Section ──────────────────────────────────────────────────────────

function ProcessSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const phases: PhaseCardProps[] = [
    {
      badge: t.phase1Badge,
      title: t.phase1Title,
      phaseNum: 1,
      steps: [
        { title: t.phase1Step1, desc: t.phase1Step1Desc },
        { title: t.phase1Step2, desc: t.phase1Step2Desc },
        { title: t.phase1Step3, desc: t.phase1Step3Desc },
      ],
      timeline: t.phase1Time,
    },
    {
      badge: t.phase2Badge,
      title: t.phase2Title,
      phaseNum: 2,
      steps: [
        { title: t.phase2Step1, desc: t.phase2Step1Desc },
        { title: t.phase2Step2, desc: t.phase2Step2Desc },
        { title: t.phase2Step3, desc: t.phase2Step3Desc },
        { title: t.phase2Step4, desc: t.phase2Step4Desc },
      ],
      note: t.phase2Note,
    },
    {
      badge: t.phase3Badge,
      title: t.phase3Title,
      phaseNum: 3,
      steps: [
        { title: t.phase3Step1, desc: t.phase3Step1Desc },
        { title: t.phase3Step2, desc: t.phase3Step2Desc },
        { title: t.phase3Step3, desc: t.phase3Step3Desc },
      ],
    },
    {
      badge: t.phase4Badge,
      title: t.phase4Title,
      phaseNum: 4,
      steps: [
        { title: t.phase4Step1, desc: t.phase4Step1Desc },
        { title: t.phase4Step2, desc: t.phase4Step2Desc },
        { title: t.phase4Step3, desc: t.phase4Step3Desc },
      ],
      timeline: t.phase4Time,
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 section-cream-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}>
            <SectionBadge>{t.processBadge}</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 mb-4 font-display font-black"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "oklch(0.18 0.06 238)",
            }}
          >
            {t.processTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base max-w-xl mx-auto font-body"
            style={{ color: "oklch(0.38 0.05 225)" }}
          >
            {t.processSubtitle}
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <PhaseCard key={phase.phaseNum} {...phase} />
          ))}
        </div>

        {/* Portal link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://pmsuryaghar.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="process.portal.link"
            className="inline-flex items-center gap-2 text-sm font-bold transition-colors"
            style={{ color: "oklch(0.38 0.14 230)" }}
          >
            <ExternalLink size={15} />
            Official Portal: pmsuryaghar.gov.in
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Us Section ───────────────────────────────────────────────────────────

function WhyUsSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const cards = [
    {
      icon: <BadgeCheck size={22} />,
      title: t.whyUs1Title,
      desc: t.whyUs1Desc,
    },
    { icon: <Sun size={22} />, title: t.whyUs2Title, desc: t.whyUs2Desc },
    { icon: <FileText size={22} />, title: t.whyUs3Title, desc: t.whyUs3Desc },
    { icon: <MapPin size={22} />, title: t.whyUs4Title, desc: t.whyUs4Desc },
    { icon: <Banknote size={22} />, title: t.whyUs5Title, desc: t.whyUs5Desc },
    { icon: <Wrench size={22} />, title: t.whyUs6Title, desc: t.whyUs6Desc },
  ];

  return (
    <section id="whyus" className="py-20 sm:py-28 section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}>
            <SectionBadge>{t.whyUsBadge}</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 mb-4 font-display font-black"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "oklch(0.18 0.06 238)",
            }}
          >
            {t.whyUsTitle}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, ci) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              data-ocid={`whyus.card.${ci + 1}`}
              className="solar-card p-6"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.38 0.14 230 / 0.12), oklch(0.38 0.14 230 / 0.06))",
                  color: "oklch(0.38 0.14 230)",
                  border: "1px solid oklch(0.38 0.14 230 / 0.2)",
                }}
              >
                {card.icon}
              </div>
              <h3
                className="font-display font-bold text-lg mb-2"
                style={{ color: "oklch(0.18 0.06 238)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed font-body"
                style={{ color: "oklch(0.40 0.05 225)" }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Warranty Section ────────────────────────────────────────────────────────

function WarrantySection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const warranties = [
    {
      years: t.warranty1Years,
      title: t.warranty1Title,
      desc: t.warranty1Desc,
      icon: <Sun size={28} />,
      accent: "oklch(0.62 0.19 72)",
      accentBg: "oklch(0.62 0.19 72 / 0.12)",
    },
    {
      years: t.warranty2Years,
      title: t.warranty2Title,
      desc: t.warranty2Desc,
      icon: <Zap size={28} />,
      accent: "oklch(0.38 0.14 230)",
      accentBg: "oklch(0.38 0.14 230 / 0.10)",
    },
    {
      years: t.warranty3Years,
      title: t.warranty3Title,
      desc: t.warranty3Desc,
      icon: <ShieldCheck size={28} />,
      accent: "oklch(0.52 0.16 160)",
      accentBg: "oklch(0.52 0.16 160 / 0.10)",
    },
  ];

  return (
    <section
      id="warranty"
      className="py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.14 0.06 238), oklch(0.18 0.07 232))",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: "oklch(0.62 0.19 72 / 0.15)",
                color: "oklch(0.72 0.19 78)",
                border: "1px solid oklch(0.62 0.19 72 / 0.3)",
              }}
            >
              <ShieldCheck size={11} />
              {t.warrantyBadge}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 mb-3 font-display font-black"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "oklch(0.95 0.03 85)",
            }}
          >
            {t.warrantyTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm max-w-xl mx-auto font-body"
            style={{ color: "oklch(0.65 0.05 215)" }}
          >
            {t.warrantySubtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-3 gap-6"
        >
          {warranties.map((w, wi) => (
            <motion.div
              key={w.title}
              variants={fadeUp}
              data-ocid={`warranty.card.${wi + 1}`}
              className="relative rounded-2xl p-8 text-center transition-all"
              style={{
                background: "oklch(0.97 0.01 80 / 0.05)",
                border: "1.5px solid oklch(0.80 0.04 220 / 0.15)",
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: w.accentBg, color: w.accent }}
              >
                {w.icon}
              </div>

              {/* Big years badge */}
              <div
                className="text-4xl font-black font-display mb-1"
                style={{ color: w.accent }}
              >
                {w.years}
              </div>

              <h3
                className="font-display font-bold text-lg mb-3"
                style={{ color: "oklch(0.90 0.03 85)" }}
              >
                {w.title}
              </h3>

              <p
                className="text-sm leading-relaxed font-body"
                style={{ color: "oklch(0.65 0.05 215)" }}
              >
                {w.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 inset-x-0 h-1 rounded-b-2xl"
                style={{ background: w.accent }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Branches Section ─────────────────────────────────────────────────────────

function BranchesSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const branches = [
    {
      name: t.mainOfficeName,
      label: t.mainOfficeLabel,
      address: t.mainOfficeAddress,
      phone: "+918249286318",
      phoneDisplay: "+91 8249-286318",
      isMain: true,
    },
    {
      name: t.branch1Name,
      label: t.branch1Label,
      address: t.branch1Address,
      phone: "7838867880",
      phoneDisplay: "78388-67880",
      isMain: false,
    },
    {
      name: t.branch2Name,
      label: t.branch2Label,
      address: t.branch2Address,
      phone: "+917788951091",
      phoneDisplay: "+91 7788-951091",
      isMain: false,
    },
  ];

  return (
    <section
      id="branches"
      className="py-20 sm:py-28"
      style={{ background: "oklch(0.14 0.06 238)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: "oklch(0.62 0.19 72 / 0.15)",
                color: "oklch(0.72 0.19 78)",
                border: "1px solid oklch(0.62 0.19 72 / 0.3)",
              }}
            >
              <Building2 size={11} />
              {t.branchesBadge}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 mb-3 font-display font-black"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "oklch(0.95 0.03 85)",
            }}
          >
            {t.branchesTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm font-body"
            style={{ color: "oklch(0.65 0.05 215)" }}
          >
            {t.branchesSubtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-3 gap-6"
        >
          {branches.map((branch, bi) => (
            <motion.div
              key={branch.name}
              variants={fadeUp}
              data-ocid={`branches.card.${bi + 1}`}
              className="rounded-2xl p-6 transition-all"
              style={{
                background: branch.isMain
                  ? "linear-gradient(135deg, oklch(0.62 0.19 72 / 0.15), oklch(0.50 0.18 65 / 0.08))"
                  : "oklch(0.97 0.01 80 / 0.05)",
                border: branch.isMain
                  ? "2px solid oklch(0.62 0.19 72 / 0.4)"
                  : "1.5px solid oklch(0.80 0.04 220 / 0.15)",
              }}
            >
              {/* Label */}
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-4"
                style={{
                  background: branch.isMain
                    ? "oklch(0.62 0.19 72 / 0.2)"
                    : "oklch(0.38 0.14 230 / 0.2)",
                  color: branch.isMain
                    ? "oklch(0.72 0.19 78)"
                    : "oklch(0.72 0.10 225)",
                }}
              >
                {branch.label}
              </span>

              {/* Name */}
              <h3
                className="font-display font-black text-base sm:text-lg mb-1"
                style={{
                  color: branch.isMain
                    ? "oklch(0.82 0.12 78)"
                    : "oklch(0.88 0.03 215)",
                }}
              >
                {branch.name}
              </h3>

              {/* Address */}
              <div
                className="flex items-center gap-1.5 text-xs mb-5"
                style={{ color: "oklch(0.60 0.04 215)" }}
              >
                <MapPin size={12} />
                {branch.address}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${branch.phone}`}
                  data-ocid={`branches.call.button.${bi + 1}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all"
                  style={{
                    background: "oklch(0.97 0.01 80 / 0.08)",
                    color: "oklch(0.85 0.04 215)",
                    border: "1px solid oklch(0.70 0.04 215 / 0.2)",
                  }}
                >
                  <Phone size={14} />
                  {branch.phoneDisplay}
                </a>
                {branch.isMain && (
                  <a
                    href={WHATSAPP_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`branches.whatsapp.button.${bi + 1}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold"
                    style={{ background: "#25D366", color: "white" }}
                  >
                    <WhatsAppIcon size={14} />
                    {t.whatsappNow}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact / Inquiry Form ───────────────────────────────────────────────────

function ContactSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitInquiry();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !district) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutateAsync({ name: name.trim(), phone: phone.trim(), district });
      setSubmitted(true);
      const waText = encodeURIComponent(
        `New Inquiry:\nName: ${name}\nPhone: ${phone}\nDistrict: ${district}\nInterested in free solar site visit.`,
      );
      window.open(
        `${WHATSAPP_BASE}?text=${waText}`,
        "_blank",
        "noopener,noreferrer",
      );
    } catch {
      toast.error("Submission failed. Please try WhatsApp directly.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 section-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionBadge>{t.contactBadge}</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 mb-4 font-display font-black"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "oklch(0.18 0.06 238)",
            }}
          >
            {t.contactTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base max-w-xl mx-auto font-body"
            style={{ color: "oklch(0.40 0.05 225)" }}
          >
            {t.contactSubtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 solar-card p-6 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  data-ocid="contact.form.success_state"
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.52 0.16 160 / 0.15)" }}
                  >
                    <CheckCircle2
                      size={32}
                      style={{ color: "oklch(0.52 0.16 160)" }}
                    />
                  </div>
                  <h3
                    className="font-display font-black text-2xl"
                    style={{ color: "oklch(0.18 0.06 238)" }}
                  >
                    {t.formSuccessTitle}
                  </h3>
                  <p
                    className="font-body text-sm"
                    style={{ color: "oklch(0.40 0.05 225)" }}
                  >
                    {t.formSuccessDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setDistrict("");
                    }}
                    data-ocid="contact.form.submit_button"
                    className="text-sm font-bold underline mt-2"
                    style={{ color: "oklch(0.38 0.14 230)" }}
                  >
                    {t.formSuccessAnother}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <Label
                      htmlFor="inq-name"
                      className="text-sm font-bold mb-1.5 block"
                      style={{ color: "oklch(0.28 0.06 230)" }}
                    >
                      {t.formName} *
                    </Label>
                    <Input
                      id="inq-name"
                      data-ocid="contact.name.input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.formNamePlaceholder}
                      required
                      className="font-body"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label
                      htmlFor="inq-phone"
                      className="text-sm font-bold mb-1.5 block"
                      style={{ color: "oklch(0.28 0.06 230)" }}
                    >
                      {t.formPhone} *
                    </Label>
                    <Input
                      id="inq-phone"
                      data-ocid="contact.phone.input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.formPhonePlaceholder}
                      required
                      type="tel"
                      inputMode="numeric"
                      className="font-body"
                    />
                  </div>

                  {/* District */}
                  <div>
                    <Label
                      htmlFor="inq-district"
                      className="text-sm font-bold mb-1.5 block"
                      style={{ color: "oklch(0.28 0.06 230)" }}
                    >
                      {t.formDistrict} *
                    </Label>
                    <Select value={district} onValueChange={setDistrict}>
                      <SelectTrigger
                        id="inq-district"
                        data-ocid="contact.district.select"
                        className="font-body"
                      >
                        <SelectValue placeholder={t.formDistrictPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {ODISHA_DISTRICTS.map((d) => (
                          <SelectItem key={d} value={d} className="font-body">
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    data-ocid="contact.form.submit_button"
                    disabled={isPending}
                    className="w-full btn-gold py-3 text-sm font-bold"
                  >
                    {isPending ? (
                      t.formSubmitting
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <WhatsAppIcon size={16} />
                        {t.formSubmit}
                      </span>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sidebar: Direct CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* WhatsApp direct */}
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp.primary_button"
              className="rounded-2xl p-6 flex items-center gap-4 transition-all"
              style={{
                background: "#25D366",
                boxShadow: "0 6px 24px rgba(37,211,102,0.35)",
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon size={24} />
              </div>
              <div>
                <div className="font-bold text-white text-base">
                  {t.directWhatsApp}
                </div>
                <div className="text-white/80 text-sm">+91 8249-286318</div>
              </div>
            </a>

            {/* Call */}
            <a
              href="tel:+918249286318"
              data-ocid="contact.call.primary_button"
              className="solar-card rounded-2xl p-6 flex items-center gap-4 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "oklch(0.38 0.14 230 / 0.1)",
                  color: "oklch(0.38 0.14 230)",
                }}
              >
                <Phone size={22} />
              </div>
              <div>
                <div
                  className="font-bold text-sm"
                  style={{ color: "oklch(0.18 0.06 238)" }}
                >
                  {translations.en.callNow}
                </div>
                <div
                  className="font-black font-display"
                  style={{ color: "oklch(0.38 0.14 230)" }}
                >
                  +91 8249-286318
                </div>
              </div>
            </a>

            {/* Address */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "oklch(0.93 0.02 82)",
                border: "1.5px solid oklch(0.88 0.03 215)",
              }}
            >
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  style={{
                    color: "oklch(0.62 0.19 72)",
                    marginTop: 2,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    className="font-black font-display text-sm mb-0.5"
                    style={{ color: "oklch(0.18 0.06 238)" }}
                  >
                    BHAGYALAXMI CONSTRUCTION
                  </div>
                  <div
                    className="text-sm font-body"
                    style={{ color: "oklch(0.42 0.05 225)" }}
                  >
                    Balasore, Odisha
                  </div>
                </div>
              </div>
            </div>

            {/* Helpline */}
            <div
              className="rounded-xl px-4 py-3 text-center text-sm font-semibold"
              style={{
                background: "oklch(0.38 0.14 230 / 0.08)",
                color: "oklch(0.38 0.14 230)",
              }}
            >
              PM Surya Ghar Helpline: <strong>15555</strong>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const year = new Date().getFullYear();
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="section-steel-dark pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.19 72), oklch(0.50 0.18 65))",
                }}
              >
                <Sun size={20} color="white" />
              </div>
              <div>
                <div
                  className="font-display font-black text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.19 78)" }}
                >
                  BHAGYALAXMI
                </div>
                <div
                  className="font-display font-bold text-xs tracking-wider"
                  style={{ color: "oklch(0.65 0.14 74)" }}
                >
                  CONSTRUCTION
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4 font-body"
              style={{ color: "oklch(0.62 0.04 215)" }}
            >
              Serving all 30 districts of Odisha under PM Surya Ghar Muft Bijli
              Yojana. Domestic & commercial solar installations.
            </p>
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "oklch(0.52 0.05 215)" }}
            >
              <MapPin size={12} />
              Balasore, Odisha
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              className="font-bold text-sm mb-4 font-display"
              style={{ color: "oklch(0.75 0.05 215)" }}
            >
              Quick Links
            </div>
            <div className="space-y-2">
              {NAV_SECTIONS.map(({ key, id }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  data-ocid={`footer.${id}.link`}
                  className="block text-sm font-body transition-colors text-left"
                  style={{ color: "oklch(0.58 0.04 215)" }}
                >
                  {t[key as keyof typeof t]}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <div
              className="font-bold text-sm mb-4 font-display"
              style={{ color: "oklch(0.75 0.05 215)" }}
            >
              Contacts
            </div>
            <div className="space-y-3 text-sm font-body">
              <div>
                <div
                  className="font-semibold text-xs mb-0.5"
                  style={{ color: "oklch(0.62 0.10 215)" }}
                >
                  Main
                </div>
                <a
                  href="tel:+918249286318"
                  className="font-bold"
                  style={{ color: "oklch(0.72 0.19 78)" }}
                >
                  +91 8249-286318
                </a>
              </div>
              <div>
                <div
                  className="font-semibold text-xs mb-0.5"
                  style={{ color: "oklch(0.62 0.10 215)" }}
                >
                  Sambalpur
                </div>
                <a
                  href="tel:7838867880"
                  className="font-bold"
                  style={{ color: "oklch(0.72 0.19 78)" }}
                >
                  78388-67880
                </a>
              </div>
              <div>
                <div
                  className="font-semibold text-xs mb-0.5"
                  style={{ color: "oklch(0.62 0.10 215)" }}
                >
                  Krishiv Solar
                </div>
                <a
                  href="tel:+917788951091"
                  className="font-bold"
                  style={{ color: "oklch(0.72 0.19 78)" }}
                >
                  +91 7788-951091
                </a>
              </div>
              <div
                className="pt-2 border-t text-xs"
                style={{
                  borderColor: "oklch(0.30 0.06 230)",
                  color: "oklch(0.55 0.04 215)",
                }}
              >
                <div
                  className="font-semibold mb-1"
                  style={{ color: "oklch(0.65 0.08 215)" }}
                >
                  {t.footerPortal}
                </div>
                <a
                  href="https://pmsuryaghar.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.portal.link"
                  style={{ color: "oklch(0.62 0.10 225)" }}
                >
                  pmsuryaghar.gov.in
                </a>
                <div className="mt-1">{t.footerHelpline}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body"
          style={{
            borderColor: "oklch(0.28 0.06 230)",
            color: "oklch(0.48 0.04 215)",
          }}
        >
          <div>© {year} BHAGYALAXMI CONSTRUCTION. All rights reserved.</div>
          <a
            href={utmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: "oklch(0.48 0.04 215)" }}
          >
            {t.footerCopyright}
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────

function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <a
      href={WHATSAPP_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.floating.button"
      className="fixed bottom-6 right-5 sm:right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 whatsapp-pulse"
      style={{ background: "#25D366" }}
      title={t.whatsappTooltip}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

// ─── Inner App (needs language context) ──────────────────────────────────────

function AppInner() {
  return (
    <div className="min-h-screen">
      <Toaster />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SubsidySection />
        <FinanceSection />
        <ProcessSection />
        <WhyUsSection />
        <WarrantySection />
        <BranchesSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
