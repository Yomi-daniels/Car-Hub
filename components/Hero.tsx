"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero overflow-x-hidden">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="text-[3.5rem] font-bold leading-[1.3]">
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerstyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container overflow-hidden">
        <div className="hero__image ">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay overflow-x-hidden" />
      </div>
    </div>
  );
};

export default Hero;
