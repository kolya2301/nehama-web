export const runtime = 'edge';

import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Header } from "../../../../components/layout/Header";
import { Footer } from "../../../../components/layout/Footer";
import { ContactStrip } from "../../../../components/home/ContactStrip";
import { getProductsByCategory } from "../../../../data/products";
import { Link } from "../../../../../i18n/navigation";

const VALID_SLUGS = [
  "wheelchair-accessories",
  "toilet-chairs",
  "bed-accessories",
  "inserts",
  "wheelchair-upholstery",
  "pressure-cushions",
  "custom",
];

const SLUG_TO_KEY: Record<string, string> = {
  "wheelchair-accessories": "wheelchair",
  "toilet-chairs": "toilet",
  "bed-accessories": "bed",
  "inserts": "inserts",
  "wheelchair-upholstery": "upholstery",
  "pressure-cushions": "cushions",
  "custom": "custom",
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function CatalogPage({ params }: Props) {
  const { slug, locale } = await params;

  if (!VALID_SLUGS.includes(slug)) notFound();

  const t = await getTranslations("categories");
  const tc = await getTranslations("catalog");

  const catKey = SLUG_TO_KEY[slug];
  const products = getProductsByCategory(slug);

  function getLocalizedField(product: ReturnType<typeof getProductsByCategory>[number], field: "name" | "desc" | "material") {
    const localeField = `${field}${locale.charAt(0).toUpperCase() + locale.slice(1)}` as keyof typeof product;
    const heField = `${field}He` as keyof typeof product;
    return (product[localeField] || product[heField] || "") as string;
  }

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb + Hero */}
        <section className="bg-[#F8F7F4] pt-10 pb-14 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="text-[13px] text-gray-400 mb-6 flex items-center gap-1.5">
              <Link href="/" className="hover:text-[#1B4F72] transition-colors">
                {tc("home")}
              </Link>
              <span>/</span>
              <span className="text-gray-600 font-medium">
                {t(`${catKey}_name` as Parameters<typeof t>[0])}
              </span>
            </nav>

            <h1 className="text-[32px] font-extrabold text-gray-900 tracking-tight mb-3">
              {t(`${catKey}_name` as Parameters<typeof t>[0])}
            </h1>
            <p className="text-[17px] text-gray-500 max-w-[540px]">
              {t(`${catKey}_desc` as Parameters<typeof t>[0])}
            </p>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            {products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[17px] text-gray-400">{tc("coming_soon")}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block text-[15px] font-semibold text-[#1B4F72] underline underline-offset-4"
                >
                  {tc("contact_for_info")}
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => {
                  const name = getLocalizedField(product, "name");
                  const desc = getLocalizedField(product, "desc");
                  const material = getLocalizedField(product, "material");

                  return (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="relative w-full aspect-[4/3] bg-gray-50">
                        <Image
                          src={product.image}
                          alt={name}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <h2 className="text-[17px] font-bold text-gray-900 mb-1.5 leading-snug">
                          {name}
                        </h2>
                        <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                          {desc}
                        </p>
                        {material && (
                          <span className="inline-block text-[12px] font-semibold text-[#1B4F72] bg-[#D6EAF8] px-2.5 py-1 rounded-full">
                            {material}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}

