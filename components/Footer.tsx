"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations();

  return (
    <footer className="bg-charcoal-gray text-pure-white py-12 px-4 relative z-90">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">{t("footer.tagline")}</h3>
            <p className="text-sm">
              Experience the timeless wonders of Vietnam
            </p>
          </div>
          <div>
            <h4 className="font-serif mb-4">{t("footer.contact")}</h4>
            <div className="flex items-center mb-2">
              <Mail className="w-4 h-4 mr-2 shrink-0" />
              <span className="text-sm">{t("footer.email")}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 shrink-0" />
              <span className="text-sm">{t("footer.phone")}</span>
            </div>
          </div>
          <div>
            <h4 className="font-serif mb-4">{t("footer.social")}</h4>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-emerald-green transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-emerald-green transition-colors" />
              <Youtube className="w-6 h-6 cursor-pointer hover:text-emerald-green transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-serif mb-4">{t("footer.newsletter")}</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded text-charcoal-gray mb-2"
            />
            <button className="w-full bg-emerald-green text-pure-white py-2 rounded hover:bg-opacity-80 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
