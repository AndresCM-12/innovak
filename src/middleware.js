import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["mxn", "bra", "col", "chl", "pe", "usa", "tur", "intl"],

  // Used when no locale matches
  defaultLocale: "mxn",
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(mxn|bra|col|chl|pe|usa|tur|intl)/:path*"],
};
