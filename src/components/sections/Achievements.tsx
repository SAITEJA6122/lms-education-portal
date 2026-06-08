'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Medal, BookOpen, Users, Globe } from 'lucide-react';

// Map achievement category to icon and color
const getAchievementStyle = (category: string) => {
  const categories: Record<string, { icon: any; color: string }> = {
    'Academic': { icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
    'Sports': { icon: Trophy, color: 'bg-amber-100 text-amber-600' },
    'Excellence': { icon: Star, color: 'bg-purple-100 text-purple-600' },
    'Award': { icon: Award, color: 'bg-green-100 text-green-600' },
    'Ranking': { icon: Target, color: 'bg-red-100 text-red-600' },
    'Achievement': { icon: Medal, color: 'bg-yellow-100 text-yellow-600' },
    'Student': { icon: Users, color: 'bg-indigo-100 text-indigo-600' },
    'Global': { icon: Globe, color: 'bg-teal-100 text-teal-600' },
  };
  return categories[category] || { icon: Trophy, color: 'bg-gray-100 text-gray-600' };
};

export const Achievements = () => {
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        // Fetch from Achievements table via API
        const response = await fetch('/api/achievements');
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          // Transform API data to match component format
          const transformedAchievements = result.data.map((item: any) => {
            const { icon, color } = getAchievementStyle(item.category || 'Achievement');
            
            return {
              icon: icon,
              title: item.Title,
              subtitle: item.description || item.content,
              color: color,
            };
          });
          
          setAchievements(transformedAchievements);
        } else {
          // Fallback static data if no data in database
          setAchievements([
            {
              icon: Trophy,
              title: "Best Secondary School",
              subtitle: "State Education Excellence Awards 2025",
              color: "bg-amber-100 text-amber-600"
            },
            {
              icon: Star,
              title: "100% Pass Rate",
              subtitle: "Consistently in Board Exams since 2010",
              color: "bg-blue-100 text-blue-600"
            },
            {
              icon: Award,
              title: "Green Campus Award",
              subtitle: "Sustainability & Environmental Leadership",
              color: "bg-green-100 text-green-600"
            },
            {
              icon: Target,
              title: "Top Sports Ranking",
              subtitle: "Over 50+ Regional Championship Titles",
              color: "bg-red-100 text-red-600"
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching achievements:', error);
        // Keep static data if API fails
      } finally {
        setLoading(false);
      }
    }
    
    fetchAchievements();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-4 w-24 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-10 w-64 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-gray-50 animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Pride</h2>
          <h3 className="text-4xl font-bold text-primary">Major Achievements</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform`}>
                  <IconComponent size={32} />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};