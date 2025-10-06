'use client'
import Image from 'next/image';

export default function What() {
    return (
        <section id="what" className="bg-gray-50">
            <div className="content-section py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            What Do We Aim to Achieve?
                        </h1>
                        <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
                    </div>

                    <div className="grid items-center lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-body text-justify leading-relaxed">
                                    Delivering reliable, fast, and secure ATM services across Indonesia, we are committed to ensuring maximum uptime and seamless accessibility for every user. By prioritizing operational excellence and leveraging advanced technology, we help partners and financial institutions maintain smooth transactions while building trust with cardholders.
                                </p>

                                <p className="text-body text-justify leading-relaxed">
                                    Our focus is not only on keeping machines running efficiently but also on creating a safe and satisfying experience that strengthens confidence in modern banking services nationwide.
                                </p>
                            </div>

                            {/* Key Goals */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">Maximum Uptime</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">Fast Service</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">Secure Operations</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">Customer Trust</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src="/images/what.jpg"
                                alt="ATM Services Goals"
                                width={800}
                                height={900}
                                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}