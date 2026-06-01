'use client';

import React, { useState } from 'react';
import { PageHeader } from "@/components/layout/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Search } from "lucide-react";
import Image from "next/image";

const departments = ["All", "Science", "Mathematics", "Languages", "Social Studies", "Arts & Sports"];

const faculty = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Head of Science Department",
    department: "Science",
    qualification: "Ph.D. in Physics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Mr. David Miller",
    role: "Senior Mathematics Teacher",
    department: "Mathematics",
    qualification: "M.Sc. in Applied Mathematics",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Ms. Elena Rodriguez",
    role: "Languages Coordinator",
    department: "Languages",
    qualification: "M.A. in English Literature",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    role: "Biology Specialist",
    department: "Science",
    qualification: "Ph.D. in Molecular Biology",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Ms. Priya Sharma",
    role: "History & Civics Teacher",
    department: "Social Studies",
    qualification: "M.A. in World History",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Mr. Robert Wilson",
    role: "Physical Education Director",
    department: "Arts & Sports",
    qualification: "B.P.Ed, M.P.Ed",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=500&auto=format&fit=crop"
  }
];

export default function FacultyPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaculty = faculty.filter(f => {
    const matchesDept = activeDept === "All" || f.department === activeDept;
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         f.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Faculty" 
        description="Meet the dedicated educators who inspire and guide our students towards excellence."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeDept === dept 
                    ? "bg-primary text-white shadow-lg shadow-primary/30" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder="Search faculty..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredFaculty.map((person) => (
                <motion.div
                  key={person.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-[2.5rem] p-4 pb-10 transition-all group-hover:bg-white group-hover:shadow-2xl border border-transparent group-hover:border-gray-100">
                    <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden mb-8 shadow-md">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-center px-4">
                      <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">{person.department}</span>
                      <h4 className="text-2xl font-bold text-primary mb-1">{person.name}</h4>
                      <p className="text-gray-600 font-medium text-sm mb-4">{person.role}</p>
                      <p className="text-gray-400 text-xs italic mb-6">{person.qualification}</p>
                      
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all border border-gray-100">
                          <Mail size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all border border-gray-100">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredFaculty.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg italic">No faculty members found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
