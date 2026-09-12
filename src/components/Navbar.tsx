import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

         {/* Logo */}
        <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto"/>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-pink-500">
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <button className="text-sm font-medium text-gray-600 hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm font-semibold text-white hover:bg-pink-600">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;