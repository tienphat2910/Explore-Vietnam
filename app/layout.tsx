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
  icons: {
    icon: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763931470/21-512_sfoo4o.png"
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
