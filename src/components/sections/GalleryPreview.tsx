'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Default images in case API fails or no data
const defaultImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop", alt: "Students in Classroom", span: "md:col-span-2 md:row-span-2", category: "Academics" },
  { id: 2, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", alt: "Science Lab", category: "Facilities" },
  { id: 3, src: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop", alt: "School Library", category: "Facilities" },
  { id: 4, src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop", alt: "Sports Ground", category: "Sports" },
  { id: 5, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", alt: "Art Class", category: "Activities" },
];

export const GalleryPreview = () => {
  const [images, setImages] = useState(defaultImages);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [loading, setLoading] = useState(true);

  // Fetch gallery images from API
  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await fetch('/api/gallery');
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          // Transform API data to match component format
          const transformedImages = result.data.map((item: any, index: number) => ({
            id: item.id,
            src: item.image_url,
            alt: item.title || `Gallery image ${index + 1}`,
            category: item.category || 'Gallery',
            span: index === 0 ? "md:col-span-2 md:row-span-2" : undefined // First image gets span
          }));
          setImages(transformedImages);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
        // Keep default images
      } finally {
        setLoading(false);
      }
    }
    
    fetchGallery();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setSelectedImage(images[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedIndex(-1);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-200 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (images.length === 0) {
    return null; // Don't show section if no images
  }

  return (
    <>
      <section className="py-24 bg-white" aria-label="Gallery preview section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4"
              >
                Our Moments
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-primary"
              >
                School Gallery
              </motion.h3>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/gallery" 
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-secondary min-h-[48px]"
                aria-label="View all gallery photos"
              >
                View All Photos
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {images.slice(0, 5).map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 ${img.span || ''}`}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                aria-label={`View ${img.alt} image`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-xs font-medium bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                    {img.category}
                  </span>
                </div>
                
                {/* Overlay with zoom icon */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="text-white" size={24} />
                  </div>
                </div>
                
                {/* Image title on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-label="Image lightbox"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
                <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
                <p className="text-gray-300 text-sm">{selectedImage.category}</p>
                <p className="text-gray-400 text-xs mt-1">
                  {selectedIndex + 1} of {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};