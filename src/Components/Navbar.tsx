import React, { useState, useEffect, useRef } from "react";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white/90 dark:bg-gray-900/95 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo & Branding */}
        <a href="#" className="flex items-center space-x-3 group">
          <img src="/logo.svg" className="h-8 group-hover:scale-105 transition-transform" alt="Feeler Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600 dark:text-white">
            Feeler
          </span>
        </a>

        {/* Right-side button */}
        <div className="flex md:order-2">
          <button
            type="button"
            className="hidden md:inline-block text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            Try Feeler
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-3"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          ref={menuRef}
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {[
              { label: "Home", link: "#" },
              { label: "Problem Statement", link: "#problem" },
              { label: "Solution", link: "#solution" },
              { label: "Features", link: "#features" },
              { label: "Team", link: "#team" },
            ].map(({ label, link }) => (
              <li key={label}>
                <a
                  href={link}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 md:border-b-2 md:border-transparent md:hover:border-blue-600 transition-all duration-200 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
