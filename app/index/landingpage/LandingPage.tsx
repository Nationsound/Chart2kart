"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

const slides = [
  { image: "/images/landpage1.webp", text: "Discover, Chat, Convert & Sell" },
  { image: "/images/landpage2.jpg", text: "Create Your Store in Minutes" },
  { image: "/images/landpage3.jpg", text: "Share Store Link Anywhere" },
  { image: "/images/landpage4.jpg", text: "Track Orders & Boost Sales" },
];

// Separate component for Typewriter text
interface TypewriterTextProps {
  text: string;
  keyId: number;
}

const TypewriterText = ({ text, keyId }: TypewriterTextProps) => {
  const [typeText] = useTypewriter({
    words: [text],
    loop: 1,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return <h1 key={keyId} className="text-4xl md:text-6xl font-bold">{typeText}</h1>;
};

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text */}
          <div className="relative text-center text-white px-4">
            <TypewriterText text={slides[currentSlide].text} keyId={currentSlide} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 text-white text-3xl z-50"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 text-white text-3xl z-50"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default LandingPage;
