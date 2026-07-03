import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-[#1a1a1a] text-white px-4 md:px-8 py-4 shadow-2xl">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs md:text-sm text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Indem Sie diese Website nutzen, stimmen Sie der Verwendung von Cookies zu.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="/cookie-richtlinie"
            className="text-xs text-gray-400 hover:text-[#F7C948] transition-colors whitespace-nowrap font-medium"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            More info
          </a>
          <button
            onClick={handleAccept}
            className="px-5 py-2 bg-[#F7C948] text-[#1a1a1a] text-xs font-bold tracking-wider hover:bg-[#e6b83e] transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/41613837052"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[80] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 whatsapp-pulse"
      title="WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-[80] w-10 h-10 bg-[#1a1a1a] text-white rounded-sm flex items-center justify-center shadow-lg hover:bg-[#F7C948] hover:text-[#1a1a1a] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
};

const FloatingElements = () => {
  return (
    <>
      <CookieBanner />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
};

export default FloatingElements;
