"use client";

import { useState, useEffect } from "react";
import "../landing/landing.css";
import Link from "next/link";

const Header = ({ logo, name, catchPhrase, options, accountIcon }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-transparent z-50`}
    >
      <div className="flex justify-between items-center p-4 mt-4">
        {/* Logo and text on the left */}
        <div className="flex items-center -space-x-8">
          {/* Logo */}
          <div className="logo object-contain">{logo}</div>

          {/* Name and catchphrase */}
          <div className="flex flex-col">
            <span className="text-white text-md viga-regular tracking-widest font-thin opacity-85">
              {name}
            </span>
            <span className="text-white text-xs viga-regular tracking-wider opacity-75">
              {catchPhrase}
            </span>
          </div>
        </div>

        {/* Options in the center */}
        <nav className="flex justify-center flex-grow space-x-8">
          {options &&
            options.map((option, index) => (
              <Link
                key={index}
                href={option.link}
                className="text-white text-md hover:text-indigo-300 transition-colors duration-300 opacity-90"
              >
                {option.label}
              </Link>
            ))}
        </nav>

        {/* Account Icon on the right */}
        <Link href="/login" className="account-icon">
          {accountIcon}
        </Link>
      </div>
    </header>
  );
};

export default Header;
