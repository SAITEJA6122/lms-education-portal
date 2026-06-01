'use client';

import React, { useState } from 'react';
import { PageHeader } from "@/components/layout/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Campus", "Events", "Sports", "Labs"];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800", alt: "Main Building", category: "Campus" },
  { id: 2, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", alt: "Chemistry Lab", category: "Labs" },
  { id: 3, src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800", alt: "Sports Day", category: "Sports" },
  { id: 4, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800", alt: "Annual Function", category: "Events" },
  { id: 5, src: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800", alt: "Library Reading Room", category: "Campus" },
  { id: 6, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800", alt: "Art & Craft Workshop", category: "Events" },
  { id: 7, src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800", alt: "Physics Lab", category: "Labs" },
  { id: 8, src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800", alt: "Running Track", category: "Sports" },
  { id: 9, src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800", alt: "Auditorium", category: "Campus" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="School Gallery" 
        description="A glimpse into the life, events, and facilities at Girls Higher Secondary School."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
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

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group h-[300px] rounded-3xl overflow-hidden cursor-pointer shadow-md"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <span className="text-secondary font-bold text-sm uppercase tracking-wider mb-1">{img.category}</span>
                    <h4 className="text-white font-bold text-xl">{img.alt}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
