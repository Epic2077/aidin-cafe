"use client";

import React from "react";
import Items from "./Items";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  fa: {
    title: "منوی عمارت",
    breakfast: "صبحانه",
    breakfastItems1: ["آش سبزی", "نیمرو", "املت", " املت سوسیس"],
    breakfastItems2: ["نان و پنیر و گردو", "مربا های مختلف", "صبحانه ایرانی"],
    coldDrinks: "سردنوش",
    coldDrinksItems1: ["شربت و عرقیجات"],
    coldDrinksItems2: ["کاسنی شاه تره", "سکنجبین", "بیدمشک نسترن", "زعفران"],
    coldDrinksItems3: ["تخم شربتی", "خاکشیر", "بهارنارنج", "گلاب زعفران"],
    coldDrinksItems4: ["دوغ لیوانی"],
    coffeeDrinks: "نوشیدنی گرم بر پایه قهوه",
    coffeeDrinksItems1: ["اسپرسو", "آمریکانو", "شیر قهوه", "قهوه ترک"],
    coffeeDrinksItems2: ["کارامل ماکیاتو", "قهوه قاجار", "لاته"],
    hotDrinks: "نوشیدنی گرم",
    hotDrinksItems1: ["چای"],
    hotDrinksItems2: ["کرک", "شیر عسل", "هات چاکلت", "ماسلا"],
  },
  en: {
    title: "Emarat Menu",
    breakfast: "Breakfast",
    breakfastItems1: ["Herb Ash", "Fried Eggs", "Omelette", "Sausage Omelette"],
    breakfastItems2: [
      "Bread, Cheese & Walnut",
      "Various Jams",
      "Iranian Breakfast",
    ],
    coldDrinks: "Cold Drinks",
    coldDrinksItems1: ["Syrups & Herbal Drinks"],
    coldDrinksItems2: [
      "Cichorium",
      "Sekanjebin",
      "Bidmeshk & Nastaran",
      "Saffron",
    ],
    coldDrinksItems3: [
      "Basil Seeds",
      "Khakshir",
      "Bitter Orange Blossom",
      "Rosewater Saffron",
    ],
    coldDrinksItems4: ["Doogh (Yogurt Drink)"],
    coffeeDrinks: "Hot Coffee Drinks",
    coffeeDrinksItems1: [
      "Espresso",
      "Americano",
      "Milk Coffee",
      "Turkish Coffee",
    ],
    coffeeDrinksItems2: ["Caramel Macchiato", "Qajar Coffee", "Latte"],
    hotDrinks: "Hot Drinks",
    hotDrinksItems1: ["Tea"],
    hotDrinksItems2: ["Karak", "Milk & Honey", "Hot Chocolate", "Masala"],
  },
};

const Menu = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <h2 className="text-center mb-6 sm:mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl fade-in-scroll">
        {t.title}
      </h2>
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] border-2 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 mx-auto flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-[#13888C] mb-6 sm:mb-8 md:mb-10 text-center">
          {t.breakfast}
        </h3>
        <Items items={t.breakfastItems1} />
        <Items items={t.breakfastItems2} />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>
        <h3 className="text-xl sm:text-2xl md:text-3xl text-[#13888C] mb-6 sm:mb-8 md:mb-10 text-center">
          {t.coldDrinks}
        </h3>
        <Items items={t.coldDrinksItems1} />
        <Items items={t.coldDrinksItems2} />
        <Items items={t.coldDrinksItems3} />
        <Items items={t.coldDrinksItems4} />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 text-[#13888C] text-center">
          {t.coffeeDrinks}
        </h3>
        <Items items={t.coffeeDrinksItems1} />
        <Items items={t.coffeeDrinksItems2} />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 text-[#13888C] text-center">
          {t.hotDrinks}
        </h3>
        <Items items={t.hotDrinksItems1} />
        <Items items={t.hotDrinksItems2} />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>
      </div>
    </div>
  );
};

export default Menu;
