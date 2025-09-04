"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  fa: {
    text: "طراحی و توسعه توسط ",
  },
  en: {
    text: "Designed & developed by ",
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer className="mt-20 py-8 border-t border-foreground/10">
      <div className="text-center">
        <p className="text-sm text-foreground/60 animate-fade-in">
          {t.text}
          <a
            href="https://github.com/Epic2077"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#13888C] hover:text-[#0f6b6f] transition-colors duration-300 hover:underline"
          >
            Epic2077
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
