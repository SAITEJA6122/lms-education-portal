import { PageHeader } from "@/components/layout/PageHeader";
import { Monitor, FlaskConical, Book, Music, Dumbbell, Coffee } from "lucide-react";

const facilities = [
  {
    icon: Monitor,
    title: "IT Center",
    description: "Equipped with the latest computers and high-speed internet for digital literacy.",
  },
  {
    icon: FlaskConical,
    title: "Science Labs",
    description: "Dedicated physics, chemistry, and biology labs for hands-on experimentation.",
  },
  {
    icon: Book,
    title: "Central Library",
    description: "A vast collection of books, journals, and digital resources for research.",
  },
  {
    icon: Music,
    title: "Art & Music Studios",
    description: "Creative spaces for students to explore their artistic and musical talents.",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Multi-purpose indoor and outdoor facilities for physical education.",
  },
  {
    icon: Coffee,
    title: "Modern Cafeteria",
    description: "Providing healthy and nutritious meals in a clean and welcoming environment.",
  },
];

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Infrastructure" 
        description="State-of-the-art facilities designed to provide the best learning environment."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f, index) => (
              <div key={index} className="group p-8 border border-gray-100 rounded-3xl hover:bg-primary transition-all duration-300">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20">
                  <f.icon className="text-primary group-hover:text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-200">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
