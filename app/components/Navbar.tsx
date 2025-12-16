"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#F3F5FB]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold text-[#1F2436]"
          >
            <Image
              src="/images/Logo.png"
              alt="Chart2Kart logo"
              width={60}
              height={60}
              className="rounded-full"
              priority
            />
            Chart<span className="text-[#8F9DC7]">2</span>Kart
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-[#1F2436]">
            <Link href="#features" className="hover:text-[#8F9DC7] transition">
              Features
            </Link>
            <Link href="#how-it-works" className="hover:text-[#8F9DC7] transition">
              How it Works
            </Link>
            <Link href="#pricing" className="hover:text-[#8F9DC7] transition">
              Pricing
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-[#1F2436] hover:text-[#8F9DC7] transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 rounded-xl bg-[#5E6FB8] text-white text-sm font-medium hover:bg-[#4C5AA3] transition shadow-sm"
            >
              Create Store
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#1F2436] cursor-pointer"
            aria-label="Open menu"
          >
            <svg
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="23" y2="6" />
              <line x1="3" y1="12" x2="23" y2="12" />
              <line x1="3" y1="18" x2="23" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
  className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-[#8F9DC7] z-50 px-6 py-6 flex flex-col text-white"
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  {/* Header */}
  <div className="flex items-center justify-between mb-8">
    <span className="text-lg font-semibold">
      Menu
    </span>
    <button
      onClick={() => setOpen(false)}
      aria-label="Close menu"
      className="text-white text-xl cursor-pointer"
    >
      ✕
    </button>
  </div>

  {/* Links */}
  <nav className="flex flex-col gap-6 text-white text-base">
    <Link onClick={() => setOpen(false)} href="#features" className="hover:opacity-80">
      Features
    </Link>
    <Link onClick={() => setOpen(false)} href="#how-it-works" className="hover:opacity-80">
      How it Works
    </Link>
    <Link onClick={() => setOpen(false)} href="#pricing" className="hover:opacity-80">
      Pricing
    </Link>
    <Link onClick={() => setOpen(false)} href="/login" className="hover:opacity-80">
      Login
    </Link>
  </nav>

  {/* CTA */}
  <div className="mt-auto">
    <Link
      href="/signup"
      onClick={() => setOpen(false)}
      className="block text-center px-5 py-3 rounded-xl bg-white text-[#8F9DC7] font-semibold hover:bg-[#F3F5FB] transition"
    >
      Create Store
    </Link>
  </div>
</motion.aside>

          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
