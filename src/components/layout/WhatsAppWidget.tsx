'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const PHONE_NUMBER = "919876543210";
const WELCOME_MESSAGE = "Hello! I'm interested in GHSS admissions. Can you please help me?";

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WELCOME_MESSAGE)}`;
    window.open(url, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup Message */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-green-500 p-4 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-semibold">Chat with us</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-3">
              👋 Hello! Have questions about admissions, fees, or school programs?
            </p>
            <p className="text-gray-500 text-xs mb-4">
              Our team typically replies within a few minutes.
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Start Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 min-w-[56px] min-h-[56px] flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};