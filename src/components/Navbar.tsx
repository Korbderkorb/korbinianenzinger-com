
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed left-0 top-0 right-0 z-50 flex items-center justify-between px-6 py-3 md:px-12 bg-main-dark text-main-light border-b-[1px] border-main-dark">
      <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
        <h1 className="text-2xl md:text-3xl">MUTUALISM</h1>
      </Link>

      <button 
        className="md:hidden text-3xl focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '×' : '+'}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-12">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-base hover:text-gray-300 transition-colors ${
              location.pathname === link.path ? 'text-gray-400' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute top-full left-0 right-0 flex-col items-center justify-center bg-main-dark border-t border-gray-800 py-10 shadow-xl md:hidden`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl py-4 hover:text-gray-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
