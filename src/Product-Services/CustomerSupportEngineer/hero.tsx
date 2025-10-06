'use client'

export default function HeroCSE(){
    return(
        <section id="heroMecha">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/images/customer-support-engineer-bg.jpg)' }}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 bg-black/10 backdrop-brightness-50">
                    {/* Title */}
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Customer Support Engineer
                        </h1>
                    </div>
                    {/* End Title */}

                    <div className="max-w-3xl text-center mx-auto">
                        <p className="text-lg text-white/70">Our Customer Support Engineers (CSE) deliver on-site and remote assistance for ATM and IT operations. With strong technical knowledge and fast response, they ensure maximum uptime, preventive maintenance, and quick resolution of service issues.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}