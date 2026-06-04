'use client';

import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Calendar, ChevronRight, Megaphone, Award, Trophy, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
=======
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5

const newsItems = [
  {
    id: 1,
<<<<<<< HEAD
    title: "Annual Sports Day 2026 - Registration Open",
    date: "March 15, 2026",
    category: "Event",
    icon: Trophy,
    color: "text-orange-600 bg-orange-50",
    link: "/events",
  },
  {
    id: 2,
    title: "CBSE Board Exam Results 2025 - Outstanding Performance",
    date: "March 10, 2026",
    category: "Achievement",
    icon: Award,
    color: "text-green-600 bg-green-50",
    link: "/achievements",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Schedule for Session 2026-27",
    date: "March 5, 2026",
    category: "Announcement",
    icon: Megaphone,
    color: "text-blue-600 bg-blue-50",
    link: "/news",
  },
  {
    id: 4,
    title: "New Scholarship Program Announced for Meritorious Students",
    date: "February 28, 2026",
    category: "Announcement",
    icon: Users,
    color: "text-purple-600 bg-purple-50",
    link: "/admissions",
  },
=======
    title: "Annual Sports Day 2026 Announced",
    date: "June 15, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop",
    excerpt: "Join us for a day of athletic excellence and school spirit as we host our annual sports meet."
  },
  {
    id: 2,
    title: "LMS GHSS Students Win National Science Fair",
    date: "June 10, 2026",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    excerpt: "Our young scientists secured the first position at the National Inter-School Science Exhibition."
  },
  {
    id: 3,
    title: "New Digital Library Inauguration",
    date: "June 05, 2026",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop",
    excerpt: "We are excited to announce the opening of our state-of-the-art digital library facility."
  }
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
];

export const LatestNews = () => {
  return (
<<<<<<< HEAD
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
            {/* FIXED: View All News link with inline arrow */}
            <Link href="/news" className="text-secondary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              View All News
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
=======
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Stay Updated</h2>
            <h3 className="text-4xl font-bold text-primary">Latest News & Events</h3>
          </div>
          <Link href="/news" className="flex items-center text-primary font-bold hover:text-secondary transition-colors group">
            View All News <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
<<<<<<< HEAD
              className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer"
              onClick={() => window.location.href = item.link}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${item.color} shrink-0`}>
                  <item.icon size={24} />
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
                  {/* FIXED: Read More link with inline arrow */}
                  <Link 
                    href={item.link}
                    className="text-secondary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More
                    <ChevronRight size={14} />
                  </Link>
                </div>
=======
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  {item.date}
                </div>
                <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link href={`/news/${item.id}`} className="text-primary font-bold inline-flex items-center hover:underline">
                  Read More <ArrowRight className="ml-1" size={16} />
                </Link>
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
              </div>
            </motion.div>
          ))}
        </div>
<<<<<<< HEAD

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
=======
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
      </div>
    </section>
  );
};
