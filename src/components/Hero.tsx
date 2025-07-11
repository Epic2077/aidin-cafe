import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className='bg-[url("/hero-star.png")] w-[50%] aspect-square mx-auto bg-center bg-contain bg-no-repeat flex justify-center items-center'>
      <div className="relative">
        <div className="absolute top-0 left-0 ml-[-50px] mt-[-20px]">
          <Image src="/bird.png" alt="bird" width={100} height={100} />
        </div>
        <h1 className="text-center text-9xl leading-44 mt-[-50px]">
          کافه و عمارت
          <br />
          <span className="text-[#C42136]">آیدین</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
