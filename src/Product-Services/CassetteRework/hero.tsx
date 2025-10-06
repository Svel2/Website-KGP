'use client'

export default function HeroLogistic(){
    return(
        <section id="heroMecha">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/images/cassette-rework-bg.jpg)' }}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 bg-black/10 backdrop-brightness-50">
                    {/* Title */}
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Cassette Rework
                        </h1>
                    </div>
                    {/* End Title */}

                    <div className="max-w-3xl text-center mx-auto">
                        <p className="text-lg text-white/70">
                        We provide professional cassette rework services for ATM cash units to restore functionality, extend usage life, and reduce replacement costs. Our workshop ensures quality repair with precise techniques and genuine parts.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}