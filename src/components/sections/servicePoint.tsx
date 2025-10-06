'use client';

export default function ServicePoint() {

  return (
    <section id="service-points">
      {/* Service Points Section */}
      <div className="max-w-[85rem] px-4 py-8 sm:py-10 sm:px-6 lg:px-10 lg:py-14 mx-auto">
      <div className="align-center">
      </div>
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Our Service Points
            </h1>
            <p className="mt-3 text-gray-600">
              Find our service locations across Indonesia
            </p>
          </div>
          {/* Map Card - Left Side */}
          <div className="flex justify-center mt-8">
            <div className="relative lg:h-[32rem] lg:w-full md:w-full md:h-[26rem] sm:w-full w-full h-96">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1HGlQAeN6Hwwq-cqYc1bT9ZQWWDP3zXg&ehbc=2E312Fs"
                className="lg:h-[32rem] lg:w-full md:w-full md:h-[26rem] sm:w-full w-full h-96 border-0 rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>

            {/* End Map Card */}
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16 ">
            <div className=''>
            <h2 className="text-black font-semibold text-2xl">
                Nationwide Coverage for Your ATM Needs
              </h2>
              <div className="flex gap-x-7 py-6">
                <p className="mb-8 text-lg text-justify font-light lg:text-xl md:text-2xl sm:text-sm text-gray-500">
                  PT. Kevin Guna Pratama operates service points strategically located across major cities in Indonesia. Our extensive network ensures rapid response times and comprehensive coverage for all your ATM maintenance and service requirements.
                </p>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="">
              
              
              <div className="space-y-4">
                <div className="flex items-start gap-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">15+ Major Cities</h3>
                    <p className="text-gray-600">Service points in key metropolitan areas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">24/7 Availability</h3>
                    <p className="text-gray-600">Round-the-clock service support</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Rapid Response</h3>
                    <p className="text-gray-600">Quick deployment to your location</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
      {/* End Service Points Section */}
    </section>
  );
}
