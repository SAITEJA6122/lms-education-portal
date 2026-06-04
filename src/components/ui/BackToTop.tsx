'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-secondary text-primary rounded-full shadow-lg hover:bg-secondary/90 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary min-w-[44px] min-h-[44px] flex items-center justify-center group"
      aria-label="Back to top"
    >
      <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};