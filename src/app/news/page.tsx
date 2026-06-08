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
  Share2,
  Newspaper
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';

// Map category to icon and color
const getCategoryStyle = (category: string) => {
  const categories: Record<string, { icon: any; color: string }> = {
    'Event': { icon: Trophy, color: 'text-orange-600 bg-orange-50' },
    'Achievement': { icon: Award, color: 'text-green-600 bg-green-50' },
    'Announcement': { icon: Megaphone, color: 'text-blue-600 bg-blue-50' },
    'Admissions': { icon: Users, color: 'text-purple-600 bg-purple-50' },
    'Academic': { icon: BookOpen, color: 'text-indigo-600 bg-indigo-50' },
    'Celebration': { icon: Heart, color: 'text-rose-600 bg-rose-50' },
    'General': { icon: Newspaper, color: 'text-gray-600 bg-gray-50' },
  };
  return categories[category] || { icon: Newspaper, color: 'text-gray-600 bg-gray-50' };
};

// Format date
const formatDate = (dateString: string) => {
  if (!dateString) return 'Date not specified';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState<any | null>(null);

  // Fetch news from API
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          // Transform API data to match component format
          const transformedNews = result.data.map((item: any) => {
            // Determine category based on content or default to 'General'
            let category = 'General';
            const title = (item.title || item.Heading || '').toLowerCase();
            if (title.includes('sports') || title.includes('event')) category = 'Event';
            else if (title.includes('result') || title.includes('achievement') || title.includes('winner')) category = 'Achievement';
            else if (title.includes('announcement') || title.includes('notice')) category = 'Announcement';
            else if (title.includes('admission')) category = 'Admissions';
            else if (title.includes('celebration') || title.includes('foundation')) category = 'Celebration';
            
            const { icon, color } = getCategoryStyle(category);
            
            return {
              id: item.id,
              title: item.title || item.Heading,
              date: formatDate(item.date),
              category: category,
              icon: icon,
              color: color,
              link: `/news/${item.id}`,
              excerpt: (item.content || '').substring(0, 120) + '...',
              content: item.content || 'No additional content available.'
            };
          });
          setNewsItems(transformedNews);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchNews();
  }, []);

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

  // Get unique categories from news items
  const categories = ["All", ...new Set(newsItems.map(n => n.category).filter(Boolean))];

  const filteredNews = newsItems.filter(news => {
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="pt-20 min-h-screen">
        <PageHeader 
          title="News & Announcements" 
          description="Stay informed about the latest updates, events, and achievements"
        />
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                  <div className="w-10 h-10 bg-gray-200 rounded-xl mb-3"></div>
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

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
              {filteredNews.map((news, index) => {
                const IconComponent = news.icon;
                return (
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
                          <IconComponent size={20} />
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
                );
              })}
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
              <div className={`p-6 border-b border-gray-100`}>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${selectedNews.color}`}>
                      <selectedNews.icon size={24} />
                    </div>
                    <span className={`text-sm font-bold px-2 py-1 rounded-full ${selectedNews.color}`}>
                      {selectedNews.category}
                    </span>
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
                  {selectedNews.link && selectedNews.link !== "#" && (
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