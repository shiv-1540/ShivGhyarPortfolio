import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900 backdrop-blur-md py-4 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Branding */}
        <a
          href="#home"
          className="text-3xl font-extrabold text-white hover:text-red-500 transition-colors duration-300"
        >
          <span className="text-red-500">S</span>hiv
          <span className="text-red-500">F</span>olio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center px-3 py-2 border border-red-500 rounded text-red-500 hover:text-white hover:border-white transition duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 pt-20 flex flex-col space-y-6">
            {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="text-lg text-gray-300 hover:text-red-500 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
