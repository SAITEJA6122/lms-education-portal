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
  GraduationCap,
  User,
  Send,
  AlertCircle
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

// New: Eligibility Criteria
const eligibilityCriteria = [
  { grade: "Pre-Primary (Nursery, LKG, UKG)", age: "3 - 5 years", requirement: "Basic cognitive and social readiness" },
  { grade: "Primary (Grade 1-5)", age: "6 - 10 years", requirement: "Completion of previous grade with basic literacy" },
  { grade: "Middle School (Grade 6-8)", age: "11 - 13 years", requirement: "60%+ in previous grade" },
  { grade: "High School (Grade 9-10)", age: "14 - 15 years", requirement: "65%+ in Grade 8" },
  { grade: "Senior Secondary (Grade 11-12)", age: "16 - 17 years", requirement: "70%+ in Grade 10 with subject stream eligibility" }
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
  const [enquiryForm, setEnquiryForm] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Enquiry submitted:', enquiryForm);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEnquiryForm({
      ...enquiryForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader 
        title="Admissions" 
        description="Join our excellence journey. Limited seats available for the academic year 2026-27. Apply now!"
      />

      {/* CTA Banner - Blue background */}
      <section className="py-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg text-white">📢 Last Date to Apply: March 31, 2026</p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300" 
                leftIcon={<Download size={18} />}
              >
                Download Brochure
              </Button>
             
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Admission Procedure</h2>
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

      {/* Eligibility Criteria - NEW SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Eligibility Criteria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check the age and academic requirements for each grade level
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Grade Level</th>
                  <th className="px-6 py-4 text-left">Age Criteria</th>
                  <th className="px-6 py-4 text-left">Academic Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {eligibilityCriteria.map((item, index) => (
                  <tr key={item.grade} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary">{item.grade}</td>
                    <td className="px-6 py-4 text-gray-700">{item.age} years</td>
                    <td className="px-6 py-4 text-gray-700">{item.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Fee Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent and affordable fee structure for all classes
            </p>
          </div>

          <div className="overflow-x-auto bg-gray-50 rounded-2xl shadow-sm">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Admission Fee (One Time)</th>
                  <th className="px-6 py-4 text-left">Tuition Fee (Monthly)</th>
                  <th className="px-6 py-4 text-left">Annual Charges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
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
      <section className="py-20 bg-gray-50">
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
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
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

      {/* Required Documents & Admission Enquiry Form */}
      <section className="py-20 bg-white">
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

            {/* Admission Enquiry Form - Right Side (NEW) */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">Admission Enquiry Form</h2>
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-green-700 mb-2">Enquiry Sent!</h3>
                  <p className="text-green-600">Thank you for your interest. Our admissions team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Users size={14} className="inline mr-1" /> Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={enquiryForm.parentName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                      placeholder="Enter parent/guardian name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <User size={14} className="inline mr-1" /> Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={enquiryForm.studentName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                      placeholder="Enter student name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={enquiryForm.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={enquiryForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <GraduationCap size={14} className="inline mr-1" /> Applying for Grade *
                    </label>
                    <select
                      name="grade"
                      required
                      value={enquiryForm.grade}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                    >
                      <option value="">Select Grade</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message / Query</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={enquiryForm.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                      placeholder="Any specific questions or requirements?"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" rightIcon={<Send size={18} />}>
                    Submit Enquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Admissions Office */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Contact Admissions Office</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <p className="font-medium text-gray-800">info@lmsghss.edu</p>
                  <p className="font-medium text-gray-800">admissions@lmsghss.edu</p>
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
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <Button variant="primary">
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}