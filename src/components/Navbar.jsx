import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600 tracking-wider">MITFLIX</h1>
        <div className="flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors font-medium">Home</Link>
          <Link to="/projects" className="text-white hover:text-gray-300 transition-colors font-medium">Projects</Link>
          <Link to="/skills" className="text-white hover:text-gray-300 transition-colors font-medium">Skills</Link>
          <Link to="/education" className="text-white hover:text-gray-300 transition-colors font-medium">Education</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition-colors font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;