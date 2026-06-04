'use client';

import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  File, 
  Calendar,
  Search,
  AlertCircle,
  BookOpen,
  ClipboardList,
  Users,
  Award,
  X  // ← ADD THIS
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';

const downloads = [
  {
    id: 1,
    title: "Admission Form 2026-27",
    category: "Admissions",
    type: "PDF",
    size: "2.5 MB",
    date: "March 1, 2026",
    icon: FileText,
    color: "text-blue-600 bg-blue-50",
    description: "Online and offline admission application form for academic year 2026-27",
    downloads: 1245
  },
  {
    id: 2,
    title: "Prospectus 2026-27",
    category: "Admissions",
    type: "PDF",
    size: "5.1 MB",
    date: "March 1, 2026",
    icon: BookOpen,
    color: "text-green-600 bg-green-50",
    description: "Complete school prospectus with academic programs, fees, and facilities",
    downloads: 982
  },
  {
    id: 3,
    title: "Fee Structure 2026-27",
    category: "Admissions",
    type: "PDF",
    size: "1.2 MB",
    date: "March 1, 2026",
    icon: File,
    color: "text-purple-600 bg-purple-50",
    description: "Detailed fee structure for all classes including payment schedule",
    downloads: 2156
  },
  {
    id: 4,
    title: "Academic Calendar 2026-27",
    category: "Academics",
    type: "PDF",
    size: "3.2 MB",
    date: "February 15, 2026",
    icon: Calendar,
    color: "text-orange-600 bg-orange-50",
    description: "Complete academic calendar with holidays, exams, and important dates",
    downloads: 876
  },
  {
    id: 5,
    title: "Holiday List 2026",
    category: "Academics",
    type: "PDF",
    size: "0.8 MB",
    date: "February 10, 2026",
    icon: Calendar,
    color: "text-red-600 bg-red-50",
    description: "List of national, regional, and school holidays for 2026",
    downloads: 543
  },
  {
    id: 6,
    title: "Exam Time Table - March 2026",
    category: "Examinations",
    type: "PDF",
    size: "1.1 MB",
    date: "February 25, 2026",
    icon: ClipboardList,
    color: "text-teal-600 bg-teal-50",
    description: "Annual examination timetable for classes 6-12",
    downloads: 2134
  },
  {
    id: 7,
    title: "Parent Handbook 2026-27",
    category: "Parents",
    type: "PDF",
    size: "4.2 MB",
    date: "January 20, 2026",
    icon: Users,
    color: "text-indigo-600 bg-indigo-50",
    description: "Complete guide for parents about school policies and procedures",
    downloads: 432
  },
  {
    id: 8,
    title: "Student Achievement Report 2024-25",
    category: "Reports",
    type: "PDF",
    size: "3.8 MB",
    date: "December 15, 2025",
    icon: Award,
    color: "text-yellow-600 bg-yellow-50",
    description: "Annual report showcasing student achievements and school performance",
    downloads: 321
  },
  {
    id: 9,
    title: "Transport Form",
    category: "Forms",
    type: "PDF",
    size: "0.5 MB",
    date: "March 5, 2026",
    icon: FileText,
    color: "text-cyan-600 bg-cyan-50",
    description: "Application form for school transport facility",
    downloads: 654
  },
  {
    id: 10,
    title: "Scholarship Application Form",
    category: "Forms",
    type: "PDF",
    size: "0.9 MB",
    date: "February 20, 2026",
    icon: FileText,
    color: "text-pink-600 bg-pink-50",
    description: "Application form for merit-based scholarships",
    downloads: 789
  },
  {
    id: 11,
    title: "TC Application Form",
    category: "Forms",
    type: "PDF",
    size: "0.4 MB",
    date: "January 10, 2026",
    icon: FileText,
    color: "text-gray-600 bg-gray-50",
    description: "Transfer Certificate application form",
    downloads: 234
  },
  {
    id: 12,
    title: "School Brochure",
    category: "Admissions",
    type: "PDF",
    size: "6.2 MB",
    date: "January 5, 2026",
    icon: BookOpen,
    color: "text-emerald-600 bg-emerald-50",
    description: "Beautifully designed school brochure with campus highlights",
    downloads: 1567
  }
];

