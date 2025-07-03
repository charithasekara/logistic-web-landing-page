"use client";
import Image from "next/image";
import Button from "./Button"; 

const WelcomeSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:mt-32 gap-8 px-4 mb-16">
      <div className="w-full md:w-1/2 flex justify-center ">
        <Image
          src="/Image_fx (19).jpg" 
          alt="Welcome"
          width={400}
          height={300}
          className="border-8 border-gray-300 rounded-3xl object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex about-right-side">
        <div className="m-auto flex flex-col justify-center items-start text-left gap-4 max-w-md">
          <h2 className="text-3xl font-bold text-gray-800">
            TransMax Logistics Around the World
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Discover powerful features, streamline your tasks, and enjoy a seamless experience. 
            Our global logistics network ensures timely delivery across continents. 
            With real-time tracking and efficient solutions, we simplify supply chain management.
          </p>
          <Button>About Us</Button> 
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
