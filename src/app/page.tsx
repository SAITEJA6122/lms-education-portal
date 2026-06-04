'use client';

import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";
import { SchoolIntroduction } from "@/components/sections/SchoolIntroduction";
import { QuickInformationCards } from "@/components/sections/QuickInformationCards";
import { PrincipalMessage } from "@/components/sections/PrincipalMessage";
import { Highlights } from "@/components/sections/Highlights";
import { LatestNews } from "@/components/sections/LatestNews";
import { AchievementsPreview } from "@/components/sections/AchievementsPreview";

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials), {
  loading: () => <div className="py-24 bg-gray-50 flex items-center justify-center">Loading Testimonials...</div>,
  ssr: false  // ← ADD THIS - prevents SSR for client-only component
});

const GalleryPreview = dynamic(() => import("@/components/sections/GalleryPreview").then(mod => mod.GalleryPreview), {
  loading: () => <div className="py-24 bg-white flex items-center justify-center">Loading Gallery...</div>,
  ssr: false  // ← ADD THIS - prevents SSR for client-only component
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SchoolIntroduction />
      <QuickInformationCards />
      <PrincipalMessage />
      <Highlights />
      <LatestNews />
      <AchievementsPreview />
      <Testimonials />
      <GalleryPreview />
    </div>
  );
}