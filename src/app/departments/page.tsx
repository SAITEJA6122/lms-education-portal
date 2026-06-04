'use client';

import React from 'react';
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
  }
];

export default function DepartmentsPage() {
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
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>
    </div>
  );
}