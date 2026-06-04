'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Award, 
  CheckCircle,
  ArrowRight,
  Download,
  BookOpen,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';

const steps = [
  {
    step: 1,
    title: "Registration",
    description: "Fill out the online registration form with basic details.",
    icon: FileText,
    color: "bg-blue-50 text-blue-600"
  },
  {
    step: 2,
    title: "Document Submission",
    description: "Submit required documents for verification.",
    icon: CheckCircle,
    color: "bg-green-50 text-green-600"
  },
  {
    step: 3,
    title: "Assessment",
    description: "Entrance test and personal interaction.",
    icon: Calendar,
    color: "bg-purple-50 text-purple-600"
  },
  {
    step: 4,
    title: "Admission Confirmation",
    description: "Fee payment and enrollment confirmation.",
    icon: Award,
    color: "bg-orange-50 text-orange-600"
  }
];

const feeStructure = [
  { class: "Pre-Primary (Nursery, LKG, UKG)", admissionFee: "₹15,000", tuitionFee: "₹3,500/month", annualCharges: "₹12,000" },
  { class: "Primary (Grade 1-5)", admissionFee: "₹20,000", tuitionFee: "₹4,000/month", annualCharges: "₹15,000" },
  { class: "Middle School (Grade 6-8)", admissionFee: "₹25,000", tuitionFee: "₹4,500/month", annualCharges: "₹18,000" },
  { class: "High School (Grade 9-10)", admissionFee: "₹30,000", tuitionFee: "₹5,000/month", annualCharges: "₹20,000" },
  { class: "Senior Secondary (Grade 11-12)", admissionFee: "₹35,000", tuitionFee: "₹5,500/month", annualCharges: "₹25,000" }
];

const documents = [
  "Birth Certificate (Original + 2 Copies)",
  "Previous Academic Records (Original + 2 Copies)",
  "Transfer Certificate from previous school",
  "Passport size photographs (6 copies)",
  "Aadhar Card of Student & Parents",
  "Caste Certificate (if applicable)",
  "Medical Certificate from registered practitioner",
  "Residence Proof"
];

const scholarships = [
  {
    name: "Merit Scholarship",
    criteria: "90%+ in previous final exam",
    benefit: "25% Tuition Fee Waiver",
    icon: Award
  },
  {
    name: "Sports Scholarship",
    criteria: "District/State Level Achievement",
    benefit: "20% Tuition Fee Waiver",
    icon: Award
  },
  {
    name: "Sibling Discount",
    criteria: "Two or more siblings studying",
    benefit: "15% Tuition Fee Waiver",
    icon: Users
  },
  {
    name: "Single Parent/Defence",
    criteria: "Single parent/Defence personnel wards",
    benefit: "20% Tuition Fee Waiver",
    icon: Award
  }
];

export default function AdmissionsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader 
        title="Admissions" 
        description="Join our excellence journey. Limited seats available for the academic year 2026-27. Apply now!"
      />

      {/* CTA Banner - Blue background */}
      {/* CTA Banner - Blue background */}
<section className="py-8 bg-primary text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-center md:text-left">
        <p className="font-bold text-lg text-white">📢 Last Date to Apply: March 31, 2026</p>
      </div>
      <div className="flex gap-4">
        {/* Download Brochure Button - White outline */}
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300" 
          leftIcon={<Download size={18} />}
        >
          Download Brochure
        </Button>
        
        {/* Apply Online Button - Blue background matching banner, turns white on hover */}
        <Button 
          className="bg-primary text-white border border-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold" 
          rightIcon={<ArrowRight size={18} />}
        >
          Apply Online
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to secure your child's admission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center group"
              >
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={32} />
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 mt-4">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Fee Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent and affordable fee structure for all classes
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Admission Fee (One Time)</th>
                  <th className="px-6 py-4 text-left">Tuition Fee (Monthly)</th>
                  <th className="px-6 py-4 text-left">Annual Charges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {feeStructure.map((fee, index) => (
                  <tr key={fee.class} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary">{fee.class}</td>
                    <td className="px-6 py-4 text-gray-700">{fee.admissionFee}</td>
                    <td className="px-6 py-4 text-gray-700">{fee.tuitionFee}</td>
                    <td className="px-6 py-4 text-gray-700">{fee.annualCharges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">*Transport and hostel fees are additional if applicable</p>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Scholarships & Financial Aid</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rewarding excellence and supporting deserving students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <scholarship.icon size={32} className="text-secondary" />
                </div>
                <h3 className="font-bold text-primary mb-2">{scholarship.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{scholarship.criteria}</p>
                <p className="text-secondary font-bold">{scholarship.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents & Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Required Documents - Left Side */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Required Documents</h2>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Admissions Office - Right Side - IMPROVED VISIBILITY */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Admissions Office</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-medium text-gray-800">+91 (431) 123-4567</p>
                    <p className="font-medium text-gray-800">+91 (431) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">info@ghss.edu</p>
                    <p className="font-medium text-gray-800">admissions@ghss.edu</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Clock className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Working Hours</p>
                    <p className="font-medium text-gray-800">Monday - Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Visit Us</p>
                    <p className="font-medium text-gray-800">123 Education Way, Trichy</p>
                    <p className="text-gray-600 text-sm">Tamil Nadu, India - 620001</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Button variant="primary" className="w-full">
                  Schedule Campus Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}