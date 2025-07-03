"use client";

import { useState } from "react";
import { IconChevronDown, IconThumbUp, IconShieldCheck, IconStar } from "@tabler/icons-react";

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

const faqs = [
  {
    question: "How can I track my shipment?",
    answer: "You can track your shipment using the tracking ID on our live tracking portal or mobile app.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, TransMax ships to over 120 countries with reliable global partners.",
  },
  {
    question: "Are packages insured?",
    answer: "All shipments are covered by our standard logistics insurance. Optional premium insurance is available.",
  },
  {
    question: "What is the average delivery time?",
    answer: "It depends on your location, but we aim to deliver within 1–5 business days globally.",
  },
];

export default function TestimonialsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16 w-full rounded-xl mb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Testimonials */}
        <div>
          <div className="text-center md:text-left mb-8">
            <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
            <p className="text-gray-600 mt-2 max-w-md">
              Hear directly from the partners and customers who trust TransMax to deliver the future of logistics.
            </p>
          </div>

          <div className="space-y-6">
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

        {/* FAQ Accordion */}
        <div>
          <div className="text-center md:text-left mb-8">
            <h3 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h3>
            <p className="text-gray-600 mt-2 max-w-md">
              Answers to some of the most common questions our customers ask.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow transition">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left text-gray-800 font-medium"
                  onClick={() => toggleFAQ(idx)}
                >
                  {faq.question}
                  <IconChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
