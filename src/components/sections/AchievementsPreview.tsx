'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Users, TrendingUp, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const achievements = [
  {
    id: 1,
    title: "Best School Award",
    description: "Recognized as the Best Girls' School in the District 2025",
    year: "2025",
    icon: Trophy,
    color: "text-yellow-600 bg-yellow-50",
  },
  {
    id: 2,
    title: "CBSE Excellence",
    description: "98.6% pass rate with 45 students scoring above 95%",
    year: "2025",
    icon: TrendingUp,
    color: "text-green-600 bg-green-50",
  },
  {
    id: 3,
    title: "Sports Champions",
    description: "Won 12 Gold Medals in District Level Competition",
    year: "2025",
    icon: Medal,
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: 4,
    title: "National Talent Search",
    description: "5 students qualified for NTSE Stage 2",
    year: "2025",
    icon: Star,
    color: "text-purple-600 bg-purple-50",
  },
];

export const AchievementsPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4"
          >
            <Trophy size={18} />
            <span className="text-sm font-bold">Our Pride</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-3"
          >
            School Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Celebrating our milestones and success stories
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <item.icon size={32} />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{item.year}</div>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* View All Button - FIXED with rightIcon */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/achievements">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" rightIcon={<ChevronRight size={18} />}>
                View All Achievements
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats Counter Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">500+</div>
            <div className="text-sm text-gray-500">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">45+</div>
            <div className="text-sm text-gray-500">Gold Medals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">98%</div>
            <div className="text-sm text-gray-500">Results</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">10+</div>
            <div className="text-sm text-gray-500">National Awards</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};