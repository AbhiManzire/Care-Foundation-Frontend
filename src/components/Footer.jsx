// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md shadow-lg rounded-t-3xl text-white py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.WEBP"
              alt="Care Foundation Logo"
              width={210}
              height={100}
              className="hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <p className="text-xs text-gray-300 mb-2">Est Since - 1997</p>
          <p className="text-sm text-gray-300">
            Care Foundation Trust is a non-profit organisation committed to compassion and empathy. Our goal is to address critical social issues and uplift lives.
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-5">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-3 bg-white/20 rounded-full hover:bg-green-500 transition transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Resources Dropdown */}
        <div className="group relative">
          <h3 className="font-semibold text-lg mb-4 cursor-pointer">Resources</h3>
          <ul className="space-y-2 text-gray-300 opacity-80 group-hover:opacity-100 transition duration-300">
            {["How It Works","Ask A Question","Project Story","Mission","Certificates","Terms And Conditions"].map((item, idx) => (
              <li key={idx} className="hover:text-green-400 transition cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Company Dropdown */}
        <div className="group relative">
          <h3 className="font-semibold text-lg mb-4 cursor-pointer">Company</h3>
          <ul className="space-y-2 text-gray-300 opacity-80 group-hover:opacity-100 transition duration-300">
            {["About Us","Volunteer","Happy Clients","Project","Contact Us","FAQ"].map((item, idx) => (
              <li key={idx} className="hover:text-green-400 transition cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start space-x-2">
              <FiMapPin className="text-green-400 mt-1" />
              <span>AL-EZZ building (SBUT), Ibrahim Rehmattullah Road, Bhendi Bazaar, Mumbai – 400003.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone className="text-green-400" />
              <span>+91 9867491052</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMail className="text-green-400" />
              <span>carefoundationtrustorg@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-300 text-sm">
        © 2025 Care Foundation Trust. All rights reserved.
      </div>
    </footer>
  );
}
