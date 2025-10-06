'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function BreadcrumbNav() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    // Generate breadcrumbs based on current path
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    const breadcrumbItems: BreadcrumbItem[] = [
      { name: 'Home', href: '/' }
    ];

    // Add current page if it's not the home page
    if (pathSegments.length > 0) {
      const currentPage = pathSegments[pathSegments.length - 1];
      breadcrumbItems.push({
        name: getPageName(currentPage),
        href: pathname
      });
    }

    setBreadcrumbs(breadcrumbItems);
  }, [pathname]);

  // Helper function to get human-readable page names
  function getPageName(segment: string): string {
    const pageNames: Record<string, string> = {
      'about': 'Tentang Kami',
      'services': 'Layanan',
      'contact': 'Kontak',
      'gallery': 'Galeri',
      'news': 'Berita',
      'workshop-maintenance-lcd': 'Workshop Maintenance LCD'
    };

    return pageNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  }

  // Only show breadcrumbs if we have more than just the home page
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="py-4 px-6 bg-gray-50" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-700 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}