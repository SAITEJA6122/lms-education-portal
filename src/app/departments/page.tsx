'use client';

import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Languages,
  Laptop,
  Globe,
  History,
  Music,
  Palette,
  Users,
  Briefcase,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const departments = [
  {
    id: 1,
    name: "Department of Science",
    hod: "Dr. Sarah Johnson",
    faculty: 12,
    description: "State-of-the-art laboratories with advanced equipment for Physics, Chemistry, and Biology.",
    icon: FlaskConical,
    color: "bg-blue-50 text-blue-600",
    achievements: ["2 National Science Olympiad winners", "5 CBSE toppers in Science"]
  },
  {
    id: 2,
    name: "Department of Mathematics",
    hod: "Prof. Meera Sharma",
    faculty: 8,
    description: "Focus on analytical thinking, problem-solving, and mathematical reasoning.",
    icon: Calculator,
    color: "bg-green-50 text-green-600",
    achievements: ["3 State-level Math Olympiad winners", "100% board exam results"]
  },
  {
    id: 3,
    name: "Department of Languages",
    hod: "Ms. Priya Verma",
    faculty: 10,
    description: "English, Hindi, Sanskrit, and French with emphasis on communication skills.",
    icon: Languages,
    color: "bg-purple-50 text-purple-600",
    achievements: ["National Debate Championship winners", "Inter-school Elocution awards"]
  },
  {
    id: 4,
    name: "Department of Computer Science",
    hod: "Mr. Rajesh Kumar",
    faculty: 6,
    description: "AI, Programming, Web Development, and Digital Literacy with modern labs.",
    icon: Laptop,
    color: "bg-orange-50 text-orange-600",
    achievements: ["National Cyber Olympiad winners", "App development awards"]
  },
  {
    id: 5,
    name: "Department of Social Science",
    hod: "Dr. Anjali Nair",
    faculty: 9,
    description: "History, Geography, Political Science, and Economics with interactive learning.",
    icon: History,
    color: "bg-red-50 text-red-600",
    achievements: ["Heritage Quiz champions", "Model UN participants"]
  },
  {
    id: 6,
    name: "Department of Commerce",
    hod: "Ms. Kavita Singh",
    faculty: 7,
    description: "Accountancy, Business Studies, Economics with practical exposure.",
    icon: Briefcase,
    color: "bg-teal-50 text-teal-600",
    achievements: ["Business Quiz winners", "Young Entrepreneur awards"]
  },
  {
    id: 7,
    name: "Department of Arts & Culture",
    hod: "Mr. Vikram Seth",
    faculty: 5,
    description: "Music, Dance, Drama, and Fine Arts for holistic development.",
    icon: Music,
    color: "bg-pink-50 text-pink-600",
    achievements: ["State-level Cultural Competition winners", "Annual Day performances"]
  },
  {
    id: 8,
    name: "Department of Physical Education",
    hod: "Ms. Sunita Rani",
    faculty: 4,
    description: "Sports, Yoga, and Fitness programs for overall well-being.",
    icon: Heart,
    color: "bg-indigo-50 text-indigo-600",
    achievements: ["District Sports Champions", "National level athletes"]
=======
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
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
  }
];

export default function DepartmentsPage() {
  return (
<<<<<<< HEAD
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
            Academic Departments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            World-class education led by expert faculty in every discipline
          </motion.p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-3"
            >
              Our Departments
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Explore our diverse academic departments and their achievements
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-14 h-14 ${dept.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <dept.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{dept.name}</h3>
                <p className="text-sm text-secondary mb-2">HOD: {dept.hod}</p>
                <p className="text-sm text-gray-500 mb-3">Faculty: {dept.faculty} members</p>
                <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {dept.achievements.slice(0, 2).map((achievement, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      🏆 {achievement}
=======
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
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Meet Our Distinguished Faculty
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our departments are led by experienced educators dedicated to student success
            </p>
            <Link href="/faculty">
              <Button variant="primary">
                View Faculty Directory
              </Button>
            </Link>
=======
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
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
