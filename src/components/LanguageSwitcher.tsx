"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      className="fixed bottom-4 left-4 z-50 px-4 py-3 flex justify-center items-center rounded-full bg-[#13888C] text-white shadow-lg transition-all hover:bg-[#0f6b6f] animate-fade-in"
      onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
      aria-label="Change language"
    >
      {language === "fa" ? "En" : "Fa"}
    </button>
  );
};

export default LanguageSwitcher;
