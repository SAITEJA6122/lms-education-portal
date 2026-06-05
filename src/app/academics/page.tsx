'use client';

import React from 'react';
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Languages, Calculator, Music, Palette, Trophy, Users } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    title: "Primary Education",
    grades: "Grades 1 - 5",
    description: "Building strong foundations in literacy, numeracy, and social skills through play-based and structured learning.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Middle School",
    grades: "Grades 6 - 8",
    description: "Developing critical thinking and subject-specific knowledge while fostering independence and curiosity.",
    icon: FlaskConical,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "High School",
    grades: "Grades 9 - 10",
    description: "Preparing students for board examinations with a focus on deep understanding and analytical skills.",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Higher Secondary",
    grades: "Grades 11 - 12",
    description: "Specialized streams in Science, Commerce, and Arts to prepare students for higher education and careers.",
    icon: Languages,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
  }
];

const features = [
  { icon: Users, title: "Small Class Sizes", description: "Personalized attention for every student." },
  { icon: Music, title: "Performing Arts", description: "Rich programs in music, dance, and theater." },
  { icon: Palette, title: "Visual Arts", description: "Encouraging creativity through various mediums." },
  { icon: Trophy, title: "Physical Education", description: "Holistic health through diverse sports activities." }
];

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Academic Programs" 
        description="Comprehensive and challenging curriculum designed to inspire excellence at every level."
      />

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-50 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-10 lg:w-3/5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary">
                    <program.icon size={28} />
                  </div>
                  <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-2 block">{program.grades}</span>
                  <h3 className="text-2xl font-bold text-primary mb-4">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                  <button className="text-primary font-bold hover:text-secondary transition-colors inline-flex items-center">
                    Learn More <BookOpen className="ml-2" size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Approach</h2>
              <h3 className="text-4xl font-bold mb-8">A Holistic Educational Philosophy</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We believe that education goes beyond textbooks. Our curriculum is designed to 
                nurture the intellectual, social, emotional, and physical development of our 
                students, preparing them for the challenges of the future.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <f.icon className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{f.title}</h4>
                      <p className="text-gray-400 text-sm">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-white/10 rounded-[3rem] overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                  alt="Students in Lab"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-3xl shadow-2xl hidden sm:block">
                <p className="text-4xl font-bold mb-1">98%</p>
                <p className="text-xs font-bold opacity-80 uppercase tracking-widest">University Placement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streams for Higher Secondary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Higher Secondary Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Science", "Commerce", "Arts"].map((stream, i) => (
              <div key={i} className="p-10 border border-gray-100 rounded-[2rem] hover:shadow-xl transition-all group">
                <h4 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{stream}</h4>
                <p className="text-gray-600 mb-8">Comprehensive curriculum designed to prepare students for competitive examinations and specialized university courses.</p>
                <ul className="text-left space-y-3 text-sm text-gray-500 mb-8">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>Expert Faculty</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>Modern Laboratories</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>Career Counseling</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
