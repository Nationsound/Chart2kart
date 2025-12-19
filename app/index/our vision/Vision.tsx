"use client"
import {motion} from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Vision = () => {
  return (
    <section className="w-full py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Vision */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#8f9dc7] text-center">
           || Our Vision
          </h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-wider text-justify max-w-4xl mx-auto">
            A world where selling online feels as natural as chatting. We empower
            people to turn conversations into commerce by simplifying store creation,
            order tracking, and customer management without technical barriers.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-[#4C5AA3]">Core Values</h3>
          <ul className="grid md:grid-cols-3 gap-6 text-lg">
            <li className="bg-white p-6 rounded-lg shadow">Simplicity</li>
            <li className="bg-white p-6 rounded-lg shadow">Innovation</li>
            <li className="bg-white p-6 rounded-lg shadow">Transparency</li>
            <li className="bg-white p-6 rounded-lg shadow">Empowerment</li>
            <li className="bg-white p-6 rounded-lg shadow">Reliability</li>
            <li className="bg-white p-6 rounded-lg shadow">Community</li>
          </ul>
        </motion.div>

        {/* User Personas */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-[#4C5AA3]">Who We Serve</h3>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div className="bg-white p-6 rounded-lg shadow">
              <strong>WhatsApp Sellers</strong>
              <p className="mt-2">Turning chat orders into trackable carts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <strong>Small Business Owners</strong>
              <p className="mt-2">Online stores without dev complexity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <strong>Creators & Influencers</strong>
              <p className="mt-2">Sell directly with branded links.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <strong>First-time Entrepreneurs</strong>
              <p className="mt-2">Guided onboarding to selling.</p>
            </div>
          </div>
        </motion.div>

        {/* Problem & Solution */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4 text-[#4C5AA3]">The Problem</h3>
            <p className="text-lg leading-relaxed text-justify tracking-wider">
              Social commerce is chaotic. Orders scatter through chats,
              payments lack structure, delivery details get lost, and analytics
              are unavailable. Growth stalls and trust weakens.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4 text-[#4C5AA3]">Our Solution</h3>
            <p className="text-lg leading-relaxed text-justify tracking-wider">
              A platform merging conversation with structured commerce: easy
              store creation, order tracking, delivery visibility, analytics, and
              secure payments. Professional workflows without abandoning chat.
            </p>
          </div>
        </motion.div>

        {/* Brand Tone */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-[#4C5AA3]">
            Brand Tone & Voice
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li>Professional yet approachable</li>
            <li>Empowering and inclusive</li>
            <li>Modern and tech-forward</li>
            <li>Clear, concise, and optimistic</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision