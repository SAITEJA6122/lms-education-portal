'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, FlaskConical, Palette, Dumbbell, BookOpen, Music, Trophy, Bus, Heart, Users, Globe, Camera } from 'lucide-react';

// Map facility types to icons
const getFacilityIcon = (title: string) => {
  const icons: Record<string, any> = {
    'Digital Classrooms': Monitor,
    'Smart Classrooms': Monitor,
    'Modern Labs': FlaskConical,
    'Science Lab': FlaskConical,
    'Computer Lab': FlaskConical,
    'Arts & Culture': Palette,
    'Arts': Palette,
    'Music': Music,
    'Dance': Palette,
    'Sports Complex': Dumbbell,
    'Sports': Dumbbell,
    'Playground': Dumbbell,
    'Library': BookOpen,
    'Transport': Bus,
    'Medical Facility': Heart,
    'Counseling': Users,
    'Exchange Program': Globe,
    'Photography': Camera,
    'Achievements': Trophy,
  };
  return icons[title] || Monitor;
};

const defaultHighlights = [
  {
    icon: Monitor,
    title: "Digital Classrooms",
    description: "Equipped with the latest technology to enhance interactive learning.",
  },
  {
    icon: FlaskConical,
    title: "Modern Labs",
    description: "State-of-the-art science and computer laboratories for practical learning.",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description: "Dedicated spaces for music, dance, and fine arts to foster creativity.",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Extensive facilities for various indoor and outdoor sports activities.",
  },
];

export const Highlights = () => {
  const [highlights, setHighlights] = useState(defaultHighlights);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHighlights() {
      try {
        // Try to fetch from API if you have a Facilities/Highlights table
        const response = await fetch('/api/highlights');
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          const transformedHighlights = result.data.map((item: any) => {
            const IconComponent = getFacilityIcon(item.title);
            return {
              icon: IconComponent,
              title: item.title,
              description: item.description,
            };
          });
          setHighlights(transformedHighlights);
        } else {
          // Use default highlights
          setHighlights(defaultHighlights);
        }
      } catch (error) {
        console.error('Error fetching highlights:', error);
        // Use default highlights if API fails
        setHighlights(defaultHighlights);
      } finally {
        setLoading(false);
      }
    }
    
    fetchHighlights();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-4 w-24 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-10 w-48 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-10 rounded-2xl animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-8"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
          <h3 className="text-4xl font-bold text-primary">School Highlights</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <IconComponent className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};