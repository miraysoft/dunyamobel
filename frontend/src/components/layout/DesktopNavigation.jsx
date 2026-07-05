import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../../data/mockData';

const DesktopNavigation = () => (
  <nav className="hidden lg:flex items-center gap-1">
    {navigationItems.map((item) => (
      <Link
        key={item.label}
        to={item.href}
        className="px-3 py-2 text-[12px] xl:text-[13px] font-semibold text-[#1a1a1a] hover:text-[#F7C948] transition-colors duration-200 tracking-wide whitespace-nowrap"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {item.label}
      </Link>
    ))}
  </nav>
);

export default DesktopNavigation;
