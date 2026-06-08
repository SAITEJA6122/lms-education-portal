'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  File, 
  Calendar,
  Search,
  AlertCircle,
  BookOpen,
  ClipboardList,
  Users,
  Award,
  X
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';

// Map category to icon and color
const getCategoryStyle = (category: string) => {
  const categories: Record<string, { icon: any; color: string }> = {
    'Admissions': { icon: FileText, color: 'text-blue-600 bg-blue-50' },
    'Academics': { icon: BookOpen, color: 'text-green-600 bg-green-50' },
    'Examinations': { icon: ClipboardList, color: 'text-teal-600 bg-teal-50' },
    'Parents': { icon: Users, color: 'text-indigo-600 bg-indigo-50' },
    'Reports': { icon: Award, color: 'text-yellow-600 bg-yellow-50' },
    'Forms': { icon: FileText, color: 'text-cyan-600 bg-cyan-50' },
    'General': { icon: File, color: 'text-gray-600 bg-gray-50' },
  };
  return categories[category] || { icon: File, color: 'text-gray-600 bg-gray-50' };
};

// Format file size
const formatFileSize = (bytes: number | null) => {
  if (!bytes) return 'Unknown size';
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
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

export default function DownloadsPage() {
  const [downloads, setDownloads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch downloads from API
  useEffect(() => {
    async function fetchDownloads() {
      try {
        const response = await fetch('/api/downloads');
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          // Transform API data to match component format
          const transformedDownloads = result.data.map((item: any) => {
            const { icon, color } = getCategoryStyle(item.category);
            return {
              id: item.id,
              title: item.name || item.Title,
              category: item.category || 'General',
              type: item.file_type || 'PDF',
              size: formatFileSize(item.file_size),
              date: formatDate(item.uploaded_at || item.date),
              icon: icon,
              color: color,
              description: item.description || `${item.name || item.Title} document`,
              downloads: item.download_count || 0,
              file_url: item.file_url
            };
          });
          setDownloads(transformedDownloads);
        }
      } catch (error) {
        console.error('Error fetching downloads:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchDownloads();
  }, []);

  // Get unique categories from downloads
  const categories = ["All", ...new Set(downloads.map(d => d.category).filter(Boolean))];

  const filteredDownloads = downloads.filter(download => {
    const matchesCategory = selectedCategory === "All" || download.category === selectedCategory;
    const matchesSearch = download.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          download.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (download: any) => {
    if (download.file_url) {
      window.open(download.file_url, '_blank');
    } else {
      alert('Download link not available. Please contact the school office.');
    }
  };

  // Calculate stats
  const totalDownloads = downloads.length;
  const totalCategories = categories.length - 1;
  const totalDownloadCount = downloads.reduce((sum, d) => sum + (d.downloads || 0), 0);

  if (loading) {
    return (
      <div className="pt-20">
        <PageHeader 
          title="Downloads" 
          description="Access important documents, forms, and resources"
        />
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader 
        title="Downloads" 
        description="Access important documents, forms, and resources"
      />

      {/* Stats Banner */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-secondary">{totalDownloads}+</div>
              <div className="text-xs text-gray-500">Documents</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">{totalCategories}</div>
              <div className="text-xs text-gray-500">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">{totalDownloadCount.toLocaleString()}+</div>
              <div className="text-xs text-gray-500">Total Downloads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">2025-26</div>
              <div className="text-xs text-gray-500">Academic Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search documents..."
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

      {/* Downloads Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDownloads.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl">
              <AlertCircle className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 text-lg">No documents found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
              {filteredDownloads.map((download, index) => {
                const IconComponent = download.icon;
                return (
                  <motion.div
                    key={download.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index % 9) * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${download.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent size={24} />
                        </div>
                        <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                          {download.type}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-secondary transition-colors line-clamp-1">
                        {download.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {download.description}
                      </p>
                      
                      <div className="space-y-2 mb-4 text-xs text-gray-400">
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1">
                            <File size={12} />
                            {download.size}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {download.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download size={12} />
                          {download.downloads.toLocaleString()} downloads
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all"
                        onClick={() => handleDownload(download)}
                        rightIcon={<Download size={16} />}
                      >
                        Download
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Info Note */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm text-blue-800 font-medium">Need help?</p>
              <p className="text-sm text-blue-700">
                If you're unable to download any document, please contact the school office at
                <Link href="/contact" className="font-semibold underline ml-1">Contact Us</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}