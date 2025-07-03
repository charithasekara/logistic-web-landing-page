"use client";
import { IconTruck, IconGlobe, IconPackage, IconClock } from "@tabler/icons-react";

const stats = [
  {
    icon: <IconGlobe className="w-8 h-8 text-yellow-500" />,
    label: "Countries Served",
    value: "120+",
  },
  {
    icon: <IconTruck className="w-8 h-8 text-yellow-500" />,
    label: "Deliveries Daily",
    value: "15,000+",
  },
  {
    icon: <IconPackage className="w-8 h-8 text-yellow-500" />,
    label: "Packages Shipped",
    value: "1M+",
  },
  {
    icon: <IconClock className="w-8 h-8 text-yellow-500" />,
    label: "On-Time Rate",
    value: "98.9%",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16 mb-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose TransMax?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          We combine technology, reliability, and global scale to ensure seamless delivery experiences across the world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              {stat.icon}
              <h3 className="mt-4 text-3xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
