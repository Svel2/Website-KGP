'use client'

export default function HeroLogistic(){
    return(
        <section id="heroMecha">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/images/workshop-maintenance-lcd-bg.jpg)' }}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 bg-gray-800/30 backdrop-brightness-50">
                    {/* Title */}
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Workshop Maintenance LCD
                        </h1>
                    </div>
                    {/* End Title */}

                    <div className="max-w-3xl text-center mx-auto">
                        <p className="text-lg text-white/70">
                        Our specialized workshop provides repair, maintenance, and refurbishment of ATM LCD screens to ensure device reliability, extended lifespan, and reduced replacement costs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}