'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Star } from 'lucide-react';

import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
          alt="School Campus"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 bg-secondary/90 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-6"
          >
            <Star className="text-white fill-white" size={16} />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Admissions Open 2026-27</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Nurturing <span className="text-secondary">Brilliance</span> <br />
            Inspiring Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-100 mb-10 max-w-2xl leading-relaxed"
          >
            Welcome to Girls Higher Secondary School, where we foster an environment of 
            academic excellence, character building, and holistic growth for every student.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none px-8">
              Admissions Open 2026-27
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8">
              Explore Campus
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
