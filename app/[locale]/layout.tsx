import { Noto_Sans, Playfair_Display } from "next/font/google";
import IntlProvider from "../../components/IntlProvider";
import type { Metadata } from "next";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap"
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap"
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "Explore Vietnam - Land of Timeless Wonders",
    vi: "Khám phá Việt Nam - Vùng đất của kỳ quan vượt thời gian"
  };

  const descriptions = {
    en: "Discover Vietnam – The land of timeless wonders",
    vi: "Khám phá Việt Nam – Vùng đất của những kỳ quan vượt thời gian"
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.en,
    icons: {
      icon: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763931470/21-512_sfoo4o.png"
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
