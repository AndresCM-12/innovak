const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ["mxn", "bra", "col", "chl", "pe", "usa", "tur", "intl"],
  //   defaultLocale: "mxn",
  // },
  //output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
