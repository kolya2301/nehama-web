export const runtime = 'edge';

import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('footer');
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#F8F7F4] pt-16 pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">{t('privacy')}</h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-6 text-[16px] text-gray-600 leading-relaxed">
            <p>האתר nehama2006.com אינו אוסף מידע אישי מעבר למה שנמסר ביוזמת המשתמש בטופס יצירת הקשר.</p>
            <p>פרטי הקשר (שם, טלפון, הודעה) משמשים אך ורק למענה על פניות ולא מועברים לצד שלישי.</p>
            <p>לשאלות בנושא פרטיות: <a href="tel:+972" className="text-[#1B4F72] underline">צרו קשר ישירות</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
