"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "../../../i18n/navigation";
import { Logo } from "./Logo";
import { routing } from "../../../i18n/routing";
import { useRouter } from "../../../i18n/navigation";

const LOCALE_LABELS: Record<string, string> = {
  he: "עב",
  ru: "РУ",
  en: "EN",
  ar: "عر",
};

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Logo size={44} />
            <div className="flex flex-col leading-tight">
              <span className="text-[22px] font-extrabold text-[#1B4F72] tracking-tight">
                נחמה
              </span>
              <span className="text-[11px] font-medium text-gray-400">
                ייצור אביזרי תמיכה לנכים
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            <li>
              <Link
                href="/catalog"
                className="text-[15px] font-semibold text-gray-700 hover:text-[#1B4F72] transition-colors"
              >
                {t("catalog")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-[15px] font-semibold text-gray-700 hover:text-[#1B4F72] transition-colors"
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[15px] font-semibold text-gray-700 hover:text-[#1B4F72] transition-colors"
              >
                {t("about")}
              </Link>
            </li>

            {/* Locale switcher */}
            <li className="flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden">
              {routing.locales.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  className={`px-2.5 py-1.5 text-[12px] font-bold transition-colors ${
                    l === locale
                      ? "bg-[#1B4F72] text-white"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                  aria-label={`Switch to ${l}`}
                >
                  {LOCALE_LABELS[l]}
                </button>
              ))}
            </li>

            {/* CTA */}
            <li>
              <Link
                href="/contact"
                className="bg-[#CA6F1E] text-white px-5 py-2.5 rounded-lg text-[15px] font-bold hover:bg-[#b05e18] transition-colors"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
