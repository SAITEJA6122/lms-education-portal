'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '#',
    submenu: [
      { name: 'About Us', href: '/about' },
      { name: 'History & Legacy', href: '/history' },
      { name: 'Vision & Mission', href: '/vision-mission' },
      { name: 'Principal Message', href: '/principal-message' },
      { name: 'Management', href: '/management' },
    ]
  },
  {
    name: 'Academics',
    href: '#',
    submenu: [
      { name: 'Programs', href: '/academics' },
      { name: 'Faculty', href: '/faculty' },
      { name: 'Departments', href: '/departments' },
      { name: 'Academic Calendar', href: '/downloads' },
    ]
  },
  {
    name: 'Admissions',
    href: '#',
    submenu: [
      { name: 'Procedure', href: '/admissions' },
      { name: 'Enquiry Form', href: '/contact' },
    ]
  },
  { name: 'Infrastructure', href: '/infrastructure' },
  { 
    name: 'Life at GHSS', 
    href: '#',
    submenu: [
      { name: 'Student Life', href: '/student-life' },
      { name: 'Achievements', href: '/achievements' },
      { name: 'Gallery', href: '/gallery' },
    ]
  },
  { name: 'News', href: '/news' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
              <span className="text-white font-bold text-2xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-none">GHSS</span>
              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Girls Higher Secondary School</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button 
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium"
                    onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link 
                    href={link.href}
                    className={`font-medium transition-colors ${
                      pathname === link.href ? 'text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button size="sm">Enroll Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <>
                      <button
                        className="w-full flex justify-between items-center py-3 text-gray-700 font-medium"
                        onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`transition-transform ${activeSubmenu === link.name ? 'rotate-180' : ''}`} size={18} />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block py-2 text-gray-600 text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-3 text-gray-700 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full">Enroll Now</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
