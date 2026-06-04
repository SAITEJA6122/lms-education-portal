'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Pause, Play } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Aisha Sharma",
    role: "Student",
    content: "The environment at GHSS is so encouraging. I've not only excelled in my studies but also discovered my passion for public speaking through various clubs.",
    rating: 5,
    category: "Student",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Parent",
    content: "Sending my daughter to GHSS was the best decision. The individual attention each student receives is remarkable. The focus on character building is what sets them apart.",
    rating: 5,
    category: "Parent",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Anjali Gupta",
    role: "Alumni (Batch of 2018)",
    content: "GHSS provided the foundation I needed for my career in medicine. The science labs and dedicated faculty helped me clear my entrance exams with confidence.",
    rating: 5,
    category: "Alumni",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Meera Reddy",
    role: "Parent",
    content: "The school's infrastructure and the safety measures for girls are top-notch. I am very satisfied with the overall development of my daughter.",
    rating: 4,
    category: "Parent",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Sanya Khan",
    role: "Student",
    content: "I love the sports facilities here. Our basketball coach is amazing, and we've won several inter-school championships lately!",
    rating: 5,
    category: "Student",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play with pause on user interaction
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play when user interacts
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    const timer = setTimeout(() => setIsAutoPlaying(true), 10000);
    return () => clearTimeout(timer);
  };

  // Touch swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      handleUserInteraction();
    }
    setTouchStart(null);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" aria-label="Testimonials section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Voices of our Community
          </motion.h3>
        </div>

        <div 
          className="relative h-[500px] md:h-[380px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                {/* Image with better accessibility */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl rotate-6"></div>
                  <div className="absolute inset-0 bg-primary rounded-2xl -rotate-3 overflow-hidden border-4 border-white shadow-lg">
                    <Image 
                      src={testimonials[currentIndex].image} 
                      alt={`${testimonials[currentIndex].name} - ${testimonials[currentIndex].role}`}
                      fill
                      sizes="(max-width: 768px) 96px, 128px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-grow relative text-center md:text-left">
                  <Quote 
                    className="absolute -top-4 -left-4 md:-top-6 md:-left-6 text-gray-100 w-12 h-12 md:w-16 md:h-16 -z-10" 
                    aria-hidden="true"
                  />
                  
                  {/* Rating Stars with accessibility */}
                  <div className="flex justify-center md:justify-start space-x-1 mb-4" aria-label={`Rating: ${testimonials[currentIndex].rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonials[currentIndex].rating ? "text-secondary fill-secondary" : "text-gray-200"}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial content with better readability */}
                  <blockquote>
                    <p className="text-base md:text-xl text-gray-600 mb-6 italic leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </blockquote>
                  
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-primary">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary font-medium text-sm md:text-base">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator for better navigation */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                  handleUserInteraction();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-secondary' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          {/* Controls with auto-play toggle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-3 md:static md:translate-x-0 md:justify-center md:mt-4">
            <button 
              onClick={() => {
                prevSlide();
                handleUserInteraction();
              }}
              className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all text-primary border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary min-h-[44px] min-w-[44px]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Auto-play toggle button */}
            <button 
              onClick={() => {
                setIsAutoPlaying(!isAutoPlaying);
              }}
              className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all text-primary border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary min-h-[44px] min-w-[44px]"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
            >
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button 
              onClick={() => {
                nextSlide();
                handleUserInteraction();
              }}
              className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all text-primary border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary min-h-[44px] min-w-[44px]"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Screen reader announcement for current slide */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Showing testimonial {currentIndex + 1} of {testimonials.length}: {testimonials[currentIndex].name} says {testimonials[currentIndex].content}
        </div>
      </div>
    </section>
  );
};