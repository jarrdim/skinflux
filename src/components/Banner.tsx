import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-rose-300 w-full  to-sky-700 mb-8">
      <div className="mx-auto md:px-60   py-12 flex flex-col gap-10 md:flex-row items-center justify-evenly md:pt-16 pt-8">
      <div className="w-1/3 relative aspect-video">
          <Image
            src="/womanop.png"
            fill
            alt="Banner"
            className="object-contain"
          />
        </div>
        <div className="mb-8 md:mb-0 text-center md:mr-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to SkinnFluxx
          </h1>
          <p className="text-white md:text-xl text-lg">
          Skin flux is where personalized skincare meets sustainable beauty
          </p>
          <p className="text-2xl md:text-5xl text-orange-400 font-bold">
            BUY OUR PRODUCTS{" "}
          </p>
        </div>
        
        <div className="w-1/3 relative aspect-video">
          <Image
            src="/banner-img.png"
            fill
            alt="Banner"
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;
