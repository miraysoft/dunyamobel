import React from 'react';
import { marqueeTexts } from '../../data/mockData';

const MarqueeBanner = () => {
  const repeatedTexts = [...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts];

  return (
    <div className="bg-[#F7C948] overflow-hidden py-3 relative">
      <div className="marquee-container">
        <div className="marquee-content">
          {repeatedTexts.map((text, index) => (
            <span
              key={`${text}-${index}`}
              className="inline-block mx-8 text-[#1a1a1a] text-xs md:text-sm font-bold tracking-wider whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {text}
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {repeatedTexts.map((text, index) => (
            <span
              key={`dup-${text}-${index}`}
              className="inline-block mx-8 text-[#1a1a1a] text-xs md:text-sm font-bold tracking-wider whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
