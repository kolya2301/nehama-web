import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {};

if (process.env.NODE_ENV === "development") {
  (async () => {
    try {
      await setupDevPlatform();
    } catch (e) {
      console.warn("[next-on-pages] setupDevPlatform failed:", e);
    }
  })();
}

export default withNextIntl(nextConfig);
