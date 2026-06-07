'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Medal, 
  Star, 
  Users, 
  TrendingUp, 
  Award,
  Calendar,
  Filter,
  ChevronRight,
  School,
  Target,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';

const allAchievements = [
  {
    id: 1,
    title: "Best School Award",
    description: "Recognized as the Best Girls' School in the District 2025",
    year: "2025",
    category: "Institutional",
    icon: Trophy,
    color: "text-yellow-600 bg-yellow-50",
    fullDescription: "Our school was honored with the prestigious Best Girls' School Award by the District Education Board for excellence in academics, sports, and overall student development."
  },
  {
    id: 2,
    title: "CBSE Excellence",
    description: "98.6% pass rate with 45 students scoring above 95%",
    year: "2025",
    category: "Academic",
    icon: TrendingUp,
    color: "text-green-600 bg-green-50",
    fullDescription: "Outstanding performance in CBSE Board Examinations. 45 students secured above 95%, with 3 students scoring perfect 100 in Mathematics."
  },
  {
    id: 3,
    title: "Sports Champions",
    description: "Won 12 Gold Medals in District Level Competition",
    year: "2025",
    category: "Sports",
    icon: Medal,
    color: "text-blue-600 bg-blue-50",
    fullDescription: "Our students dominated the District Level Sports Competition, securing 12 Gold, 8 Silver, and 5 Bronze medals across various disciplines."
  },
  {
    id: 4,
    title: "National Talent Search",
    description: "5 students qualified for NTSE Stage 2",
    year: "2025",
    category: "Academic",
    icon: Star,
    color: "text-purple-600 bg-purple-50",
    fullDescription: "Five of our brilliant students have qualified for the prestigious National Talent Search Examination (NTSE) Stage 2."
  },
  {
    id: 5,
    title: "Green School Award",
    description: "Recognized for environmental initiatives",
    year: "2024",
    category: "Institutional",
    icon: School,
    color: "text-emerald-600 bg-emerald-50",
    fullDescription: "Awarded for our sustainable practices including solar power, rainwater harvesting, and waste management systems."
  },
  {
    id: 6,
    title: "Chess Champions",
    description: "Won State Level Chess Championship",
    year: "2024",
    category: "Sports",
    icon: Medal,
    color: "text-indigo-600 bg-indigo-50",
    fullDescription: "Our chess team emerged as champions in the State Level Inter-School Chess Championship."
  },
  {
    id: 7,
    title: "Science Exhibition Winners",
    description: "First prize at National Science Fair",
    year: "2024",
    category: "Academic",
    icon: Target,
    color: "text-rose-600 bg-rose-50",
    fullDescription: "Students won first prize for their innovative project on renewable energy solutions."
  },
  {
    id: 8,
    title: "Cultural Excellence",
    description: "Best School Trophy in Youth Festival",
    year: "2024",
    category: "Cultural",
    icon: Award,
    color: "text-orange-600 bg-orange-50",
    fullDescription: "Secured overall Best School Trophy at the District Youth Festival with outstanding performances."
  },
  {
    id: 9,
    title: "National Olympiad Success",
    description: "12 students won medals in National Olympiads",
    year: "2024",
    category: "Academic",
    icon: Star,
    color: "text-cyan-600 bg-cyan-50",
    fullDescription: "Outstanding performance in various National Olympiads including Science, Math, and Cyber Olympiads."
  },
  {
    id: 10,
    title: "Community Service Award",
    description: "Recognized for social initiatives",
    year: "2023",
    category: "Institutional",
    icon: Users,
    color: "text-teal-600 bg-teal-50",
    fullDescription: "Honored for our NSS unit's exceptional contribution to community service and social awareness programs."
  },
  {
    id: 11,
    title: "Yoga Champions",
    description: "Gold Medal in National Yoga Competition",
    year: "2023",
    category: "Sports",
    icon: Medal,
    color: "text-violet-600 bg-violet-50",
    fullDescription: "Our student won Gold Medal at the National Level Yoga Competition organized by Yoga Federation of India."
  },
  {
    id: 12,
    title: "Innovation in Education",
    description: "Best Use of Technology Award",
    year: "2023",
    category: "Institutional",
    icon: BookOpen,
    color: "text-sky-600 bg-sky-50",
    fullDescription: "Awarded for innovative integration of technology in teaching-learning processes."
  }
];

const categories = ["All", "Academic", "Sports", "Institutional", "Cultural"];
const years = ["All", "2025", "2024", "2023"];

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedAchievement, setSelectedAchievement] = useState<typeof allAchievements[0] | null>(null);

  const filteredAchievements = allAchievements.filter(achievement => {
    const matchesCategory = selectedCategory === "All" || achievement.category === selectedCategory;
    const matchesYear = selectedYear === "All" || achievement.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  return (
    <div className="pt-20">
      {/* Page Header - Using PageHeader component like Admissions page */}
      <PageHeader 
        title="Our Achievements" 
        description="Celebrating excellence and milestones in our journey"
      />

      {/* Stats Banner */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-gray-500">Awards Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">150+</div>
              <div className="text-sm text-gray-500">Gold Medals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">98%</div>
              <div className="text-sm text-gray-500">Result Average</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">25+</div>
              <div className="text-sm text-gray-500">National Records</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm font-medium text-gray-500 mr-2">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
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
              <span className="text-sm font-medium text-gray-500 mr-2">Year:</span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedYear === year
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAchievements.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No achievements found for selected filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 12) * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedAchievement(achievement)}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
                >
                  <div className={`w-14 h-14 ${achievement.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <achievement.icon size={28} />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-primary text-lg">{achievement.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      {achievement.category}
                    </span>
                    <ChevronRight size={16} className="text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-3">Continue the Legacy of Excellence</h2>
          <p className="text-gray-600 mb-6">Be a part of our journey towards greater achievements</p>
          <Link href="/admissions">
            <Button variant="primary">
              Join GHSS Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
