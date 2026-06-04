'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export const FloatingAdmissionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (typeof window === 'undefined') return null;
  if (!isVisible) return null;

  return (
    <Link href="/admissions" className="fixed right-4 bottom-36 z-50 group cursor-pointer block">
      <div className="relative flex items-center justify-center bg-secondary text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[56px] min-h-[56px] p-3 hover:pr-5 hover:pl-4 group-hover:gap-2 overflow-hidden">
        <GraduationCap size={28} className="shrink-0" />
        <span className="max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap transition-all duration-300 text-sm font-semibold">
          Admissions Open
        </span>
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full animate-ping bg-secondary/40 -z-10"></div>
      </div>
    </Link>
  );
};