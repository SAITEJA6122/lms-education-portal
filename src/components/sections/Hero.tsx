'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Star, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const backgroundImages = [
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop",  // Working image
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",  // Working image
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovering]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero section with school campus imagery"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImages[currentImageIndex]}
            alt="School Campus - scenic view of Girls Higher Secondary School"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        
        <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
          {currentImageIndex + 1} / {backgroundImages.length}
        </div>
        
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-4 right-20 z-20 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={isAutoPlaying ? "Pause background slideshow" : "Play background slideshow"}
        >
          {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 bg-secondary/90 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-6"
          >
            <Star className="text-white fill-white" size={16} aria-hidden="true" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Admissions Open 2026-27</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            Nurturing <span className="text-secondary">Brilliance</span> <br />
            Inspiring Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-10 max-w-2xl leading-relaxed"
          >
            Welcome to Girls Higher Secondary School, where we foster an environment of 
            academic excellence, character building, and holistic growth for every student.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            {/* FIXED: Admissions button with rightIcon */}
            <Link href="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary border-none px-6 sm:px-8 font-semibold shadow-lg hover:shadow-xl transition-all" rightIcon={<ArrowRight size={18} />}>
                Admissions Open 2026-27
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-6 sm:px-8">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};