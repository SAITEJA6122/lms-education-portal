'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-secondary" size={48} />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" className="w-full sm:w-auto">
              <Home size={18} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-xl hover:bg-primary hover:text-white transition-all"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/about" className="text-sm text-primary hover:text-secondary transition-colors">About Us</Link>
            <span className="text-gray-300">•</span>
            <Link href="/admissions" className="text-sm text-primary hover:text-secondary transition-colors">Admissions</Link>
            <span className="text-gray-300">•</span>
            <Link href="/academic-programs" className="text-sm text-primary hover:text-secondary transition-colors">Programs</Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-sm text-primary hover:text-secondary transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}