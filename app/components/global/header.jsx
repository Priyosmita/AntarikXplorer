"use client";

import { useState, useEffect } from "react";
import "../landing/landing.css";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Header = ({ logo, name, catchPhrase, options, accountIcon }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [user, setUser] = useState(null);

  // Scroll effect to hide/show header
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

  // Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
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
          <div className="logo object-contain">{logo}</div>
          <div className="flex flex-col">
            <span className="text-white text-md viga-regular tracking-widest font-thin opacity-85">
              {name}
            </span>
            <span className="text-white text-xs viga-regular tracking-wider opacity-75">
              {catchPhrase}
            </span>
          </div>
        </div>

        {/* Navigation options */}
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

        {/* Account info or login */}
        <div className="flex items-center space-x-2 text-white">
          {user ? (
            <>
              <span className="text-sm opacity-85">
                {user.displayName || user.email}
              </span>
              <Link href="/profile" className="account-icon">
                {accountIcon}
              </Link>
            </>
          ) : (
            <Link href="/login" className="account-icon">
              {accountIcon}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;