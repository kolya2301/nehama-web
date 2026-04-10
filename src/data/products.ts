export type Product = {
  id: string;
  categorySlug: string;
  nameHe: string;
  nameRu?: string;
  nameEn?: string;
  nameAr?: string;
  descHe: string;
  descRu?: string;
  descEn?: string;
  descAr?: string;
  materialHe?: string;
  materialRu?: string;
  materialEn?: string;
  materialAr?: string;
  image: string;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  // ── wheelchair-accessories ───────────────────────────────────────────────
  {
    id: "headrest-adjustable-leather",
    categorySlug: "wheelchair-accessories",
    nameHe: "משענת ראש מתכווננת",
    nameRu: "Регулируемый подголовник",
    nameEn: "Adjustable Headrest",
    nameAr: "مسند رأس قابل للتعديل",
    descHe: "משענת ראש מתכווננת בצורת U המאפשרת תמיכה מלאה ונוחות מרבית. מתאימה לסוגי כיסאות גלגלים שונים.",
    descRu: "Регулируемый подголовник U-образной формы для полной поддержки и максимального комфорта.",
    descEn: "U-shaped adjustable headrest for full support and maximum comfort. Fits various wheelchair types.",
    descAr: "مسند رأس قابل للتعديل على شكل U لدعم كامل وراحة قصوى. مناسب لأنواع مختلفة من الكراسي المتحركة.",
    materialHe: "בד דמוי עור",
    materialRu: "Искусственная кожа",
    materialEn: "Faux leather",
    materialAr: "جلد صناعي",
    image: "/images/products/headrest-adjustable-leather.jpg",
    featured: true,
  },
  {
    id: "lumbar-support-mesh",
    categorySlug: "wheelchair-accessories",
    nameHe: "תמיכה גב תחתון לכיסא גלגלים",
    nameRu: "Поддержка поясницы для инвалидной коляски",
    nameEn: "Wheelchair Lumbar Support",
    nameAr: "دعامة أسفل الظهر لكرسي متحرك",
    descHe: "תמיכת גב תחתון המתחברת לכיסא הגלגלים בקלות. מפחיתה כאבי גב ומשפרת יציבה לאורך זמן.",
    descRu: "Поддержка поясницы, легко крепящаяся к инвалидной коляске. Снижает боли в спине и улучшает осанку.",
    descEn: "Lumbar support that attaches easily to the wheelchair. Reduces back pain and improves posture.",
    descAr: "دعامة أسفل الظهر سهلة التركيب على الكرسي المتحرك. تقلل آلام الظهر وتحسن الوضعية.",
    materialHe: "בד נושם",
    materialRu: "Дышащая ткань",
    materialEn: "Breathable mesh fabric",
    materialAr: "قماش شبكي تنفسي",
    image: "/images/products/lumbar-support-mesh.jpg",
    featured: true,
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === slug);
}
