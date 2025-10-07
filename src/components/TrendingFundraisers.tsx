"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrendingFundraisers() {
  const fundraisers = [
    {
      id: 1,
      title: "Help Little Aarav Fight Leukemia",
      raised: 320000,
      goal: 750000,
      daysLeft: 59,
      image: "/images/c1.jpg",
      trust: "Care Foundation Trust",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      title: "Help Premature Baby Boy Of Anshuja To Survive",
      raised: 450000,
      goal: 750000,
      daysLeft: 47,
      image: "/images/c2.jpg",
      trust: "Care Foundation Trust",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 3,
      title: "Help 5-year-old Vihan Hear The World Again",
      raised: 280000,
      goal: 750000,
      daysLeft: 63,
      image: "/images/c3.jpg",
      trust: "Care Foundation Trust",
      location: "Mumbai, Maharashtra",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-gray-800">
            Trending Fundraisers
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            View the fundraisers that are most active right now
          </p>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-green-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Fundraiser Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {fundraisers.map((fundraiser, index) => {
            const progress = Math.min(
              (fundraiser.raised / fundraiser.goal) * 100,
              100
            );

            return (
              <motion.div
                key={fundraiser.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={fundraiser.image}
                    alt={fundraiser.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-white/80 text-gray-800 px-3 py-1 text-xs font-semibold rounded-full shadow">
                    {fundraiser.daysLeft} Days Left
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {fundraiser.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    Raised ₹
                    {fundraiser.raised.toLocaleString("en-IN")} of ₹
                    {fundraiser.goal.toLocaleString("en-IN")}
                  </p>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 h-2 rounded-full mb-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-2 bg-gradient-to-r from-lime-600 to-green-500 rounded-full"
                    ></motion.div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 mb-5">
                    <span>{progress.toFixed(0)}% Funded</span>
                    <span>Goal ₹{fundraiser.goal.toLocaleString("en-IN")}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mb-5">
                    <button className="flex-1 bg-gradient-to-r from-lime-600 to-green-500 text-white py-2 rounded-lg hover:from-green-600 hover:to-green-700 shadow-md transition-all">
                      Contribute
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-md transition-all">
                      Share
                    </button>
                  </div>

                  {/* Footer (Trust info) */}
                  <div className="flex items-center gap-3 border-t pt-4">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/logo.WEBP"
                        alt="Trust Logo"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {fundraiser.trust}
                      </p>
                      <p className="text-xs text-gray-500">
                        {fundraiser.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
