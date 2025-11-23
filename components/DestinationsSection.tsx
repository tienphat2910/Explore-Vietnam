"use client";

import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Card from "./Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DestinationsSection() {
  const t = useTranslations();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Mobile breakpoint <640px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="destinations"
      className="py-12 sm:py-20 px-4 bg-gray-50 scroll-mt-20"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12 text-charcoal-gray"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("destinations.title")}
        </motion.h2>
        <motion.div
          className="overflow-hidden px-12 sm:px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides={isMobile} // bật căn giữa trên mobile
            centerInsufficientSlides={isMobile}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
              1280: { slidesPerView: 4, spaceBetween: 50 },
              1440: { slidesPerView: 4, spaceBetween: 50 }
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            className="pb-8 sm:pb-12 w-full"
          >
            {[
              {
                key: "hanoi",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1754570812/LuTrip/anh-ha-noi_grl5qy.jpg"
              },
              {
                key: "hcmc",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763924833/Where-is-ho-chi-minh-city-01_1684509272_ga4vek.jpg"
              },
              {
                key: "phuquoc",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1754570810/LuTrip/phu-quoc_zhihkc.jpg"
              },
              {
                key: "nhatrang",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1754570809/LuTrip/NhaTrang-KhoaTran-27-1616120145_dz9lqm.webp"
              },
              {
                key: "halong",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1754570803/LuTrip/anh-vinh-ha-long-28_vdsdn8.jpg"
              },
              {
                key: "hoian",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1762085260/LuTrip/tours/tour_temp_1762085258090.jpg"
              },
              {
                key: "sapa",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1760191618/tfd_240926041957_028346_FANSIPAN_zjgbsr.jpg"
              },
              {
                key: "hue",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1762084646/LuTrip/tours/tour_temp_1762084646561.jpg"
              },
              {
                key: "danang",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1762084645/LuTrip/tours/tour_temp_1762084645405.jpg"
              }
            ].map((dest, index) => (
              <SwiperSlide key={dest.key}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    imageSrc={dest.src}
                    title={t(`destinations.${dest.key}.name`)}
                    subtitle={t(`destinations.${dest.key}.caption`)}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
