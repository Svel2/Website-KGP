'use client'

export default function ProductService() {
    return (
        <section className='' id='Product-Service'>
            {/* Card Blog */}
            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Product & Service</h2>
                    <p className="mt-1 text-gray-600"></p>
                </div>
                {/* End Title */}

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card */}
                    <a className="group flex flex-col focus:outline-hidden" href="/mechanical-electrical">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/images//mechanical.jpg" alt="Image mechanical electrical" />
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
                                Mechanical Electrical
                            </h3>
                            <p className="mt-3 text-gray-800 ">
                                Produce professional, reliable streams easily leveraging Preline&apos;s innovative broadcast studio
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium ">
                                Read more
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a className="group flex flex-col focus:outline-hidden" href="/logistic-warehouse">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/images/logistic-bg.jpg" alt="Image logistic warehouse" />
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
                                Logistic & Warehouse
                            </h3>
                            <p className="mt-3 text-gray-800 ">
                                Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium ">
                                Read more
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>
                    {/* End Card */}
                    
                    {/* Card */}
                    <a className="group flex flex-col focus:outline-hidden" href="/UPS-Rework">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/images/ups-rework-bg.jpg" alt="Blog Image" />
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
                            UPS Rework
                            </h3>
                            <p className="mt-3 text-gray-800 ">
                            UPS keeps ATMs and IT running. We restore performance, extend life, and ensure stability during power issues.
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium ">
                                Read more
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Grid */}

                {/* Card */}
                <div className="mt-12 text-center">
                    <a className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " href="/menuProduct">
                        Read more
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </a>
                </div>
                {/* End Card */}
            </div>
            {/* End Card Blog */}
            {/* End Card Blog */}
        </section>
    );
}
