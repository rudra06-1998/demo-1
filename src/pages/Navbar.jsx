"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();
  const navRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setOpenDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav ref={navRef} className="bg-white shadow-sm sticky top-0 z-50 lg:p-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            onClick={() => handleNavigation("/")}
            className="flex-shrink-0 flex items-center space-x-2 cursor-pointer"
          >
            <img src="/assets/2 2025.png" alt="logo" className="h-14 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Insights Dropdown */}
            <div className="relative ">
              <button
                onClick={() => toggleDropdown("insights")}
                className="flex items-center hover:text-gray-700 text-black cursor-pointer "
              >
                Insights <ChevronDown size={16} className="ml-1" />
              </button>
              {openDropdown === "insights" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <div
                    onClick={() => handleNavigation("/about-us")}
                    className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                  >
                    About Us
                  </div>
                  <div
                    onClick={() => handleNavigation("/contact-us")}
                    className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                  >
                    Contact Us
                  </div>
                </div>
              )}
            </div>

            {/* Employers Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("employers")}
                className="flex items-center hover:text-gray-700 text-black cursor-pointer"
              >
                Employers <ChevronDown size={16} className="ml-1" />
              </button>
              {openDropdown === "employers" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2">
                  {[
                    ["Hire Certified Engineers", "/hire-certified-engineers"],
                    ["Hire AI Engineers", "/hire-ai-engineers"],
                    ["Hire Palo Alto Engineers", "/hire-palo-alto-engineers"],
                    ["Hire Juniper Engineers", "/hire-juniper-engineers"],
                    ["Hire Programmers", "/hire-programmers"],
                    [
                      "Hire Chip Design Engineers",
                      "/hire-chip-design-engineers",
                    ],
                    ["From Certified to Hired", "/from-certified-to-hired"],
                  ].map(([label, path]) => (
                    <div
                      key={path}
                      onClick={() => handleNavigation(path)}
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Skills Training Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("skills")}
                className="flex items-center hover:text-gray-700 text-black cursor-pointer"
              >
                Skills Training <ChevronDown size={16} className="ml-1" />
              </button>
              {openDropdown === "skills" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2">
                  {[
                    [
                      "Artificial Intelligence Skills",
                      "/artificial-intelligence-skills",
                    ],
                    ["Software Programming", "/software-programming"],
                    ["Networking Skills", "/networking-skills"],
                    ["Cybersecurity Skills", "/cybersecurity-skills"],
                    [
                      "Semiconductor Chip Design Skills",
                      "/semiconductor-chips-design-skills",
                    ],
                    [
                      "Foundational Training Programs",
                      "/foundational-training-program",
                    ],
                  ].map(([label, path]) => (
                    <div
                      key={path}
                      onClick={() => handleNavigation(path)}
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Courses */}
            <div
              onClick={() => handleNavigation("/course")}
              className="hover:text-gray-700 text-black cursor-pointer"
            >
              Courses
            </div>

            {/* Highlight Button */}
            <a
              href="#"
              className="bg-[#d5f952] hover:bg-[#d5f952] text-black px-4 py-2 rounded-md font-medium"
            >
              Hire Job-Ready Engineers →
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          <button
            onClick={() => toggleDropdown("insights")}
            className="w-full text-left flex items-center justify-between py-2 text-black"
          >
            Insights <ChevronDown size={16} />
          </button>
          {openDropdown === "insights" && (
            <div className="pl-4 space-y-2">
              <div
                onClick={() => handleNavigation("/about-us")}
                className="block text-black cursor-pointer hover:underline"
              >
                About Us
              </div>
              <div
                onClick={() => handleNavigation("/contact-us")}
                className="block text-black cursor-pointer hover:underline"
              >
                Contact Us
              </div>
            </div>
          )}

          <button
            onClick={() => toggleDropdown("employers")}
            className="w-full text-left flex items-center justify-between py-2 text-black"
          >
            Employers <ChevronDown size={16} />
          </button>
          {openDropdown === "employers" && (
            <div className="pl-4 space-y-2">
              {[
                ["Hire Certified Engineers", "/hire-certified-engineers"],
                ["Hire AI Engineers", "/hire-ai-engineers"],
                ["Hire Palo Alto Engineers", "/hire-palo-alto-engineers"],
                ["Hire Juniper Engineers", "/hire-juniper-engineers"],
                ["Hire Programmers", "/hire-programmers"],
                ["Hire Chip Design Engineers", "/hire-chip-design-engineers"],
                ["From Certified to Hired", "/from-certified-to-hired"],
              ].map(([label, path]) => (
                <div
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className="block text-black cursor-pointer hover:underline"
                >
                  {label}
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => toggleDropdown("skills")}
            className="w-full text-left flex items-center justify-between py-2 text-black"
          >
            Skills Training <ChevronDown size={16} />
          </button>
          {openDropdown === "skills" && (
            <div className="pl-4 space-y-2">
              {[
                [
                  "Artificial Intelligence Skills",
                  "/artificial-intelligence-skills",
                ],
                ["Software Programming", "/software-programming"],
                ["Networking Skills", "/networking-skills"],
                ["Cybersecurity Skills", "/cybersecurity-skills"],
                [
                  "Semiconductor Chip Design Skills",
                  "/semiconductor-chips-design-skills",
                ],
                [
                  "Foundational Training Programs",
                  "/foundational-training-program",
                ],
              ].map(([label, path]) => (
                <div
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className="block text-black cursor-pointer hover:underline"
                >
                  {label}
                </div>
              ))}
            </div>
          )}

          <div
            onClick={() => handleNavigation("/course")}
            className="block py-2 text-black cursor-pointer hover:underline"
          >
            Courses
          </div>

          <a
            href="#"
            className="block w-full text-center bg-[#d5f952] hover:bg-[#d5f952] text-black px-4 py-2 rounded-md font-medium"
          >
            Hire Job-Ready Engineers →
          </a>
        </div>
      )}
    </nav>
  );
}
