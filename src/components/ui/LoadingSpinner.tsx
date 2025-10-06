'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
    </div>
  );
}

// Skeleton loader untuk images
export function ImageSkeleton({ width = '100%', height = '200px', className = '' }: { width?: string; height?: string; className?: string }) {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded-lg ${className}`}
      style={{ width, height }}
    />
  );
}

// Skeleton loader untuk maps iframe
export function MapSkeleton({ width = '100%', height = '400px', className = '' }: { width?: string; height?: string; className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
        <LoadingSpinner size="lg" />
        <span className="ml-3 text-gray-500">Loading map...</span>
      </div>
    </div>
  );
}