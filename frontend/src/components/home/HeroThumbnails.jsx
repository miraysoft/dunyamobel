import React from 'react';

const HeroThumbnails = ({ slides, currentSlide, onSelect }) => (
  <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
    {slides.map((slide, index) => (
      <button
        key={slide.id}
        onClick={() => onSelect(index)}
        className={`w-[180px] h-[100px] overflow-hidden border-2 transition-all duration-300 ${
          index === currentSlide ? 'border-[#F7C948] opacity-100 scale-105' : 'border-white/50 opacity-60 hover:opacity-80'
        }`}
      >
        <img src={slide.image} alt="" className="w-full h-full object-cover" />
      </button>
    ))}
  </div>
);

export default HeroThumbnails;
