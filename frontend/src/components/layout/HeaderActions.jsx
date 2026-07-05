import React from 'react';
import { Search, User, Menu, X } from 'lucide-react';

const HeaderActions = ({ isSearchOpen, setIsSearchOpen, isMenuOpen, setIsMenuOpen }) => (
  <div className="flex items-center gap-3">
    <button
      onClick={() => setIsSearchOpen(!isSearchOpen)}
      className="p-2 hover:text-[#F7C948] transition-colors text-[#1a1a1a]"
    >
      <Search size={20} />
    </button>
    <button className="p-2 hover:text-[#F7C948] transition-colors text-[#1a1a1a] hidden md:block">
      <User size={20} />
    </button>
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="p-2 hover:text-[#F7C948] transition-colors text-[#1a1a1a] lg:hidden"
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
);

export default HeaderActions;
