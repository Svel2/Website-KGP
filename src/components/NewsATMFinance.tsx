'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

// SafeImage component untuk handle unconfigured domains
interface SafeImageProps {
  src: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

function SafeImage({ src, alt, fallback, className, width, height, fill }: SafeImageProps) {
  const [imgError, setImgError] = useState(false);
  const [useRegularImg, setUseRegularImg] = useState(false);

  const handleError = () => {
    if (!imgError) {
      setImgError(true);
      // Coba dengan regular img tag
      setUseRegularImg(true);
    }
  };

  // Ekstrak hostname untuk cek apakah domain terkonfigurasi
  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return null;
    }
  };

  const hostname = getHostname(src);

  // Daftar hostname yang sudah dikonfigurasi di next.config.js
  const configuredHosts = [
    'images.unsplash.com',
    'pub-d9fefb329ddd42289dfb5c7f6499ec92.r2.dev',
    'rm.id',
    'www.cnnindonesia.com',
    'money.kompas.com',
    'ekonomi.tempo.co',
    'finansial.bisnis.com',
    'www.antaranews.com',
    'www.republika.co.id',
    'www.tribunnews.com',
    'www.detik.com',
    'cdn1-production-images-kly.akamaized.net',
  ];

  const isConfigured = hostname && configuredHosts.includes(hostname);

  // Jika domain tidak terkonfigurasi atau sudah error, gunakan regular img
  if (!isConfigured || useRegularImg) {
    return (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className={className}
          onError={handleError}
          style={fill ? { objectFit: 'cover', position: 'absolute', inset: 0 } : {}}
          width={width}
          height={height}
        />
        {imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            {fallback}
          </div>
        )}
      </div>
    );
  }

  // Jika domain terkonfigurasi, gunakan Next.js Image component
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill={true}
        className={className}
        onError={handleError}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {imgError && (
        <div className="absolute inset-0 flex items-center justify-center">
          {fallback}
        </div>
      )}
    </div>
  );
}

interface NewsArticle {
  article_id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  image_url?: string;
  source_id: string;
  source_name: string;
  category?: string[];
  country?: string[];
  language?: string;
}

