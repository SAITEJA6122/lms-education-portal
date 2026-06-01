import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Contact Us" 
        description="We'd love to hear from you. Get in touch with our team for any queries regarding admissions, academics, or school facilities."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 text-left">School Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">Address</h4>
                    <p className="text-gray-600 text-left">123 Education Way, Knowledge City, State 45678, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">Phone</h4>
                    <p className="text-gray-600 text-left">+91 (555) 123-4567</p>
                    <p className="text-gray-600 text-left">+91 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">Email</h4>
                    <p className="text-gray-600 text-left">info@ghss.edu</p>
                    <p className="text-gray-600 text-left">admissions@ghss.edu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">Office Hours</h4>
                    <p className="text-gray-600 text-left">Mon - Fri: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 text-left">Sat: 8:00 AM - 12:00 PM</p>
                    <p className="text-gray-600 text-left font-semibold text-secondary">Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-primary rounded-3xl text-white">
                <h4 className="text-2xl font-bold mb-4 text-left">Admissions Open 2026-27!</h4>
                <p className="text-gray-300 mb-6 text-left">Enroll your child today for the upcoming academic year. Limited seats available for various grades.</p>
                <Button variant="secondary">Apply Now</Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-10 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-8 text-left">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[150px] text-gray-900"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
