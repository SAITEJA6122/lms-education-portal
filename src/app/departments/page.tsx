'use client';

import React from 'react';
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { FlaskConical, Calculator, Languages, Globe, Palette, Music, Dumbbell, Cpu } from "lucide-react";

const departments = [
  {
    name: "Science",
    description: "Equipped with modern physics, chemistry, and biology labs to foster scientific inquiry and experimentation.",
    icon: FlaskConical,
    subjects: ["Physics", "Chemistry", "Biology", "Environmental Science"]
  },
  {
    name: "Mathematics",
    description: "Focusing on analytical thinking and problem-solving through advanced curriculum and math labs.",
    icon: Calculator,
    subjects: ["Algebra", "Geometry", "Calculus", "Statistics"]
  },
  {
    name: "Languages",
    description: "Developing strong communication skills in English, regional languages, and foreign languages.",
    icon: Languages,
    subjects: ["English", "Hindi", "Sanskrit", "French"]
  },
  {
    name: "Social Studies",
    description: "Exploring history, geography, and civic responsibility to create informed global citizens.",
    icon: Globe,
    subjects: ["History", "Geography", "Civics", "Economics"]
  },
  {
    name: "Computer Science",
    description: "State-of-the-art IT centers teaching coding, digital literacy, and emerging technologies.",
    icon: Cpu,
    subjects: ["Computer Science", "Information Technology", "AI & Robotics"]
  },
  {
    name: "Arts & Culture",
    description: "Nurturing creativity through visual arts, music, and theater programs.",
    icon: Palette,
    subjects: ["Visual Arts", "Music", "Dance", "Drama"]
  },
  {
    name: "Physical Education",
    description: "Promoting fitness and sportsmanship through diverse indoor and outdoor sports.",
    icon: Dumbbell,
    subjects: ["Track & Field", "Basketball", "Yoga", "Swimming"]
  }
];

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Departments" 
        description="Specialized departments dedicated to providing in-depth knowledge and hands-on experience."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <dept.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{dept.name}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {dept.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dept.subjects.map((subject, i) => (
                    <span key={i} className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 border border-gray-100 group-hover:border-primary/20 transition-colors">
                      {subject}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Facilities CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Hands-on Learning</h2>
                <p className="text-xl text-gray-300">
                  Our laboratories are equipped with the latest technology to ensure students get practical 
                  experience that complements their theoretical knowledge.
                </p>
              </div>
              <button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-4 rounded-2xl shadow-xl transition-all flex-shrink-0">
                View Infrastructure
              </button>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
