import type { Metadata } from "next";
import { Noto_Sans, Playfair_Display } from "next/font/google";

import "./globals.css";

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

export const metadata: Metadata = {
  title: "Explore Vietnam - Discover Amazing Destinations",
  description:
    "Embark on an unforgettable journey through Vietnam's stunning landscapes, rich culture, and delicious cuisine. Plan your perfect trip with our comprehensive travel guide.",
  keywords: [
    "Vietnam travel",
    "Vietnam destinations",
    "Vietnam culture",
    "Vietnam cuisine",
    "travel guide"
  ],
  authors: [{ name: "Phat Nguyen" }],
  openGraph: {
    title: "Explore Vietnam - Discover Amazing Destinations",
    description:
      "Embark on an unforgettable journey through Vietnam's stunning landscapes, rich culture, and delicious cuisine.",
    url: "https://explorevietnam.vercel.app",
    siteName: "Explore Vietnam",
    images: [
      {
        url: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763931470/21-512_sfoo4o.png",
        width: 1200,
        height: 630,
        alt: "Explore Vietnam - Travel Guide"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Vietnam - Discover Amazing Destinations",
    description:
      "Embark on an unforgettable journey through Vietnam's stunning landscapes, rich culture, and delicious cuisine.",
    images: [
      "https://res.cloudinary.com/de5rurcwt/image/upload/v1763931470/21-512_sfoo4o.png"
    ]
  },
  icons: {
    icon: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763931470/21-512_sfoo4o.png"
  },
  verification: {
    google: "0t_LgP-ALl8DYktBI7I2nuGtaE7aUF4Fqu015ySICO8"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
