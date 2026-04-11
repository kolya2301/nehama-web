export const runtime = 'edge';

import { useTranslations } from 'next-intl';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { ContactStrip } from '../../../components/home/ContactStrip';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#F8F7F4] pt-16 pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block mb-4 text-[13px] font-semibold text-[#1B4F72] uppercase tracking-wider">
              {t('badge')}
            </div>
            <h1 className="text-[40px] font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              {t('title')}
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-6">
              <p className="text-[17px] text-gray-600 leading-relaxed">
                {t('p1')}
              </p>
              <p className="text-[17px] text-gray-600 leading-relaxed">
                {t('p2')}
              </p>
            </div>

            {/* Photo Placeholder */}
            <div className="mt-12 bg-gray-100 rounded-2xl h-80 flex items-center justify-center border border-gray-200">
              <p className="text-gray-400 text-center">
                {t('photo_placeholder')}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-[#F8F7F4]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Years */}
              <div className="text-center">
                <div className="text-[48px] font-extrabold text-[#1B4F72] mb-2">
                  20
                </div>
                <p className="text-[15px] text-gray-600">
                  {t('stat_years')}
                </p>
              </div>

              {/* Categories */}
              <div className="text-center">
                <div className="text-[48px] font-extrabold text-[#1B4F72] mb-2">
                  7
                </div>
                <p className="text-[15px] text-gray-600">
                  {t('stat_categories')}
                </p>
              </div>

              {/* Made */}
              <div className="text-center">
                <div className="text-[20px] font-extrabold text-[#1B4F72] mb-2">
                  🇮🇱
                </div>
                <p className="text-[15px] text-gray-600">
                  {t('stat_made')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
