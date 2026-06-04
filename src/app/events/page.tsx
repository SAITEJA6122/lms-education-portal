'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Users,
  Music,
  Trophy,
  BookOpen,
  Palette,
  Heart,
  Filter,
  Search,
  X,
  Star,
  Bell
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const events = [
  {
    id: 1,
    title: "Annual Sports Day 2026",
    date: "April 15, 2026",
    time: "9:00 AM - 4:00 PM",
    venue: "School Sports Ground",
    category: "Sports",
    icon: Trophy,
    color: "text-orange-600 bg-orange-50",
    description: "Annual athletic meet featuring track events, field events, and team competitions. All students are encouraged to participate.",
    registrationDeadline: "March 25, 2026",
    featured: true
  },
  {
    id: 2,
    title: "Annual Science Exhibition",
    date: "April 5, 2026",
    time: "10:00 AM - 3:00 PM",
    venue: "Science Block & Auditorium",
    category: "Academic",
    icon: BookOpen,
    color: "text-blue-600 bg-blue-50",
    description: "Showcase innovative science projects by students. Themes include renewable energy, AI, and environmental conservation.",
    registrationDeadline: "March 20, 2026",
    featured: true
  },
  {
    id: 3,
    title: "Foundation Day Celebration",
    date: "March 1, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "School Auditorium",
    category: "Cultural",
    icon: Star,
    color: "text-purple-600 bg-purple-50",
    description: "Celebrating 30 years of excellence in education. Cultural performances by students and alumni meet.",
    registrationDeadline: "February 25, 2026",
    featured: true
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    date: "March 28, 2026",
    time: "9:00 AM - 3:00 PM",
    venue: "Individual Classrooms",
    category: "Academic",
    icon: Users,
    color: "text-green-600 bg-green-50",
    description: "First Parent-Teacher Meeting of the academic session. Progress reports will be distributed.",
    registrationDeadline: "Walk-in",
    featured: false
  },
  {
    id: 5,
    title: "Annual Cultural Fest - Splendour 2026",
    date: "February 10-12, 2026",
    time: "5:00 PM - 9:00 PM",
    venue: "Open Air Theatre",
    category: "Cultural",
    icon: Music,
    color: "text-pink-600 bg-pink-50",
    description: "Three-day cultural extravaganza featuring music, dance, drama, and fashion show.",
    registrationDeadline: "January 30, 2026",
    featured: false
  },
  {
    id: 6,
    title: "Art Exhibition",
    date: "January 25, 2026",
    time: "11:00 AM - 4:00 PM",
    venue: "Art Gallery",
    category: "Cultural",
    icon: Palette,
    color: "text-rose-600 bg-rose-50",
    description: "Showcasing artistic talents of students across painting, sculpture, and digital art.",
    registrationDeadline: "January 15, 2026",
    featured: false
  },
  {
    id: 7,
    title: "Yoga & Wellness Workshop",
    date: "January 10, 2026",
    time: "7:00 AM - 9:00 AM",
    venue: "School Ground",
    category: "Workshop",
    icon: Heart,
    color: "text-teal-600 bg-teal-50",
    description: "Special workshop on mental wellness and yoga for students and parents.",
    registrationDeadline: "January 5, 2026",
    featured: false
  },
  {
    id: 8,
    title: "Inter-House Debate Competition",
    date: "December 15, 2025",
    time: "10:00 AM - 2:00 PM",
    venue: "Seminar Hall",
    category: "Academic",
    icon: Users,
    color: "text-indigo-600 bg-indigo-50",
    description: "Annual inter-house debate competition on contemporary topics.",
    registrationDeadline: "December 10, 2025",
    featured: false
  }
];

const categories = ["All", "Academic", "Sports", "Cultural", "Workshop"];
const months = ["All", "January", "February", "March", "April", "December"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesMonth = selectedMonth === "All" || event.date.includes(selectedMonth);
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEvents = events.filter(e => e.featured);
  const upcomingEvents = filteredEvents.filter(e => !e.featured);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Events Calendar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Stay updated with upcoming events, workshops, and celebrations
          </motion.p>
        </div>
      </section>

      {/* Featured Events Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Star className="text-secondary" size={24} />
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedEvent(event)}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 cursor-pointer group border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 ${event.color} rounded-xl flex items-center justify-center mb-4`}>
                  <event.icon size={28} />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} />
                    <span>{event.venue}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${event.color}`}>
                    {event.category}
                  </span>
                  <Bell size={18} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50/50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary bg-white"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedMonth === month
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 bg-gray-50/50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-6">All Events</h2>
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl">
              <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  onClick={() => setSelectedEvent(event)}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 ${event.color} rounded-xl flex items-center justify-center shrink-0`}>
                        <event.icon size={22} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 mt-1 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {event.venue}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${event.color}`}>
                        {event.category}
                      </span>
                      <ChevronRight size={18} className="text-gray-400 group-hover:text-secondary transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-lg w-full"
            >
              <div className={`p-6 rounded-t-2xl ${selectedEvent.color.replace('text-', 'border-b-2 border-')}`}>
                <div className="flex justify-between items-start">
                  <div className={`w-14 h-14 ${selectedEvent.color} rounded-xl flex items-center justify-center`}>
                    <selectedEvent.icon size={28} />
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-primary mt-4">{selectedEvent.title}</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} className="text-secondary" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} className="text-secondary" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} className="text-secondary" />
                    <span>{selectedEvent.venue}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm font-semibold text-primary">Registration Deadline:</p>
                  <p className="text-gray-600">{selectedEvent.registrationDeadline}</p>
                </div>
                <Button variant="primary" className="w-full">
                  Register for Event
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}