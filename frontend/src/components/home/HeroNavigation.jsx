import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroNavigation = ({ onPrev, onNext }) => (
  <>
    <button
      onClick={onPrev}
      className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 text-white"
    >
      <ChevronLeft size={24} />
    </button>
    <button
      onClick={onNext}
      className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 text-white"
    >
      <ChevronRight size={24} />
    </button>
  </>
);

export default HeroNavigation;
