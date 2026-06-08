'use client';

import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, Phone, MapPin, Send, Clock, User, GraduationCap, Users, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const [formData, setFormData] = useState({
    parent_name: '',
    student_name: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus({ type: null, message: '' });
    
    // Validation
    if (!formData.parent_name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields (Parent Name, Email, and Message)'
      });
      setLoading(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      setLoading(false);
      return;
    }
    
    try {
      const payload = {
        Parent_name: formData.parent_name,
        Student_name: formData.student_name || null,
        Email: formData.email,
        Phone_no: formData.phone || null,
        Grade: formData.grade || null,
        Message: formData.message
      };
      
      console.log('Sending payload:', payload); // Debug log
      
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();
      console.log('Response:', result); // Debug log
      
      if (result.success) {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your enquiry has been submitted successfully. We will contact you soon.'
        });
        // Reset form
        setFormData({
          parent_name: '',
          student_name: '',
          email: '',
          phone: '',
          grade: '',
          message: ''
        });
      } else {
        setFormStatus({
          type: 'error',
          message: result.error || 'Failed to submit enquiry. Please try again.'
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setFormStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Contact Us" 
        description="We'd love to hear from you. Get in touch with our team for any queries regarding admissions, academics, or school facilities."
      />
      
      {/* Google Maps Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31322.217677620963!2d78.6997775!3d11.019466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8b4c4c2b7b4e5%3A0x6b6b6b6b6b6b6b6b!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
              className="w-full"
            ></iframe>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
            <MapPin size={16} className="text-secondary" />
            <span>123 Education Way, Trichy, Tamil Nadu, India - 620001</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white pt-0">
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
                    <p className="text-gray-600 text-left">123 Education Way, Trichy,<br />Tamil Nadu, India - 620001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">Phone</h4>
                    <p className="text-gray-600 text-left">+91 (431) 123-4567</p>
                    <p className="text-gray-600 text-left">+91 (431) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">Email</h4>
                    <p className="text-gray-600 text-left">info@lmsghss.edu</p>
                    <p className="text-gray-600 text-left">admissions@lmsghss.edu</p>
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
              
              {/* Status Messages */}
              {formStatus.type === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-green-700">{formStatus.message}</p>
                </div>
              )}
              
              {formStatus.type === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-red-700">{formStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Parent Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-left">
                    <Users size={14} className="inline mr-1" /> Parent/Guardian Name *
                  </label>
                  <input 
                    type="text" 
                    name="parent_name"
                    value={formData.parent_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                    placeholder="Enter parent/guardian full name"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Student Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-left">
                    <User size={14} className="inline mr-1" /> Student Name
                  </label>
                  <input 
                    type="text" 
                    name="student_name"
                    value={formData.student_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                    placeholder="Enter student full name"
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                      placeholder="Your Email"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                      placeholder="Your Phone Number"
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Grade/Class */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-left">
                    <GraduationCap size={14} className="inline mr-1" /> Grade/Class
                  </label>
                  <select 
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900"
                    disabled={loading}
                  >
                    <option value="">Select Grade</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[150px] text-gray-900"
                    placeholder="How can we help you?"
                    required
                    disabled={loading}
                  ></textarea>
                </div>
                
                {/* Send Message Button */}
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg" 
                  rightIcon={!loading ? <Send size={20} /> : undefined}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}