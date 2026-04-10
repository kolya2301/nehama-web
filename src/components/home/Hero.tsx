import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="bg-gradient-to-br from-[#0D2E45] via-[#1B4F72] to-[#1A5276] relative overflow-hidden py-20 md:py-24">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 start-0 w-[500px] h-[500px] bg-[#CA6F1E]/15 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 end-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#CA6F1E]/20 border border-[#CA6F1E]/40 text-[#F0B27A] px-4 py-1.5 rounded-full text-[13px] font-semibold mb-6">
              <span className="w-2 h-2 bg-[#CA6F1E] rounded-full animate-pulse" />
              {t("badge")}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-5">
              {t("title_1")}{" "}
              <span className="text-[#F0B27A]">{t("title_2")}</span>{" "}
              {t("title_3")}
            </h1>

            <p className="text-[18px] text-white/78 leading-relaxed mb-9">
              {t("desc")}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 bg-[#CA6F1E] text-white px-8 py-3.5 rounded-xl text-[17px] font-bold hover:bg-[#b05e18] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(202,111,30,0.4)]"
              >
                {t("cta_catalog")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="rtl:rotate-180">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-xl text-[17px] font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                {t("cta_contact")}
              </Link>
            </div>
          </div>

          {/* Right: stats card */}
          <div className="hidden lg:block">
            <div className="bg-white/8 border border-white/14 rounded-2xl p-2 backdrop-blur-md">
              {[
                { icon: "🏭", value: "20+", label: t("stat_years") },
                { icon: "🔧", value: "100%", label: t("stat_local") },
                { icon: "✂️", value: "IL", label: t("stat_custom") },
                { icon: "🤝", value: "ישיר", label: t("stat_service") },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-white/7 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#CA6F1E]/22 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-[22px] font-extrabold text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[13px] text-white/58 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
