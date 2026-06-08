'use client';

import React, { useState, useEffect } from 'react';
import { PageHeader } from "@/components/layout/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Static categories (can also be made dynamic from API)
const categories = ["All", "Campus", "Events", "Sports", "Labs", "Academics", "Activities", "Facilities"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery images from API
  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await fetch('/api/gallery');
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          // Transform API data to match component format
          const transformedImages = result.data.map((item: any) => ({
            id: item.id,
            src: item.image_url,
            alt: item.title || 'Gallery image',
            category: item.category || 'General'
          }));
          setGalleryImages(transformedImages);
        } else {
          // No images in database
          setGalleryImages([]);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
        setGalleryImages([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchGallery();
  }, []);

  // Get unique categories from images
  const availableCategories = ["All", ...new Set(galleryImages.map(img => img.category).filter(Boolean))];
  
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <PageHeader 
          title="School Gallery" 
          description="A glimpse into the life, events, and facilities at Girls Higher Secondary School."
        />
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[300px] rounded-3xl bg-gray-200 animate-pulse"></div>
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
        title="School Gallery" 
        description="A glimpse into the life, events, and facilities at Girls Higher Secondary School."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter - Only show if images exist */}
          {galleryImages.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {availableCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-full font-bold transition-all ${
                    activeCategory === category 
                    ? "bg-primary text-white shadow-lg shadow-primary/30" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Image Grid */}
          {galleryImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No gallery images available at the moment.</p>
              <p className="text-gray-400 mt-2">Check back soon for photos!</p>
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found in "{activeCategory}" category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((img, index) => (
                  <motion.div
                    key={img.id}
                    initial={index < 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="relative group h-[300px] rounded-3xl overflow-hidden cursor-pointer shadow-md"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={index < 3}
                      fetchPriority={index < 3 ? "high" : "auto"}
                      onError={(e) => {
                        // Handle image load error - show fallback
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <span className="text-secondary font-bold text-sm uppercase tracking-wider mb-1">{img.category}</span>
                      <h4 className="text-white font-bold text-xl">{img.alt}</h4>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}