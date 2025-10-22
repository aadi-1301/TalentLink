// src/pages/EmployerSignup.jsx
import { useState } from "react";

export default function EmployerSignup() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    password: "",
    position: "",
    hiringNeeds: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employer Data:", formData);
    alert("Employer account created successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Employer Signup
        </h2>

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="position"
          placeholder="Your Role (e.g., HR Manager)"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          onChange={handleChange}
        />

        <textarea
          name="hiringNeeds"
          placeholder="Describe the type of freelancers you’re looking for"
          className="w-full border border-gray-300 rounded-lg p-3 mb-6"
          rows="3"
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full py-3 rounded-lg transition"
        >
          Create Employer Account
        </button>
      </form>
    </div>
  );
}
