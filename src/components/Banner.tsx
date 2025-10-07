"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-50 via-white to-green-50 py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-6"
        >
          <h5 className="text-lg font-semibold text-cyan-700 tracking-wide uppercase">
            Care Foundation Trust
          </h5>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Need Funds for a Medical Emergency or Social Cause?
          </h1>

          <p className="text-gray-800 text-lg leading-relaxed">
            At <span className="font-semibold text-green-600">Care Foundation Trust</span>, we charge{" "}
            <span className="font-semibold text-green-600">0% platform fees</span>. Every rupee you donate goes directly toward helping people in need — no hidden charges, just pure impact.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/donate_your_time"
              className="bg-gradient-to-r from-lime-600 to-green-500 hover:from-green-600 hover:to-green-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105 flex items-center gap-2"
            >
              Donate Your Time <span className="text-xl">→</span>
            </a>

            <a
              href="/payment_form"
              className="bg-white border border-gray-300 text-gray-900 font-medium px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition transform hover:scale-105"
            >
              Donate Now
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM WITH BACKGROUND IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Background Image */}
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-[600px]"
            >
              <Image
                src="/images/main-slider/123.jpg"
                alt="Donation background"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl transition duration-500"></div>

              {/* Form Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white">
                <h2 className="text-3xl font-bold mb-6 border-b-2 border-green-400 pb-2 text-center">
                  Donate Now
                </h2>

                <form className="w-full max-w-md space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="p-3 rounded-lg w-full bg-white/90 text-gray-800 focus:ring-2 focus:ring-green-400 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="p-3 rounded-lg w-full bg-white/90 text-gray-800 focus:ring-2 focus:ring-green-400 outline-none"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 rounded-lg w-full bg-white/90 text-gray-800 focus:ring-2 focus:ring-green-400 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="p-3 rounded-lg w-full bg-white/90 text-gray-800 focus:ring-2 focus:ring-green-400 outline-none"
                  />
                  <textarea
                    placeholder="Message (optional)"
                    className="p-3 rounded-lg w-full bg-white/90 text-gray-800 h-28 focus:ring-2 focus:ring-green-400 outline-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-lime-600 to-green-500 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg shadow-lg transition transform hover:scale-105"
                  >
                    Submit Donation
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Light Gradient Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
