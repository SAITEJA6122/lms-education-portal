'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Building2, 
  CalendarDays,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const infoCards = [
  {
    icon: GraduationCap,
    title: "Admissions Open",
    description: "Apply now for academic year 2026-27. Limited seats available.",
    link: "/admissions",
    linkText: "Apply Now →",
    color: "bg-blue-50 text-blue-600",
    hoverColor: "hover:border-blue-200",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description: "98% board exam results with outstanding student achievements.",
    link: "/achievements",
    linkText: "View Results →",
    color: "bg-green-50 text-green-600",
    hoverColor: "hover:border-green-200",
  },
  {
    icon: Building2,
    title: "Facilities",
    description: "Smart classrooms, labs, library, sports complex & hostel.",
    link: "/infrastructure",
    linkText: "Explore Facilities →",
    color: "bg-purple-50 text-purple-600",
    hoverColor: "hover:border-purple-200",
  },
  {
    icon: CalendarDays,
    title: "Events",
    description: "Annual Day, Sports Meet, Cultural Fest & more coming up.",
    link: "/events",
    linkText: "View Calendar →",
    color: "bg-orange-50 text-orange-600",
    hoverColor: "hover:border-orange-200",
  },
];

export const QuickInformationCards = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Quick Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to know about our school at a glance
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${card.hoverColor} group cursor-pointer`}
            >
              <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{card.description}</p>
              <Link 
                href={card.link}
                className={`inline-flex items-center text-sm font-semibold ${card.color.replace('bg-', 'text-').replace('50', '600')} hover:gap-2 transition-all`}
              >
                {card.linkText}
                <ArrowRight size={14} className="ml-1 group-hover:ml-2 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};