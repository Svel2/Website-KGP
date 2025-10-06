'use client'

import Image from 'next/image'

export default function HeroCSE() {
  return (
    <section id="heroMecha" className="relative h-[600px]">
      {/* Background */}
      <Image
        src="/images/customer-support-engineer-bg.jpg"
        alt="Background CSE"
        fill
        priority          // untuk hero biar cepat
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
          Customer Support Engineer
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/70">
          Our Customer Support Engineers (CSE) deliver on-site and remote
          assistance for ATM and IT operations...
        </p>
      </div>
    </section>
  )
}
