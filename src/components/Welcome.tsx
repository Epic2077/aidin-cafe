"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  fa: {
    welcome: "خوش آمدید",
    description:
      "کافه و رستوران آیدین در قلب شیراز و در خیابان تاریخی زند واقع شده است. آیدین ترکیبی منحصر به فرد از طعم های سنتی و مدرن را ارائه می دهد. علاقه ما به برتری در آشپزی و تعهد ما به ارائه یک تجربه غذایی فراموش نشدنی، آیدین را به یک مکان محبوب بین مردم محلی و گردشگران تبدیل کرده است. چه برای یک تجربه کافه آرام به اینجا آمده باشید و چه برای یک وعده غذایی لذیذ در رستوران ما، ما قول یک سفر خوشمزه و پر از سنت را به شما می‌دهیم.",
    menu: "منو",
  },
  en: {
    welcome: "Welcome",
    description:
      "Aidin Cafe & Restaurant is located in the heart of Shiraz, on the historic Zand Street. Aidin offers a unique blend of traditional and modern flavors. Our passion for culinary excellence and commitment to providing an unforgettable dining experience has made Aidin a favorite among locals and tourists alike. Whether you're here for a relaxing cafe experience or a delicious meal in our restaurant, we promise you a tasty journey full of tradition.",
    menu: "Menu",
  },
};

const Welcome = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] border-2 border-dotted mx-auto min-h-25 rounded-[5px] mt-[-60px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-115px] flex flex-col fade-in-scroll justify-center bg-transparent">
      <h2 className="text-[#10868B] text-xl sm:text-2xl md:text-3xl mt-[-20px] sm:mt-[-25px] md:mt-[-30px] text-center fade-in-scroll-top">
        <span className="bg-background px-2 sm:px-3 md:px-4">{t.welcome}</span>
      </h2>
      <p className="font-vazir text-center mt-6 sm:mt-8 md:mt-10 lg:mt-15 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-8 md:leading-10 lg:leading-12 w-[95%] sm:w-[90%] md:w-[85%] lg:w-3/4 mx-auto fade-in-scroll-left px-2 sm:px-4">
        {t.description}
      </p>
      <div className="w-24 sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 lg:h-11 flex items-center justify-center border-2 border-[#10868B] rounded-xl mx-auto mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg text-[#10868B] fade-in-scroll-scale">
        {t.menu}
      </div>
    </div>
  );
};

export default Welcome;
