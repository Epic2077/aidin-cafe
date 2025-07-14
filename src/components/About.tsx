import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-center mt-10 sm:mt-15 md:mt-20 px-4 sm:px-6 md:px-8">
      <Image
        src={"/first-image.png"}
        alt="first-image"
        width={600}
        height={600}
        className="mx-auto my-8 sm:my-10 md:my-12 lg:my-15 fade-in-scroll-top w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto"
      />
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-10 sm:mb-15 md:mb-20">
        درباره عمارت آیدین
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-between mx-auto w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] px-4 sm:px-8 md:px-12 lg:px-20 gap-8 lg:gap-0">
        <div className="p-2 sm:p-3 md:p-4 rounded-xl border-2 border-[#10868B] fade-in-scroll-right mx-auto lg:mx-0">
          <Image
            src={"/second-image.png"}
            alt="second-image"
            width={450}
            height={450}
            className="rounded-xl w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto"
          />
        </div>
        <div className="flex flex-col justify-evenly lg:ml-auto lg:mr-20 fade-in-scroll-left space-y-4 lg:space-y-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-right">
            عمارت آیدین کافه رستوران با حس و حال قاجار.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-right">
            ساختمانی با قدمت خود قاجار که به شما حس زندگانی در آن دوره را میدهد.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-right">
            عمارت آیدین از دلِ عشق به معماری قدیم، خوراک اصیل و هنر ایرانی زاده
            شده.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-right">
            این کافه نه فقط برای غذا خوردن، بلکه برای حس کردن است
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
