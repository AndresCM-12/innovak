import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["mx", "br", "co", "cl", "pe", "eu", "tr", "intl"],

  // Used when no locale matches
  defaultLocale: "mx",
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(mx|br|co|cl|pe|eu|tr|intl)/:path*"],
};
