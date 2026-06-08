'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Megaphone, Award, Trophy, Users, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Map category to icon and color
const getCategoryStyle = (category: string) => {
  const categories: Record<string, { icon: any; color: string }> = {
    'Event': { icon: Trophy, color: 'text-orange-600 bg-orange-50' },
    'Achievement': { icon: Award, color: 'text-green-600 bg-green-50' },
    'Announcement': { icon: Megaphone, color: 'text-blue-600 bg-blue-50' },
    'Admissions': { icon: Users, color: 'text-purple-600 bg-purple-50' },
    'General': { icon: Newspaper, color: 'text-gray-600 bg-gray-50' },
  };
  return categories[category] || { icon: Newspaper, color: 'text-gray-600 bg-gray-50' };
};

// Format date to readable format
const formatDate = (dateString: string) => {
  if (!dateString) return 'Date not specified';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const LatestNews = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news?limit=4');
        const result = await response.json();
        
        if (result.success && result.data) {
          // Transform API data to match component format
          const transformedNews = result.data.map((item: any) => {
            // Determine category based on content or default to 'General'
            let category = 'General';
            if (item.title?.toLowerCase().includes('sports')) category = 'Event';
            else if (item.title?.toLowerCase().includes('result') || item.title?.toLowerCase().includes('exam')) category = 'Achievement';
            else if (item.title?.toLowerCase().includes('announcement') || item.title?.toLowerCase().includes('notice')) category = 'Announcement';
            else if (item.title?.toLowerCase().includes('admission')) category = 'Admissions';
            
            const { icon, color } = getCategoryStyle(category);
            
            return {
              id: item.id,
              title: item.title || item.Heading,
              date: formatDate(item.date),
              category: category,
              icon: icon,
              color: color,
              link: `/news/${item.id}`,
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

  // Show loading skeleton
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary mb-3"
            >
              Latest News & Announcements
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl"
            >
              Stay updated with the latest happenings at our school
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <Link href="/news" className="text-secondary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              View All News
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        {newsItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No news available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer"
                  onClick={() => window.location.href = item.link}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${item.color} shrink-0`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.color}`}>
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                      <Link 
                        href={item.link}
                        className="text-secondary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read More
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-center"
        >
          <p className="text-white font-semibold mb-3">Want to receive updates directly?</p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Subscribe to Newsletter
          </Button>
        </motion.div>
      </div>
    </section>
  );
};