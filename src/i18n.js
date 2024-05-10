import { getRequestConfig } from "next-intl/server";
import NotFound from "./not-found";

// Can be imported from a shared config
const locales = ["mx", "br", "co", "cl", "pe", "eu", "tr", "intl"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) NotFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
