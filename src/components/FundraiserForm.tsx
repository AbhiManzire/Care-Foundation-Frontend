"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FundraiserForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    heading: "",
    fundRequired: "",
    creatorName: "",
    mobile: "",
    city: "",
    state: "",
    address: "",
    startDate: "",
    endDate: "",
    summary: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* 🌄 Hero Section with Realistic Background */}
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <div className="absolute inset-0">
          <img
            src="/images/main-slider/123.jpg"
            alt="Fundraiser background"
            className="object-cover w-full h-full scale-105 opacity-60 animate-slow-zoom"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
        >
          Start your fundraiser and make a difference today!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 mt-4 text-lg text-gray-200 max-w-2xl"
        >
          Empower change — raise funds for causes that matter. Let’s bring your
          story to life.
        </motion.p>
      </div>

      {/* 🧾 Form Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-200 space-y-6"
        >
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
            />
          </div>

          {/* Fund Heading + Required Amount */}
          <input
            type="text"
            name="heading"
            placeholder="Fundraiser Heading"
            value={formData.heading}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
          />

          <input
            type="number"
            name="fundRequired"
            placeholder="Fund Required (in INR)"
            value={formData.fundRequired}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
          />

          {/* Upload Pictures */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">Upload Pictures</label>
            <div className="grid md:grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="file"
                  className="border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
                />
              ))}
            </div>
          </div>

          {/* Creator Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="creatorName"
              placeholder="Creator's Name"
              value={formData.creatorName}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
            />
          </div>

          {/* City and State */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
            />
          </div>

          {/* Address */}
          <textarea
            name="address"
            placeholder="Address"
            rows={2}
            value={formData.address}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
          />

          {/* Documents */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1 text-gray-700">Aadhar Card</label>
              <input
                type="file"
                className="border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-gray-700">PAN Card</label>
              <input
                type="file"
                className="border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
            />
          </div>

          {/* Supporting Docs */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">Upload Supporting Documents</label>
            <div className="grid md:grid-cols-2 gap-3">
              {[1, 2].map((i) => (
                <input
                  key={i}
                  type="file"
                  className="border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
                />
              ))}
            </div>
          </div>

          {/* Upload Video */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">Upload Video</label>
            <input
              type="file"
              className="border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
            />
          </div>

          {/* Summary */}
          <textarea
            name="summary"
            placeholder="Fundraiser Summary"
            rows={4}
            value={formData.summary}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
          />

          {/* Submit */}
          <div className="text-center pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg"
            >
              Submit Fundraiser
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
