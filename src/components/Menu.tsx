import React from "react";
import Items from "./Items";

const Menu = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <h2 className="text-center mb-6 sm:mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl fade-in-scroll">
        منوی عمارت
      </h2>
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] border-2 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 mx-auto flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-[#13888C] mb-6 sm:mb-8 md:mb-10 text-center">
          صبحانه
        </h3>
        <Items items={["آش سبزی", "نیمرو", "املت", " املت سوسیس"]} />
        <Items
          items={["نان و پنیر و گردو", "مربا های مختلف", "صبحانه ایرانی"]}
        />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>
        <h3 className="text-xl sm:text-2xl md:text-3xl text-[#13888C] mb-6 sm:mb-8 md:mb-10 text-center">
          سردنوش
        </h3>
        <Items items={["شربت و عرقیجات"]} />
        <Items items={["کاسنی شاه تره", "سکنجبین", "بیدمشک نسترن", "زعفران"]} />
        <Items items={["تخم شربتی", "خاکشیر", "بهارنارنج", "گلاب زعفران"]} />
        <Items items={["دوغ لیوانی"]} />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>

        <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 text-[#13888C] text-center">
          نوشیدنی گرم بر پایه قهوه
        </h3>
        <Items items={["اسپرسو", "آمریکانو", "شیر قهوه", "قهوه ترک"]} />
        <Items items={["کارامل ماکیاتو", "قهوه قاجار", "لاته"]} />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>

        <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 text-[#13888C] text-center">
          نوشیدنی گرم
        </h3>
        <Items items={["چای"]} />
        <Items items={["کرک", "شیر عسل", "هات چاکلت", "ماسلا"]} />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>

        <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 text-[#13888C] text-center">
          شیک
        </h3>
        <Items items={["موز", "بادام زمینی", "قهوه", "شکلات", "موز شکلات"]} />
        <Items items={["موز قهوه", "توت فرنگی", "کارامل"]} />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>

        <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 text-[#13888C] text-center">
          قلیان
        </h3>
        <Items items={["میوه ای", "انواع قلیان", "برازجانی"]} />
        <div className="w-[85%] h-[1px] bg-black mx-auto my-3 sm:my-4 md:my-5"></div>

        <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 text-[#13888C] text-center">
          انواع بازی رو میزی
        </h3>
      </div>
    </div>
  );
};

export default Menu;
