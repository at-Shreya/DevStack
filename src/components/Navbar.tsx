import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Mobile Navbar */}
        <div className="grid grid-cols-3 items-center px-4 py-3 lg:hidden">
          {/* Hamburger */}
          <div className="justify-self-start">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 transition hover:bg-gray-100"
            >
              <img src={hamburger} alt="Menu" className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="justify-self-center">
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
          </div>

          {/* Buttons */}
          <div className="flex justify-self-end gap-1 sm:gap-2">
            <button className="px-2 py-1.5 text-xs font-semibold sm:px-3 sm:py-2 sm:text-sm">
              Sign In
            </button>

            <button className="brand-gradient rounded-lg px-2 py-1.5 text-xs font-semibold text-white shadow-md transition hover:opacity-90 sm:px-3 sm:py-2 sm:text-sm">
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

            <a
              href="#technologies"
              className="text-sm text-gray-600 hover:text-pink-500"
            >
              Technologies
            </a>

            <a href="#" className="text-sm text-gray-600 hover:text-pink-500">
              Projects
            </a>

            <a
              href="#footer"
              className="text-sm text-gray-600 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#footer"
              className="text-sm text-gray-600 hover:text-pink-500"
            >
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
