"use client";

import { motion } from "framer-motion";
import { filter } from "framer-motion/client";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const heroBackgroundImages = [
  "https://res.cloudinary.com/de5rurcwt/image/upload/v1754567963/LuTrip/anh-chup-man-hinh-2024-04-01-luc-12-crop-1711950811260_tulfat.png",
  "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  "https://res.cloudinary.com/de5rurcwt/image/upload/v1761762361/6_bdb1li.jpg",
  "https://res.cloudinary.com/de5rurcwt/image/upload/v1761762361/5_ypsfcz.jpg",
  "https://res.cloudinary.com/de5rurcwt/image/upload/v1761762361/3_cbuacd.jpg",
  "https://res.cloudinary.com/de5rurcwt/image/upload/v1761762361/7_skbwv2.jpg",
  "https://res.cloudinary.com/de5rurcwt/image/upload/v1761762362/1_h0dcbn.jpg",
  "https://res.cloudinary.com/de5rurcwt/image/upload/v1761762361/2_a5dzrk.jpg",
  "https://res.cloudinary.com/de5rurcwt/image/upload/v1761762363/9_dqin93.jpg",
  "https://res.cloudinary.com/de5rurcwt/image/upload/v1761762364/8_xeeaao.jpg"
];

export default function Hero({
  aboutRef,
  mapRef
}: {
  aboutRef: React.RefObject<HTMLElement | null>;
  mapRef: React.RefObject<HTMLElement | null>;
}) {
  const t = useTranslations();
  const [currentImage, setCurrentImage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const randomImage =
      heroBackgroundImages[
        Math.floor(Math.random() * heroBackgroundImages.length)
      ];
    setCurrentImage(randomImage);
    setIsClient(true);
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-linear-to-br from-emerald-green to-ocean-turquoise"
        style={{
          backgroundImage:
            isClient && currentImage ? `url(${currentImage})` : undefined,
          filter: "brightness(0.6) contrast(0.8)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-pure-white px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("hero.headline")}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("hero.subheadline")}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button
            onClick={scrollToAbout}
            className="bg-emerald-green text-pure-white px-6 sm:px-8 py-3 rounded-full hover:bg-opacity-80 hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm sm:text-base cursor-pointer"
          >
            {t("hero.ctaPrimary")}
          </button>
          <button
            onClick={scrollToMap}
            className="border-2 border-pure-white text-pure-white px-6 sm:px-8 py-3 rounded-full hover:bg-pure-white hover:text-charcoal-gray hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm sm:text-base cursor-pointer"
          >
            {t("hero.ctaSecondary")}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-pure-white" />
      </motion.div>
    </section>
  );
}
