import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Create Your Account
        </h1>
        <p className="text-gray-600 mb-8">
          Choose your role to get started on TalentLink
        </p>

        <div className="space-y-4">
          <Link
            to="/freelancer-signup"
            className="block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
          >
            I’m a Freelancer
          </Link>

          <Link
            to="/employer-signup"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            I’m an Employer
          </Link>
        </div>

        <p className="text-gray-500 mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
