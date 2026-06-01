import { PageHeader } from "@/components/layout/PageHeader";
import { Users, Palette, Globe, Trophy } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "Student Clubs",
    description: "From Debate to Robotics, we have a wide range of clubs to suit every interest.",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description: "Annual festivals, theater productions, and art exhibitions throughout the year.",
  },
  {
    icon: Globe,
    title: "Community Service",
    description: "Encouraging students to give back to society through various outreach programs.",
  },
  {
    icon: Trophy,
    title: "Competitive Sports",
    description: "Our teams compete at regional and national levels in multiple disciplines.",
  },
];

export default function StudentLifePage() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Student Life" 
        description="Experience a vibrant and enriching campus life beyond academics."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Beyond the Classroom</h2>
            <p className="text-gray-600 text-lg">
              We believe in providing opportunities for students to explore their interests, 
              develop leadership skills, and build lifelong friendships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {activities.map((a, index) => (
              <div key={index} className="flex space-x-6 p-8 bg-muted rounded-3xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm text-primary">
                  <a.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{a.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
