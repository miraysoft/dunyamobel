import React, { useState, useEffect, useCallback } from 'react';
import { heroSlides } from '../../data/mockData';
import HeroSlide from './HeroSlide';
import HeroNavigation from './HeroNavigation';
import HeroThumbnails from './HeroThumbnails';
import HeroDots from './HeroDots';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const SLIDE_TRANSITION_DURATION_MS = 700;
  const AUTO_SLIDE_INTERVAL_MS = 5000;

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), SLIDE_TRANSITION_DURATION_MS);
  }, [isTransitioning, setCurrentSlide, setIsTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden bg-gray-100">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <HeroSlide key={slide.id} slide={slide} active={index === currentSlide} />
      ))}

      {/* Logo Overlay */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded shadow-sm">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              src="https://dunyamobel.ch/wp-content/uploads/2021/08/logo.png"
              alt="DÜNYA MÖBELHAUS"
              className="w-9 h-9 object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-base tracking-tight text-[#1a1a1a]" style={{ fontFamily: 'Poppins, sans-serif' }}>DÜNYA</div>
            <div className="text-[8px] tracking-[0.2em] text-gray-600 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>MÖBELHAUS</div>
          </div>
        </div>
      </div>

      <HeroNavigation onPrev={prevSlide} onNext={nextSlide} />

      <HeroThumbnails slides={heroSlides} currentSlide={currentSlide} onSelect={goToSlide} />
      <HeroDots slides={heroSlides} currentSlide={currentSlide} onSelect={goToSlide} />
    </div>
  );
};

export default HeroSlider;
