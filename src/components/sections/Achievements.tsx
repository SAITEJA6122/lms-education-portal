'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "Best Secondary School",
    subtitle: "State Education Excellence Awards 2025",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: Star,
    title: "100% Pass Rate",
    subtitle: "Consistently in Board Exams since 2010",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Award,
    title: "Green Campus Award",
    subtitle: "Sustainability & Environmental Leadership",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Target,
    title: "Top Sports Ranking",
    subtitle: "Over 50+ Regional Championship Titles",
    color: "bg-red-100 text-red-600"
  }
];

export const Achievements = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Pride</h2>
          <h3 className="text-4xl font-bold text-primary">Major Achievements</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 text-center group"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform`}>
                <item.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
