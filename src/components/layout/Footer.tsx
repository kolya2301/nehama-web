import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-[#0D2037] pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-10 border-b border-white/10 mb-6">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-3">
              <Logo size={36} />
              <div className="flex flex-col leading-tight">
                <span className="text-[20px] font-extrabold text-white tracking-tight">
                  נחמה
                </span>
                <span className="text-[11px] font-medium text-white/40">
                  ייצור אביזרי תמיכה לנכים
                </span>
              </div>
            </Link>
            <p className="text-[14px] text-white/45 leading-relaxed mt-4">
              {t("desc")}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 bg-white/7 border border-white/12 text-white/45 px-3 py-1.5 rounded-full text-[12px] font-semibold">
              ♿ {t("a11y_badge")}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[13px] font-bold text-white mb-4 tracking-wide">
              {t("nav_title")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {(["catalog", "services", "about", "companies", "contact"] as const).map(
                (key) => (
                  <li key={key}>
                    <Link
                      href={`/${key === "catalog" ? "catalog" : key === "companies" ? "companies" : key === "contact" ? "contact" : key === "services" ? "services" : "about"}`}
                      className="text-[14px] text-white/45 hover:text-white transition-colors"
                    >
                      {nav(key)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[13px] font-bold text-white mb-4 tracking-wide">
              {t("info_title")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/accessibility-statement" className="text-[14px] text-white/45 hover:text-white transition-colors">
                  {t("accessibility")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[14px] text-white/45 hover:text-white transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[14px] text-white/45 hover:text-white transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/national-insurance-info" className="text-[14px] text-white/45 hover:text-white transition-colors">
                  {t("nii_info")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-[13px] text-white/30">{t("copyright")}</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[13px] text-white/30 hover:text-white/60 transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="text-[13px] text-white/30 hover:text-white/60 transition-colors">
              {t("terms")}
            </Link>
            <Link href="/accessibility-statement" className="text-[13px] text-white/30 hover:text-white/60 transition-colors">
              {t("accessibility")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
