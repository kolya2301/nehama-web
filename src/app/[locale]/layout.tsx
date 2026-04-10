import type { Metadata } from "next";
import { Assistant, Noto_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { routing } from "../../../i18n/routing";
import "../globals.css";

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  variable: "--font-assistant",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | נחמה ייצור אביזרי תמיכה לנכים",
    default: "נחמה | ייצור אביזרי תמיכה לנכים",
  },
  description:
    "מפעל ישראלי לייצור אביזרי תמיכה לנכים מאז 2006. אשקלון. ריפוד, כיסאות שירותים, כריות לפצעי לחץ, אינסרטים, אביזרים לכיסא גלגלים.",
  metadataBase: new URL("https://nehama2006.com"),
  openGraph: {
    siteName: "נחמה ייצור אביזרי תמיכה לנכים",
    locale: "he_IL",
  },
};

const RTL_LOCALES = ["he", "ar"];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  const fontClass =
    locale === "ar"
      ? notoSansArabic.variable
      : assistant.variable;

  return (
    <html lang={locale} dir={dir}>
      <body className={`${fontClass} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
