"use client"; // Client-side interactivity

import Image from "next/image";
import { useRouter } from "next/navigation";
import loginOffice from "../../../public/assets/img/login-office.jpeg";
import loginOfficeDark from "../../../public/assets/img/login-office-dark.jpeg";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  // Form state
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345678");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // For demo: log credentials
    console.log("Email:", email);
    console.log("Password:", password);

    // TODO: Replace with real authentication
    // Redirect to dashboard or home after login
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl bg-white dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          {/* Left Image */}
          <div className="h-32 md:h-auto md:w-1/2 relative">
            <Image
              src={loginOffice}
              alt="Office"
              className="object-cover w-full h-full dark:hidden"
              fill
            />
            <Image
              src={loginOfficeDark}
              alt="Office Dark"
              className="hidden object-cover w-full h-full dark:block"
              fill
            />
          </div>

          {/* Right Form */}
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-100">
                Login
              </h1>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@doe.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
                    required
                    className="block w-full h-12 mt-1 px-3 text-sm border rounded-md bg-gray-100 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 border-gray-200 dark:border-gray-600 focus:border-gray-300 dark:focus:border-gray-500 focus:outline-none"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="***************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full h-12 mt-1 px-3 text-sm border rounded-md bg-gray-100 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 border-gray-200 dark:border-gray-600 focus:border-gray-300 dark:focus:border-gray-500 focus:outline-none"
                  />
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full h-12 px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none transition"
                >
                  Login
                </button>

                <hr className="my-10 border-gray-200 dark:border-gray-600" />

                {/* Disabled social buttons */}
                <button
                  disabled
                  className="w-full h-12 mb-2 flex items-center justify-center text-sm font-semibold text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Login With Facebook
                </button>
                <button
                  disabled
                  className="w-full h-12 flex items-center justify-center text-sm font-semibold text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-red-500 hover:text-white transition duration-300"
                >
                  Login With Google
                </button>
              </form>

              {/* Links */}
              <p className="mt-4">
                <a
                  href="/forgot-password"
                  className="text-sm font-medium text-emerald-500 hover:underline"
                >
                  Forgot your password
                </a>
              </p>
              <p className="mt-1">
                <a
                  href="/signup"
                  className="text-sm font-medium text-emerald-500 hover:underline"
                >
                  Create account
                </a>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
