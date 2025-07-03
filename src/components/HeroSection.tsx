"use client";
import Image from "next/image";
import Button from "./Button";
import { IconArrowRight } from "@tabler/icons-react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden mb-16">
      <div className="relative w-full h-full hero-mask">
        <Image
          src="/Image_fx (9).jpg"
          alt="Logistics Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent hero-mask"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-10 text-white md:mt-52 md:ms-16">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-oxanium">
          Best Logistic Shipping Partner
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-lg max-w-lg md:max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-4">
          <Button>
            Discover More
            <IconArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
