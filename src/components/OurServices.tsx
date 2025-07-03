"use client";

import Image from "next/image";
import Button from "./Button";

const services = [
  {
    image: "/Image_fx (20).jpg",
    title: "Global Reach",
    subtitle: "Delivering across 100+ countries seamlessly.",
    colSpan: "md:col-span-8",
    rowSpan: "md:row-span-2",
  },
  {
    image: "/Image_fx (21).jpg",
    title: "Fast Shipping",
    subtitle: "Optimized routes to save time and cost.",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-2",
  },
  {
    image: "/Image_fx (22).jpg",
    title: "Secure Packaging",
    subtitle: "We care about product safety.",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-2",
  },
  {
    image: "/Image_fx (23).jpg",
    title: "Live Tracking",
    subtitle: "Real-time updates at your fingertips.",
    colSpan: "md:col-span-5",
    rowSpan: "md:row-span-2",
  },
  {
    image: "/Image_fx (24).jpg",
    title: "Eco-Friendly Logistics",
    subtitle: "Sustainable practices for a better future.",
    colSpan: "md:col-span-3",
    rowSpan: "md:row-span-2",
  },
];

export default function OurServices() {
  return (
    <section className="w-full py-12">

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Explore how TransMax simplifies global logistics with innovative features and customer-first solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-8 auto-rows-[180px] gap-6 max-w-7xl mx-auto">
        {services.map(({ image, title, subtitle, colSpan, rowSpan }, idx) => (
          <div
            key={idx}
            className={`relative group rounded-xl overflow-hidden shadow-lg cursor-pointer ${colSpan} ${rowSpan}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-1 text-sm mb-4">{subtitle}</p>
              <Button variant="outlined">
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
