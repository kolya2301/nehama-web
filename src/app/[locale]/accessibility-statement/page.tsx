export const runtime = 'edge';

import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { useTranslations } from 'next-intl';

export default function AccessibilityPage() {
  const t = useTranslations('footer');
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#F8F7F4] pt-16 pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">{t('accessibility')}</h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-6 text-[16px] text-gray-600 leading-relaxed">
            <p>אתר זה עומד בדרישות תקן WCAG 2.1 ברמה AA ובהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג–2013.</p>
            <p>ביצענו מאמצים רבים להנגיש את האתר לאנשים עם מוגבלויות שונות, לרבות לקויי ראייה, לקויי שמיעה ולקויי מוטוריקה.</p>
            <p><strong>פגשתם בעיית נגישות?</strong> נשמח לשמוע ולתקן — צרו קשר ישירות.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
