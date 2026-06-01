import { PageHeader } from "@/components/layout/PageHeader";

const milestones = [
  { year: "1995", event: "GHSS founded with 50 students." },
  { year: "2005", event: "Inauguration of the first Science Laboratory." },
  { year: "2010", event: "Achieved 'Top School' status in the national rankings." },
  { year: "2015", event: "Expanded to include High School and Vocational programs." },
  { year: "2020", event: "Launched the Digital Learning Initiative." },
  { year: "2025", event: "Celebrating 25 years of educational excellence." },
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
