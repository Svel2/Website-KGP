'use client';

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

interface ServiceItem {
  quote: string;
  name: string;
  title: string;
  url: string;
}

interface InfiniteMovingCardsProps {
  items: ServiceItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  onCardClick?: (url: string) => void;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  onCardClick,
}) => {
  const { t } = useTranslation('productServices');
  const router = useRouter();

  const handleCardClick = useCallback((url: string) => {
    if (onCardClick) {
      onCardClick(url);
    } else {
      router.push(url);
    }
  }, [onCardClick, router]);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    };

    addAnimation();

    // Add click event delegation to handle clicks on both original and duplicated items
    const handleClick = (e: MouseEvent) => {
      const li = (e.target as HTMLElement).closest('li');
      if (li) {
        const idx = parseInt(li.getAttribute('data-index') || '-1');
        if (idx >= 0 && idx < items.length) {
          e.preventDefault();
          e.stopPropagation();
          handleCardClick(items[idx].url);
        }
      }
    };

    if (scrollerRef.current) {
      scrollerRef.current.addEventListener('click', handleClick);
    }

    return () => {
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener('click', handleClick);
      }
    };
  }, [items, handleCardClick]);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden ",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 sm:gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-gray-200 bg-white px-4 py-4 md:w-[380px] md:px-6 md:py-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
            key={`${item.name}-${idx}`}
            data-index={idx}
          >
            <div className="flex flex-col items-start text-left">
              {/* Service Title */}
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
                {t(`services.${item.name}.name`)}
              </h3>

              {/* Service Description */}
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-4 flex-grow line-clamp-2 md:line-clamp-3">
                {t(item.quote)}
              </p>

              {/* Service Category Tag */}
              <div className="flex items-center justify-between w-full">
                <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {t(`categories.${item.title}`)}
                </span>

                {/* Arrow Icon */}
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 7l5 5m0 0l-5 5M9 12H2" />
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};