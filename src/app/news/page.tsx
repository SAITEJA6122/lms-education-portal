'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  ChevronRight, 
  Megaphone, 
  Award, 
  Trophy, 
  Users,
  BookOpen,
  Search,
  X,
  Clock,
  Heart,
  Share2
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';

const allNewsItems = [
  {
    id: 1,
    title: "Annual Sports Day 2026 - Registration Open",
    date: "March 15, 2026",
    category: "Event",
    icon: Trophy,
    color: "text-orange-600 bg-orange-50",
    link: "/events",
    excerpt: "Registration for Annual Sports Day 2026 is now open for students of classes 6-12.",
    content: "The much-awaited Annual Sports Day 2026 will be held on April 15, 2026. Students interested in participating in various athletic events including 100m, 200m, 400m races, long jump, high jump, and relay races can register through their respective class teachers. Last date to register is March 25, 2026."
  },
  {
    id: 2,
    title: "CBSE Board Exam Results 2025 - Outstanding Performance",
    date: "March 10, 2026",
    category: "Achievement",
    icon: Award,
    color: "text-green-600 bg-green-50",
    link: "/achievements",
    excerpt: "Our students achieved 98.6% pass rate with 45 students scoring above 95%.",
    content: "We are proud to announce that our students have excelled in the CBSE Board Examinations 2025. The school achieved a 98.6% pass rate with 45 students scoring above 95%. Special congratulations to our toppers: Riya Sharma (98.6%), Neha Gupta (98.2%), and Priya Singh (97.8%)."
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Schedule for Session 2026-27",
    date: "March 5, 2026",
    category: "Announcement",
    icon: Megaphone,
    color: "text-blue-600 bg-blue-50",
    link: "#",
    excerpt: "First Parent-Teacher Meeting of the academic session will be held on March 28, 2026.",
    content: "The first Parent-Teacher Meeting of the academic session 2026-27 is scheduled for March 28, 2026 from 9:00 AM to 3:00 PM. Parents are requested to collect the progress reports and discuss their ward's performance with respective subject teachers."
  },
  {
    id: 4,
    title: "New Scholarship Program Announced for Meritorious Students",
    date: "February 28, 2026",
    category: "Announcement",
    icon: Users,
    color: "text-purple-600 bg-purple-50",
    link: "/admissions",
    excerpt: "Merit-based scholarship program launched for academically outstanding students.",
    content: "The school has launched a new merit-based scholarship program for academically outstanding students. Students securing 90%+ in previous class will be eligible for up to 50% tuition fee waiver. Apply before March 31, 2026."
  },
  {
    id: 5,
    title: "Summer Vacation Notice",
    date: "February 25, 2026",
    category: "Announcement",
    icon: Calendar,
    color: "text-teal-600 bg-teal-50",
    link: "#",
    excerpt: "School will remain closed for summer vacation from May 1 to June 30, 2026.",
    content: "The school will remain closed for summer vacation from May 1, 2026 to June 30, 2026. The new academic session will commence on July 1, 2026."
  },
  {
    id: 6,
    title: "Inter-School Debate Competition Winners",
    date: "February 20, 2026",
    category: "Achievement",
    icon: Award,
    color: "text-pink-600 bg-pink-50",
    link: "/achievements",
    excerpt: "Our students won first prize in the District Level Inter-School Debate Competition.",
    content: "Congratulations to our debate team for winning first prize at the District Level Inter-School Debate Competition. The team consisting of Aanya Verma and Kavya Joshi argued brilliantly on the topic 'Future of AI in Education'."
  },
  {
    id: 7,
    title: "Science Exhibition 2026",
    date: "February 15, 2026",
    category: "Event",
    icon: BookOpen,
    color: "text-indigo-600 bg-indigo-50",
    link: "/events",
    excerpt: "Annual Science Exhibition to be held on April 5, 2026. All students invited to participate.",
    content: "The Annual Science Exhibition 2026 will be held on April 5, 2026. Students from classes 6-12 can showcase their innovative projects. Last date for registration is March 20, 2026."
  },
  {
    id: 8,
    title: "Foundation Day Celebration",
    date: "February 10, 2026",
    category: "Event",
    icon: Heart,
    color: "text-rose-600 bg-rose-50",
    link: "/events",
    excerpt: "School's 30th Foundation Day to be celebrated on March 1, 2026.",
    content: "Join us in celebrating the 30th Foundation Day of our school on March 1, 2026. Chief guest Dr. APJ Abdul Kalam's former aide will address the students. Cultural performances by students will be the highlight of the event."
  }
];

const categories = ["All", "Announcement", "Event", "Achievement"];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState<typeof allNewsItems[0] | null>(null);

  // Handle body scroll when modal is open/closed
  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedNews]);

  const filteredNews = allNewsItems.filter(news => {
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen">
      {/* Page Header */}
      <PageHeader 
        title="News & Announcements" 
        description="Stay informed about the latest updates, events, and achievements"
      />

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search news..."
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

            {/* Category Filters */}
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
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl">
              <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 9) * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedNews(news)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-xl ${news.color}`}>
                        <news.icon size={20} />
                      </div>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar size={12} />
                        {news.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${news.color}`}>
                        {news.category}
                      </span>
                      <span className="text-secondary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Get the latest news and updates delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-xl focus:outline-none text-gray-900 placeholder-gray-400 bg-white"
              />
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Detail Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className={`p-6 border-b border-gray-100 ${selectedNews.color.replace('bg-', 'border-l-4 border-')}`}>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${selectedNews.color}`}>
                      <selectedNews.icon size={24} />
                    </div>
                    <div>
                      <span className={`text-sm font-bold px-2 py-1 rounded-full ${selectedNews.color}`}>
                        {selectedNews.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-primary mt-4 mb-2">{selectedNews.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {selectedNews.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    3 min read
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">{selectedNews.content}</p>
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <Button variant="primary" size="sm">
                    Share
                    <Share2 size={14} className="ml-2" />
                  </Button>
                  {selectedNews.link !== "#" && (
                    <Link href={selectedNews.link}>
                      <Button variant="outline" size="sm" rightIcon={<ChevronRight size={14} />}>
                        Learn More
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
