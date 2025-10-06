'use client';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-3 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
                <a className="flex-none text-xl font-semibold focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
                    <span className="inline-flex items-center gap-x-2 text-xl font-semibold text-black">
                        <Image className="w-10 h-auto" src="/images/logoKGP.png" alt="Logo" width={40} height={40} />
                        <p className='hidden lg:block'>Kevin Guna Pratama</p>
                    </span>
                </a>
                <div className="sm:order-3 flex items-center gap-x-2">
                    <a href="/#contact" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-[#0B0547] hover:text-white focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        Contact Us
                    </a>   
                    <button type="button" className="sm:hidden hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
                        <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                        <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        <span className="sr-only">Toggle</span>
                    </button>
                    

                </div>
                <div id="hs-navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <a className="font-medium text-blue-500 focus:outline-hidden" href="/" aria-current="page">Home</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400" href="/#about">About Us</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400" href="/#service-points">Our Service Points</a>
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive] ">
                            <button id="hs-navbar-example-dropdown" type="button" className="hs-dropdown-toggle flex items-center w-full text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 font-medium" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                                Products & Services
                                <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 before:absolute top-full sm:border border-gray-200 before:-top-5 before:start-0 before:w-full before:h-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="/mechanical-electrical">
                                    Mechanical Electrical
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="/logistic-warehouse">
                                    Logistic & Warehouse
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="/UPS-Rework">
                                    UPS Rework
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"  href="/CustomerSupportEngineer">
                                    Customer Support Engineer
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 " href="/CallCenter">
                                    Call Center
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 " href="/Monitoring">
                                    Monitoring
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 " href="/DuctingSystem">
                                    Ducting System
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 " href="/WorkshopMaintenanceLCD">
                                    Workshop Maintenance LCD
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 " href="/CassetteRework">
                                    Cassette Rework
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 " href="/ATMModuleRework">
                                    ATM Module Rework
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 " href="/Plumbing">
                                    Plumbing
                                </a>
                            </div>
                        </div>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/#news-atm-finance">News</a>

                    </div>
                </div>
            </nav>
        </header>
    )
}