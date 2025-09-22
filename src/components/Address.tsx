"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  fa: {
    title: "موقعیت مکانی و ارتباط",
    addressLabel: "آدرس عمارت:",
    address: "خیابان لطفعلی زند - مسجد نصیر الملک - عمارت آیدین",
    phoneLabel: "شماره تلفن:",
    phone: "+98 9334896083",
    instagramLabel: "اینستاگرام:",
    instagram: "emarat_aidin",
    scheduleLabel: "زمانبندی کافه:",
    schedule: "",
  },
  en: {
    title: "Location & Contact",
    addressLabel: "Emarat Address:",
    address: "Lotfali Zand St - Nasir al-Mulk Mosque - Aidin Emarat",
    phoneLabel: "Phone:",
    phone: "+98 9334896083",
    instagramLabel: "Instagram:",
    instagram: "emarat_aidin",
    scheduleLabel: "Cafe Schedule:",
    schedule: "",
  },
};

const Address = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isFa = language === "fa";
  return (
    <div
      dir={isFa ? "rtl" : "ltr"}
      className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] border-2 rounded-2xl mx-auto flex flex-col items-center p-3 sm:p-4 md:p-5 my-6 sm:my-8 md:my-10 mt-10 sm:mt-15 md:mt-20"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 lg:mb-15 text-center">
        {t.title}
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.6047906435634!2d52.54908062023745!3d29.60838579931941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb20d002794d793%3A0x7523d388e0baf323!2sAidin%20cafe!5e0!3m2!1sen!2s!4v1757059533631!5m2!1sen!2s"
        width="80%"
        height="450"
        loading="lazy"
      ></iframe>
      <div className="w-full mt-10 space-y-10 sm:space-y-7 md:space-y-8 sm:mt-10 md:mt-10 px-2 sm:px-4 md:px-6">
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl text-center ${
            isFa ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <span className="pl-2 text-[#13888C] font-bold">
            {t.addressLabel}
          </span>{" "}
          {t.address}
        </p>
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl text-center ${
            isFa ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <span className="pl-2 text-[#13888C] font-bold">{t.phoneLabel}</span>{" "}
          {t.phone}
        </p>
        <a href="https://www.instagram.com/emarat_aidin">
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-center ${
              isFa ? "lg:text-right" : "lg:text-left"
            }`}
          >
            <span className="pl-2 text-[#13888C] font-bold">
              {t.instagramLabel}
            </span>{" "}
            {t.instagram}
          </p>
        </a>
      </div>
    </div>
  );
};

export default Address;
