'use client'

export default function HeroLogistic(){
    return(
        <section id="heroMecha">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/images/call-center-bg.jpg)' }}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 bg-black/10 backdrop-brightness-50">
                    {/* Title */}
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Call Center
                        </h1>
                    </div>
                    {/* End Title */}

                    <div className="max-w-3xl text-center mx-auto">
                        <p className="text-lg text-white/70">
                        Our Call Center operates 24/7 to support customer needs, ensuring fast response, ticketing, and issue escalation for ATM and IT services. With dedicated staff and reliable systems, we provide continuous communication to keep operations running smoothly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}