"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Crown,
  Hammer,
  Heart,
  BookOpen,
  Castle,
  Palette,
  Anchor,
  PenTool,
  Shield,
  Utensils,
  Calendar,
  Shirt
} from "lucide-react";

const timelineData = [
  {
    key: "hungkings",
    icon: Crown,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    shadowColor: "shadow-amber-100"
  },
  {
    key: "dongson",
    icon: Hammer,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    shadowColor: "shadow-orange-100"
  },
  {
    key: "buddhism",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    shadowColor: "shadow-red-100"
  },
  {
    key: "confucian",
    icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    shadowColor: "shadow-blue-100"
  },
  {
    key: "dynasties",
    icon: Castle,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    shadowColor: "shadow-purple-100"
  },
  {
    key: "folkarts",
    icon: Palette,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    shadowColor: "shadow-pink-100"
  },
  {
    key: "colonial",
    icon: Anchor,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    shadowColor: "shadow-gray-100"
  },
  {
    key: "literature",
    icon: PenTool,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    shadowColor: "shadow-indigo-100"
  },
  {
    key: "vietnamwar",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    shadowColor: "shadow-green-100"
  },
  {
    key: "streetfood",
    icon: Utensils,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    shadowColor: "shadow-yellow-100"
  },
  {
    key: "tet",
    icon: Calendar,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    shadowColor: "shadow-emerald-100"
  },
  {
    key: "aodai",
    icon: Shirt,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    shadowColor: "shadow-teal-100"
  }
];

export default function CultureTimeline() {
  const t = useTranslations();

  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12 text-charcoal-gray">
          {t("timeline.title")}
        </h2>

        {/* Desktop Timeline */}
        <div className="relative px-4 sm:px-0 hidden sm:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-green h-full"></div>
          {timelineData.map((era, index) => {
            const IconComponent = era.icon;
            return (
              <motion.div
                key={era.key}
                className="flex items-center mb-6 sm:mb-8 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-green rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div
                  className={`flex items-center w-full ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`bg-pure-white p-4 rounded-lg shadow-md max-w-md w-full sm:w-auto ${
                      index % 2 === 0 ? "sm:mr-4" : "sm:ml-4"
                    }`}
                  >
                    <h3 className="font-serif text-base sm:text-lg">
                      {t(`timeline.${era.key}`)}
                    </h3>
                  </div>
                  <div
                    className={`w-25 h-0.5 bg-emerald-green ${
                      index % 2 === 0 ? "mr-30" : "ml-30 order-first"
                    }`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Timeline */}
        <div className="relative px-4 sm:hidden">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-green"></div>
          {timelineData.map((era, index) => {
            const IconComponent = era.icon;
            return (
              <motion.div
                key={era.key}
                className="flex items-start mb-8 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-green flex items-center justify-center mr-4 mt-1 shadow-lg">
                  <IconComponent size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <motion.div
                    className={`group ${era.bgColor} ${era.borderColor} border-2 rounded-xl p-5 ${era.shadowColor} shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className={`p-2 rounded-lg ${era.bgColor} ${era.color} mr-3 group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent size={18} />
                      </div>
                      <h3 className="font-serif text-lg text-charcoal-gray group-hover:text-emerald-green transition-colors">
                        {t(`timeline.${era.key}`)}
                      </h3>
                    </div>
                    <div className="w-full h-1 bg-linear-to-r from-transparent via-emerald-200 to-transparent rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
