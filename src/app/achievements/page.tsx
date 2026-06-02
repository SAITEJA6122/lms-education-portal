'use client';

import React from 'react';
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "State Awards", value: "25+", icon: Trophy },
  { label: "Board Rankers", value: "150+", icon: Star },
  { label: "Sports Titles", value: "80+", icon: Medal },
  { label: "Year Legacy", value: "30+", icon: Award },
];

const achievements = [
  {
    year: "2025",
    title: "Excellence in Digital Learning",
    description: "Awarded by the State Education Board for our innovative approach to hybrid education and smart classroom integration.",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    year: "2024",
    title: "Regional Basketball Champions",
    description: "Our senior girls' team secured the regional championship for the third consecutive year, showcasing remarkable teamwork.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop"
  },
  {
    year: "2023",
    title: "100% Board Result Record",
    description: "For the 15th year in a row, all our grade 10 and 12 students passed with flying colors, with 40% securing distinctions.",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop"
  }
];

export default function AchievementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Achievements" 
        description="Celebrating the success and milestones of our students and faculty."
      />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Achievements List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-8 left-8 bg-secondary text-white font-bold px-6 py-2 rounded-2xl shadow-lg">
                      {item.year}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">{item.category} Achievement</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{item.description}</p>
                  <div className="flex items-center space-x-3 text-primary font-bold">
                    <CheckCircle2 size={24} />
                    <span>Certified Excellence</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Spotlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-16">Student Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="group">
                <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg relative">
                  <Image
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1491013516836-7db643ee125a' : i === 1 ? '1544005313-94ddf0286df2' : '1567532939604-b6b5b0db2604'}?q=80&w=200&h=200&auto=format&fit=crop`}
                    alt="Student"
                    fill
                    sizes="128px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary mb-1">Student Name</h4>
                <p className="text-secondary text-sm font-medium mb-4">Grade 12, Batch of 2026</p>
                <p className="text-gray-500 text-sm">"LMS GHSS provided me with the platform to excel in both academics and national-level debate competitions."</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
