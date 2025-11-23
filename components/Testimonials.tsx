"use client";

import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export default function Testimonials() {
  const t = useTranslations();

  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12 text-charcoal-gray"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("testimonials.title")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            className="pb-8 sm:pb-12"
          >
            <SwiperSlide>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-royal-yellow fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg sm:text-xl italic mb-4">
                  "{t("testimonials.quote1")}"
                </blockquote>
                <p className="text-gray-600 text-sm sm:text-base">
                  - Traveler from USA
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-royal-yellow fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg sm:text-xl italic mb-4">
                  "{t("testimonials.quote2")}"
                </blockquote>
                <p className="text-gray-600 text-sm sm:text-base">
                  - Traveler from Europe
                </p>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
