import React from "react";

const Address = () => {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] border-2 rounded-2xl mx-auto flex flex-col items-center p-3 sm:p-4 md:p-5 my-6 sm:my-8 md:my-10 mt-10 sm:mt-15 md:mt-20">
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 lg:mb-15 text-center">
        موقعیت مکانی و ارتباط
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
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-right">
          <span className="pl-2 text-[#13888C] font-bold">آدرس عمارت:</span>{" "}
          خیابان لطفعلی زند - مسجد نصیر الملک - عمارت آیدین{" "}
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-right">
          <span className="pl-2 text-[#13888C] font-bold">شماره تلفن: </span>
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-right">
          <span className="pl-2 text-[#13888C] font-bold">اینستاگرام:</span>
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-right mb-5">
          <span className="pl-2 text-[#13888C] font-bold">زمانبندی کافه:</span>
        </p>
      </div>
    </div>
  );
};

export default Address;
