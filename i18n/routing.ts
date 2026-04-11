import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["he", "ru", "en", "ar"],
  defaultLocale: "he",
  localePrefix: "always",
  localeDetection: false,
});
