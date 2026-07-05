import React, { useState, useEffect, useCallback } from 'react';
import TopBar from './TopBar';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import HeaderActions from './HeaderActions';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);
  }, [setIsScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <TopBar />

      <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-[70px] md:h-[80px]">
            <Logo />
            <DesktopNavigation />
            <HeaderActions
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>

        <SearchBar isSearchOpen={isSearchOpen} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
    </>
  );
};

export default Header;
