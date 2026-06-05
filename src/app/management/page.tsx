'use client';

import React from 'react';
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { Mail, Linkedin, User } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "Dr. Ananya Rao",
    role: "Chairperson",
    message: "Our commitment is to provide a world-class education that empowers girls to become leaders of tomorrow.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    name: "Mr. Suresh Kumar",
    role: "Secretary",
    message: "Infrastructure and academic excellence are the pillars of LMS GHSS. We continuously strive for improvement.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    name: "Mrs. Meena Gupta",
    role: "Director of Academics",
    message: "A holistic approach to learning ensures our students are well-prepared for life's challenges.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&h=500&auto=format&fit=crop"
  }
];

export default function ManagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Management" 
        description="Meet the visionary leaders guiding LMS Girls Higher Secondary School towards a brighter future."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-[3rem] p-8 text-center border border-gray-100 hover:shadow-2xl hover:bg-white transition-all duration-500 group"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8 border-8 border-white shadow-xl relative">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="192px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{leader.name}</h3>
                <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-6">{leader.role}</p>
                <div className="relative">
                  <span className="text-6xl text-primary/10 absolute -top-8 -left-2 font-serif">"</span>
                  <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">
                    {leader.message}
                  </p>
                </div>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all border border-gray-100">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all border border-gray-100">
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Message */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Leadership Vision</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            "We believe that every girl has the potential to be a catalyst for change. 
            Our management works tirelessly to ensure that LMS GHSS provides the resources, 
            guidance, and environment necessary for this transformation."
          </p>
        </div>
      </section>
    </div>
  );
}
