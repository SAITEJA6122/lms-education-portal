import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-xl">LMS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">LMS GHSS</span>
                <span className="text-[10px] font-medium text-gray-300 uppercase tracking-wider">Girls Higher Secondary School</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 text-sm">
              Empowering young women through excellence in education, character building, and holistic development since 1995.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">About Us</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-secondary transition-colors block text-sm">About GHSS</Link></li>
              <li><Link href="/history" className="text-gray-300 hover:text-secondary transition-colors block text-sm">School History</Link></li>
              <li><Link href="/vision-mission" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Vision & Mission</Link></li>
              <li><Link href="/principal-message" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Principal's Message</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Academics</h4>
            <ul className="space-y-3">
              <li><Link href="/academic-programs" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Academic Programs</Link></li>
              <li><Link href="/departments" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Departments</Link></li>
              <li><Link href="/faculty" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Faculty Directory</Link></li>
              <li><Link href="/infrastructure" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/admissions" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Admissions</Link></li>
              <li><Link href="/student-life" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Student Life</Link></li>
              <li><Link href="/achievements" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Achievements</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Gallery</Link></li>
              <li><Link href="/downloads" className="text-gray-300 hover:text-secondary transition-colors block text-sm">Downloads</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 flex-shrink-0 text-secondary" size={20} />
                <span className="text-gray-300 text-left">Neyyoor, Kanyakumari District, Tamil Nadu, 629802</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary" size={20} />
                <span className="text-gray-300 text-left">(04651) 270536</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary" size={20} />
                <span className="text-gray-300 text-left">info@lmsghss.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>© 2026 Girls Higher Secondary School. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};