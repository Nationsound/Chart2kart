"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";

const PreHome = () => {
  const router = useRouter();

  const [text] = useTypewriter({
    words: ["Turn WhatsApp Chats into Carts"],
    loop: 1, // 0 for infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/img6.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">{text}</h1>

        {/* Arrow Button */}
        <motion.button
          onClick={() => router.push("/home")}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 text-white text-3xl animate-bounce"
        >
          ⬇️
        </motion.button>
      </div>
    </section>
  );
};

export default PreHome;
