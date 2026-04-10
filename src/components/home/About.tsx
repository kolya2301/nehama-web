import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

export function About() {
  const t = useTranslations("about");
  const nav = useTranslations("nav");

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FDEBD0] text-[#CA6F1E] px-3.5 py-1.5 rounded-full text-[13px] font-bold mb-4">
              ✦ {t("badge")}
            </div>
            <h2 className="text-[34px] font-extrabold text-gray-900 leading-[1.25] tracking-tight mb-5">
              {t("title")}
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed mb-4">{t("p1")}</p>
            <p className="text-[16px] text-gray-500 leading-relaxed">{t("p2")}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3.5 my-8">
              {[
                { num: "20", label: t("stat_years") },
                { num: "7", label: t("stat_categories") },
                { num: "IL", label: t("stat_made") },
              ].map((s, i) => (
                <div key={i} className="bg-[#F8F7F4] border border-gray-100 rounded-xl p-5 text-center">
                  <div className="text-[30px] font-extrabold text-[#1B4F72] leading-none mb-1">{s.num}</div>
                  <div className="text-[12px] text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Founders */}
            <div className="flex gap-3.5">
              {[
                { initial: "נ", name: "נחמה", phone: "054-571-4030" },
                { initial: "ר", name: "רומן", phone: "054-571-4031" },
              ].map((f) => (
                <div key={f.name} className="flex items-center gap-3 bg-[#F8F7F4] border border-gray-100 rounded-xl px-4 py-3.5 flex-1">
                  <div className="w-12 h-12 rounded-full bg-[#1B4F72] flex items-center justify-center text-white text-[18px] font-extrabold flex-shrink-0">
                    {f.initial}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-gray-800">{f.name}</div>
                    <div className="text-[13px] text-gray-500" dir="ltr">{f.phone}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-6 text-[15px] font-semibold text-[#1B4F72] hover:text-[#154360] transition-colors"
            >
              {nav("about")} ←
            </Link>
          </div>

          {/* Photo placeholder */}
          <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#D6EAF8] to-[#EBF5FB] rounded-2xl h-[400px] border-2 border-dashed border-[#1B4F72]/25 flex-col gap-4">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#1B4F72" strokeWidth="1.2" opacity="0.4">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <p className="text-[14px] font-semibold text-[#1B4F72]/60">{t("photo_placeholder")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
