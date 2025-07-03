"use client";

import { IconThumbUp, IconStar, IconShieldCheck } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Samantha Lee",
    role: "Logistics Manager, GlobalCorp",
    quote: "TransMax completely transformed our delivery chain — reliable, fast, and customer-focused!",
    image: "/d1.jpg",
  },
  {
    name: "Mark Johnson",
    role: "E-commerce CEO",
    quote: "We saw a 30% improvement in delivery efficiency with TransMax's tracking and support.",
    image: "/d3.jpg",
  },
  {
    name: "Ayesha Fernando",
    role: "Retail Partner, LankaExpress",
    quote: "I love how seamless the platform is. Everything just works — even at scale.",
    image: "/d2.jpg",
  },
];

const features = [
  {
    icon: <IconThumbUp className="w-8 h-8 text-yellow-500" />,
    title: "Customer-First",
    description: "24/7 support and transparent service that puts customers first.",
  },
  {
    icon: <IconShieldCheck className="w-8 h-8 text-yellow-500" />,
    title: "Trusted & Secure",
    description: "Top-level logistics security and guaranteed package protection.",
  },
  {
    icon: <IconStar className="w-8 h-8 text-yellow-500" />,
    title: "Rated 5 Stars",
    description: "Loved by thousands of customers worldwide for consistency.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16 w-full rounded-xl mb-16">
      {/* Testimonials */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Hear directly from the partners and customers who trust TransMax to deliver the future of logistics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left flex flex-col items-start"
            >
              <p className="text-gray-700 italic mb-4">“{item.quote}”</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800">Why Choose Us?</h3>
        <p className="text-gray-600 mt-2 max-w-lg mx-auto">
          Our values are built on innovation, security, and exceptional customer experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-left">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow flex flex-col items-start">
              {item.icon}
              <h4 className="text-xl font-semibold text-gray-800 mt-4">{item.title}</h4>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
