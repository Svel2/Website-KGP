import Image from 'next/image';

const ClientLogos = () => {
  const clientLogos = [
    { src: '/images/INTISOFT.png', alt: 'Client INTISOFT' },
    { src: '/images/DN.png', alt: 'Client DN' },
    { src: '/images/ATMI.png', alt: 'Client ATMI' },
    { src: '/images/BBW.png', alt: 'Client BBW' },
  ];

  
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Clients
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={120}
                className="max-h-32 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
            </section>
  );
};

export default ClientLogos;