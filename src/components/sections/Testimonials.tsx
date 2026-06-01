'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Aisha Sharma",
    role: "Student",
    content: "The environment at GHSS is so encouraging. I've not only excelled in my studies but also discovered my passion for public speaking through various clubs.",
    rating: 5,
    category: "Student",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Priya Patel",
    role: "Parent",
    content: "Sending my daughter to GHSS was the best decision. The individual attention each student receives is remarkable. The focus on character building is what sets them apart.",
    rating: 5,
    category: "Parent",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Anjali Gupta",
    role: "Alumni (Batch of 2018)",
    content: "GHSS provided the foundation I needed for my career in medicine. The science labs and dedicated faculty helped me clear my entrance exams with confidence.",
    rating: 5,
    category: "Alumni",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Meera Reddy",
    role: "Parent",
    content: "The school's infrastructure and the safety measures for girls are top-notch. I am very satisfied with the overall development of my daughter.",
    rating: 4,
    category: "Parent",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
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

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-primary">Voices of our Community</h3>
        </div>

        <div className="relative h-[450px] md:h-[350px]">
          <AnimatePresence initial={false} custom={direction}>
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
              <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-24 h-24 md:w-40 md:h-40 flex-shrink-0">
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl rotate-6"></div>
                  <div className="absolute inset-0 bg-primary rounded-2xl -rotate-3 overflow-hidden border-4 border-white shadow-lg">
                    <Image 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      fill
                      sizes="(max-width: 768px) 96px, 160px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-grow relative">
                  <Quote className="absolute -top-6 -left-6 text-gray-100 w-16 h-16 -z-10" />
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonials[currentIndex].rating ? "text-secondary fill-secondary" : "text-gray-200"} 
                      />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-primary">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-4 md:static md:translate-x-0 md:justify-center md:mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all text-primary border border-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all text-primary border border-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
