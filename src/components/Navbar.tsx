"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed w-72 z-[600] bg-black">
      <div className="flex items-center min-h-[66px]">
        <div className="flex items-center w-full bg-black px-5">
          {/* Menu Toggle */}
          <a
            href="#"
            className={`cursor-pointer w-[40px] h-[40px] flex items-center justify-center mr-5 relative z-[1000] ${
              menuOpen ? "isClicked" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
          >
            <span
              className={`menuToggle relative block w-[24px] h-[3px] bg-pink-500 transition-colors duration-200 ease-in-out ${
                menuOpen ? "isClicked" : ""
              }`}
            ></span>
            
          </a>

          {/* Logo */}
          <div className="ml-2 text-shadow-[2px_2px_2px_#cc005f]">
            <Link href="/" className="text-white text-[1.7rem] font-comic">
              Abdullah
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`absolute top-[66px] bg-black w-[100%] overflow-hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-[300px] opacity-100 pt-5 px-5"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="list-none pl-1 flex flex-col justify-start">
            <li className="mb-4 current">
              <Link
                href="#intro"
                className="block text-white text-[1.6rem] py-0.5 hover:text-pink-500 hover:pl-4 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="#about"
                className="block text-white text-[1.6rem] py-0.5 hover:text-pink-500 hover:pl-4 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="#resume"
                className="block text-white text-[1.6rem] py-0.5 hover:text-pink-500 hover:pl-4 transition-all duration-300"
              >
                Resume
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="#portfolio"
                className="block text-white text-[1.6rem] py-0.5 hover:text-pink-500 hover:pl-4 transition-all duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="#contact"
                className="block text-white text-[1.6rem] py-0.5 hover:text-pink-500 hover:pl-4 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
