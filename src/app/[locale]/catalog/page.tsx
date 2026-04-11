export const runtime = 'edge';

import { useTranslations } from 'next-intl';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Categories } from '../../../components/home/Categories';

export default function CatalogPage() {
  const t = useTranslations('categories');

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#F8F7F4] pt-16 pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block mb-4 text-[13px] font-semibold text-[#1B4F72] uppercase tracking-wider">
              {t('section_label')}
            </div>
            <h1 className="text-[40px] font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              {t('section_title')}
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[540px]">
              {t('section_desc')}
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Categories />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
