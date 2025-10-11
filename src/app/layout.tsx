import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Global styles applied across the app

// Import NavBar and Footer components
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import FundraiserForm from "@/components/FundraiserForm";
import StartFundraiser from "@/components/StartFundraiser";
import FundRaised from "@/components/FundRaised";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Care Foundation",
  description: "Care Foundation — making care accessible",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
         {/* Navigation bar */}
        <FundraiserForm />
        <AuthForm /> 
        <StartFundraiser />
        <FundRaised />

        <NavBar />

        {/*  Page content */}
        <main className="flex-grow">{children}</main>

        {/*  Footer */}
        <Footer />
      </body>
    </html>
  );
}
