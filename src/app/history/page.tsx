import { PageHeader } from "@/components/layout/PageHeader";

const milestones = [
  { year: "1995", event: "LMS Girls Higher Secondary School established with a vision to empower girls through education." },
  { year: "2000", event: "Inauguration of the Neyyoor campus, expanding our reach in Kanyakumari District." },
  { year: "2008", event: "Establishment of the Marthandam campus to serve more students in the region." },
  { year: "2015", event: "Achieved consistent 100% pass results in TNBSE State Board examinations." },
  { year: "2020", event: "Modernization of labs and introduction of digital classrooms across all branches." },
  { year: "2025", event: "Celebrating 30 years of excellence in girls' education and community empowerment." },
];

export default function HistoryPage() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Our History" 
        description="A journey of growth, innovation, and unwavering commitment to students."
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div key={index} className="flex space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                  {index !== milestones.length - 1 && <div className="w-0.5 h-full bg-gray-100 mt-2"></div>}
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.year}</h3>
                  <p className="text-gray-600 text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
