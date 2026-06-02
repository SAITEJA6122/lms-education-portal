import { PageHeader } from "@/components/layout/PageHeader";
import { CheckCircle2, GraduationCap, Building2, MapPin, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const highlights = [
    {
      title: "Academic Curriculum",
      description: "Comprehensive education for Classes 5 to 12, meticulously preparing students for the Tamil Nadu Board of Secondary Education (TNBSE) examinations.",
      icon: GraduationCap
    },
    {
      title: "Holistic Development",
      description: "A perfect balance of academic excellence and co-curricular activities, including sports, fine arts, and vibrant cultural programs.",
      icon: CheckCircle2
    },
    {
      title: "Empowering Environment",
      description: "A dedicated girls-only institution fostering an inclusive and supportive space tailored for the holistic growth of young women.",
      icon: Heart
    }
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="About LMS GHSS" 
        description="A reputed, girls-only educational institution committed to excellence and empowerment in Kanyakumari District."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-primary mb-8">Our Legacy & Location</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  LMS Girls Higher Secondary School is a premier, reputed educational institution 
                  dedicated exclusively to the education and empowerment of girls. Located in the 
                  picturesque Kanyakumari District of Tamil Nadu, we have established a strong 
                  presence with prominent campuses in <span className="text-primary font-bold">Neyyoor</span> and <span className="text-primary font-bold">Marthandam</span>.
                </p>
                <p>
                  Affiliated with the <span className="font-bold text-gray-800">Tamil Nadu Board of Secondary Education (TNBSE)</span>, 
                  our institution has been a cornerstone of quality education in the region for decades, 
                  consistently producing leaders and achievers.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-muted rounded-2xl">
                  <MapPin className="text-secondary" />
                  <span className="font-bold text-primary">Neyyoor Campus</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-muted rounded-2xl">
                  <MapPin className="text-secondary" />
                  <span className="font-bold text-primary">Marthandam Campus</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop"
                  alt="LMS GHSS Campus"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-secondary p-8 rounded-3xl shadow-2xl hidden md:block">
                <Building2 className="text-white mb-4" size={40} />
                <p className="text-white font-bold text-xl leading-tight">Tamil Nadu <br/>State Board</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose LMS GHSS?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide a nurturing environment where academic rigor meets personal growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                <GraduationCap size={30} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-left">Academic Curriculum</h3>
              <p className="text-gray-600 text-left leading-relaxed">
                Offering high-quality education for Classes 5 to 12, preparing our students to excel in state board examinations with confidence and depth.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 text-secondary">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-left">Holistic Development</h3>
              <p className="text-gray-600 text-left leading-relaxed">
                Beyond textbooks, we encourage students to explore sports, arts, and cultural programs, ensuring a well-rounded and vibrant school life.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                <Building2 size={30} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-left">Supportive Space</h3>
              <p className="text-gray-600 text-left leading-relaxed">
                A safe, girls-only environment that fosters independence, empowerment, and character building in every young woman.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

