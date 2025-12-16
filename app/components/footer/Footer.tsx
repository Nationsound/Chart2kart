"use client";

import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8F9DC7] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            Chart<span className="text-white/90">2</span>Kart
          </Link>
          <p className="text-sm text-white/80">
            Turn WhatsApp chats into instant stores. Sell smarter, faster, and easier with Chart2Kart.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <Link href="#features" className="hover:text-white/90 transition">Features</Link>
          <Link href="#how-it-works" className="hover:text-white/90 transition">How it Works</Link>
          <Link href="#pricing" className="hover:text-white/90 transition">Pricing</Link>
          <Link href="#contact" className="hover:text-white/90 transition">Contact</Link>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-4">Resources</h3>
          <Link href="#" className="hover:text-white/90 transition">Blog</Link>
          <Link href="#" className="hover:text-white/90 transition">Help Center</Link>
          <Link href="#" className="hover:text-white/90 transition">Terms & Conditions</Link>
          <Link href="#" className="hover:text-white/90 transition">Privacy Policy</Link>
        </div>

        {/* Contact / Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p>Email: <Link href="mailto:info@chart2kart.com" className="underline">info@chart2kart.com</Link></p>
          <p>Phone: <Link href="tel:+2349012345678" className="underline">+234 703 572 9342</Link></p>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="hover:text-white/90 transition"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-white/90 transition"><FaLinkedin size={20} /></Link>
            <Link href="#" className="hover:text-white/90 transition"><FaInstagram size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/20 mt-8 py-4 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} Chart2Kart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
