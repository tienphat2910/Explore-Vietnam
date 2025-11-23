"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function CuisineSection() {
  const t = useTranslations();

  return (
    <section
      id="cuisine"
      className="py-12 sm:py-20 px-4 bg-pure-white scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12 text-charcoal-gray"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("cuisine.title")}
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
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            className="pb-8 sm:pb-12"
          >
            {[
              {
                key: "pho",
                src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop"
              },
              {
                key: "banhmi",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763925833/1742898108-481231772_122140861622606002_6478007692031959728_n_glflre.jpg"
              },
              {
                key: "buncha",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763925901/bun-cha-hang-than-dia-chi-an-bun-cha-ha-noi_gyygrp.jpg"
              },
              {
                key: "banhxeo",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763925938/banh-xeo-mien-tay-1713968389_cbsitn.jpg"
              },
              {
                key: "goicuon",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763925994/4-4_vvukcy.jpg"
              },
              {
                key: "eggcoffee",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926075/C_C3_A0_ph_C3_AA_tr_E1_BB_A9ng_e8uack.jpg"
              },
              {
                key: "miquang",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926131/mi-quang-hoi-an-11_1631202243_v1xpv8.jpg"
              },
              {
                key: "nemlui",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926165/Buoc-6-5410-1645174529_ptzqtc.jpg"
              },
              {
                key: "bunbohue",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926198/quan-bun-bo-hue-1_jippxe.jpg"
              },
              {
                key: "chagio",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926325/cach-lam-mon-cha-gio-thom-ngon--5_760x536_adb37c.jpg"
              },
              {
                key: "caphesuada",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926433/LcrQvf5VlPKjyIVgH6UUURhh9HPOorCMbr091cGQwkF78pqw6TtPnLT1zlsPJA87rvAxSrntSrJhT6F2u_O6N3i2pK4y32kEZ7cvDpHA9DwHhvnLNozl_5EPfQzpwpgVHbaMky5_rdUqjAzGmGNY6VYeZDhmFDfDpk8d20z8Q9bX-OYGaTeiXuiaA4M_gxtmhr.jpg"
              },
              {
                key: "buncanha",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926521/ecyvtssh5puxjw4k33jf_w6vvdy.webp"
              },
              {
                key: "caolau",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926562/pwf9twnkcfkhkmaeis2l_ew73xo.webp"
              },
              {
                key: "banhcanhhe",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926567/juujaa4vxznouq2oungo_htxszm.webp"
              },
              {
                key: "hutieu",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926637/aj1jkbdkkv3w7j4oelic_gynjbd.webp"
              },
              {
                key: "bunquay",
                src: "https://res.cloudinary.com/de5rurcwt/image/upload/v1763926646/yycmoonnwud68cmb4ton_dm7ouh.webp"
              }
            ].map((dish, index) => (
              <SwiperSlide key={dish.key} className="h-full">
                <motion.div
                  className="bg-gray-50 rounded-lg p-3 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col min-h-[350px] sm:min-h-[400px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={dish.src}
                    alt={t(`cuisine.${dish.key}.name`)}
                    width={300}
                    height={200}
                    className="w-full h-44 sm:h-40 object-cover rounded mb-4"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                  />
                  <h3 className="text-lg sm:text-xl font-serif mb-2">
                    {t(`cuisine.${dish.key}.name`)}
                  </h3>
                  <div className="grow">
                    <p className="text-sm text-gray-600 mb-2">
                      {t(`cuisine.${dish.key}.flavor`)}
                    </p>
                    <p className="text-sm italic mb-2">
                      {t(`cuisine.${dish.key}.story`)}
                    </p>
                    <p className="text-sm font-medium text-emerald-green">
                      "{t(`cuisine.${dish.key}.quote`)}"
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
