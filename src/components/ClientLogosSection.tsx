"use client";

const logos = [
  "/k1.jpg",
  "/k2.png",
  "/k3.png",
  "/k4.png",
  "/k5.png",
];

export default function ClientLogosSection() {
  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800">Trusted by Global Clients</h2>
        <p className="text-gray-500 mt-2">Our partners around the world</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee space-x-12">
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos,].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client logo ${idx}`}
              className="h-12 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
