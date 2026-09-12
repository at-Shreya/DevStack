import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Mobile Navbar */}
        <div className="relative flex h-16 items-center justify-between lg:hidden">

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={hamburger} alt="Menu" className="h-6 w-6 transition hover:opacity-70" />
          </button>

          {/* Logo */}
          <img
            src={logo}
            alt="Dev Stack"
            className="absolute left-1/2 h-8 w-auto -translate-x-1/2"
          />

          {/* Buttons */}
          <div className="ml-auto flex items-center gap-2" >
            <button className="px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
    Sign In
  </button>

            <button className="brand-gradient rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-90">
    Sign Up
  </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-pink-500">
                Home
              </a>

              <a href="#technologies" className="text-gray-600">
                Technologies
              </a>

              <a href="#" className="text-gray-600">
                Projects
              </a>

              <a href="#footer" className="text-gray-600">
                About
              </a>

              <a href="#footer" className="text-gray-600">
                Contact
              </a>
            </div>
          </div>
        )}

        {/* Desktop Navbar */}
        <div className="hidden h-16 items-center justify-between lg:flex">
          {/* Logo */}
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />

          {/* Menu */}
          <div className="flex items-center gap-8">
            <a href="#home" className="text-sm text-pink-500">
              Home
            </a>

            <a href="#technologies" className="text-sm text-gray-600 hover:text-pink-500">
              Technologies
            </a>

            <a href="#" className="text-sm text-gray-600 hover:text-pink-500">
              Projects
            </a>

            <a href="#footer" className="text-sm text-gray-600 hover:text-pink-500">
              About
            </a>

            <a href="#footer" className="text-sm text-gray-600 hover:text-pink-500">
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            <button className="text-sm text-gray-600 hover:text-pink-500">
              Sign In
            </button>

            <button className="brand-gradient rounded-lg px-5 py-2 font-semibold text-white shadow-md transition hover:opacity-90">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
