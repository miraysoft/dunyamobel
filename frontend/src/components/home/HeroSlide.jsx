import React from 'react';

const HeroSlide = ({ slide, active }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
        active ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full">
            <div
              className={`max-w-xl transition-all duration-700 delay-200 ${
                active ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {slide.title}
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {slide.subtitle}
            </p>
            <button className="px-8 py-3 bg-[#F7C948] text-[#1a1a1a] text-sm font-semibold tracking-wider hover:bg-[#e6b83e] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
              JETZT ENTDECKEN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
