import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useSubmitInquiry } from "../hooks/useQueries";
import { translations } from "../i18n/translations";

const WHATSAPP_URL =
  "https://wa.me/918249286318?text=Hello%2C%20I%20would%20like%20a%20free%20site%20visit%20%2F%20inquiry%20for%20solar%20installation.";
const WHATSAPP_CHAT_URL = "https://wa.me/918249286318";

const districts = [
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
  "Subarnapur",
  "Sundargarh",
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="white"
      role="img"
      aria-label="WhatsApp"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Slide8Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !location) return;
    submitInquiry(
      {
        name: name.trim(),
        phone: phone.trim(),
        location,
        message: message.trim(),
      },
      {
        onSuccess: () => {
          setSubmitted(true);
        },
      },
    );
  };

  const inputStyle = {
    background: "oklch(0.95 0.02 88)",
    border: "1px solid oklch(0.80 0.05 215)",
    color: "oklch(0.15 0.04 240)",
    borderRadius: "0.5rem",
    padding: "0.6rem 0.9rem",
    fontSize: "0.9rem",
    fontFamily: "'General Sans', sans-serif",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  } as const;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-12 slide-scroll">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-black"
            style={{ color: "oklch(0.15 0.04 240)" }}
          >
            {t.slide8Title}{" "}
            <span className="text-gradient-gold">{t.slide8TitleHighlight}</span>
          </h2>
          <p
            className="font-body text-sm sm:text-base mt-2"
            style={{ color: "oklch(0.40 0.06 220)" }}
          >
            {t.slide8SubTitle}
          </p>
        </motion.div>

        {/* Two columns: branches + form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Branch cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <h3
              className="font-body font-bold text-sm uppercase tracking-widest"
              style={{ color: "oklch(0.45 0.06 215)" }}
            >
              {t.slide8OurOffices}
            </h3>

            {/* Sambalpur branch */}
            <div
              className="p-4 rounded-xl card-glow transition-all"
              style={{
                background: "oklch(0.93 0.02 85 / 0.9)",
                border: "1px solid oklch(0.55 0.18 75 / 0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "oklch(0.55 0.18 75 / 0.12)" }}
                >
                  🌅
                </div>
                <div className="flex-1">
                  <div
                    className="font-body font-black text-sm uppercase tracking-wide"
                    style={{ color: "oklch(0.45 0.15 70)" }}
                  >
                    {t.slide8SambalpurBranch}
                  </div>
                  <div
                    className="font-body text-xs mb-2"
                    style={{ color: "oklch(0.50 0.05 215)" }}
                  >
                    {t.slide8SambalpurSub}
                  </div>
                  <a
                    href="tel:7838867880"
                    className="flex items-center gap-2 font-body font-bold text-base hover:underline"
                    style={{ color: "oklch(0.45 0.12 220)" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    📞 7838867880
                  </a>
                </div>
              </div>
            </div>

            {/* Balasore branch */}
            <div
              className="p-4 rounded-xl card-glow transition-all"
              style={{
                background: "oklch(0.93 0.02 85 / 0.9)",
                border: "1px solid oklch(0.45 0.12 220 / 0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "oklch(0.45 0.12 220 / 0.12)" }}
                >
                  ☀️
                </div>
                <div className="flex-1">
                  <div
                    className="font-body font-black text-sm uppercase tracking-wide"
                    style={{ color: "oklch(0.40 0.12 220)" }}
                  >
                    {t.slide8BalasoreBranch}
                  </div>
                  <div
                    className="font-body text-xs mb-2"
                    style={{ color: "oklch(0.50 0.05 215)" }}
                  >
                    {t.slide8BalasoreSub}
                  </div>
                  <a
                    href="tel:8249286318"
                    className="flex items-center gap-2 font-body font-bold text-base hover:underline"
                    style={{ color: "oklch(0.40 0.12 220)" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    📞 8249286318
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl font-body font-bold text-sm transition-all hover:scale-105 active:scale-95"
              style={{
                background: "#25D366",
                color: "#fff",
                boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
              }}
            >
              <WhatsAppIcon size={18} />
              {t.slide8WhatsAppDirect}
            </a>

            {/* Footer */}
            <div
              className="mt-auto pt-2 text-center text-xs font-body"
              style={{ color: "oklch(0.55 0.05 215)" }}
            >
              © {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "oklch(0.45 0.10 220)" }}
                onClick={(e) => e.stopPropagation()}
              >
                caffeine.ai
              </a>
            </div>
          </motion.div>

          {/* Lead form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div
              className="p-5 rounded-xl h-full"
              style={{
                background: "oklch(0.93 0.02 85 / 0.9)",
                border: "1px solid oklch(0.80 0.05 215)",
                backdropFilter: "blur(8px)",
              }}
            >
              <h3
                className="font-body font-black text-base sm:text-lg mb-4"
                style={{ color: "oklch(0.45 0.15 70)" }}
              >
                🌞 {t.slide8FormTitle}
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-3 py-6 text-center"
                >
                  <div className="text-5xl">✅</div>
                  <h4
                    className="font-display text-xl font-black"
                    style={{ color: "oklch(0.38 0.16 160)" }}
                  >
                    {t.slide8SuccessTitle}
                  </h4>
                  <p
                    className="font-body text-sm"
                    style={{ color: "oklch(0.35 0.06 220)" }}
                  >
                    {t.slide8SuccessDesc}
                  </p>

                  {/* WhatsApp CTA after success */}
                  <a
                    href={WHATSAPP_CHAT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-bold text-sm transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: "#25D366",
                      color: "#fff",
                      boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
                    }}
                  >
                    <WhatsAppIcon size={16} />
                    {t.slide8WhatsAppCTA}
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setLocation("");
                      setMessage("");
                    }}
                    className="font-body text-xs underline underline-offset-4 mt-1"
                    style={{ color: "oklch(0.45 0.06 215)" }}
                  >
                    {t.slide8SuccessAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="inquiry-name"
                        className="font-body text-xs font-semibold"
                        style={{ color: "oklch(0.40 0.06 220)" }}
                      >
                        {t.slide8NameRequired}
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        placeholder={t.slide8NamePlaceholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                        onFocus={(e) => {
                          (e.target as HTMLInputElement).style.borderColor =
                            "oklch(0.45 0.12 220)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLInputElement).style.borderColor =
                            "oklch(0.80 0.05 215)";
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="inquiry-phone"
                        className="font-body text-xs font-semibold"
                        style={{ color: "oklch(0.40 0.06 220)" }}
                      >
                        {t.slide8PhoneRequired}
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        placeholder={t.slide8PhonePlaceholder}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="[0-9]{10}"
                        style={inputStyle}
                        onFocus={(e) => {
                          (e.target as HTMLInputElement).style.borderColor =
                            "oklch(0.45 0.12 220)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLInputElement).style.borderColor =
                            "oklch(0.80 0.05 215)";
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="inquiry-district"
                      className="font-body text-xs font-semibold"
                      style={{ color: "oklch(0.40 0.06 220)" }}
                    >
                      {t.slide8DistrictRequired}
                    </label>
                    <select
                      id="inquiry-district"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23556' strokeWidth='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.75rem center",
                        paddingRight: "2rem",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLSelectElement).style.borderColor =
                          "oklch(0.45 0.12 220)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLSelectElement).style.borderColor =
                          "oklch(0.80 0.05 215)";
                      }}
                    >
                      <option
                        value=""
                        style={{ background: "oklch(0.95 0.02 88)" }}
                      >
                        {t.slide8DistrictPlaceholder}
                      </option>
                      {districts.map((d) => (
                        <option
                          key={d}
                          value={d}
                          style={{ background: "oklch(0.95 0.02 88)" }}
                        >
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="inquiry-message"
                      className="font-body text-xs font-semibold"
                      style={{ color: "oklch(0.40 0.06 220)" }}
                    >
                      {t.slide8MessageLabel}
                    </label>
                    <textarea
                      id="inquiry-message"
                      placeholder={t.slide8MessagePlaceholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={2}
                      style={{
                        ...inputStyle,
                        resize: "none",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor =
                          "oklch(0.45 0.12 220)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor =
                          "oklch(0.80 0.05 215)";
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isPending}
                    whileHover={{ scale: isPending ? 1 : 1.02 }}
                    whileTap={{ scale: isPending ? 1 : 0.98 }}
                    className="w-full py-2.5 rounded-lg font-body font-bold text-sm tracking-wide transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: isPending
                        ? "oklch(0.65 0.10 75)"
                        : "linear-gradient(135deg, oklch(0.60 0.18 75), oklch(0.52 0.18 58))",
                      color: "oklch(0.97 0.01 80)",
                    }}
                  >
                    {isPending ? t.slide8Submitting : `🌞 ${t.slide8SubmitBtn}`}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
