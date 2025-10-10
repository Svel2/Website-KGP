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

          
        </div>
      </div>
      {/* End Service Points Section */}
    </section>
  );
}
