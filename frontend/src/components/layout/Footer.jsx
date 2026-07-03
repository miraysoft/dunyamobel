import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo, navigationItems } from '../../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="relative">
                <svg width="36" height="36" viewBox="0 0 60 60" fill="none">
                  <rect x="20" y="30" width="20" height="25" rx="2" fill="#ffffff"/>
                  <rect x="24" y="55" width="3" height="5" fill="#ffffff"/>
                  <rect x="33" y="55" width="3" height="5" fill="#ffffff"/>
                  <circle cx="30" cy="18" r="14" fill="#F7C948" opacity="0.9"/>
                  <rect x="29" y="4" width="2" height="8" fill="#ffffff"/>
                </svg>
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-lg tracking-tight text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>DÜNYA</div>
                <div className="text-[8px] tracking-[0.2em] text-gray-400 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>MÖBELHAUS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Stilvolle Möbel für Ihr Zuhause. Qualität und Eleganz seit Jahren in Basel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              KATEGORIEN
            </h4>
            <ul className="space-y-3">
              {navigationItems.slice(0, 6).map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 text-sm hover:text-[#F7C948] transition-colors duration-200"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              INFORMATIONEN
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/agb" className="text-gray-400 text-sm hover:text-[#F7C948] transition-colors duration-200" style={{ fontFamily: 'Poppins, sans-serif' }}>AGB</Link>
              </li>
              <li>
                <Link to="/uber-uns" className="text-gray-400 text-sm hover:text-[#F7C948] transition-colors duration-200" style={{ fontFamily: 'Poppins, sans-serif' }}>Über uns</Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 text-sm hover:text-[#F7C948] transition-colors duration-200" style={{ fontFamily: 'Poppins, sans-serif' }}>Kontakt</Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-400 text-sm hover:text-[#F7C948] transition-colors duration-200" style={{ fontFamily: 'Poppins, sans-serif' }}>Datenschutz</Link>
              </li>
              <li>
                <Link to="/cookie-richtlinie" className="text-gray-400 text-sm hover:text-[#F7C948] transition-colors duration-200" style={{ fontFamily: 'Poppins, sans-serif' }}>Cookie-Richtlinie</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold tracking-wider mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              KONTAKT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F7C948] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F7C948] flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 text-sm hover:text-[#F7C948] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>{contactInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F7C948] flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 text-sm hover:text-[#F7C948] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>{contactInfo.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#F7C948] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p>Mo - Sa: 10:00 - 19:00</p>
                  <p>Sonntag: Geschlossen</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
              © 2025 Dünya Möbelhaus GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#F7C948] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#F7C948] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#F7C948] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
