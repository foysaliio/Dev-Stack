import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-slate-200 sticky top-0 bg-white z-50">
      <div className="container mx-auto px-3 py-4 flex justify-between items-center">
        {/* hamburger button */}

        <button
          type="button"
          className="lg:hidden p-2"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={hamburger} className="w-5 h-5" alt="" />
        </button>

        {/* Logo */}
        <div>
          <img src={logo} alt="Dev Stack" className="w-20 sm:w-28 lg:w-32" />
        </div>
        {/* Nav Item */}
        <ul
          className={`${isOpen ? "flex" : "hidden"} absolute top-full left-0 w-full flex-col gap-5 bg-white p-5 shadow-md text-[#475569] lg:static lg:flex lg:w-auto lg:flex-row lg:gap-8 lg:p-0 lg:shadow-none`}
        >
          <li>
            <a
              onClick={() => setIsOpen(false)}
              className="text-[#DB2777]"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#DB2777]"
              href="#"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#DB2777]"
              href="#"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#DB2777]"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#DB2777]"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Nav buttons */}
        <div className="flex items-center gap-2">
          <button
            className="px-1 py-2 text-xs sm:text-sm
      hover:text-[#DB2777] cursor-pointer"
            type="button"
          >
            Sign In
          </button>

          <button
            className="bg-[#DB2777] px-4 py-2
      rounded-full text-xs sm:text-sm
      text-white cursor-pointer"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
