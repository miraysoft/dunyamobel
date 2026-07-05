import React from 'react';
import { Shield, Truck, Wrench } from 'lucide-react';
import { trustBadges, brandNames } from '../../data/mockData';

const iconMap = {
  shield: Shield,
  truck: Truck,
  wrench: Wrench,
};

const TrustBadges = () => {
  return (
    <>
      {/* Trust Badges */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {trustBadges.map((badge) => {
              const IconComponent = iconMap[badge.icon];
              return (
                <div key={badge.id} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#F7C948]/10 border-2 border-[#F7C948] flex items-center justify-center mb-4">
                    <IconComponent size={36} className="text-[#F7C948]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-sm md:text-base font-bold text-[#1a1a1a] tracking-wide"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {badge.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-10 md:py-14 px-4 md:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto overflow-hidden">
          <div className="brand-marquee">
            {[...brandNames, ...brandNames, ...brandNames].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
              >
                <span
                  className="text-gray-400 hover:text-[#1a1a1a] transition-colors duration-300 text-lg md:text-xl font-semibold tracking-wider cursor-pointer"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustBadges;
