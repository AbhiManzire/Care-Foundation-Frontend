"use client";

import React from "react";
import { FaUserPlus, FaArrowRight, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const StartFundraiser: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-6 bg-white lg:px-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="lg:w-7/12 space-y-10">
          <div className="relative pb-3 mb-5">
            <h5 className="text-green-600 font-bold uppercase tracking-widest">
              Start Now
            </h5>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-700">
              Why Fundraise with Us
            </h1>
            <div className="mt-3 w-full h-1 bg-gradient-to-r from-green-500 to-pink-500 rounded-full" />
          </div>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3 bg-green-100 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <FaArrowRight />
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-500">
                You are One Form Away
              </h5>
            </div>

            <div className="flex items-center space-x-3 bg-green-100 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <FaPhoneAlt />
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-500">
                24/7 Telephone Support
              </h5>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-500 text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-green-600">
              Care Foundation Trust
            </span>
            , our mission is to provide essential support to those in need. From
            healthcare and education to environmental conservation and disaster
            relief, we are committed to making a difference. When you start your
            fundraiser with us, you’re directly contributing to our mission and
            enabling us to extend our reach even further.
          </p>

          {/* Ready to Start */}
          <div className="flex items-center gap-4 mt-6 bg-green-100 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <div className="bg-green-600 dark:bg-green-400 flex items-center justify-center rounded-full w-16 h-16 animate-bounce">
              <FaUserPlus />
            </div>
            <div>
              <h5 className="text-gray-900 font-semibold text-lg flex items-center gap-2">
                Ready to make a change? It’s easy to get started{" "}
                <FaArrowRight />
              </h5>
            </div>
          </div>
        </div>

        {/* RIGHT FORM (Transparent Image Background) */}
        <div
          className="lg:w-5/12 relative rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: "url('/images/form.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* 💧 Transparent overlay for glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70 backdrop-blur-md opacity-90"></div>

          {/* Form Content */}
          <div className="relative z-10 p-8 md:p-10 space-y-6 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">
              Start Your Fundraiser
            </h2>
            <p className="text-center text-gray-200 text-sm mb-6">
              Fill in your details and we’ll reach out to help you start your journey.
            </p>

            <form
              action="https://caredigiworld.com/public/fundraiser-request"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_token"
                value="mULrEwYoaaxupBFeHb4SB93CZobsGWsHLY2GFS1l"
              />

              {/* 📞 Get a Call Button */}
              <a
                href="http://wa.me/91XXXXXXXXXX"
                className="flex items-center justify-center gap-3 font-semibold py-3 rounded-full bg-green-600/90 hover:bg-green-700/90 transition-transform duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt />
                Get a Call From Us
              </a>

              {/* 🧍 Name */}
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full p-4 rounded-full border border-gray-400/40 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                  required
                />
              </div>

              {/* 📱 Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-2">
                  Contact Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter Your Mobile No."
                  className="w-full p-4 rounded-full border border-gray-400/40 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                  required
                />
              </div>

              {/* 📧 Email */}
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-2">
                  Email ID <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full p-4 rounded-full border border-gray-400/40 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                  required
                />
              </div>

              {/* 📝 Message */}
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-2">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write Your Message"
                  className="w-full p-4 rounded-xl border border-gray-400/40 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none h-32 resize-none"
                  required
                ></textarea>
              </div>

              {/* 💬 WhatsApp Button */}
              <a
                href="http://wa.me/918828304572"
                className="flex items-center justify-center gap-3 font-semibold py-3 rounded-full bg-green-500/90 hover:bg-green-600/90 transition-transform duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                Chat With Us On WhatsApp
              </a>

              {/* 🚀 Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600/90 to-lime-500/90 hover:from-lime-500/90 hover:to-green-600/90 text-white font-semibold py-3 rounded-full shadow-xl transition-transform transform hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Start a Fundraiser <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartFundraiser;
