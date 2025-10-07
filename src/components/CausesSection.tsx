"use client";

import { motion } from "framer-motion";
import {
  FaBookReader,
  FaHeartbeat,
  FaHospital,
  FaUtensils,
  FaRibbon,
  FaEllipsisH,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Cause {
  name: string;
  icon: IconType; // Keep as IconType
  color: string;
}

export default function CausesSection() {
  const causes: Cause[] = [
    { name: "Education", icon: FaBookReader, color: "text-indigo-600" },
    { name: "Health", icon: FaHeartbeat, color: "text-red-500" },
    { name: "Medical", icon: FaHospital, color: "text-green-600" },
    { name: "Food", icon: FaUtensils, color: "text-yellow-500" },
    { name: "Memorial", icon: FaRibbon, color: "text-pink-500" },
    { name: "Other", icon: FaEllipsisH, color: "text-gray-500" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Causes You Can Raise Funds For
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            Care Foundation is your trusted partner for raising funds, <br />
            whether it's for a personal cause, community support, or an inspiring idea.
          </p>
        </motion.div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-gray-300 rounded-xl p-6 text-center text-gray-700 font-semibold cursor-pointer
                           bg-white hover:bg-gradient-to-r hover:from-green-50 hover:via-pink-50 hover:to-white
                           transition-all duration-300 ease-in-out"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: [-10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`text-4xl mb-3 ${cause.color}`}
                >
                  {/* ✅ Use type assertion to fix TS error */}
                  <Icon {...({} as React.SVGProps<SVGSVGElement>)} />
                </motion.div>
                {cause.name}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
