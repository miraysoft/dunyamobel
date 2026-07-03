import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../data/mockData';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden bg-gray-100">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full">
              <div
                className={`max-w-xl transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-white/80 text-sm md:text-base mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {slide.subtitle}
                </p>
                <button
                  className="px-8 py-3 bg-[#F7C948] text-[#1a1a1a] text-sm font-semibold tracking-wider hover:bg-[#e6b83e] transition-colors duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  JETZT ENTDECKEN
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Logo Overlay */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded shadow-sm">
        <div className="flex items-center gap-2">
          <div className="relative">
            <svg width="36" height="36" viewBox="0 0 60 60" fill="none">
              <rect x="20" y="30" width="20" height="25" rx="2" fill="#1a1a1a"/>
              <rect x="24" y="55" width="3" height="5" fill="#1a1a1a"/>
              <rect x="33" y="55" width="3" height="5" fill="#1a1a1a"/>
              <circle cx="30" cy="18" r="14" fill="#F7C948" opacity="0.9"/>
              <rect x="29" y="4" width="2" height="8" fill="#1a1a1a"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-base tracking-tight text-[#1a1a1a]" style={{ fontFamily: 'Poppins, sans-serif' }}>DÜNYA</div>
            <div className="text-[8px] tracking-[0.2em] text-gray-600 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>MÖBELHAUS</div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 text-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Thumbnail Preview - Right Side */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-[180px] h-[100px] overflow-hidden border-2 transition-all duration-300 ${
              index === currentSlide ? 'border-[#F7C948] opacity-100 scale-105' : 'border-white/50 opacity-60 hover:opacity-80'
            }`}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Dots - Mobile */}
      <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#F7C948] w-8' : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
