'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const initPreline = async () => {
      try {
        // Load Preline UI
        await import('preline/dist/index.js');
        
        // Initialize dengan delay untuk memastikan DOM siap
        setTimeout(() => {
          if (typeof window !== 'undefined' && window.HSStaticMethods) {
            // Gunakan autoInit yang sudah menangani semua komponen termasuk carousel
            window.HSStaticMethods.autoInit();
            

          }
        }, 300);
      } catch (error) {
        console.error('Failed to load Preline UI:', error);
      }
    };

    initPreline();
  }, []);

  // Re-initialize when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.HSStaticMethods) {
        try {
          // Re-initialize semua komponen Preline
          window.HSStaticMethods.autoInit();
          

        } catch (error) {
          console.warn('Failed to re-initialize Preline:', error);
        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [path]);

  return null;
}