import { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-16 px-4 sm:px-6 lg:px-8 bg-white shadow-md text-gray-800 z-50 sticky top-0 left-0">
      <div className="flex justify-between h-full items-center w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="font-bold text-xl">
            MyApp
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/dashboard"
            className="px-3 py-2 rounded hover:bg-blue-100 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="px-3 py-2 rounded hover:bg-blue-100 transition-colors duration-200"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-2xl"
          >
            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed top-16 left-0 shadow-md z-50 w-full">
          <Link
            to="/dashboard"
            className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200 "
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
