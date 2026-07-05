import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../../data/mockData';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => (
  <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'}`}>
    <nav className="max-w-[1400px] mx-auto px-4 py-4">
      {navigationItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          onClick={() => setIsMenuOpen(false)}
          className="block py-3 px-2 text-sm font-semibold text-[#1a1a1a] hover:text-[#F7C948] border-b border-gray-50 transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  </div>
);

export default MobileMenu;
