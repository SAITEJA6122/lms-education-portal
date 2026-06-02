import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-xl">LMS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">LMS GHSS</span>
                <span className="text-[10px] font-medium text-gray-300 uppercase tracking-wider">Girls Higher Secondary School</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Empowering young women through excellence in education, character building, and holistic development since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white text-left">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/academics" className="text-gray-300 hover:text-secondary transition-colors block text-left">Academics</Link></li>
              <li><Link href="/faculty" className="text-gray-300 hover:text-secondary transition-colors block text-left">Faculty Directory</Link></li>
              <li><Link href="/infrastructure" className="text-gray-300 hover:text-secondary transition-colors block text-left">Infrastructure</Link></li>
              <li><Link href="/student-life" className="text-gray-300 hover:text-secondary transition-colors block text-left">Student Life</Link></li>
              <li><Link href="/achievements" className="text-gray-300 hover:text-secondary transition-colors block text-left">Achievements</Link></li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white text-left">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/admissions" className="text-gray-300 hover:text-secondary transition-colors block text-left">Admissions</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-secondary transition-colors block text-left">News & Events</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-secondary transition-colors block text-left">School Gallery</Link></li>
              <li><Link href="/downloads" className="text-gray-300 hover:text-secondary transition-colors block text-left">Downloads</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors block text-left">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white text-left">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 flex-shrink-0 text-secondary" size={20} />
                <span className="text-gray-300 text-left">123 Education Way, Knowledge City, State 45678, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary" size={20} />
                <span className="text-gray-300 text-left">+91 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary" size={20} />
                <span className="text-gray-300 text-left">info@lmsghss.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2026 LMS Girls Higher Secondary School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
