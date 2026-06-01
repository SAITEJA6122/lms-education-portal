import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="About Our School" 
        description="Learn more about our values, our team, and our commitment to excellence in education."
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a vision to transform the educational landscape, GHSS has grown from 
                a small local school into a premier institution known for its academic rigour and 
                holistic approach to learning.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Over the years, we have consistently adapted to the changing needs of the world while 
                staying true to our core values of integrity, respect, and excellence.
              </p>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop"
                alt="GHSS Campus"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
