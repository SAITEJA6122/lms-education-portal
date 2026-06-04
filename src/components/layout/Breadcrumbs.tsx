'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const routeNames: Record<string, string> = {
  '/': 'Home',
  '/about': 'About Us',
  '/history': 'School History',
  '/vision-mission': 'Vision & Mission',
  '/principal-message': "Principal's Message",
  '/academic-programs': 'Academic Programs',
  '/departments': 'Departments',
  '/faculty': 'Faculty Directory',
  '/infrastructure': 'Infrastructure',
  '/admissions': 'Admissions',
  '/student-life': 'Student Life',
  '/achievements': 'Achievements',
  '/gallery': 'Gallery',
  '/news': 'News & Announcements',
  '/events': 'Events Calendar',
  '/downloads': 'Downloads',
  '/contact': 'Contact Us',
};

export const Breadcrumbs = () => {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  // Split path into segments
  const segments = pathname.split('/').filter(segment => segment !== '');
  
  // Build breadcrumb items
  const breadcrumbs = segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/');
    const name = routeNames[path] || segment.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return {
      name,
      path,
      isLast: index === segments.length - 1,
    };
  });

  return (
    <nav className="bg-gray-50 border-b border-gray-100 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {/* Home Link */}
          <li>
            <Link 
              href="/" 
              className="flex items-center gap-1 text-gray-500 hover:text-secondary transition-colors"
            >
              <Home size={14} />
              <span className="sr-only md:not-sr-only md:inline">Home</span>
            </Link>
          </li>
          
          {/* Separator after Home */}
          {breadcrumbs.length > 0 && (
            <ChevronRight size={14} className="text-gray-400" />
          )}
          
          {/* Breadcrumb Items */}
          {breadcrumbs.map((item) => (
            <li key={item.path} className="flex items-center gap-1">
              {item.isLast ? (
                <span className="text-secondary font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link 
                    href={item.path} 
                    className="text-gray-500 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight size={14} className="text-gray-400" />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};