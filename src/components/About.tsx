'use client';
import Image from 'next/image';
import CountUp from './ui/CountUp'

export default function About() {
    return (
        <section id="about" className="bg-white">
            <div className="content-section py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            About Us
                        </h1>
                        <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
                    </div>

                    <div className="grid items-center lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Image Section */}
                        <div className="relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://picsum.photos/800/600?random=office"
                                alt="Modern Professional Office - Kevin Guna Pratama"
                                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover transform hover:scale-105 transition-transform duration-500 rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6">
                            <h2 className="text-lg md:text-lg lg:text-3xl font-bold text-gray-900 leading-tight">
                                Trusted Nationwide Partner for ATM Maintenance & Services
                            </h2>

                            <div className="space-y-4">
                                <p className="text-body text-justify leading-relaxed">
                                    PT. Kevin Guna Pratama (KGP) is a national company specializing in ATM Maintenance & Services, delivering repair, maintenance, and performance upgrades with industry-leading standards.
                                </p>

                                <p className="text-body text-justify leading-relaxed">
                                    Since its establishment in 2014, KGP has grown from a regional provider into a trusted nationwide partner for major banks and vendors. Guided by the philosophy of &quot;fix-first, replace-last,&quot; we provide cost-efficient, fast, and reliable solutions.
                                </p>

                                <p className="text-body text-justify leading-relaxed">
                                    With over 5,000 ATMs serviced across Indonesia, our certified technicians ensure seamless banking operations for clients in major cities nationwide.
                                </p>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                                <div className="text-center p-4 bg-brand-50 rounded-lg">
                                    <div className="text-lg md:text-lg font-bold text-brand-600">
                                         <CountUp
                                            from={0}
                                            to={2014}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text"
                                        />
                                        </div>
                                    <div className="text-sm text-gray-600">Founded</div>
                                </div>
                                <div className="text-center p-4 bg-brand-50 rounded-lg">
                                    <div className="text-2xl font-bold text-brand-600">
                                        <CountUp
                                            from={0}
                                            to={5000}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text"
                                        />+
                                    </div>
                                    <div className="text-sm text-gray-600">ATMs Serviced</div>
                                </div>
                                <div className="text-center p-4 bg-brand-50 rounded-lg">
                                    <div className="text-2xl font-bold text-brand-600">
                                         <CountUp
                                            from={0}
                                            to={24}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text"
                                        />
                                        /
                                         <CountUp
                                            from={0}
                                            to={7}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text"
                                        />
                                        </div>
                                    <div className="text-sm text-gray-600">Support</div>
                                </div>
                                <div className="text-center p-4 bg-brand-50 rounded-lg">
                                    <div className="text-2xl font-bold text-brand-600">
                                        <CountUp
                                            from={0}
                                            to={100}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text"
                                        />
                                        +</div>
                                    <div className="text-sm text-gray-600">Cities</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}