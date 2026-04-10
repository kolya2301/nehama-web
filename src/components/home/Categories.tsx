import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

const CATEGORIES = [
  {
    key: "wheelchair",
    slug: "wheelchair-accessories",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="cat-icon" stroke="#1B4F72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="27" r="3.5"/><circle cx="24" cy="27" r="3.5"/>
        <path d="M6.5 27V15L11 9H22L26 15V23.5"/><path d="M14 9V19H26"/>
        <circle cx="23" cy="6" r="2.5"/>
      </svg>
    ),
  },
  {
    key: "toilet",
    slug: "toilet-chairs",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="cat-icon" stroke="#1B4F72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="12" width="14" height="11" rx="3"/>
        <path d="M13 12V10a3 3 0 016 0v2"/>
        <path d="M11 23L9 28M21 23L23 28"/>
        <path d="M13 17h6M13 20h6"/>
      </svg>
    ),
  },
  {
    key: "bed",
    slug: "bed-accessories",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="cat-icon" stroke="#1B4F72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="18" width="24" height="8" rx="2"/>
        <path d="M4 22h24"/><path d="M4 18v-6a2 2 0 012-2h4a2 2 0 012 2v6"/>
        <path d="M28 18v-4a2 2 0 00-2-2H14a2 2 0 00-2 2v4"/>
        <path d="M8 26v2M24 26v2"/>
      </svg>
    ),
  },
  {
    key: "inserts",
    slug: "inserts",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="cat-icon" stroke="#1B4F72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 25L10.5 10C11 7.5 13 6 15.5 6h1C19 6 21 7.5 21.5 10L24 25"/>
        <path d="M6 25h20"/><path d="M12 16h8"/><path d="M11.5 20.5h9"/><path d="M13 12h6"/>
      </svg>
    ),
  },
  {
    key: "upholstery",
    slug: "wheelchair-upholstery",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="cat-icon" stroke="#1B4F72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 21C6 17.7 9 15 12.5 15h7C23 15 26 17.7 26 21v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2z"/>
        <path d="M10 15c0-2.2 1.8-4 4-4h4a4 4 0 014 4"/>
        <path d="M7 20h18M7 22.5h18"/>
      </svg>
    ),
  },
  {
    key: "cushions",
    slug: "pressure-cushions",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="cat-icon" stroke="#1B4F72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="19" rx="10" ry="5.5"/>
        <ellipse cx="16" cy="17" rx="10" ry="5.5"/>
        <path d="M7.5 15C8.5 12.5 11.9 11 16 11s7.5 1.5 8.5 4"/>
        <path d="M10 18c1 1 3.2 1.8 6 1.8s5-0.8 6-1.8"/>
      </svg>
    ),
  },
];

export function Categories() {
  const t = useTranslations("categories");

  return (
    <section className="py-20 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#CA6F1E] text-[12px] font-bold tracking-[1.5px] uppercase mb-2.5">
            {t("section_label")}
          </span>
          <h2 className="text-[34px] font-extrabold text-gray-900 tracking-tight mb-3">
            {t("section_title")}
          </h2>
          <p className="text-[17px] text-gray-500 max-w-[500px] mx-auto">
            {t("section_desc")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={`/catalog/${cat.slug}`}
              className="group bg-white border-[1.5px] border-gray-100 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-[#1B4F72] hover:shadow-[0_8px_32px_rgba(27,79,114,0.12)] hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Bottom accent line */}
              <div className="absolute bottom-0 start-0 end-0 h-[3px] bg-[#CA6F1E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-end rtl:origin-start" />

              <div className="w-16 h-16 bg-[#D6EAF8] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-[#1B4F72] [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:stroke-white">
                {cat.icon}
              </div>
              <div className="text-[15px] font-bold text-gray-800 mb-1.5 leading-snug">
                {t(`${cat.key}_name` as Parameters<typeof t>[0])}
              </div>
              <div className="text-[13px] text-gray-500 leading-snug">
                {t(`${cat.key}_desc` as Parameters<typeof t>[0])}
              </div>
              <div className="text-[13px] font-semibold text-[#1B4F72] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {t("view")}
              </div>
            </Link>
          ))}

          {/* Custom product — wide card */}
          <Link
            href="/catalog/custom"
            className="group col-span-2 bg-white border-[1.5px] border-gray-100 rounded-2xl p-6 flex items-center gap-5 cursor-pointer transition-all duration-300 hover:border-[#1B4F72] hover:shadow-[0_8px_32px_rgba(27,79,114,0.12)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute bottom-0 start-0 end-0 h-[3px] bg-[#CA6F1E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <div className="w-16 h-16 bg-[#D6EAF8] rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#1B4F72]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1B4F72" strokeWidth="1.8" strokeLinecap="round" className="transition-colors duration-300 group-hover:stroke-white">
                <circle cx="16" cy="16" r="10"/>
                <path d="M16 10v6l4 2"/>
                <path d="M10 6.5L8.5 5M22 6.5L23.5 5M6.5 16H5M27 16h-1.5M10 25.5L8.5 27M22 25.5L23.5 27"/>
              </svg>
            </div>
            <div className="flex-1 text-start">
              <div className="text-[18px] font-bold text-gray-800 mb-1">
                {t("custom_name")}
              </div>
              <div className="text-[13px] text-gray-500 leading-snug">
                {t("custom_desc")}
              </div>
            </div>
            <div className="text-[15px] font-semibold text-[#1B4F72] flex-shrink-0 opacity-80 group-hover:opacity-100 rtl:rotate-180">
              ←
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
