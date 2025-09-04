"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      className="fixed bottom-2 left-2 sm:bottom-4 sm:left-4 z-50 px-3 py-2 sm:px-5 sm:py-3 flex justify-center items-center gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-[#13888C] to-[#0f6b6f] text-white shadow-xl border-2 border-white/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in font-bold text-base sm:text-lg backdrop-blur-md"
      onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
      aria-label="Change language"
    >
      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center text-[#13888C] font-extrabold">
        {language === "fa" ? "EN" : "FA"}
      </span>
      <span className="hidden xs:inline sm:inline-block">
        {language === "fa" ? "English" : "فارسی"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
