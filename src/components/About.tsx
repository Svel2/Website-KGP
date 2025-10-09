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
                            <NoSSR fallback={<div>Loading...</div>}>
                                <h2 className="text-lg md:text-lg lg:text-3xl font-bold text-gray-900 leading-tight">
                                    {t('subtitle')}
                                </h2>

                                <div className="space-y-4">
                                    <p className="text-body text-justify leading-relaxed">
                                        {t('description1')}
                                    </p>

                                    <p className="text-body text-justify leading-relaxed">
                                        {t('description2')}
                                    </p>

                                    <p className="text-body text-justify leading-relaxed">
                                        {t('description3')}
                                    </p>
                                </div>
                            </NoSSR>

                            {/* Stats Section */}
                            <NoSSR fallback={<div>Loading stats...</div>}>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                                    <div className="text-center p-4 bg-brand-50 rounded-lg">
                                        <div className="text-lg md:text-lg font-bold text-brand-600">
                                             <CountUp
                                                from={0}
                                                to={2018}
                                                separator=","
                                                direction="up"
                                                duration={1}
                                                className="count-up-text"
                                            />
                                            </div>
                                        <div className="text-sm text-gray-600">{t('stats.founded')}</div>
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
                                        <div className="text-sm text-gray-600">{t('stats.atmsServiced')}</div>
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
                                        <div className="text-sm text-gray-600">{t('stats.support')}</div>
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
                                            +
                                        </div>
                                        <div className="text-sm text-gray-600">{t('stats.cities')}</div>
                                    </div>
                                </div>
                            </NoSSR>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}