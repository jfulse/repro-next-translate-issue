const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  experimental: {
    transpilePackages: ["@repro-next-translate-issue/example-package"],
  },
};

module.exports = nextTranslate(nextConfig);
