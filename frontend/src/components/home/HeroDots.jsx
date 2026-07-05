import React from 'react';

const HeroDots = ({ slides, currentSlide, onSelect }) => (
  <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
    {slides.map((slide, index) => (
      <button
        key={slide.id}
        onClick={() => onSelect(index)}
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          index === currentSlide ? 'bg-[#F7C948] w-8' : 'bg-white/60 hover:bg-white/80'
        }`}
      />
    ))}
  </div>
);

export default HeroDots;
