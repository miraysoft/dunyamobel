import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="flex-shrink-0">
    <div className="flex items-center gap-2">
      <div className="relative">
        <img
          src="https://dunyamobel.ch/wp-content/uploads/2021/08/logo.png"
          alt="DÜNYA MÖBELHAUS"
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="leading-tight">
        <div className="font-extrabold text-lg md:text-xl tracking-tight text-[#1a1a1a]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          DÜNYA
        </div>
        <div className="text-[9px] md:text-[10px] tracking-[0.2em] text-gray-600 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
          MÖBELHAUS
        </div>
      </div>
    </div>
  </Link>
);

export default Logo;
