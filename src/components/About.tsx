'use client';
import Image from 'next/image';
import CountUp from './ui/CountUp';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('./NoSSR'), { ssr: false });

export default function About() {
    const { t } = useTranslation('about');

    return (
        <section id="about" className="bg-white">
            <div className="content-section py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            <NoSSR fallback={<div className="h-12"></div>}>
                                {t('title')}
                            </NoSSR>
                        </h1>
                        <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
                    </div>

                    <div className="grid items-start lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Content Section */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <NoSSR fallback={<div>Loading...</div>}>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                    {t('subtitle')}
                                </h2>

                                <div className="space-y-4">
                                    <p className="text-body leading-relaxed text-gray-700 justify">
                                        {t('description1')}
                                    </p>
                                </div>
                            </NoSSR>

                            {/* Stats Section */}
                            <NoSSR fallback={<div>Loading stats...</div>}>
                                <div className="pt-6 flex flex-wrap gap-8 md:gap-12">
                                    <div className="min-w-[120px]">
                                        <div className="text-3xl font-semibold text-gray-900">
                                            <CountUp
                                                from={0}
                                                to={2018}
                                                separator=","
                                                direction="up"
                                                duration={1}
                                                className="count-up-text"
                                            />
                                        </div>
                                        <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
                                            {t('stats.founded')}
                                        </div>
                                    </div>
                                    <div className="min-w-[120px]">
                                        <div className="text-3xl font-semibold text-gray-900">
                                            <CountUp
                                                from={0}
                                                to={5000}
                                                separator=","
                                                direction="up"
                                                duration={1}
                                                className="count-up-text"
                                            />
                                            +
                                        </div>
                                        <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
                                            {t('stats.atmsServiced')}
                                        </div>
                                    </div>
                                    <div className="min-w-[120px]">
                                        <div className="text-3xl font-semibold text-gray-900">
                                            <CountUp
                                                from={0}
                                                to={100}
                                                separator=","
                                                direction="up"
                                                duration={1}
                                                className="count-up-text"
                                            />
                                            +
                                        </div>
                                        <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
                                            {t('stats.cities')}
                                        </div>
                                    </div>
                                </div>
                            </NoSSR>
                        </div>

                        {/* Image Section */}
                        <div className="order-1 lg:order-2">
                            <div className="relative max-w-md lg:max-w-lg ml-auto pb-20">
                                <div className="rounded-3xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://picsum.photos/800/560?random=city"
                                        alt="Modern Professional Office - Kevin Guna Pratama"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-5 -left-10 w-3/4 rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://picsum.photos/700/480?random=engineering"
                                        alt="Technician working on ATM hardware"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
