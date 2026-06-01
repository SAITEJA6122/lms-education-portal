import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";
import { SchoolIntroduction } from "@/components/sections/SchoolIntroduction";
import { QuickInformationCards } from "@/components/sections/QuickInformationCards";
import { PrincipalMessage } from "@/components/sections/PrincipalMessage";
import { Highlights } from "@/components/sections/Highlights";

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials), {
  loading: () => <div className="py-24 bg-gray-50 flex items-center justify-center">Loading Testimonials...</div>
});

const GalleryPreview = dynamic(() => import("@/components/sections/GalleryPreview").then(mod => mod.GalleryPreview), {
  loading: () => <div className="py-24 bg-white flex items-center justify-center">Loading Gallery...</div>
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SchoolIntroduction />
      <QuickInformationCards />
      <PrincipalMessage />
      <Highlights />
      <Testimonials />
      <GalleryPreview />
    </div>
  );
}
