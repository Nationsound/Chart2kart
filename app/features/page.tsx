"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaMobileAlt, FaCartArrowDown, FaShareAlt, FaTools } from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    icon: <FaWhatsapp className="text-4xl text-[#8f9dc7] mb-4 mx-auto" />,
    title: "WhatsApp Integration",
    description: "Seamlessly connect your store to WhatsApp and automate chat-to-cart conversions.",
    image: "/images/store6.PNG",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-[#8f9dc7] mb-4 mx-auto" />,
    title: "Mobile Ready",
    description: "Optimized for mobile devices, ensuring smooth experience for you and your customers.",
    image: "/images/store5.jpg",
  },
  {
    icon: <FaCartArrowDown className="text-4xl text-[#8f9dc7] mb-4 mx-auto" />,
    title: "Smart Cart System",
    description: "Convert messages into trackable carts effortlessly, making sales seamless.",
    image: "/images/store7.PNG",
  },
  {
    icon: <FaShareAlt className="text-4xl text-[#8f9dc7] mb-4 mx-auto" />,
    title: "Shareable Store Link",
    description: "Distribute your store link anywhere and reach more customers instantly.",
    image: "/images/store8.PNG",
  },
  {
    icon: <FaTools className="text-4xl text-[#8f9dc7] mb-4 mx-auto" />,
    title: "Store Builder",
    description: "Drag-and-drop store builder to create a WhatsApp-powered store in minutes.",
    image: "/images/store4.PNG",
  },
];

export default function Features() {
  return (
    <section className="w-full py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Features</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Chart2Kart comes packed with powerful features designed to make your store management effortless.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            {/* Icon + Text */}
            <div className="lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0 lg:pr-6">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>

            {/* Illustrative Image */}
            <div className="lg:w-1/2 relative w-full h-48 lg:h-64">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
