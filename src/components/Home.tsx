'use client';

import Image from 'next/image';

export default function HomeSlider() {
    return (
        <section className="bg-white pt-16" id="Home">
            {/* Slider */}
            {/* Slider */}
            <div data-hs-carousel='{
                    "isAutoHeight": true,
                    "loadingClasses": "opacity-0",
                    "isAutoPlay": true,
                    "autoPlayInterval": 5000,
                    "pauseOnHover": true,
                    "rewind": true,
                    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"
                    
                }' className="relative">
                <div className="hs-carousel relative overflow-hidden w-full bg-white">
                    <div className="hs-carousel-body flex flex-nowrap overflow-hidden transition-[height,transform] duration-700 opacity-0">
                        <div className="hs-carousel-slide h-full lg:h-full">
                            <picture className='flex justify-center h-full'>
                                <source media="(max-width: 640px)" srcSet="/images/mobile3.png" />
                                <source media="(max-width: 1024px)" srcSet="/images/tablet0.png" />

                                <img

                                    src="/images/Banna0.png"
                                    alt="Design desktop"
                                    width="1920"
                                    height="1080"
                                />
                            </picture>
                        </div>
                        <div className="hs-carousel-slide h-full">
                            <picture className='flex justify-center h-full'>
                                <source media="(max-width: 640px)" srcSet="/images/mobile2.png" />
                                <source media="(max-width: 1024px)" srcSet="/images/tablet00.png" />

                                <img

                                    src="/images/Banna00.png"
                                    alt="Design desktop"
                                    width="1920"
                                    height="1080"
                                />
                            </picture>
                        </div>
                        <div className="hs-carousel-slide h-full lg:h-full">
                            <picture className='flex justify-center h-full'>
                                <source media="(max-width: 640px)" srcSet="/images/mobile4.png" />
                                <source media="(max-width: 1024px)" srcSet="/images/tablet000.png" />

                                <img

                                    src="/images/Banna000.png"
                                    alt="Design desktop"
                                    width="1920"
                                    height="1080"

                                />
                            </picture>
                        </div>
                    </div>
                </div>

                {/* Button Prev */}
                <button
                    type="button"
                    className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none 
             absolute inset-y-0 start-0 
             hidden md:inline-flex   /* ❌ hidden di mobile, ✅ muncul mulai md (≥768px) */
             justify-center items-center w-11.5 h-full 
             text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 
             rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>

                {/* Button Next */}
                <button
                    type="button"
                    className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none 
                    absolute inset-y-0 end-0 
                    hidden md:inline-flex 
                    justify-center items-center w-11.5 h-full 
                    text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 
                    rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>


                <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
            </div>
            {/* End Slider */}
            {/* End Slider */}
        </section>
    );
}