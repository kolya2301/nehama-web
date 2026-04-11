export const runtime = 'edge';

import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { ContactStrip } from '../../../components/home/ContactStrip';
import { useTranslations } from 'next-intl';

export default function CompaniesPage() {
  const t = useTranslations('nav');
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#F8F7F4] pt-16 pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">{t('companies')}</h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[17px] text-gray-600 leading-relaxed">
              אנחנו עובדים עם קופות חולים, בתי חולים, מרכזי שיקום, קלינאים וגופים ממשלתיים ברחבי הארץ.
              לפרטים על שיתוף פעולה מסחרי — צרו קשר ישירות.
            </p>
          </div>
        </section>
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
