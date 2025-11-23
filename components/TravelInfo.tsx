"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  Cloud,
  Plane,
  Car,
  DollarSign,
  Heart,
  MessageCircle,
  Users,
  MapPin,
  Sun,
  Shield,
  Wifi,
  CreditCard,
  Home
} from "lucide-react";

const travelSections = [
  {
    key: "weather",
    icon: Cloud,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    key: "visa",
    icon: Plane,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    key: "transport",
    icon: Car,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    key: "currency",
    icon: DollarSign,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    key: "health",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    key: "communication",
    icon: MessageCircle,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  {
    key: "etiquette",
    icon: Users,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200"
  },
  {
    key: "accommodation",
    icon: Home,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200"
  }
];

export default function TravelInfo() {
  const t = useTranslations();
  const { locale } = useParams() as { locale: string };

  const renderSectionContent = (section: (typeof travelSections)[0]) => (
    <div className="space-y-3">
      {section.key === "weather" && (
        <>
          <div className="flex items-start space-x-2">
            <MapPin size={16} className="text-blue-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.weather.north.name")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.weather.north.best")}
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <MapPin size={16} className="text-green-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.weather.central.name")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.weather.central.best")}
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.weather.south.name")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.weather.south.best")}
              </div>
            </div>
          </div>
        </>
      )}

      {section.key === "visa" && (
        <>
          <div className="flex items-start space-x-2">
            <Shield size={16} className="text-green-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.visa.evisa")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.visa.evisaDesc")}
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Plane size={16} className="text-blue-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.visa.visaOnArrival")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.visa.voaDesc")}
              </div>
            </div>
          </div>
        </>
      )}

      {section.key === "transport" && (
        <>
          <div className="flex items-start space-x-2">
            <Plane size={16} className="text-purple-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.transport.domestic")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.transport.domesticDesc")}
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Car size={16} className="text-red-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.transport.motorbikes")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.transport.motorbikesDesc")}
              </div>
            </div>
          </div>
        </>
      )}

      {section.key === "currency" && (
        <>
          <div className="flex items-start space-x-2">
            <DollarSign size={16} className="text-yellow-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.currency.dong")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.currency.dongDesc")}
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <CreditCard size={16} className="text-blue-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.currency.payments")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.currency.paymentsDesc")}
              </div>
            </div>
          </div>
        </>
      )}

      {section.key === "health" && (
        <>
          <div className="flex items-start space-x-2">
            <Heart size={16} className="text-red-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.health.vaccinations")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.health.vaccinationsDesc")}
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Sun size={16} className="text-orange-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.health.sun")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.health.sunDesc")}
              </div>
            </div>
          </div>
        </>
      )}

      {section.key === "communication" && (
        <>
          <div className="flex items-start space-x-2">
            <Wifi size={16} className="text-indigo-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.communication.sim")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.communication.simDesc")}
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <MessageCircle
              size={16}
              className="text-green-500 mt-0.5 shrink-0"
            />
            <div>
              <div className="font-medium text-sm">
                {t("travel.communication.apps")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.communication.appsDesc")}
              </div>
            </div>
          </div>
        </>
      )}

      {section.key === "etiquette" && (
        <>
          <div className="flex items-start space-x-2">
            <Users size={16} className="text-pink-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.etiquette.greeting")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.etiquette.greetingDesc")}
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <MapPin size={16} className="text-purple-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.etiquette.temples")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.etiquette.templesDesc")}
              </div>
            </div>
          </div>
        </>
      )}

      {section.key === "accommodation" && (
        <>
          <div className="flex items-start space-x-2">
            <Home size={16} className="text-teal-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.accommodation.hotels")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.accommodation.hotelsDesc")}
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Users size={16} className="text-orange-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-sm">
                {t("travel.accommodation.hostels")}
              </div>
              <div className="text-xs text-gray-600">
                {t("travel.accommodation.hostelsDesc")}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <section
      id="travel"
      className="py-12 sm:py-20 px-4 bg-linear-to-br from-gray-50 to-blue-50 scroll-mt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-serif mb-4 text-charcoal-gray">
            {t("travel.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("travel.subtitle")}
          </p>
        </motion.div>

        {/* Mobile: Swiper, Desktop: Grid */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="pb-8"
          >
            {travelSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <SwiperSlide key={section.key}>
                  <motion.div
                    className={`group ${section.bgColor} ${section.borderColor} border-2 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-lg ${section.bgColor} ${section.color} mr-4 group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif text-charcoal-gray group-hover:text-emerald-green transition-colors">
                        {t(`travel.${section.key}.title`)}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 italic">
                      {t(`travel.${section.key}.subtitle`)}
                    </p>

                    {renderSectionContent(section)}
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {travelSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={section.key}
                className={`group ${section.bgColor} ${section.borderColor} border-2 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg ${section.bgColor} ${section.color} mr-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif text-charcoal-gray group-hover:text-emerald-green transition-colors">
                    {t(`travel.${section.key}.title`)}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-4 italic">
                  {t(`travel.${section.key}.subtitle`)}
                </p>

                {renderSectionContent(section)}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 italic">
            {locale === "vi"
              ? "Chuẩn bị kỹ lưỡng để có chuyến đi tuyệt vời nhất đến Việt Nam!"
              : "Prepare thoroughly for the best trip to Vietnam!"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
