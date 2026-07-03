import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';
import { navigationItems, topBarLinks } from '../../data/mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 text-xs py-2 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-1 text-gray-700">
            {topBarLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <Link
                  to={link.href}
                  className="hover:text-[#F7C948] transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {index < topBarLinks.length - 1 && (
                  <span className="text-gray-400 mx-1">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C948] transition-colors">
              <Facebook size={14} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C948] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C948] transition-colors">
              <Instagram size={14} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C948] transition-colors">
              <Youtube size={14} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C948] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-[70px] md:h-[80px]">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
                    <rect x="20" y="30" width="20" height="25" rx="2" fill="#1a1a1a"/>
                    <rect x="24" y="55" width="3" height="5" fill="#1a1a1a"/>
                    <rect x="33" y="55" width="3" height="5" fill="#1a1a1a"/>
                    <circle cx="30" cy="18" r="14" fill="#F7C948" opacity="0.9"/>
                    <rect x="29" y="4" width="2" height="8" fill="#1a1a1a"/>
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="font-extrabold text-lg md:text-xl tracking-tight text-[#1a1a1a]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    DÜNYA
                  </div>
                  <div className="text-[9px] md:text-[10px] tracking-[0.2em] text-gray-600 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    MÖBELHAUS
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
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

            {/* Right Icons */}
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
          </div>
        </div>

        {/* Search Bar */}
        <div className={`overflow-hidden transition-all duration-300 ${isSearchOpen ? 'max-h-20 border-t border-gray-100' : 'max-h-0'}`}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Start typing to see products you are looking for."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pr-10 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#F7C948] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
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
      </header>
    </>
  );
};

export default Header;
