'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PrincipalMessageProps {
  message?: string;
  imageUrl?: string | null;
}

export const PrincipalMessage = ({ message: propMessage, imageUrl: propImageUrl }: PrincipalMessageProps) => {
  const [content, setContent] = useState({
    message: "Our vision is to inspire every young woman to be a lifelong learner, a confident leader, and a responsible global citizen.",
    image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    principal_name: "Dr. Jane Doe"
  });

  useEffect(() => {
    // If props are provided, use them
    if (propMessage || propImageUrl) {
      setContent({
        message: propMessage || content.message,
        image_url: propImageUrl || content.image_url,
        principal_name: content.principal_name
      });
      return;
    }

    // Otherwise fetch from API
    async function fetchHomeContent() {
      try {
        const response = await fetch('/api/content');
        const result = await response.json();
        if (result.success && result.data) {
          setContent({
            message: result.data.principal_message || content.message,
            image_url: result.data.principal_image_url || content.image_url,
            principal_name: content.principal_name
          });
        }
      } catch (error) {
        console.error('Error fetching principal message:', error);
      }
    }
    
    fetchHomeContent();
  }, [propMessage, propImageUrl]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white relative">
          {/* Decorative element */}
          <Quote className="absolute top-10 right-10 opacity-10" size={120} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="aspect-[4/5] bg-white/10 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white/10">
                {content.image_url ? (
                  <Image
                    src={content.image_url}
                    alt="Principal"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/20">
                    <span className="text-white/60">Principal's Photo</span>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <h4 className="text-2xl font-bold">{content.principal_name}</h4>
                <p className="text-secondary font-medium">Principal, LMS GHSS</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-left">
                "{content.message}"
              </h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-left">
                <p>
                  At LMS Girls Higher Secondary School, we believe that education is the most powerful tool to empower 
                  the next generation. We strive to provide more than just academic knowledge; we focus on 
                  building character, fostering compassion, and encouraging the courage to lead.
                </p>
                <p>
                  Our holistic approach ensures that every student finds her unique path to success. 
                  We believe in a strong partnership between the school, parents, and the community 
                  to create a supportive ecosystem for our students.
                </p>
              </div>
              <Link href="/principal-message">
                <button className="mt-10 px-10 py-4 bg-secondary text-primary font-bold rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-secondary/20">
                  Read Full Message
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};