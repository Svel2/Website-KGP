"use client";

import { tr } from "motion/react-client";
import CardSwap, { Card } from "./ui/card-swap";

export default function OurGallery() {
  return (
    <section id="our-gallery" className="bg-[#191547] lg:pb-40 overflow-hidden">
      <div className="content-section py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          {/* Left copy (light mode) */}
          <div className="px-2  ">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#FF662D]">
              Our Gallery
              <br /><span className="text-white">PT. Kevin Guna Pratama</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-300">Just look at it go!</p>
          </div>

          {/* Right: CardSwap showcase (clip to section on all sizes) */}
          <div className="relative w-full h-[520px] rounded-xl">
            <CardSwap cardDistance={35} verticalDistance={115} delay={3000} pauseOnHover={false}>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden ">
                <div className="flex h-full w-full flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gallery 1</h3>
                  <div className="flex-1 mt-2 rounded-lg border border-gray-200 bg-[url('/images/gallery1.jpg')] bg-cover bg-center p-2">
                    
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden ">
                <div className="flex h-full w-full flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gallery 2</h3>
                  <div className="flex-1 mt-2 rounded-lg border border-gray-200 bg-[url('/images/gallery2.jpg')] bg-cover bg-center p-2">
                    
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden">
                <div className="flex h-full w-full flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gallery 3</h3>
                  <div className="flex-1 mt-2 rounded-lg border border-gray-200 bg-[url('/images/gallery3.jpg')] bg-cover bg-center p-2">
                    
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden">
                <div className="flex h-full w-full flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gallery 4</h3>
                  <div className="flex-1 mt-2 rounded-lg border border-gray-200 bg-[url('/images/gallery4.jpg')] bg-cover bg-center p-2">
                    
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden">
                <div className="flex h-full w-full flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gallery 5</h3>
                  <div className="flex-1 mt-2 rounded-lg border border-gray-200 bg-[url('/images/gallery5.jpg')] bg-cover bg-center p-2">
                    
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
