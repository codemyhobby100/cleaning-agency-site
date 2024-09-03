import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/clean-my-space-ltd-abuja-logo.png";
import { FiPhoneCall, FiX } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white shadow-md py-4 relative">
      <div className="my_container flex items-center justify-between">
        {/* Logo */}
        <Link href={"/Home"}>
          <Image src={Logo} alt="Clean My Space Ltd Abuja Logo – Professional Cleaning Services in Abuja" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden xl:flex gap-8 items-center">
          {[
            { to: "/Home", label: "Home" },
            { to: "/AboutUs", label: "About Us" },
            { to: "/Services", label: "Services" },
            { to: "/Projects", label: "Projects" },
            { to: "/Contacts", label: "Contacts" },
          ].map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className=
                    "text-[16px] leading-[24px]  hover:text-[#1F1F1F]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone and Social Icons */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-800">
            <div className="p-[15px] bg-[#48BEF7] rounded-[50px]">
              <a href="tel:+2349119178436">
                <FiPhoneCall className="text-xl text-black" />
              </a>
            </div>
            <span className="font-medium text-[16px]">+2349119178436</span>
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#E7F7FD] flex items-center justify-center">
              <FaFacebookF className="text-[#4267B2] text-[18px]" />
            </div>
            <a
              href="https://www.instagram.com/cleanmyspaceltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-[#F8F0FB] flex items-center justify-center">
                <FaInstagram className="text-[#BB6BD9] text-[18px]" />
              </div>
            </a>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="xl:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FiX /> : <HiMenuAlt1 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-20 top-full left-0 right-0 bg-white shadow-md  p-4 xl:hidden flex flex-col gap-4 items-center transition-transform duration-500 ease-in-out ${
          isMenuOpen
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4 items-center">
          {[
            { to: "/Home", label: "Home" },
            { to: "/AboutUs", label: "About Us" },
            { to: "/Cervices", label: "Services" },
            { to: "/Projects", label: "Projects" },
            { to: "/Contacts", label: "Contacts" },
          ].map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className="text-[16px] leading-[24px] hover:text-[#1F1F1F]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-gray-800">
            <div className="p-[15px] bg-[#48BEF7] rounded-[50px]">
              <FiPhoneCall className="text-xl text-black" />
            </div>
            <span className="font-medium text-[16px]">+2349119178436</span>
          </div>
          <div className="flex gap-4">
            <div className="w-[48px] h-[48px] rounded-full bg-[#E7F7FD] flex items-center justify-center">
              <FaFacebookF className="text-[#4267B2] text-[18px]" />
            </div>
            <div className="w-[48px] h-[48px] rounded-full bg-[#F8F0FB] flex items-center justify-center">
              <FaInstagram className="text-[#BB6BD9] text-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
