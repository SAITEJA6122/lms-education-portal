'use client';

<<<<<<< HEAD
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
=======
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
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
  }
];

export default function AdmissionsPage() {
<<<<<<< HEAD
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
=======
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Admissions" 
        description="Join our community of excellence. Find everything you need to know about the admission process at LMS GHSS."
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
                At LMS GHSS, we seek students who are eager to learn, grow, and contribute to our vibrant 
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
            <p className="text-gray-600 max-w-2xl mx-auto">Follow these simple steps to secure your admission at LMS Girls Higher Secondary School.</p>
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
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Enquiry CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-10">Our admissions team is here to help you with any queries you might have.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10">Enquire Now</Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10">Contact Support</Button>
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
