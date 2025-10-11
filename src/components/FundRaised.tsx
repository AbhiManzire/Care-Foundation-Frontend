"use client";

import React from "react";
import { FaUniversity } from "react-icons/fa";
import Image from "next/image";

const FundRaised: React.FC = () => {
    return (
        <section className="container mx-auto py-16 bg-gradient-to-r from-green-50 to-pink-50 px-6 text-center">
            {/* ✅ Title Section */}
            <div className="mb-10 text-center relative bg-white  rounded-2xl border border-green-200 shadow-[0_4px_20px_rgba(72,187,120,0.3)] p-20 hover:shadow-[0_8px_30px_rgba(72,187,120,0.5)] transition-all duration-500">
                <h5 className="text-green-600 font-semibold uppercase tracking-widest animate-pulse">
                    Completed Campaign
                </h5>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-600 mt-2">
                    Fundraising is at the heart of what we do
                </h1>

                {/* Gradient Line with Glow */}
                <div className="w-24 md:w-40 h-1 bg-gradient-to-r from-green-500 via-lime-400 to-pink-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(72,187,120,0.6)]"></div>

                {/* Optional decorative border glow effect */}
                {/* <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-green-400 to-pink-400 opacity-20 blur-md pointer-events-none"></div> */}
            </div>


            {/* ✅ Donation Card */}
            <div className="flex justify-center">
                <div className="bg-white border border-gray-200 rounded-2xl hover:shadow-[0_8px_30px_rgba(72,187,120,0.5)] transition-all duration-500p-8 w-full max-w-md">
                    <div className="flex flex-col items-center">
                        <FaUniversity />
                        <p className="text-green-700 font-medium mb-6">
                            If you want to donate via account details, use these details:
                        </p>

                        {/* ✅ Bank Details */}
                        <div className="text-left space-y-2 text-gray-800">
                            <p>
                                <span className="font-semibold">Bank A/C No:</span> 50200068627799
                            </p>
                            <p>
                                <span className="font-semibold">Bank A/C Name:</span> Care Foundation Trust
                            </p>
                            <p>
                                <span className="font-semibold">Branch IFSC:</span> HDFC0000626
                            </p>
                            <p>
                                <span className="font-semibold">Bank Name:</span> HDFC Bank
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center justify-center my-6">
                            <span className="text-gray-400 text-sm mx-2">— or —</span>
                        </div>

                        {/* ✅ QR Code */}
                        <Image
                            src="/qecode.webp"
                            alt="QR Code"
                            width={150}
                            height={150}
                            className="rounded-lg shadow-md opacity-95"
                        />
                        <p className="text-sm text-gray-500 mt-4">
                            Scan QR by any UPI app to make donations for any noble cause.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FundRaised;


