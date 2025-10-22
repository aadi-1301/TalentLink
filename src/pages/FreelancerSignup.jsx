// src/pages/FreelancerSignup.jsx
import { useState } from "react";

export default function FreelancerSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skill: "",
    experience: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Freelancer Data:", formData);
    alert("Freelancer account created successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Freelancer Signup
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
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
          name="skill"
          placeholder="Your Primary Skill (e.g., Web Development)"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          onChange={handleChange}
        />

        <input
          type="text"
          name="experience"
          placeholder="Years of Experience"
          className="w-full border border-gray-300 rounded-lg p-3 mb-6"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full py-3 rounded-lg transition"
        >
          Create Freelancer Account
        </button>
      </form>
    </div>
  );
}
