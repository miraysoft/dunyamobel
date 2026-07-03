import React, { useState, useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import { welcomeModal, contactInfo } from '../../data/mockData';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('welcomeModalDismissed');
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('welcomeModalDismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 modal-backdrop"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-sm shadow-2xl animate-fade-in-up z-10">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#F7C948] hover:bg-[#e6b83e] text-[#1a1a1a] transition-colors rounded-sm"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 tracking-wide"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {welcomeModal.title}
          </h2>
          <p
            className="text-gray-600 text-sm md:text-base leading-relaxed mb-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <strong>{welcomeModal.text}</strong>
          </p>
          <p
            className="text-gray-600 text-sm md:text-base mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <strong>{welcomeModal.subtext}</strong>
          </p>
          <a
            href={contactInfo.googleMapsEmbed}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a1a] text-sm font-semibold hover:text-[#F7C948] transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <MapPin size={16} />
            {welcomeModal.linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
