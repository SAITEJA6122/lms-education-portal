'use client';

import React from 'react';
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Calendar, Info, HelpCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

const admissionSteps = [
  {
    title: "Enquiry",
    description: "Submit an online enquiry or visit the campus for detailed information about programs and facilities.",
    icon: Info
  },
  {
    title: "Application",
    description: "Fill out the registration form available at the school office or download it from our website.",
    icon: FileText
  },
  {
    title: "Interaction",
    description: "Scheduled interaction between the student, parents, and the admissions committee.",
    icon: Users
  },
  {
    title: "Enrollment",
    description: "Completion of documentation and payment of fees to secure the admission.",
    icon: CheckCircle2
  }
];

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Admissions" 
        description="Join our community of excellence. Find everything you need to know about the admission process at GHSS."
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Start Your Journey With Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At GHSS, we seek students who are eager to learn, grow, and contribute to our vibrant 
                community. Our admission process is designed to be transparent, inclusive, and 
                student-centric.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Academic excellence and character focus",
                  "Inclusive and diverse student body",
                  "State-of-the-art learning facilities",
                  "Holistic development opportunities"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-secondary" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">Download Prospectus</Button>
            </motion.div>
            <div className="bg-muted rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-4">Admission Timeline</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Calendar className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Applications Open</p>
                      <p className="text-gray-600">October 1st, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <HelpCircle className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Entrance Tests</p>
                      <p className="text-gray-600">January - February 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Final Selection List</p>
                      <p className="text-gray-600">March 15th, 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">The Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Follow these simple steps to secure your admission at Girls Higher Secondary School.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <step.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold border-4 border-white">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-10">Our admissions team is here to help you with any queries you might have.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10">Enquire Now</Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10">Contact Support</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
