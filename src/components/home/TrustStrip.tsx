import { useTranslations } from "next-intl";

const icons = [
  <svg key="factory" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B4F72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg key="clock" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B4F72" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg key="users" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B4F72" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  <svg key="custom" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B4F72" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
];

export function TrustStrip() {
  const t = useTranslations("trust");

  const items = [
    { title: t("factory_title"), desc: t("factory_desc") },
    { title: t("years_title"), desc: t("years_desc") },
    { title: t("personal_title"), desc: t("personal_desc") },
    { title: t("custom_title"), desc: t("custom_desc") },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-7">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-gray-100">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3.5 px-6 first:ps-0 last:pe-0">
              <div className="w-11 h-11 bg-[#D6EAF8] rounded-xl flex items-center justify-center flex-shrink-0">
                {icons[i]}
              </div>
              <div>
                <div className="text-[15px] font-bold text-[#1B4F72]">{item.title}</div>
                <div className="text-[13px] text-gray-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
