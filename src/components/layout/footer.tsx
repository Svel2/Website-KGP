'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <Image
                                src="/images/logoKGP.png"
                                alt="Kevin Guna Pratama Logo"
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                            <div>
                                <h3 className="text-xl font-bold">Kevin Guna Pratama</h3>
                                <p className="text-sm text-gray-400">Professional ATM Services</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Trusted partner for comprehensive ATM maintenance and technical solutions across Indonesia.
                        </p>
                        <div className="flex space-x-4">
                            {/* Google Maps */}
                            <a href="https://www.google.com/maps/d/embed?mid=1HGlQAeN6Hwwq-cqYc1bT9ZQWWDP3zXg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                                <img src="/svg/map-pin.svg" alt="Google Maps" className="w-5 h-5" />
                            </a>

                            {/* Instagram */}
                            <a href="https://instagram.com/kevin.gunapratama" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                               <img src="/svg/instagram.svg" alt="Instagram" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/#service-points" className="text-gray-400 hover:text-white transition-colors">
                                    Service Points
                                </Link>
                            </li>
                            <li>
                                <Link href="/#news-atm-finance" className="text-gray-400 hover:text-white transition-colors">
                                    News
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Our Services
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/mechanical-electrical" className="text-gray-400 hover:text-white transition-colors">
                                    Mechanical Electrical
                                </Link>
                            </li>
                            <li>
                                <Link href="/logistic-warehouse" className="text-gray-400 hover:text-white transition-colors">
                                    Logistic & Warehouse
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/ups-rework" className="text-gray-400 hover:text-white transition-colors">
                                    UPS Rework
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/customer-support" className="text-gray-400 hover:text-white transition-colors">
                                    Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/monitoring" className="text-gray-400 hover:text-white transition-colors">
                                    Monitoring
                                </Link>
                            </li>
                            <li>
                                <Link href="/menuProduct" className="text-brand-500 hover:text-brand-400 transition-colors font-medium">
                                    View All Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Contact Info
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-brand-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <div>
                                    <p className="text-sm font-medium text-white">Email</p>
                                    <a href="mailto:support@kevingunapratama.com" className="text-gray-400 hover:text-white transition-colors">
                                        support@kevingunapratama.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-brand-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <div>
                                    <p className="text-sm font-medium text-white">Address</p>
                                    <p className="text-gray-400">
                                        Jl. Karya Utama No.19, RT.3/RW.6<br />
                                        Srengseng, Kec. Kembangan<br />
                                        Jakarta Barat, DKI Jakarta 11630
                                    </p>
                                </div>
                            </div>
                            {/* <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-brand-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <div>
                                    <p className="text-sm font-medium text-white">Phone</p>
                                    <a href="https://wa.me/6285282801856" className="text-gray-400 hover:text-white transition-colors">
                                        +62 852 8280 1856
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400">
                            © 2025 PT. Kevin Guna Pratama. All rights reserved.
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
                            <Link href="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/sitemap" className="hover:text-white transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}