"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* LEFT INFO TEXT */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <span className="inline-flex items-center text-green-600 font-semibold uppercase tracking-wide text-sm mb-2">
                <i className="fas fa-plus mr-2"></i> Donate Projects
                <span className="ml-2 text-gray-400 font-bold text-xs">Donate</span>
              </span>
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                Ready to Get More Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Sed ut perspiciatis unde omnis natus voluptatem accusantium dolore dantiumy totam apeam eaquey quaventore veritatis architecto beatae.
              </p>
              <a
                href="/events"
                className="inline-flex items-center gap-2 mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Get Free Quote <i className="far fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* RIGHT CONTACT INFO BOXES */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition">
              <div className="text-green-600 text-3xl mb-3">
                <i className="flaticon-place"></i>
              </div>
              <h5 className="font-semibold text-gray-800 mb-1">Our Location</h5>
              <p className="text-gray-600 text-sm">
                5075 Main Road, D- Block, 2nd Floor, New York
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition">
              <div className="text-green-600 text-3xl mb-3">
                <i className="flaticon-envelope"></i>
              </div>
              <h5 className="font-semibold text-gray-800 mb-1">Email Address</h5>
              <p className="text-gray-600 text-sm">
                supportinfo@gmail.com <br /> www.funden.com
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition">
              <div className="text-green-600 text-3xl mb-3">
                <i className="flaticon-phone-call-1"></i>
              </div>
              <h5 className="font-semibold text-gray-800 mb-1">Support 24/7</h5>
              <p className="text-gray-600 text-sm">
                +012 (345) 689 37 <br /> 012345687
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM AND MAP */}
        <div className="mt-16 flex flex-col lg:flex-row gap-8">
          {/* Map */}
          <div className="lg:w-5/12 h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48372.81123152747!2d-73.96448279177292!3d40.733408396164116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1627206548218!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>

          {/* Form */}
          <div className="lg:w-7/12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700">Your Name</label>
                  <input
                    type="text"
                    placeholder="Willie M. Stanley"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    placeholder="0123456789"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="support@gmail.com"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Subject</label>
                  <input
                    type="text"
                    placeholder="I would like to"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-gray-700">Write Message</label>
                <textarea
                  placeholder="Hello"
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-green-400 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Us Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
