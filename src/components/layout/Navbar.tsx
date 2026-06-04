'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// More compact navigation items
const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    submenu: [
      { name: 'About Us', href: '/about' },
      { name: 'History', href: '/history' },
      { name: 'Vision & Mission', href: '/vision-mission' },
      { name: 'Principal', href: '/principal-message' },
    ]
  },
  { 
    name: 'Academics', 
    href: '/academic-programs',
    submenu: [
      { name: 'Programs', href: '/academic-programs' },
      { name: 'Departments', href: '/departments' },
      { name: 'Faculty', href: '/faculty' },
    ]
  },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Student Life', href: '/student-life' },
  { 
    name: 'Achievements', 
    href: '/achievements',
    submenu: [
      { name: 'Gallery', href: '/gallery' },
    ]
  },
  { 
    name: 'News & Events', 
    href: '/news',
    submenu: [
      { name: 'Events', href: '/events' },
    ]
  },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Contact', href: '/contact' },
];

const isSubmenuActive = (submenu: { href: string }[], pathname: string) => {
  return submenu.some(item => pathname === item.href);
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-primary focus:p-4 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        Skip to main content
      </a>

      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-14 md:h-16 gap-1 md:gap-2">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-1.5 group flex-shrink-0"
              aria-label="Go to homepage"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                <span className="text-white font-bold text-sm md:text-base">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-primary leading-tight">GHSS</span>
                <span className="hidden lg:block text-[7px] md:text-[8px] font-medium text-gray-500 uppercase tracking-wider">Girls Higher Secondary</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1 xl:space-x-1.5 overflow-x-auto flex-1 justify-end no-scrollbar">
              {navLinks.map((link) => {
                const isActive = link.href !== '#' && pathname === link.href;
                const isParentActive = link.submenu && isSubmenuActive(link.submenu, pathname);
                
                return (
                  <div key={link.name} className="relative group flex-shrink-0">
                    {link.submenu ? (
                      <div className="flex items-center">
                        <Link 
                          href={link.href}
                          className={`font-medium transition-all px-1.5 py-1 md:px-2 md:py-1.5 rounded-md text-xs md:text-sm whitespace-nowrap ${
                            isActive || isParentActive
                              ? 'text-secondary bg-secondary/10' 
                              : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                          onMouseEnter={() => setActiveSubmenu(link.name)}
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          {link.name}
                        </Link>
                      </div>
                    ) : (
                      <Link 
                        href={link.href}
                        className={`font-medium transition-all px-1.5 py-1 md:px-2 md:py-1.5 rounded-md text-xs md:text-sm whitespace-nowrap ${
                          isActive 
                            ? 'text-secondary bg-secondary/10' 
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.name}
                      </Link>
                    )}

                    {link.submenu && (
                      <div 
                        className="absolute top-full left-0 mt-0.5 w-44 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                        role="menu"
                        onMouseEnter={() => setActiveSubmenu(link.name)}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        {link.submenu.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-3 py-1.5 text-xs transition-colors first:rounded-t-lg last:rounded-b-lg whitespace-normal ${
                                isSubActive 
                                  ? 'bg-secondary/10 text-secondary font-medium' 
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                              }`}
                              role="menuitem"
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* REMOVED: CTA Button from navbar */}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary min-h-[40px] min-w-[40px]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden fixed inset-x-0 top-14 md:top-16 bottom-0 z-40 overflow-y-auto"
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              <div className="px-4 pt-2 pb-20 space-y-1">
                {navLinks.map((link) => {
                  const isActive = link.href !== '#' && pathname === link.href;
                  const isParentActive = link.submenu && isSubmenuActive(link.submenu, pathname);
                  
                  return (
                    <div key={link.name}>
                      {link.submenu ? (
                        <>
                          <button
                            className={`w-full flex justify-between items-center py-3 font-medium rounded-lg transition-colors min-h-[48px] ${
                              isParentActive 
                                ? 'text-secondary bg-secondary/10' 
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                            aria-expanded={activeSubmenu === link.name}
                          >
                            <span>{link.name}</span>
                          </button>
                          <AnimatePresence>
                            {activeSubmenu === link.name && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="pl-4 space-y-1 overflow-hidden"
                              >
                                {link.submenu.map((sub) => {
                                  const isSubActive = pathname === sub.href;
                                  return (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      className={`block py-2.5 px-3 rounded-lg transition-colors min-h-[44px] text-sm ${
                                        isSubActive 
                                          ? 'bg-secondary/10 text-secondary font-medium' 
                                          : 'text-gray-600 hover:bg-gray-50'
                                      }`}
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {sub.name}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block py-3 px-3 rounded-lg font-medium transition-colors min-h-[48px] text-sm ${
                            isActive 
                              ? 'text-secondary bg-secondary/10' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
                <div className="pt-4 pb-8">
                  <Button className="w-full min-h-[44px]">Admissions Open</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};