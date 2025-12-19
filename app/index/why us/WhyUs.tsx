"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBolt, FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";

const WhyUs = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#5E6FB8]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Why Choose Us
        </h2>
        <p className="text-white mt-4 max-w-3xl mx-auto">
          We empower online sellers with automation, seamless customer conversions,
          and reliable tools that enhance revenue and buyer experience.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-xl p-6 text-center"
        >
          <FaBolt className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Fast Automation</h3>
          <p className="text-gray-600 text-sm">
            Turn chat conversations into carts faster than typing a reply.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaUsers className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Customer Focused</h3>
          <p className="text-gray-600 text-sm">
            Tailored solutions that keep your customers engaged and satisfied.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaShieldAlt className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Secure & Reliable</h3>
          <p className="text-gray-600 text-sm">
            Your data and customers remain protected, always.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaChartLine className="text-4xl text-red-600 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Growth Ready</h3>
          <p className="text-gray-600 text-sm">
            Built to scale with your business ambitions.
          </p>
        </motion.div>
      </div>

      {/* Circular Animated Images */}
      <div className="relative flex justify-center items-center py-10">
  <motion.div
    animate={{
      x: [0, -150, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="w-56 h-56 rounded-2xl overflow-hidden shadow-2xl z-30"
  >
    <Image src="/images/img13.PNG" alt="Store 1" fill className="object-cover" />
  </motion.div>

  <motion.div
    animate={{
      x: [0, 0, 150, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.3
    }}
    className="w-44 h-44 rounded-2xl overflow-hidden shadow-2xl absolute z-20"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <Image src="/images/img21.PNG" alt="Store 2" fill className="object-cover" />
  </motion.div>

  <motion.div
    animate={{
      x: [0, 0, -80, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.6
    }}
    className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl absolute z-10"
    style={{ top: "55%", left: "50%", transform: "translate(-50%, -50%)" }}
  >
    <Image src="/images/img24.PNG" alt="Store 3" fill className="object-cover" />
  </motion.div>
</div>
    </section>
  );
};

export default WhyUs;
