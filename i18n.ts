import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocale = ["en", "vi"].includes(locale) ? locale : "en";

  return {
    messages: (await import(`./messages/${validLocale}.json`)).default,
    timeZone: "Asia/Ho_Chi_Minh",
    now: new Date()
  };
});
