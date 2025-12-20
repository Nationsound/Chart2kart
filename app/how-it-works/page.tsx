"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaStore, FaShareAlt, FaShoppingCart, FaChartLine } from "react-icons/fa";
import ShoppingLifestyle from "../index/shopping/ShoppingLifeStyle";

const steps = [
  {
    id: 1,
    title: "Connect WhatsApp",
    description: "Connect your WhatsApp Business account to Chart2Kart.",
    icon: <FaWhatsapp className="w-12 h-12 text-green-500" />,
    image: "/images/store10.PNG",
  },
  {
    id: 2,
    title: "Create Your Store",
    description: "Add products, pricing, and categories effortlessly.",
    icon: <FaStore className="w-12 h-12 text-blue-500" />,
    image: "/images/img1.PNG",
  },
  {
    id: 3,
    title: "Share Your Store",
    description: "Generate a single link to share with customers anywhere.",
    icon: <FaShareAlt className="w-12 h-12 text-purple-500" />,
    image: "/images/store8.PNG",
  },
  {
    id: 4,
    title: "Convert Chats into Carts",
    description: "Customers add products directly from chat, boosting sales.",
    icon: <FaShoppingCart className="w-12 h-12 text-yellow-500" />,
    image: "/images/store6.PNG",
  },
  {
    id: 5,
    title: "Track & Grow",
    description: "Monitor orders and optimize your sales.",
    icon: <FaChartLine className="w-12 h-12 text-red-500" />,
    image: "/images/store2.webp",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* How It Works Section */}
      <section className="w-full py-20 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-3"
          >
            <h2 className="text-4xl md:text-5xl text-[#5e6fb8] font-bold">
              How Chart2Kart Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Turn your WhatsApp chats into a seamless shopping experience in just a few steps.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-12 justify-center">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: step.id * 0.1 }}
                className="flex flex-col items-center text-center max-w-xs bg-white rounded-xl shadow-lg p-6"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="w-full h-40 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={step.image}
                    alt={`${step.title} preview`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <Link
              href="/signup"
              className="bg-[#5e6fb8] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#4c5aa3] transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="w-full py-24 bg-[#5e6fb8] text-white text-center mb-12">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Boost Your Sales with Chart2Kart
          </h2>
          <p className="text-lg md:text-xl">
            Automate your WhatsApp store, convert chats to sales, and manage orders seamlessly.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-[#5e6fb8] px-10 py-3 rounded-lg font-semibold hover:bg-gray-100 transition mt-4"
          >
            Create Your Store Now
          </Link>
        </div>
      </section>
      <section>
        <div>
            <ShoppingLifestyle />
        </div>
      </section>
    </>
  );
}
