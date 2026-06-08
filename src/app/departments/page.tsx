'use client';

import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { 
  FlaskConical, 
  Calculator, 
  Languages, 
  Globe, 
  Palette, 
  Music, 
  Dumbbell, 
  Cpu,
  Microscope,
  BookOpen,
  Laptop,
  Briefcase
} from "lucide-react";
import { useState } from "react";

const departments = [
  {
    id: 1,
    name: "Science",
    icon: FlaskConical,
    description: "Physics, Chemistry, Biology, and Computer Science with modern laboratories and research facilities.",
    color: "bg-blue-100 text-blue-700",
    bgGradient: "from-blue-50 to-blue-100",
    features: ["Well-equipped Labs", "Qualified Teachers", "Research Opportunities", "Science Exhibitions"]
  },
  {
    id: 2,
    name: "Mathematics",
    icon: Calculator,
    description: "Advanced mathematics, statistics, and analytical skills development for future mathematicians.",
    color: "bg-indigo-100 text-indigo-700",
    bgGradient: "from-indigo-50 to-indigo-100",
    features: ["Smart Classrooms", "Competition Training", "Problem-Solving Focus", "Math Olympiad"]
  },
  {
    id: 3,
    name: "Languages",
    icon: Languages,
    description: "English, Hindi, Tamil, Sanskrit and foreign languages for holistic communication skills.",
    color: "bg-sky-100 text-sky-700",
    bgGradient: "from-sky-50 to-sky-100",
    features: ["Language Labs", "Literature Clubs", "Debate Competitions", "Creative Writing"]
  },
  {
    id: 4,
    name: "Social Science",
    icon: Globe,
    description: "History, Geography, Political Science, and Economics for global awareness.",
    color: "bg-teal-100 text-teal-700",
    bgGradient: "from-teal-50 to-teal-100",
    features: ["Field Trips", "Model UN", "Current Affairs", "Heritage Club"]
  },
  {
    id: 5,
    name: "Arts",
    icon: Palette,
    description: "Fine arts, painting, sculpture, and creative expression for artistic development.",
    color: "bg-purple-100 text-purple-700",
    bgGradient: "from-purple-50 to-purple-100",
    features: ["Art Studio", "Exhibitions", "Workshops", "Art Competitions"]
  },
  {
    id: 6,
    name: "Music",
    icon: Music,
    description: "Vocal, instrumental, and music theory education for musical excellence.",
    color: "bg-pink-100 text-pink-700",
    bgGradient: "from-pink-50 to-pink-100",
    features: ["Music Room", "Instruments Training", "Annual Concert", "Choir Group"]
  },
  {
    id: 7,
    name: "Physical Education",
    icon: Dumbbell,
    description: "Sports, fitness, and health education for physical well-being.",
    color: "bg-emerald-100 text-emerald-700",
    bgGradient: "from-emerald-50 to-emerald-100",
    features: ["Sports Ground", "Gymnasium", "Tournaments", "Yoga Sessions"]
  },
  {
    id: 8,
    name: "Computer Science",
    icon: Cpu,
    description: "Programming, AI, web development, and digital literacy for tech careers.",
    color: "bg-cyan-100 text-cyan-700",
    bgGradient: "from-cyan-50 to-cyan-100",
    features: ["Computer Labs", "Robotics Club", "Coding Competitions", "AI Workshop"]
  },
  {
    id: 9,
    name: "Commerce",
    icon: Briefcase,
    description: "Accountancy, Business Studies, Economics for business and management careers.",
    color: "bg-amber-100 text-amber-700",
    bgGradient: "from-amber-50 to-amber-100",
    features: ["Business Lab", "Entrepreneurship Club", "Stock Market Simulation", "Industrial Visits"]
  },
  {
    id: 10,
    name: "Biology",
    icon: Microscope,
    description: "Advanced biology, biotechnology, and life sciences for medical careers.",
    color: "bg-green-100 text-green-700",
    bgGradient: "from-green-50 to-green-100",
    features: ["Modern Lab", "Botany Garden", "Medical Coaching", "Research Projects"]
  },
  {
    id: 11,
    name: "English Literature",
    icon: BookOpen,
    description: "Classic and modern literature, creative writing, and literary analysis.",
    color: "bg-rose-100 text-rose-700",
    bgGradient: "from-rose-50 to-rose-100",
    features: ["Literary Club", "Author Visits", "Creative Writing", "Drama Club"]
  },
  {
    id: 12,
    name: "Information Technology",
    icon: Laptop,
    description: "IT fundamentals, networking, and database management for tech industry.",
    color: "bg-violet-100 text-violet-700",
    bgGradient: "from-violet-50 to-violet-100",
    features: ["IT Labs", "Certification Courses", "Tech Workshops", "Internships"]
  }
];

export default function DepartmentsPage() {
  const [selectedDept, setSelectedDept] = useState<typeof departments[0] | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <PageHeader 
        title="Academic Departments" 
        description="Explore our diverse range of academic departments offering quality education"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-16 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">12+ Academic Departments</h3>
            <p className="text-gray-100">Specialized departments with experienced faculty and modern infrastructure</p>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedDept(dept)}
                  className={`bg-gradient-to-br ${dept.bgGradient} rounded-2xl p-6 cursor-pointer group hover:shadow-xl transition-all duration-300 border border-gray-100`}
                >
                  <div className={`w-14 h-14 ${dept.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {dept.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-secondary font-medium">Learn More →</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Department Modal */}
      {selectedDept && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDept(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
          >
            <div className={`bg-gradient-to-r ${selectedDept.bgGradient} p-6`}>
              <div className="flex justify-between items-start">
                <div className={`w-16 h-16 ${selectedDept.color} rounded-xl flex items-center justify-center`}>
                  <selectedDept.icon size={32} />
                </div>
                <button 
                  onClick={() => setSelectedDept(null)}
                  className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <h3 className="text-2xl font-bold text-primary mt-4">{selectedDept.name}</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedDept.description}</p>
              
              <h4 className="font-bold text-primary mb-3">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {selectedDept.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setSelectedDept(null)}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-secondary transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}