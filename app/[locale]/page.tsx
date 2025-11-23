"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, Suspense } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Lazy load components
const VietnamMap = dynamic(() => import("../../components/VietnamMap"), {
  loading: () => (
    <div className="w-full h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  )
});

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));
const Hero = dynamic(() => import("../../components/Hero"));
const DestinationsSection = dynamic(
  () => import("../../components/DestinationsSection")
);
const CuisineSection = dynamic(() => import("../../components/CuisineSection"));
const CultureTimeline = dynamic(
  () => import("../../components/CultureTimeline")
);
const TravelInfo = dynamic(() => import("../../components/TravelInfo"));
const Testimonials = dynamic(() => import("../../components/Testimonials"));

export default function Home() {
  const t = useTranslations();
  const { locale } = useParams() as { locale: string };
  const aboutRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const cuisineRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const travelRef = useRef<HTMLDivElement>(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const [activeSection, setActiveSection] = useState<string>("about");
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef<number>(0);
  const scrollEndTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Skip scroll detection during programmatic scrolling
      if (isProgrammaticScroll) return;

      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Clear existing timeout
          if (scrollEndTimeoutRef.current) {
            clearTimeout(scrollEndTimeoutRef.current);
          }

          // Set timeout to detect scroll end (when no scroll events for 150ms)
          scrollEndTimeoutRef.current = setTimeout(() => {
            const scrollPosition = currentScrollY + 100; // Offset for header

            const sections = [
              { id: "about", ref: aboutRef },
              { id: "map", ref: mapRef },
              { id: "destinations", ref: destinationsRef },
              { id: "cuisine", ref: cuisineRef },
              { id: "culture", ref: cultureRef },
              { id: "travel", ref: travelRef }
            ];

            // Check if we're at the top (hero section) - set to "about"
            const aboutElement = aboutRef.current;
            if (aboutElement && scrollPosition < aboutElement.offsetTop) {
              setActiveSection("about");
              return;
            }

            // Check other sections
            for (const section of sections) {
              const element = section.ref.current;
              if (element) {
                const { offsetTop, offsetHeight } = element;
                if (
                  scrollPosition >= offsetTop &&
                  scrollPosition < offsetTop + offsetHeight
                ) {
                  setActiveSection(section.id);
                  break;
                }
              }
            }
          }, 150);

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
      }
    };
  }, [isProgrammaticScroll]);

  return (
    <div className="min-h-screen bg-pure-white text-charcoal-gray">
      <Suspense fallback={<div className="h-16 bg-white shadow-sm"></div>}>
        <Header
          locale={locale}
          aboutRef={aboutRef}
          mapRef={mapRef}
          destinationsRef={destinationsRef}
          cuisineRef={cuisineRef}
          cultureRef={cultureRef}
          travelRef={travelRef}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          setIsProgrammaticScroll={setIsProgrammaticScroll}
        />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-screen bg-linear-to-br from-emerald-green to-ocean-turquoise flex items-center justify-center">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-lg">Loading Hero...</p>
            </div>
          </div>
        }
      >
        <Hero aboutRef={aboutRef} mapRef={mapRef} />
      </Suspense>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="py-12 sm:py-20 px-4 bg-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12 text-charcoal-gray"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
          >
            {t("about.title")}
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                {t("about.narrative")}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-green">
                    {t("about.stats.coastline")}
                  </div>
                  <div className="text-sm text-gray-600">
                    {locale === "vi" ? "Bờ biển" : "Coastline"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-ocean-turquoise">
                    {t("about.stats.unesco")}
                  </div>
                  <div className="text-sm text-gray-600">
                    {locale === "vi" ? "Di sản UNESCO" : "UNESCO Sites"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-royal-yellow">
                    {t("about.stats.provinces")}
                  </div>
                  <div className="text-sm text-gray-600">
                    {locale === "vi" ? "Tỉnh thành" : "Provinces"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-lotus-pink">
                    {t("about.stats.motorbike")}
                  </div>
                  <div className="text-sm text-gray-600">
                    {locale === "vi" ? "Văn hóa xe máy" : "Motorbikes"}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 100 }}
              animate={
                isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop"
                alt="Vietnam landscape"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section
        ref={mapRef}
        id="map"
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
            {t("map.title")}
          </motion.h2>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <VietnamMap locale={locale} />
          </motion.div>
        </div>
      </section>

      <div ref={destinationsRef}>
        <DestinationsSection />
      </div>

      <Suspense
        fallback={
          <div className="py-12 sm:py-20 px-4 bg-pure-white">
            <div className="container mx-auto max-w-6xl">
              <div className="h-8 bg-gray-200 rounded mb-8 mx-auto max-w-xs animate-pulse"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-lg p-6 animate-pulse"
                  >
                    <div className="h-32 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <div ref={cuisineRef}>
          <CuisineSection />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <div className="py-12 sm:py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <div className="h-8 bg-gray-200 rounded mb-8 mx-auto max-w-xs animate-pulse"></div>
              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <div ref={cultureRef}>
          <CultureTimeline />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <div className="py-12 sm:py-20 px-4 bg-linear-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto max-w-7xl">
              <div className="h-8 bg-gray-200 rounded mb-8 mx-auto max-w-xs animate-pulse"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 animate-pulse"
                  >
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <div ref={travelRef}>
          <TravelInfo />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <div className="py-12 sm:py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <div className="h-8 bg-gray-200 rounded mb-8 mx-auto max-w-xs animate-pulse"></div>
              <div className="bg-white rounded-lg p-8 animate-pulse">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-gray-200 rounded mr-1"
                    ></div>
                  ))}
                </div>
                <div className="h-6 bg-gray-200 rounded mb-4 mx-auto max-w-md"></div>
                <div className="h-4 bg-gray-200 rounded mx-auto max-w-xs"></div>
              </div>
            </div>
          </div>
        }
      >
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="h-32 bg-gray-800"></div>}>
        <Footer locale={locale} />
      </Suspense>
    </div>
  );
}
