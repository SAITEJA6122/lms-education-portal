import { PageHeader } from "@/components/layout/PageHeader";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function PrincipalMessagePage() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Principal's Message" 
        description="A warm welcome from our Principal, Dr. Jane Doe."
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-gray-100 rounded-3xl overflow-hidden relative shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Principal Dr. Jane Doe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-primary">Dr. Jane Doe</h3>
                <p className="text-secondary font-medium uppercase tracking-widest text-sm">Principal, LMS GHSS</p>
                <p className="text-gray-500 mt-2 italic">Ph.D. in Educational Leadership</p>
              </div>
            </div>

            <div className="lg:col-span-2 relative">
              <Quote className="text-gray-100 absolute -top-10 -left-10" size={150} />
              <div className="relative z-10 space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="font-semibold text-2xl text-primary italic mb-8">
                  "Welcome to LMS Girls Higher Secondary School. We are dedicated to providing an education that not only 
                  focuses on academic success but also on building character and resilience."
                </p>
                <p>
                  Dear Students, Parents, and Visitors,
                </p>
                <p>
                  It is an honor to lead such a vibrant and dedicated community of learners. 
                  At LMS GHSS, we believe that every girl has unique talents and the 
                  potential to make a positive impact on the world.
                </p>
                <p>
                  Our curriculum is designed to challenge students while providing the 
                  support they need to succeed. We emphasize critical thinking, 
                  collaboration, and communication — skills that are essential for 
                  thriving in today's rapidly changing global environment.
                </p>
                <p>
                  I invite you to explore our website and learn more about the 
                  extraordinary opportunities available at our school.
                </p>
                <p className="pt-8">
                  Warm regards,
                </p>
                <p className="font-bold text-primary text-xl">
                  Dr. Jane Doe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
