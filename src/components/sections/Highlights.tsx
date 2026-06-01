'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, FlaskConical, Palette, Dumbbell } from 'lucide-react';

const highlights = [
  {
    icon: Monitor,
    title: "Digital Classrooms",
    description: "Equipped with the latest technology to enhance interactive learning.",
  },
  {
    icon: FlaskConical,
    title: "Modern Labs",
    description: "State-of-the-art science and computer laboratories for practical learning.",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description: "Dedicated spaces for music, dance, and fine arts to foster creativity.",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Extensive facilities for various indoor and outdoor sports activities.",
  },
];

export const Highlights = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
          <h3 className="text-4xl font-bold text-primary">School Highlights</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <item.icon className="text-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
