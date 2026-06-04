'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calculator, 
  Microscope, 
  Languages, 
  Laptop, 
  Palette,
  Music,
  GraduationCap,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const programs = [
  {
    id: 1,
    name: "Primary School (Grades 1-5)",
    duration: "5 Years",
    description: "Foundational learning with focus on basic literacy, numeracy, and holistic development through activity-based learning.",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
    features: ["Montessori Method", "Activity-Based Learning", "Smart Classrooms", "Weekly Assessments"]
  },
  {
    id: 2,
    name: "Middle School (Grades 6-8)",
    duration: "3 Years",
    description: "Comprehensive curriculum introducing core subjects with emphasis on conceptual understanding and skill development.",
    icon: Calculator,
    color: "bg-green-50 text-green-600",
    features: ["Subject Specialization", "STEM Education", "Computer Labs", "Co-curricular Activities"]
  },
  {
    id: 3,
    name: "High School (Grades 9-10)",
    duration: "2 Years",
    description: "CBSE curriculum with focus on academic excellence and board examination preparation.",
    icon: Microscope,
    color: "bg-purple-50 text-purple-600",
    features: ["Career Counseling", "Board Exam Prep", "Science Labs", "Remedial Classes"]
  },
  {
    id: 4,
    name: "Senior Secondary (Grades 11-12)",
    duration: "2 Years",
    description: "Specialized streams in Science, Commerce, and Humanities with expert faculty guidance.",
    icon: GraduationCap,
    color: "bg-orange-50 text-orange-600",
    features: ["Stream Specialization", "Competitive Exam Prep", "Research Projects", "University Guidance"]
  }
];

const streams = [
  { name: "Science (PCM/PCB)", subjects: "Physics, Chemistry, Mathematics/Biology, English, Computer Science", icon: Microscope },
  { name: "Commerce", subjects: "Accountancy, Business Studies, Economics, Mathematics, English", icon: Calculator },
  { name: "Humanities", subjects: "History, Political Science, Psychology, Sociology, English", icon: Languages },
  { name: "Vocational", subjects: "Information Technology, Hospitality, Retail Management", icon: Laptop }
];

export default function AcademicProgramsPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Academic Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Discover our comprehensive curriculum designed for holistic development
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-3"
            >
              Our Educational Programs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Choose the right path for your child's bright future
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${program.color} shrink-0`}>
                    <program.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-primary">{program.name}</h3>
                      <span className="text-sm text-secondary font-semibold">{program.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-3"
            >
              Senior Secondary Streams
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Specialized streams for Grades 11-12 with expert faculty
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {streams.map((stream, index) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <stream.icon className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-2">{stream.name}</h3>
                    <p className="text-sm text-gray-600">{stream.subjects}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Join us for the academic year 2026-27. Limited seats available.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/admissions">
              {/* FIXED: Button with rightIcon */}
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" rightIcon={<ChevronRight size={18} />}>
                Apply for Admissions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}