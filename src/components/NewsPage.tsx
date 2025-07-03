"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const newsItems = [
  {
    title: "TransMax Launches Global Expansion",
    date: "July 2, 2025",
    image: "/c1.jpg",
    description: "Our services are now available in over 120 countries with faster delivery options.",
    author: "Admin",
  },
  {
    title: "New Real-Time Tracking System Rolled Out",
    date: "June 25, 2025",
    image: "/c2.jpg",
    description: "Customers can now track their parcels live with improved accuracy.",
    author: "Logistics Team",
  },
  {
    title: "Eco-Friendly Packaging Initiative",
    date: "June 10, 2025",
    image: "/c3.jpg",
    description: "We are proud to announce 100% biodegradable packaging materials.",
    author: "Sustainability Office",
  },
];

export default function NewsPage() {
  return (
    <section className="w-full px-4 md:px-16 py-16 bg-white mb-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Latest News</h2>
        <p className="text-gray-600 mt-2">Stay updated with our recent announcements and logistics trends.</p>
      </div>

      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {newsItems.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="md:basis-1/2 lg:basis-1/3 px-2"
            >
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-md transition h-full flex flex-col">
                {/* Image + Date */}
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    {item.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                  <p className="text-xs text-gray-500 mt-auto">Posted by {item.author}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
