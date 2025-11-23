"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  locale: string;
  aboutRef?: React.RefObject<HTMLDivElement | null>;
  mapRef?: React.RefObject<HTMLDivElement | null>;
  destinationsRef?: React.RefObject<HTMLDivElement | null>;
  cuisineRef?: React.RefObject<HTMLDivElement | null>;
  cultureRef?: React.RefObject<HTMLDivElement | null>;
  travelRef?: React.RefObject<HTMLDivElement | null>;
  activeSection?: string;
  setActiveSection?: (section: string) => void;
  setIsProgrammaticScroll?: (isScrolling: boolean) => void;
}

export default function Header({
  locale,
  aboutRef,
  mapRef,
  destinationsRef,
  cuisineRef,
  cultureRef,
  travelRef,
  activeSection = "about",
  setActiveSection = () => {},
  setIsProgrammaticScroll = () => {}
}: HeaderProps) {
  const t = useTranslations();
  const [navScrolled, setNavScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToAbout = () => {
    setIsProgrammaticScroll(true);
    setActiveSection("about");
    aboutRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    // Re-enable scroll detection after scroll animation completes
    setTimeout(() => setIsProgrammaticScroll(false), 200);
  };

  const scrollToMap = () => {
    setIsProgrammaticScroll(true);
    setActiveSection("map");
    mapRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => setIsProgrammaticScroll(false), 200);
  };

  const scrollToDestinations = () => {
    setIsProgrammaticScroll(true);
    setActiveSection("destinations");
    destinationsRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setTimeout(() => setIsProgrammaticScroll(false), 200);
  };

  const scrollToCuisine = () => {
    setIsProgrammaticScroll(true);
    setActiveSection("cuisine");
    cuisineRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => setIsProgrammaticScroll(false), 200);
  };

  const scrollToCulture = () => {
    setIsProgrammaticScroll(true);
    setActiveSection("culture");
    cultureRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => setIsProgrammaticScroll(false), 200);
  };

  const scrollToTravel = () => {
    setIsProgrammaticScroll(true);
    setActiveSection("travel");
    travelRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => setIsProgrammaticScroll(false), 200);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-9999 transition-all duration-300 ${
        navScrolled ? "bg-pure-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className={`text-xl font-bold transition-colors ${
              navScrolled ? "text-charcoal-gray" : "text-pure-white"
            }`}
          >
            Vietnam Tourism
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 relative">
            <button
              onClick={scrollToAbout}
              className={`relative hover:text-emerald-green transition-colors duration-300 cursor-pointer ${
                navScrolled ? "text-charcoal-gray" : "text-pure-white"
              } ${activeSection === "about" ? "text-emerald-green" : ""}`}
            >
              {t("nav.about")}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-emerald-green"
                initial={{ width: 0 }}
                animate={{ width: activeSection === "about" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
            <button
              onClick={scrollToMap}
              className={`relative hover:text-emerald-green transition-colors duration-300 cursor-pointer ${
                navScrolled ? "text-charcoal-gray" : "text-pure-white"
              } ${activeSection === "map" ? "text-emerald-green" : ""}`}
            >
              {t("nav.map")}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-emerald-green"
                initial={{ width: 0 }}
                animate={{ width: activeSection === "map" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
            <button
              onClick={scrollToDestinations}
              className={`relative hover:text-emerald-green transition-colors duration-300 cursor-pointer ${
                navScrolled ? "text-charcoal-gray" : "text-pure-white"
              } ${
                activeSection === "destinations" ? "text-emerald-green" : ""
              }`}
            >
              {t("nav.destinations")}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-emerald-green"
                initial={{ width: 0 }}
                animate={{
                  width: activeSection === "destinations" ? "100%" : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
            <button
              onClick={scrollToCuisine}
              className={`relative hover:text-emerald-green transition-colors duration-300 cursor-pointer ${
                navScrolled ? "text-charcoal-gray" : "text-pure-white"
              } ${activeSection === "cuisine" ? "text-emerald-green" : ""}`}
            >
              {t("nav.cuisine")}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-emerald-green"
                initial={{ width: 0 }}
                animate={{ width: activeSection === "cuisine" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
            <button
              onClick={scrollToCulture}
              className={`relative hover:text-emerald-green transition-colors duration-300 cursor-pointer ${
                navScrolled ? "text-charcoal-gray" : "text-pure-white"
              } ${activeSection === "culture" ? "text-emerald-green" : ""}`}
            >
              {t("nav.timeline")}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-emerald-green"
                initial={{ width: 0 }}
                animate={{ width: activeSection === "culture" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
            <button
              onClick={scrollToTravel}
              className={`relative hover:text-emerald-green transition-colors duration-300 cursor-pointer ${
                navScrolled ? "text-charcoal-gray" : "text-pure-white"
              } ${activeSection === "travel" ? "text-emerald-green" : ""}`}
            >
              {t("nav.travel")}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-emerald-green"
                initial={{ width: 0 }}
                animate={{ width: activeSection === "travel" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex space-x-2">
              <a
                href="/en"
                className={`px-2 py-1 rounded hover:bg-emerald-green hover:text-pure-white transition-colors ${
                  navScrolled ? "text-charcoal-gray" : "text-pure-white"
                } ${locale === "en" ? "bg-emerald-green text-pure-white" : ""}`}
              >
                EN
              </a>
              <a
                href="/vi"
                className={`px-2 py-1 rounded hover:bg-emerald-green hover:text-pure-white transition-colors ${
                  navScrolled ? "text-charcoal-gray" : "text-pure-white"
                } ${locale === "vi" ? "bg-emerald-green text-pure-white" : ""}`}
              >
                VI
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                navScrolled
                  ? "text-charcoal-gray hover:bg-gray-100"
                  : "text-pure-white hover:bg-white hover:bg-opacity-10"
              } ${isMobileMenuOpen ? "scale-110" : ""}`}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-100 z-50"
              >
                <div className="container mx-auto px-4 py-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6 text-charcoal-gray"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-col space-y-1">
                    {/* Navigation Links */}
                    <motion.button
                      onClick={() => {
                        scrollToAbout();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-left cursor-pointer relative ${
                        activeSection === "about"
                          ? "bg-emerald-green text-white"
                          : "text-charcoal-gray hover:bg-emerald-green hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="font-medium">{t("nav.about")}</span>
                      {activeSection === "about" && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        scrollToMap();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-left cursor-pointer relative ${
                        activeSection === "map"
                          ? "bg-emerald-green text-white"
                          : "text-charcoal-gray hover:bg-emerald-green hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <span className="font-medium">{t("nav.map")}</span>
                      {activeSection === "map" && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        scrollToDestinations();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-left cursor-pointer relative ${
                        activeSection === "destinations"
                          ? "bg-emerald-green text-white"
                          : "text-charcoal-gray hover:bg-emerald-green hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="font-medium">
                        {t("nav.destinations")}
                      </span>
                      {activeSection === "destinations" && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        scrollToCuisine();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-left cursor-pointer relative ${
                        activeSection === "cuisine"
                          ? "bg-emerald-green text-white"
                          : "text-charcoal-gray hover:bg-emerald-green hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <span className="font-medium">{t("nav.cuisine")}</span>
                      {activeSection === "cuisine" && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        scrollToCulture();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-left cursor-pointer relative ${
                        activeSection === "culture"
                          ? "bg-emerald-green text-white"
                          : "text-charcoal-gray hover:bg-emerald-green hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="font-medium">{t("nav.timeline")}</span>
                      {activeSection === "culture" && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        scrollToTravel();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-left cursor-pointer relative ${
                        activeSection === "travel"
                          ? "bg-emerald-green text-white"
                          : "text-charcoal-gray hover:bg-emerald-green hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <span className="font-medium">{t("nav.travel")}</span>
                      {activeSection === "travel" && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  </div>

                  {/* Language Switcher */}
                  <motion.div
                    className="flex items-center justify-center space-x-3 mt-8 pt-6 border-t border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-sm text-gray-500 font-medium mr-2">
                      Language
                    </span>
                    <a
                      href="/en"
                      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        locale === "en"
                          ? "bg-emerald-green text-white shadow-lg scale-105"
                          : "bg-gray-100 text-charcoal-gray hover:bg-emerald-green hover:text-white hover:scale-105"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      EN
                    </a>
                    <a
                      href="/vi"
                      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        locale === "vi"
                          ? "bg-emerald-green text-white shadow-lg scale-105"
                          : "bg-gray-100 text-charcoal-gray hover:bg-emerald-green hover:text-white hover:scale-105"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      VI
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
