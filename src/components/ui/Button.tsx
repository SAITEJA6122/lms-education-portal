'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary shadow-sm hover:shadow-md',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary shadow-sm hover:shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary bg-transparent',
    ghost: 'hover:bg-primary/10 text-primary focus-visible:ring-primary',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600 shadow-sm',
    success: 'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600 shadow-sm',
  };

  const sizes = {
    sm: 'h-9 px-3.5 text-sm gap-1.5 min-h-[36px]',
    md: 'h-11 px-5 py-2.5 text-base gap-2 min-h-[44px]',
    lg: 'h-13 px-6 py-3 text-lg gap-2 min-h-[52px]',
    xl: 'h-15 px-8 py-3.5 text-xl gap-2.5 min-h-[60px]',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <svg 
          className="animate-spin h-4 w-4 shrink-0" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span className="inline-block">{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </motion.button>
  );
};