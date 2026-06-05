'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, GraduationCap } from 'lucide-react';

const stats = [
  {
    icon: BookOpen,
    label: "Academic Programs",
    value: "15+",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    label: "Total Students",
    value: "1,200+",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Trophy,
    label: "Sports Awards",
    value: "45+",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: GraduationCap,
    label: "Years Legacy",
    value: "30+",
    color: "bg-purple-50 text-purple-600",
  },
];

export const QuickInformationCards = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform`}>
                <stat.icon size={32} />
              </div>
              <h4 className="text-4xl font-bold text-primary mb-2">{stat.value}</h4>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
