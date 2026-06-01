'use client';

import React, { useState } from 'react';
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
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-10">If you need a specific document that isn't listed here, please contact the school office.</p>
          <div className="inline-flex items-center space-x-2 text-primary font-bold hover:underline cursor-pointer">
            <span>Contact Office Support</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
