"use client";

import { useState, useEffect, useRef } from "react";
import "../landing/landing.css";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const Header = ({ logo, name, catchPhrase, options, accountIcon }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Header hide/show on scroll
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    setDropdownOpen(false);
    router.push("/");
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-transparent z-50`}
    >
      <div className="flex justify-between items-center p-4 mt-4">
        {/* Left: Logo + Text */}
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

        {/* Center: Nav Links */}
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

        {/* Right: Profile Icon & Dropdown */}
        <div className="relative" ref={dropdownRef}>
          {user ? (
            <div className="flex items-center space-x-2 text-white cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <span className="text-sm opacity-85">
                {user.displayName || user.email}
              </span>
              <div className="account-icon">{accountIcon}</div>
            </div>
          ) : (
            <Link href="/login" className="account-icon text-white">
              {accountIcon}
            </Link>
          )}

          {/* Dropdown */}
          {dropdownOpen && user && (
            <div className="absolute right-0 mt-2 w-28 text-center button_gradient text-black rounded-md shadow-lg z-50 hover:scale-105 transition transform duration-300">
              <button
                onClick={handleLogout}
                className="w-full text-center px-4 py-2 hover:text-white rounded-md"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;