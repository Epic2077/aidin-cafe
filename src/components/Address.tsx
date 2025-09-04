"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  fa: {
    title: "موقعیت مکانی و ارتباط",
    addressLabel: "آدرس عمارت:",
    address: "خیابان لطفعلی زند - مسجد نصیر الملک - عمارت آیدین",
    phoneLabel: "شماره تلفن:",
    phone: "",
    instagramLabel: "اینستاگرام:",
    instagram: "",
    scheduleLabel: "زمانبندی کافه:",
    schedule: "",
  },
  en: {
    title: "Location & Contact",
    addressLabel: "Emarat Address:",
    address: "Lotfali Zand St - Nasir al-Mulk Mosque - Aidin Emarat",
    phoneLabel: "Phone:",
    phone: "",
    instagramLabel: "Instagram:",
    instagram: "",
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
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d250.48325903841112!2d52.54906272709848!3d29.608400652990674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshiraz!5e0!3m2!1sen!2sde!4v1752529292694!5m2!1sen!2sde"
        width="100%"
        height="300"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
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
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl text-center ${
            isFa ? "lg:text-right" : "lg:text-left"
          } mb-5`}
        >
          <span className="pl-2 text-[#13888C] font-bold">
            {t.scheduleLabel}
          </span>{" "}
          {t.schedule}
        </p>
      </div>
    </div>
  );
};

export default Address;