const categories = ["All", "Admissions", "Academics", "Examinations", "Parents", "Reports", "Forms"];

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDownloads = downloads.filter(download => {
    const matchesCategory = selectedCategory === "All" || download.category === selectedCategory;
    const matchesSearch = download.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          download.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (title: string) => {
    alert(`Downloading: ${title}\n\nIn production, this would download the actual file.`);
  };

  return (
    <div className="pt-20">
      {/* Page Header - Using PageHeader component */}
      <PageHeader 
        title="Downloads" 
        description="Access important documents, forms, and resources"
      />

      {/* Stats Banner */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-secondary">12+</div>
              <div className="text-xs text-gray-500">Documents</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-xs text-gray-500">MB Total Size</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">6</div>
              <div className="text-xs text-gray-500">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">10K+</div>
              <div className="text-xs text-gray-500">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white text-gray-900 placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X size={16} className="text-gray-500 hover:text-gray-700" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
=======
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, Book, Info, Search } from "lucide-react";

const resourceCategories = ["All", "Circulars", "Forms", "Academic", "Manuals"];

const resources = [
  {
    title: "School Prospectus 2026-27",
    category: "Academic",
    date: "June 01, 2026",
    size: "4.5 MB",
    type: "PDF",
    icon: Book
  },
  {
    title: "Admission Registration Form",
    category: "Forms",
    date: "May 25, 2026",
    size: "1.2 MB",
    type: "PDF",
    icon: FileText
  },
  {
    title: "Annual Academic Calendar",
    category: "Academic",
    date: "May 20, 2026",
    size: "2.8 MB",
    type: "PDF",
    icon: Calendar
  },
  {
    title: "Summer Vacation Circular",
    category: "Circulars",
    date: "May 15, 2026",
    size: "850 KB",
    type: "PDF",
    icon: Info
  },
  {
    title: "Transport Application Form",
    category: "Forms",
    date: "May 10, 2026",
    size: "1.1 MB",
    type: "PDF",
    icon: FileText
  },
  {
    title: "Student Code of Conduct",
    category: "Manuals",
    date: "April 30, 2026",
    size: "3.2 MB",
    type: "PDF",
    icon: Book
  }
];

export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter(r => {
    const matchesCategory = activeCategory === "All" || r.category === activeCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Downloads & Resources" 
        description="Access important documents, circulars, and school resources in one place."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {resourceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/30" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder="Search resources..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Resources List */}
          <div className="space-y-4">
            {filteredResources.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gray-50 hover:bg-white p-6 md:p-8 rounded-[2rem] border border-transparent hover:border-gray-100 hover:shadow-xl transition-all flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div className="flex items-center space-x-6 w-full md:w-auto">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                    <item.icon size={28} />
                  </div>
                  <div className="text-left">
                    <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em] mb-1 block">{item.category}</span>
                    <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.size}</span>
                      <span>•</span>
                      <span>{item.type}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full md:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-primary hover:text-white text-primary font-bold px-8 py-4 rounded-2xl transition-all border border-gray-100 group-hover:border-transparent shadow-sm">
                  <Download size={20} />
                  <span>Download</span>
                </button>
              </motion.div>
            ))}

            {filteredResources.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                <p className="text-gray-400 italic">No resources found matching your search.</p>
              </div>
            )}
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Downloads Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDownloads.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl">
              <AlertCircle className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 text-lg">No documents found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
              {filteredDownloads.map((download, index) => (
                <motion.div
                  key={download.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 9) * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${download.color} rounded-xl flex items-center justify-center`}>
                        <download.icon size={24} />
                      </div>
                      <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                        {download.type}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-secondary transition-colors line-clamp-1">
                      {download.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {download.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-xs text-gray-400">
                      <div className="flex justify-between">
                        <span className="flex items-center gap-1">
                          <File size={12} />
                          {download.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {download.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download size={12} />
                        {download.downloads.toLocaleString()} downloads
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all"
                      onClick={() => handleDownload(download.title)}
                      rightIcon={<Download size={16} />}
                    >
                      Download
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Note */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm text-blue-800 font-medium">Need help?</p>
              <p className="text-sm text-blue-700">
                If you're unable to download any document, please contact the school office at 
                <Link href="/contact" className="font-semibold underline ml-1">Contact Us</Link>
              </p>
            </div>
=======
      {/* Help Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-10">If you need a specific document that isn't listed here, please contact the school office.</p>
          <div className="inline-flex items-center space-x-2 text-primary font-bold hover:underline cursor-pointer">
            <span>Contact Office Support</span>
            <ArrowRight size={18} />
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

import { ArrowRight } from "lucide-react";
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
