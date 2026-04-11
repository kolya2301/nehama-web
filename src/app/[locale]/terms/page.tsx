export const runtime = 'edge';

import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('footer');
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#F8F7F4] pt-16 pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">{t('terms')}</h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-6 text-[16px] text-gray-600 leading-relaxed">
            <p>השימוש באתר nehama2006.com מהווה הסכמה לתנאי שימוש אלה.</p>
            <p>כל התכנים, התמונות והמידע המוצגים באתר הם רכוש נחמה ייצור אביזרי תמיכה לנכים.</p>
            <p>אין לעשות שימוש מסחרי בתכני האתר ללא אישור מפורש בכתב.</p>
            <p>המחירים, המפרטים והזמינות של המוצרים כפופים לשינויים ללא הודעה מוקדמת.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
