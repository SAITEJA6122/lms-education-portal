'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  Award, 
  Calendar,
  Search,
  X,
  Linkedin,
  GraduationCap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PageHeader } from "@/components/layout/PageHeader";

// Department list (can also be dynamic from API)
const departments = ["All", "Science", "Mathematics", "Languages", "Social Studies", "Arts & Sports", "Commerce", "Computer Science"];

export default function FacultyPage() {
  const [facultyMembers, setFacultyMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState<any | null>(null);

  // Fetch faculty from API
  useEffect(() => {
    async function fetchFaculty() {
      try {
        const response = await fetch('/api/faculty');
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          // Transform API data to match component format
          const transformedFaculty = result.data.map((item: any) => ({
            id: item.id,
            name: item.name || item.faculty_name,
            designation: item.designation || "Faculty Member",
            department: item.department || "General",
            qualification: item.qualification || "Qualified Educator",
            experience: item.experience || "Experienced",
            email: item.email || "faculty@lmsghss.edu",
            phone: item.phone || "+91 98765 43210",
            achievements: item.achievements || ["Dedicated Educator"],
            image: item.photo_url || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            subjects: item.subjects || ["Teaching"],
            linkedin: item.linkedin || "#"
          }));
          setFacultyMembers(transformedFaculty);
        }
      } catch (error) {
        console.error('Error fetching faculty:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchFaculty();
  }, []);

  // Get unique departments from faculty data
  const uniqueDepartments = ["All", ...new Set(facultyMembers.map(f => f.department).filter(Boolean))];

  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesDepartment = selectedDepartment === "All" || faculty.department === selectedDepartment;
    const matchesSearch = faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faculty.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faculty.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <PageHeader 
          title="Our Faculty" 
          description="Meet the dedicated educators who inspire and guide our students towards excellence."
        />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-5">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Faculty" 
        description="Meet the dedicated educators who inspire and guide our students towards excellence."
      />

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, designation, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X size={16} className="text-gray-400" />
                </button>
              )}
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {uniqueDepartments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedDepartment === dept
                      ? "bg-secondary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaculty.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No faculty members found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFaculty.map((faculty, index) => (
                <motion.div
                  key={faculty.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedFaculty(faculty)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                    {faculty.image ? (
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User size={64} className="text-primary/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-2 py-1 rounded-full">
                        {faculty.department}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary text-lg mb-1">{faculty.name}</h3>
                    <p className="text-secondary text-sm mb-2">{faculty.designation}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <GraduationCap size={14} />
                      <span>{faculty.qualification}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <Calendar size={14} />
                      <span>{faculty.experience}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {faculty.subjects?.slice(0, 2).map((subject: string, idx: number) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {subject}
                        </span>
                      ))}
                      {faculty.subjects?.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          +{faculty.subjects.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Faculty Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFaculty(null)}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64 bg-gradient-to-r from-primary to-secondary">
                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
                <div className="absolute -bottom-12 left-6">
                  <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                    {selectedFaculty.image ? (
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={selectedFaculty.image}
                          alt={selectedFaculty.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                        <User size={32} className="text-primary" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-16 p-6">
                <h2 className="text-2xl font-bold text-primary">{selectedFaculty.name}</h2>
                <p className="text-secondary font-medium mb-4">{selectedFaculty.designation}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap size={18} />
                    <span>{selectedFaculty.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span>{selectedFaculty.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={18} />
                    <span>{selectedFaculty.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={18} />
                    <span>{selectedFaculty.phone}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-primary mb-2">Subjects Taught</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFaculty.subjects?.map((subject: string) => (
                      <span key={subject} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-primary mb-2">Achievements</h3>
                  <ul className="space-y-1">
                    {selectedFaculty.achievements?.map((achievement: string) => (
                      <li key={achievement} className="flex items-center gap-2 text-gray-600 text-sm">
                        <Award size={16} className="text-secondary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <Link href={`mailto:${selectedFaculty.email}`}>
                    <Button variant="primary" size="sm">
                      <Mail size={16} className="mr-2" />
                      Email
                    </Button>
                  </Link>
                  <Link href={selectedFaculty.linkedin}>
                    <Button variant="outline" size="sm">
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}