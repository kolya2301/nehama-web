"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const FOUNDERS = [
  { initial: "נ", name: "נחמה", phone: "054-571-4030", wa: "972545714030" },
  { initial: "ר", name: "רומן", phone: "054-571-4031", wa: "972545714031" },
];

export function ContactStrip() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          message: data.get("message"),
          source: "homepage",
        }),
      });
      setSubmitted(true);
      form.reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-gradient-to-br from-[#0D2E45] to-[#1B4F72] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-[34px] font-extrabold text-white tracking-tight mb-3">
              {t("title")}
            </h2>
            <p className="text-[16px] text-white/68 leading-relaxed mb-8">{t("desc")}</p>

            <div className="flex flex-col gap-3">
              {FOUNDERS.map((f) => (
                <div
                  key={f.name}
                  className="bg-white/8 border border-white/14 rounded-2xl px-5 py-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#CA6F1E] flex items-center justify-center text-white text-[18px] font-extrabold flex-shrink-0">
                    {f.initial}
                  </div>
                  <div className="flex-1">
                    <div className="text-[16px] font-bold text-white">{f.name}</div>
                    <div className="text-[13px] text-white/60" dir="ltr">{f.phone}</div>
                  </div>
                  <div className="flex gap-2 ms-auto">
                    <a
                      href={`tel:+${f.wa}`}
                      className="px-3.5 py-2 bg-white/15 text-white text-[13px] font-semibold rounded-lg hover:bg-white/25 transition-colors"
                    >
                      📞 {t("call")}
                    </a>
                    <a
                      href={`https://wa.me/${f.wa}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-[#25D366] text-white text-[13px] font-semibold rounded-lg hover:bg-[#1db954] transition-colors"
                    >
                      💬 {t("whatsapp")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-9 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <h3 className="text-[20px] font-bold text-gray-800 mb-6">{t("form_title")}</h3>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-[48px] mb-4">✅</div>
                <p className="text-[16px] font-semibold text-[#1B4F72]">{t("submit_success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[14px] font-semibold text-gray-700 mb-1.5">
                    {t("name_label")}
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder={t("name_placeholder")}
                    className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-lg text-[15px] bg-[#F8F7F4] focus:border-[#1B4F72] focus:bg-white outline-none transition-colors font-[var(--font-assistant)]"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-gray-700 mb-1.5">
                    {t("phone_label")}
                  </label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder={t("phone_placeholder")}
                    dir="ltr"
                    className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-lg text-[15px] bg-[#F8F7F4] focus:border-[#1B4F72] focus:bg-white outline-none transition-colors text-end"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-gray-700 mb-1.5">
                    {t("message_label")}
                  </label>
                  <textarea
                    name="message"
                    placeholder={t("message_placeholder")}
                    rows={4}
                    className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-lg text-[15px] bg-[#F8F7F4] focus:border-[#1B4F72] focus:bg-white outline-none transition-colors resize-y"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1B4F72] text-white py-3.5 rounded-xl text-[16px] font-bold hover:bg-[#154360] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                >
                  {loading ? "..." : t("submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
