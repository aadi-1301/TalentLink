import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TinderMode from "./pages/TinderMode";
import FreelancerProfile from "./pages/FreelancerProfile";
import Consider from "./pages/Consider";
import FreelancerSignup from "./pages/FreelancerSignup";
import EmployerSignup from "./pages/EmployerSignup";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/freelancer-signup" element={<FreelancerSignup />} />
        <Route path="/employer-signup" element={<EmployerSignup />} />
        <Route path="/tinder" element={<TinderMode />} />
        <Route path="/freelancer/:id" element={<FreelancerProfile />} />
        <Route path="/consider" element={<Consider />} />
      </Routes>
    </Router>
  );
}
