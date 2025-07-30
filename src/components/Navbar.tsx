import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Resume', to: '/resume' },
  { name: 'Contact', to: '/contact' }
];

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <NavLink to="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
          Samuel<span className="text-accent">.</span>
        </NavLink>

        {/* Desktop Nav */}
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
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Optional: Mobile toggle (you can expand this later) */}
        <div className="md:hidden">
          {/* Future: Hamburger menu */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;