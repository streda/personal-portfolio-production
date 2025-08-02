import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', to: '#about' },
  { name: 'Skills', to: '#skills' },
  { name: 'Projects', to: '#projects' },
  { name: 'Contact', to: '#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold text-gray-800 tracking-tight hover:text-accent transition-colors duration-200"
        >
          Samuel Reda<span className="text-accent"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className="relative text-lg font-semibold tracking-wide text-gray-700 transition-all duration-300 ease-in-out hover:text-primary
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary
                after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none hover:scale-105 hover:text-accent transition-transform duration-150"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white shadow-sm transition-all duration-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className="block text-base font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;