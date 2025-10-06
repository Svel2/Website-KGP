"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

interface StickyScrollProps {
  content: Array<{
    title: string;
    description: string;
    content: React.ReactNode;
  }>;
  contentClassName?: string;
}

export function StickyScroll({ content, contentClassName }: StickyScrollProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = element.querySelectorAll("section");
      let active = 0;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          active = index;
        }
      });

      setActiveIndex(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative flex h-[600px] items-start gap-8 p-8">
      <div className={cn(
        "sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto w-1/3",
        contentClassName
      )}>
        {content.map((item, index) => (
          <div
            key={index}
            className={cn(
              "mb-12 p-6 rounded-lg transition-all duration-300 cursor-pointer",
              index === activeIndex
                ? "bg-brand-50 border-2 border-brand-600 scale-105 shadow-lg"
                : "bg-white border border-gray-200 scale-95 opacity-70 hover:opacity-100"
            )}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="w-2/3">
        {content.map((item, index) => (
          <section
            key={index}
            className="h-[600px] w-full flex-shrink-0 overflow-hidden rounded-2xl"
          >
            {item.content}
          </section>
        ))}
      </div>
    </div>
  );
}