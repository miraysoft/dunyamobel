import React, { useState, useEffect } from 'react';
import WelcomeContent from './WelcomeContent';

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
      <WelcomeContent onClose={handleClose} />
    </div>
  );
};

export default WelcomeModal;
