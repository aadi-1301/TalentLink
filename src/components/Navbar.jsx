import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
        TalentLink
      </h1>

      <div className="space-x-6">
        <Link
          to="/"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/tinder-mode"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Tinder Mode
        </Link>
        <Link
          to="/login"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}