export default function NewsATMFinance() {
  // Responsive configuration untuk menghemat API usage
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Detect screen size untuk responsive API loading
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // NewsData.io Configuration - menggunakan internal API route
  const API_ENDPOINT = '/api/newsdata';

  // State management
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  });

  
  // Responsive configuration untuk menghemat API usage
  const getPageSize = () => {
    if (isMobile) return 4;      // Mobile: 4 articles per page
    if (isTablet) return 6;      // Tablet: 6 articles per page
    return 8;                    // Desktop: 8 articles per page
  };
  const query = 'ATM OR bank OR perbankan OR fintech OR "kartu debit"';
  const pageSize = getPageSize();

  // Cache for better performance
  const cache = useRef(new Map<string, NewsArticle[]>());

  const fetchNews = useCallback(async (page: number = 0, append: boolean = false) => {
    if (loading) return;

    const currentPageSize = getPageSize();
    const cacheKey = `${query}-${page}-${currentPageSize}`;
    if (cache.current.has(cacheKey)) {
      const cachedData = cache.current.get(cacheKey)!;
      setArticles(prev => append ? [...prev, ...cachedData] : cachedData);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: currentPageSize.toString(),
      });

      if (nextPage) {
        params.append('nextPage', nextPage);
      }

      const response = await fetch(`${API_ENDPOINT}?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      }

      const data = await response.json();

      if (data && data.results && data.results.length > 0) {
        const articles = data.results;
        cache.current.set(cacheKey, articles);
        setArticles(prev => append ? [...prev, ...articles] : articles);
        setCurrentPage(page);

        if (data.nextPage) {
          setNextPage(data.nextPage);
        } else {
          setNextPage(null);
        }
      } else {
        setError('No news articles found. Try again later.');
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      if (err instanceof Error) {
        if (err.message.includes('401')) {
          setError('API key is invalid. Please check your NewsData.io token.');
        } else if (err.message.includes('403')) {
          setError('API access forbidden. Please check your NewsData.io subscription.');
        } else {
          setError('Failed to load news. Please check your connection and try again.');
        }
      }
    } finally {
      setLoading(false);
    }
  }, [loading, getPageSize, query, API_ENDPOINT, nextPage]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      // Check if we need to load more when reaching near the end
      const scrollProgress = emblaApi.scrollProgress();
      if (scrollProgress > 0.8 && nextPage && !loading) {
        fetchNews(currentPage + 1, true);
      }
    }
  }, [emblaApi, nextPage, loading, currentPage, fetchNews]);

  // Load initial data
  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchNews(0);
    }
  }, []);

  // Embla Carousel event listener for auto-load more
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const scrollProgress = emblaApi.scrollProgress();
      // Load more when user scrolls to 80% of the content
      if (scrollProgress > 0.8 && nextPage && !loading) {
        fetchNews(currentPage + 1, true);
      }
    };

    const onScroll = () => {
      const scrollProgress = emblaApi.scrollProgress();
      // Load more when user scrolls to 80% of the content
      if (scrollProgress > 0.8 && nextPage && !loading) {
        fetchNews(currentPage + 1, true);
      }
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onScroll);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('scroll', onScroll);
    };
  }, [emblaApi, nextPage, loading, currentPage, fetchNews]);

  
  
  // Utility functions
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).replace(/\s+\S*$/, '...').trim();
  };

  const escapeHtml = (text: string) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  const retryLoad = () => {
    cache.current.clear();
    fetchNews(0);
  };

  
  return (
    <section id="news-atm-finance" className="section news-section py-10 bg-white">
      <div className="news-inner max-w-7xl mx-auto px-6 ">
        <div className="news-header text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            News — ATM & Finance
          </h2>
          <p className="text-gray-600">
            Latest updates from the Indonesian banking and ATM industry
          </p>
        </div>

        <div className="news-carousel-wrapper relative mx-4">

          <div className="embla overflow-hidden lg:py-5 md:py-5" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {loading && articles.length === 0 ? (
                // Loading skeletons
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="news-card-skeleton flex flex-col h-full max-h-96 max-w-110 bg-white border border-gray-200 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] embla__slide flex-[0_0_320px]">
                    <div className="h-48 bg-gray-300 animate-pulse rounded-t-xl"></div>
                    <div className="p-5">
                      <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-300 rounded mb-2 w-3/4 animate-pulse"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                ))
              ) : (
                articles.map((article, index) => (
                  <a
                    key={`${article.article_id}-${index}`}
                    href={article.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col w-80 h-80 sm:h-72 md:h-72 lg:h-80 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer embla__slide flex-[0_0_320px]"
                    role="listitem"
                    aria-label={`News article: ${article.title}`}
                  >
                    <div className="relative h-32 sm:h-28 md:h-28 lg:h-32 flex-shrink-0 overflow-hidden">
                      {article.image_url ? (
                        <SafeImage
                          src={article.image_url}
                          alt={article.title}
                          fill={true}
                          fallback={
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                            </div>
                          }
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      )}

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    <div className="flex-1 flex flex-col p-4 sm:p-3">
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2 flex-shrink-0">
                        <span className="font-medium text-blue-600 line-clamp-1">
                          {escapeHtml(article.source_name || article.source_id || 'Unknown Source')}
                        </span>
                        <span className="whitespace-nowrap">
                          {formatDate(article.pubDate)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight flex-shrink-0 h-12 sm:h-10">
                        {escapeHtml(article.title || 'Untitled')}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed flex-grow h-16 sm:h-14">
                        {escapeHtml(truncateText(article.description || 'No preview available.', 120))}
                      </p>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </a>
                ))
              )}
            </div>
          </div>

          {/* Carousel Navigation */}
          {articles.length > 3 && (
            <>
              <button
                className="embla__prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10"
                onClick={scrollPrev}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="embla__next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10"
                onClick={scrollNext}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Error handling */}
        {error && (
          <div className="news-controls mt-6 text-center">
            <div className="news-error bg-red-50 border border-red-200 rounded-lg p-4 inline-block">
              <p className="text-red-800 mb-2">{error}</p>
              <button
                className="btn news-retry bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                onClick={retryLoad}
              >
                Retry
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}