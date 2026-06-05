'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const newsItems = [
  {
    id: 1,
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
];

export const LatestNews = () => {
  return (
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
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
