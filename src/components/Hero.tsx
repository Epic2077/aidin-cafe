import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className='bg-[url("/hero-star.png")] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] aspect-square mx-auto bg-center animate-scale-in bg-contain bg-no-repeat flex justify-center items-center'>
      <div className="relative">
        <div className="absolute top-0 left-0 ml-[-30px] mt-[-40px] sm:ml-[-30px] sm:mt-[-30px] md:ml-[-40px] md:mt-[-40px] animate-fade-in-left">
          <Image
            src="/bird.png"
            alt="bird"
            width={50}
            height={60}
            className="sm:w-[60px] sm:h-[75px] md:w-[80px] md:h-[100px]"
          />
        </div>
        <h1 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight sm:leading-loose md:leading-36 mt-[-30px] sm:mt-[-40px] md:mt-[-60px] animate-fade-in">
          کافه و عمارت
          <br />
          <span className="text-[#C42136]">آیدین</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
