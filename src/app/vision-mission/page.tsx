import { PageHeader } from "@/components/layout/PageHeader";
import { Target, Compass, Heart } from "lucide-react";

export default function VisionMissionPage() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Vision & Mission" 
        description="Defining our purpose and our path forward."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-muted p-12 rounded-3xl text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a premier institution in Kanyakumari District that inspires every young woman 
                to be a lifelong learner, a confident leader, and a responsible global citizen.
              </p>
            </div>

            <div className="bg-primary p-12 rounded-3xl text-center text-white shadow-xl transform md:-translate-y-8">
              <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Compass size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-100 leading-relaxed">
                To provide a holistic and empowering education for girls, fostering academic 
                excellence (TNBSE), moral character, and the skills needed to thrive in 
                a dynamic world.
              </p>
            </div>

            <div className="bg-muted p-12 rounded-3xl text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Heart size={32} />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-6">Our Values</h2>
              <ul className="text-gray-600 space-y-2">
                <li>Integrity & Honesty</li>
                <li>Respect for Diversity</li>
                <li>Continuous Innovation</li>
                <li>Commitment to Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
