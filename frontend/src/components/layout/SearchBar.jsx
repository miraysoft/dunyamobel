import React from 'react';

const SearchBar = ({ isSearchOpen, searchQuery, setSearchQuery }) => (
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
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    </div>
  </div>
);

export default SearchBar;
