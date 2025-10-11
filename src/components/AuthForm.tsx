"use client";
import { useState } from "react";
import Image from "next/image";

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<"login" | "register" | "forgot">(
    "login"
  );

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    panCard: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [forgotEmail, setForgotEmail] = useState("");
  const [message, setMessage] = useState("");

  // Generic change handlers
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleForgotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForgotEmail(e.target.value);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Logged in as ${loginData.email}`);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    setMessage(`Account created for ${registerData.email}`);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Reset link sent to ${forgotEmail}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300 via-white to-green-200 p-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main-slider/123.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Form Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden bg-white/90 backdrop-blur-lg">

        {/* Left Image / Illustration */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/images/main-slider/123.jpg"
            alt="Illustration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-900/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white px-6">
            <h2 className="text-3xl font-bold">
              Join Care Foundation <br /> Start Making a Difference
            </h2>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          {/* Tabs */}
          <div className="flex justify-around mb-6 border-b border-gray-300">
            {["login", "register", "forgot"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-2 px-4 font-medium border-b-2 transition ${activeTab === tab
                    ? "border-green-600 text-green-600"
                    : "border-transparent text-gray-500 hover:text-green-500"
                  }`}
              >
                {tab === "login"
                  ? "Login"
                  : tab === "register"
                    ? "Create Account"
                    : "Forgot Password"}
              </button>
            ))}
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-green-600 mb-4 font-medium animate-pulse">
              {message}
            </p>
          )}

          {/* Forms */}
          {activeTab === "login" && (
            <form
              onSubmit={handleLoginSubmit}
              className="space-y-4 animate-fadeIn"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
              >
                Login
              </button>
            </form>
          )}

          {activeTab === "register" && (
            <form
              onSubmit={handleRegisterSubmit}
              className="space-y-4 animate-fadeIn"
            >
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                value={registerData.firstName}
                onChange={handleRegisterChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                required
              />

              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                value={registerData.lastName}
                onChange={handleRegisterChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                required
              />

              <input
                type="text"
                name="panCard"
                placeholder="PAN Card Number (e.g. ABCDE1234F)"
                value={registerData.panCard}
                onChange={handleRegisterChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                title="Enter valid PAN format: 5 letters, 4 digits, 1 letter (e.g. ABCDE1234F)"
                required
              />

              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={registerData.mobileNumber}
                onChange={handleRegisterChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                pattern="[0-9]{10}"
                title="Enter a 10-digit mobile number"
                maxLength={10}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
              >
                Create Account
              </button>
            </form>
          )}

          {activeTab === "forgot" && (
            <form
              onSubmit={handleForgotSubmit}
              className="space-y-4 animate-fadeIn"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={forgotEmail}
                onChange={handleForgotChange}
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 hover:scale-105"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
              >
                Send Reset Link
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
