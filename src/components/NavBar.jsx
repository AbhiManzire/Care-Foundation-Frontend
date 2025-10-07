"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Start a fundraiser", href: "/fundraiserform" },
    { label: "Fundraised", href: "/fundraisers" },
    { label: "Food Partners", href: "/partners/food" },
    { label: "Health Partners", href: "/partners/health" },
    { label: "Become A Partner", href: "/partner" },
    { label: "Become A Volunteer", href: "/volunteer" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.WEBP"
            alt="Care Foundation Logo"
            width={200}
            height={85}
            className="rounded-md hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-black font-semibold text-lg hover:scale-105 transition"
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdowns for other links */}
          <div className="flex items-center gap-4">
            {/* Crowd Funding */}
            <div className="relative group">
              <button className="font-semibold text-black hover:scale-105 transition text-lg">
                Crowd Funding
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <Link href="/fundraiserform" className="block text-black hover:scale-105 px-4 py-2 hover:bg-green-100">
                  Start a fundraiser
                </Link>
                <Link href="/fundraisers" className="block text-black hover:scale-105 px-4 py-2 hover:bg-green-100">
                  Fundraised
                </Link>
                 <Link href="/fundraisers" className="block text-black hover:scale-105 px-4 py-2 hover:bg-green-100">
                  Fundraisers
                </Link>
              </div>
            </div>

            {/* Partners */}
            <div className="relative group">
              <button className="font-semibold text-black hover:scale-105 transition text-lg">
                Partners
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <Link href="/partners/food" className="block px-4 py-2 text-black hover:scale-105">
                  Food Partners
                </Link>
                <Link href="/partners/health" className="block px-4 py-2 text-black hover:scale-105">
                  Health Partners
                </Link>
              </div>
            </div>

            {/* Join Us */}
            <div className="relative group">
              <button className="font-semibold text-black hover:scale-105 transition text-lg">
                Join Us
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <Link href="/partner" className="block px-4 py-2 text-black hover:scale-105">
                  Become A Partner
                </Link>
                <Link href="/volunteer" className="block px-4 py-2 text-black hover:scale-105">
                  Become A Volunteer
                </Link>
              </div>
            </div>

            {/* Buttons */}
            <Link
              href="/myaccount"
              className="bg-gradient-to-r from-lime-600 to-green-500 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
            >
              My Account
            </Link>
            <Link
              href="/login"
             className="bg-gradient-to-r  from-lime-600 to-green-500 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
             >
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-5 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                router.push(link.href);
                setMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 font-semibold text-lg hover:text-green-500 transition py-2"
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 flex flex-col gap-3">
            {/* <Link
              href="/login"
              className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600 text-center transition"
            >
              My Account
            </Link> */}
            <Link
              href="/login"
              className="border-2 border-green-500 text-green-600 px-5 py-2 rounded-full font-semibold hover:bg-green-500 hover:text-white transition text-center"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
