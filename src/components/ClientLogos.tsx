"use client";

import Image from 'next/image';
import { useInView } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ClientLogos = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        mass: 0.8
      }
    }
  } as const;

  const clientLogos = [
    {
      name: 'INTISOFT',
      src: '/images/INTISOFT C.png',
      srcSet: {
        default: '/images/INTISOFT C.png',
        retina: '/images/INTISOFT C@2x.png'
      },
      alt: 'PT INTISOFT',
      id: 'intisoft',
      color: '#3B82F6'
    },
    {
      name: 'DN',
      src: '/images/DN C.png',
      srcSet: {
        default: '/images/DN C.png',
        retina: '/images/DN C@2x.png'
      },
      alt: 'DN',
      id: 'dn',
      color: '#10B981'
    },
    {
      name: 'ATMI',
      src: '/images/ATMI_v.png',
      srcSet: {
        default: '/images/ATMI_v.png',
        retina: '/images/ATMI_v@2x.png'
      },
      alt: 'ATMI',
      id: 'atmi',
      color: '#F59E0B'
    },
    {
      name: 'BBW',
      src: '/images/BBW C.png',
      srcSet: {
        default: '/images/BBW C.png',
        retina: '/images/BBW C@2x.png'
      },
      alt: 'BBW',
      id: 'bbw',
      color: '#EF4444'
    },
  ];

  const handleImageLoad = (logoId: string) => {
    setLoadedImages(prev => new Set([...prev, logoId]));
  };

  const getOptimizedImageSrc = (logo: any, isRetina: boolean = false) => {
    if (isRetina && logo.srcSet.retina) {
      return logo.srcSet.retina;
    }
    return logo.src;
  };

  return (
    <section
      id='clientLogos'
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-50/20 via-transparent to-transparent"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >


          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Our Valued
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>


        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-slate-100 hover:border-slate-200 overflow-hidden">
                {/* Animated Background Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${logo.color}05 0%, ${logo.color}02 50%, transparent 100%)`
                  }}
                />

                {/* Glow Effect */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${logo.color}20 0%, transparent 70%)`
                  }}
                />

                {/* Logo Container */}
                <div className="relative h-32 lg:h-40 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Loading Skeleton */}
                    {!loadedImages.has(logo.id) && (
                      <div className="absolute inset-0 bg-slate-100 rounded-2xl animate-pulse">
                        <div className="h-full w-full bg-gradient-to-br from-transparent via-slate-200 to-transparent animate-shimmer"></div>
                      </div>
                    )}

                    {/* Logo Image */}
                    <div className="relative w-full h-full p-4">
                      <Image
                        src={getOptimizedImageSrc(logo)}
                        alt={logo.alt}
                        fill
                        className={`
                          object-contain transition-all duration-700
                          ${loadedImages.has(logo.id)
                            ? 'opacity-100 scale-100 filter grayscale-0'
                            : 'opacity-0 scale-95 filter grayscale'
                          }
                          group-hover:scale-110 group-hover:filter-none
                        `}
                        sizes="(max-width: 640px) 40vw, (max-width: 768px) 35vw, (max-width: 1024px) 20vw, 15vw"
                        quality={90}
                        priority={index < 4}
                        onLoad={() => handleImageLoad(logo.id)}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                          `<svg width="80" height="48" xmlns="http://www.w3.org/2000/svg">
                            <rect width="80" height="48" fill="#f8fafc"/>
                            <rect x="20" y="18" width="40" height="12" rx="2" fill="#e2e8f0"/>
                            <text x="40" y="26" font-family="Arial" font-size="8" fill="#94a3b8" text-anchor="middle">${logo.name}</text>
                          </svg>`
                        ).toString('base64')}`}
                        style={{
                          objectFit: 'contain',
                          filter: loadedImages.has(logo.id)
                            ? 'none'
                            : 'blur(10px) grayscale(100%)'
                        }}
                      />
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Company Name */}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}

      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 20%,
            rgba(255, 255, 255, 0.6) 60%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;