"use client";
import { useState } from "react";

export default function FundraiserForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    heading: "",
    fundRequired: "",
    creatorName: "",
    mobile: "",
    city: "",
    state: "",
    address: "",
    startDate: "",
    endDate: "",
    summary: "",
  });

  // ✅ Added proper typing for event
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Added proper typing for form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Start your fundraiser and make a difference today!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md space-y-6"
        >
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          {/* Row 2 */}
          <input
            type="text"
            name="heading"
            placeholder="Fundraiser Heading"
            value={formData.heading}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
          />

          <input
            type="number"
            name="fundRequired"
            placeholder="Fund Required (in INR)"
            value={formData.fundRequired}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
          />

          {/* Upload Pictures */}
          <div>
            <label className="block font-medium mb-2">Upload Pictures</label>
            <div className="grid md:grid-cols-3 gap-3">
              <input type="file" className="border p-2 rounded-lg w-full" />
              <input type="file" className="border p-2 rounded-lg w-full" />
              <input type="file" className="border p-2 rounded-lg w-full" />
            </div>
          </div>

          {/* Creator info */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="creatorName"
              placeholder="Creator's Name"
              value={formData.creatorName}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          {/* ✅ Fixed rows type (number) */}
          <textarea
            name="address"
            placeholder="Address"
            rows={2}
            value={formData.address}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
          />

          {/* Aadhar and PAN */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Aadhar Card</label>
              <input type="file" className="border p-2 rounded-lg w-full" />
            </div>
            <div>
              <label className="block font-medium mb-1">PAN Card</label>
              <input type="file" className="border p-2 rounded-lg w-full" />
            </div>
          </div>

          {/* Dates */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              name="startDate"
              placeholder="Start Date"
              value={formData.startDate}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              value={formData.endDate}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          {/* Supporting Documents */}
          <div>
            <label className="block font-medium mb-2">
              Upload Supporting Documents
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              <input type="file" className="border p-2 rounded-lg w-full" />
              <input type="file" className="border p-2 rounded-lg w-full" />
            </div>
          </div>

          {/* Upload Video */}
          <div>
            <label className="block font-medium mb-2">Upload Video</label>
            <input type="file" className="border p-2 rounded-lg w-full" />
          </div>

          {/* ✅ Fixed rows type (number) */}
          <textarea
            name="summary"
            placeholder="Fundraiser Summary"
            rows={4}
            value={formData.summary}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
          />

          {/* Submit Button */}
          <div className="text-center ">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition"
            >
              Submit Fundraiser
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
