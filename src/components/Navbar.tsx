import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const navItems = [
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Resume', to: '/resume' },
  { name: 'Contact', to: '/contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
        >
          Samuel's portfolio<span className="text-accent"></span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `text-gray-700 relative font-medium transition-all duration-200 hover:text-primary
                 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
                 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform ${
                   isActive ? 'text-primary after:scale-x-100' : 'after:scale-x-0'
                 }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
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
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `block text-base font-medium text-gray-700 hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : ''
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;