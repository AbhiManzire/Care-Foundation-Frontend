"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HealthPartners() {
  const partners = [
    {
      id: 1,
      name: "Amit Kumar",
      role: "General Physician",
      phone: "9876543210",
      address: "5d/124 Awas Vikas, Hanspuram, Naubasta",
      logo: "/images/doctor1.jpg",
    },
    {
      id: 2,
      name: "Dr. Mukesh",
      role: "Cardiology",
      phone: "9876543210",
      address: "5d/124 Awas Vikas, Hanspuram, Naubasta",
      logo: "/images/doctor2.jpg",
    },
    {
      id: 3,
      name: "Lokesh Meena",
      role: "Pediatrics (Children)",
      phone: "9876543210",
      address: "5d/124 Awas Vikas, Hanspuram, Naubasta",
      logo: "/images/doctor3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Our Health Partners
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Meet our trusted doctors — always ready to help you stay healthy
          </p>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden shadow-lg ring-4 ring-pink-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Role */}
              <p className="text-blue-600 font-semibold text-sm mb-1 uppercase tracking-wide">
                {partner.role}
              </p>

              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {partner.name}
              </h3>

              {/* Info */}
              <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
                📞 {partner.phone}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                📍 {partner.address}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 w-full mt-6">
                <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded-lg hover:from-green-600 hover:to-green-700 shadow-md transition-all">
                  Book Appointment
                </button>
                <button className="flex-1 bg-gradient-to-r bg-red-400 text-white py-2 rounded-lg hover:from-red-600 hover:to-red-700 shadow-md transition-all">
                  View Map
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
