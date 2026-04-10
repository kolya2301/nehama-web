import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("steps");

  const steps = [
    { num: "1", title: t("step1_title"), desc: t("step1_desc") },
    { num: "2", title: t("step2_title"), desc: t("step2_desc") },
    { num: "3", title: t("step3_title"), desc: t("step3_desc") },
  ];

  return (
    <section className="py-20 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#CA6F1E] text-[12px] font-bold tracking-[1.5px] uppercase mb-2.5">
            {t("section_label")}
          </span>
          <h2 className="text-[34px] font-extrabold text-gray-900 tracking-tight mb-3">
            {t("section_title")}
          </h2>
          <p className="text-[17px] text-gray-500 max-w-[480px] mx-auto">
            {t("section_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Dashed connector */}
          <div className="hidden md:block absolute top-9 start-[calc(16.66%+12px)] end-[calc(16.66%+12px)] border-t-2 border-dashed border-gray-200" />

          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-gray-100 flex items-center justify-center mx-auto mb-5 relative z-10 shadow-sm">
                <span className="text-[26px] font-extrabold text-[#1B4F72]">{step.num}</span>
              </div>
              <h3 className="text-[19px] font-bold text-gray-800 mb-2.5">{step.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
