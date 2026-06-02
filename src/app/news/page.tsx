'use client';

import React, { useState } from 'react';
import { PageHeader } from "@/components/layout/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Events", "Achievement", "Campus", "Academic", "Sports"];

const allNews = [
  {
    id: 1,
    title: "Annual Sports Day 2026 Announced",
    date: "June 15, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop",
    excerpt: "Join us for a day of athletic excellence and school spirit as we host our annual sports meet with over 50 events scheduled."
  },
  {
    id: 2,
    title: "LMS GHSS Students Win National Science Fair",
    date: "June 10, 2026",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    excerpt: "Our young scientists secured the first position at the National Inter-School Science Exhibition for their project on renewable energy."
  },
  {
    id: 3,
    title: "New Digital Library Inauguration",
    date: "June 05, 2026",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop",
    excerpt: "We are excited to announce the opening of our state-of-the-art digital library facility featuring over 50,000 e-books."
  },
  {
    id: 4,
    title: "Board Exam Preparation Workshop",
    date: "May 28, 2026",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
    excerpt: "A special workshop for grade 10 and 12 students to help them prepare effectively for the upcoming board examinations."
  },
  {
    id: 5,
    title: "Inter-School Debate Championship",
    date: "May 20, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    excerpt: "Our debate team reached the finals of the regional championship, demonstrating excellent public speaking skills."
  },
  {
    id: 6,
    title: "Eco-Club Plantation Drive",
    date: "May 15, 2026",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    excerpt: "Students and staff participated in a massive plantation drive as part of our green campus initiative."
  }
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = allNews.filter(n => {
    const matchesCategory = activeCategory === "All" || n.category === activeCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         n.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="News & Events" 
        description="Stay informed about the latest happenings, achievements, and upcoming events at LMS GHSS."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {categories.map((cat) => (
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
                placeholder="Search news..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={index < 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority={index < 3}
                      fetchPriority={index < 3 ? "high" : "auto"}
                    />
                    <div className="absolute top-6 left-6 bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Calendar size={16} className="mr-2 text-secondary" />
                      {news.date}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                      {news.excerpt}
                    </p>
                    <Link href={`/news/${news.id}`} className="flex items-center text-primary font-bold group/link">
                      <span className="border-b-2 border-transparent group-hover/link:border-primary transition-all">Read Full Story</span>
                      <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg italic">No news items found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-primary mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-10">Get the latest school updates and news delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
