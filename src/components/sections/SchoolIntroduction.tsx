'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

export const SchoolIntroduction = () => {
  const points = [
    "Holistic Girl-Child Development",
    "Smart Classrooms & Labs",
    "Qualified & Dedicated Faculty",
    "Empowering Leadership Programs",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop"
                alt="Girls Higher Secondary School Campus"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-10 rounded-[2rem] text-white shadow-2xl hidden sm:block border-8 border-white">
              <p className="text-5xl font-bold mb-1">30+</p>
              <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Years of Legacy</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4 text-left">About Our School</h2>
            <h3 className="text-4xl font-bold text-primary mb-6 text-left leading-tight">Empowering Young Women Since 1995</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed text-left">
              LMS Girls Higher Secondary School is a reputed institution in Kanyakumari District, 
              Tamil Nadu. With prominent campuses in <span className="font-bold text-primary">Neyyoor</span> and <span className="font-bold text-primary">Marthandam</span>, 
              we are affiliated with the <span className="font-bold">Tamil Nadu Board of Secondary Education (TNBSE)</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-secondary" size={20} />
                  </div>
                  <span className="text-gray-700 font-semibold">{point}</span>
                </div>
              ))}
            </div>
            <Link href="/about">
              <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center group shadow-lg shadow-primary/20">
                Discover Our Philosophy
                <span className="ml-2 group-hover:translate-x-1 transition-transform text-secondary">→</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
