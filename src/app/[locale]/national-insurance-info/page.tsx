export const runtime = 'edge';

import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Link } from '../../../../i18n/navigation';
import { useTranslations } from 'next-intl';

export default function NationalInsurancePage() {
  const t = useTranslations('footer');
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#F8F7F4] pt-16 pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">{t('nii_info')}</h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-6 text-[16px] text-gray-600 leading-relaxed">
            <p>ביטוח לאומי מממן חלק מאביזרי השיקום והתמיכה עבור אנשים עם מוגבלות.</p>
            <p>אנחנו עובדים עם לקוחות הרוכשים בעצמם ועם גופים המנוהלים על ידי גורמים מוסמכים.</p>
            <p>לבדיקת זכאות &mdash; פנו ישירות למוסד לביטוח לאומי בטלפון <strong>*6050</strong> או דרך האתר{' '}
              <a href="https://www.btl.gov.il" target="_blank" rel="noopener noreferrer" className="text-[#1B4F72] underline">btl.gov.il</a>.
            </p>
            <p>לסיוע בתהליך ולהתאמת המוצר המתאים &mdash; <Link href="/contact" className="text-[#1B4F72] underline">צרו איתנו קשר</Link>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
