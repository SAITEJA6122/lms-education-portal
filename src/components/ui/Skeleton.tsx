'use client';

import React from 'react';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

export const Skeleton = ({ 
  variant = 'text', 
  width, 
  height, 
  className = '', 
  count = 1 
}: SkeletonProps) => {
  const getBaseClasses = () => {
    const base = 'animate-pulse bg-gray-200 rounded';
    if (variant === 'circular') return `${base} rounded-full`;
    if (variant === 'card') return `${base} rounded-2xl`;
    if (variant === 'rectangular') return `${base} rounded-xl`;
    return `${base} rounded-md`;
  };

  const getDimensions = () => {
    const styles: React.CSSProperties = {};
    if (width) styles.width = typeof width === 'number' ? `${width}px` : width;
    if (height) styles.height = typeof height === 'number' ? `${height}px` : height;
    return styles;
  };

  const renderSkeleton = () => (
    <div
      className={`${getBaseClasses()} ${className}`}
      style={getDimensions()}
    />
  );

  if (count === 1) return renderSkeleton();

  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </div>
  );
};

// Card Skeleton - For blog/news cards
export const CardSkeleton = ({ count = 1 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <Skeleton variant="rectangular" height={160} className="mb-4" />
        <Skeleton width="60%" height={20} className="mb-3" />
        <Skeleton width="90%" height={16} className="mb-2" />
        <Skeleton width="80%" height={16} className="mb-4" />
        <Skeleton width="40%" height={14} />
      </div>
    ))}
  </div>
);

// Profile Skeleton
export const ProfileSkeleton = () => (
  <div className="flex items-center gap-4">
    <Skeleton variant="circular" width={48} height={48} />
    <div className="flex-1">
      <Skeleton width="60%" height={16} className="mb-2" />
      <Skeleton width="40%" height={12} />
    </div>
  </div>
);

// Table Row Skeleton
export const TableRowSkeleton = ({ columns = 4, rows = 5 }: { columns?: number; rows?: number }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="flex gap-4">
        {Array.from({ length: columns }).map((_, j) => (
          <Skeleton key={j} height={24} className="flex-1" />
        ))}
      </div>
    ))}
  </div>
);