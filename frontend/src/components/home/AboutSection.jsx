import React from 'react';
import { aboutText } from '../../data/mockData';

const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">
        {aboutText.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-5 last:mb-0"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {index === 0 ? (
              <>
                <strong className="text-[#1a1a1a]">{aboutText.title}</strong>{' '}
                {paragraph.replace(aboutText.title, '')}
              </>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
