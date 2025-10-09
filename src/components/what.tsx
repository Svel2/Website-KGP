'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, Variants } from 'framer-motion';
import NoSSR from './NoSSR';
import CountUp from './ui/CountUp';

export default function What() {
    const { t } = useTranslation('homepage');
    
    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const fadeInLeft: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    const fadeInRight: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };
    
    return (
        <section id="what" className="py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-20 bg-[#191547] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* Left Side: Content */}
                    <motion.div className="space-y-4 md:space-y-6 lg:space-y-8" variants={fadeInLeft}>
                        <motion.div variants={fadeInUp}>
                            <NoSSR fallback={
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                                    What Do We Aim to{' '}
                                    <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                                        Achieve?
                                    </span>
                                </h2>
                            }>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                                    {t('what.subtitle')}{' '}
                                    <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                                        {t('what.achievement')}
                                    </span>
                                </h2>
                            </NoSSR>
                            <motion.div
                                className="w-20 h-1 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: 90 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <NoSSR fallback={
                                <p className="text-neutral-300 text-sm md:text-base lg:text-lg leading-relaxed">
                                    We are committed to providing reliable and innovative ATM solutions that meet the highest standards of quality and security.
                                </p>
                            }>
                                <p className="text-neutral-300 text-sm md:text-base lg:text-lg leading-relaxed">
                                    {t('what.description')}
                                </p>
                            </NoSSR>
                        </motion.div>

                        <div className="space-y-4 md:space-y-5">
                            <motion.div className="flex items-start gap-3 md:gap-4 group" variants={fadeInUp}>
                                <motion.div 
                                    className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300" 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </motion.div>
                                <div className="flex-1">
                                    <NoSSR fallback={
                                        <>
                                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-neutral-100 mb-2">Excellence in Service</h3>
                                            <p className="text-neutral-300 leading-relaxed text-xs md:text-sm lg:text-base">We deliver exceptional service with attention to detail and customer satisfaction.</p>
                                        </>
                                    }>
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-neutral-100 mb-2">{t('what.excellence.title')}</h3>
                                        <p className="text-neutral-300 leading-relaxed text-xs md:text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: t('what.excellence.description') }} />
                                    </NoSSR>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start gap-3 md:gap-4 group" variants={fadeInUp}>
                                <motion.div 
                                    className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300" 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </motion.div>
                                <div className="flex-1">
                                    <NoSSR fallback={
                                        <>
                                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-neutral-100 mb-2">Strategic Partnership</h3>
                                            <p className="text-neutral-200 leading-relaxed text-xs md:text-sm lg:text-base">Building long-term partnerships based on trust and mutual growth.</p>
                                        </>
                                    }>
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-neutral-100 mb-2">{t('what.partnership.title')}</h3>
                                        <p className="text-neutral-200 leading-relaxed text-xs md:text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: t('what.partnership.description') }} />
                                    </NoSSR>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start gap-3 md:gap-4 group" variants={fadeInUp}>
                                <motion.div 
                                    className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300" 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </motion.div>
                                <div className="flex-1">
                                    <NoSSR fallback={
                                        <>
                                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-neutral-100 mb-2">Customer Confidence</h3>
                                            <p className="text-neutral-200 leading-relaxed text-xs md:text-sm lg:text-base">Earning trust through consistent performance and reliable solutions.</p>
                                        </>
                                    }>
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-neutral-100 mb-2">{t('what.confidence.title')}</h3>
                                        <p className="text-neutral-200 leading-relaxed text-xs md:text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: t('what.confidence.description') }} />
                                    </NoSSR>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Stats & Visual */}
                    <motion.div className="relative" variants={fadeInRight}>
                        <motion.div 
                            className="bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5 mb-4 md:mb-6">
                                <NoSSR fallback={
                                    <>
                                        {[
                                            { number: '99.9', suffix: '%', label: 'System Uptime', sublabel: 'Available 24/7', delay: 0 },
                                            { number: '24', suffix: '/7', label: 'Technical Support', sublabel: 'Always Ready', delay: 0.1 },
                                            { number: '1000', suffix: '+', label: 'Network Points', sublabel: 'Across Indonesia', delay: 0.2 },
                                            { number: '100', suffix: '%', label: 'Transaction Security', sublabel: 'Protected', delay: 0.3 },
                                        ].map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                className="text-center p-3 md:p-4 lg:p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg md:rounded-xl transition-transform duration-300 hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: stat.delay }}
                                            >
                                                <motion.div 
                                                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent mb-2"
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: stat.delay + 0.2, type: 'spring' }}
                                                >
                                                    {!isNaN(parseFloat(stat.number)) ? (
                                                        <>
                                                            <CountUp
                                                                to={parseFloat(stat.number)}
                                                                duration={0.4}
                                                                separator=","
                                                            />
                                                            {stat.suffix}
                                                        </>
                                                    ) : (
                                                        <span>{stat.number}</span>
                                                    )}
                                                </motion.div>
                                                <div className="text-xs font-medium text-slate-700 mb-1">{stat.label}</div>
                                                <div className="text-xs text-slate-500">{stat.sublabel}</div>
                                            </motion.div>
                                        ))}
                                    </>
                                }>
                                    {[
                                        { number: t('what.stats.uptime.number'), suffix: t('what.stats.uptime.suffix'), label: t('what.stats.uptime.label'), sublabel: t('what.stats.uptime.sublabel'), delay: 0 },
                                        { number: t('what.stats.support.number'), suffix: t('what.stats.support.suffix'), label: t('what.stats.support.label'), sublabel: t('what.stats.support.sublabel'), delay: 0.1 },
                                        { number: t('what.stats.networks.number'), suffix: t('what.stats.networks.suffix'), label: t('what.stats.networks.label'), sublabel: t('what.stats.networks.sublabel'), delay: 0.2 },
                                        { number: t('what.stats.security.number'), suffix: t('what.stats.security.suffix'), label: t('what.stats.security.label'), sublabel: t('what.stats.security.sublabel'), delay: 0.3 },
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="text-center p-3 md:p-4 lg:p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg md:rounded-xl transition-transform duration-300 hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: stat.delay }}
                                        >
                                            <motion.div 
                                                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent mb-2"
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: stat.delay + 0.2, type: 'spring' }}
                                            >
                                                {!isNaN(parseFloat(stat.number)) ? (
                                                    <>
                                                        <CountUp
                                                            to={parseFloat(stat.number)}
                                                            duration={0.4}
                                                            separator=","
                                                        />
                                                        {stat.suffix}
                                                    </>
                                                ) : (
                                                    <span>{stat.number}</span>
                                                )}
                                            </motion.div>
                                            <div className="text-xs font-medium text-slate-700 mb-1">{stat.label}</div>
                                            <div className="text-xs text-slate-500">{stat.sublabel}</div>
                                        </motion.div>
                                    ))}
                                </NoSSR>
                            </div>

                            {/* Highlight Card */}
                            <NoSSR fallback={
                                <motion.div 
                                    className="bg-gradient-to-br from-orange-600 to-yellow-500 p-4 md:p-6 lg:p-7 rounded-lg md:rounded-xl text-white relative overflow-hidden mb-4 md:mb-5"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <div className="text-xs opacity-90 mb-1">Our Promise</div>
                                                <div className="text-xl md:text-2xl lg:text-3xl font-bold">Excellence</div>
                                            </div>
                                        </div>
                                        <div className="border-t border-white border-opacity-20 pt-3">
                                            <div className="flex items-center gap-2 text-xs">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className="opacity-90">Committed to delivering the best service</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            }>
                                <motion.div 
                                    className="bg-gradient-to-br from-orange-600 to-yellow-500 p-4 md:p-6 lg:p-7 rounded-lg md:rounded-xl text-white relative overflow-hidden mb-4 md:mb-5"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <div className="text-xs opacity-90 mb-1">{t('what.commitment.title')}</div>
                                                <div className="text-xl md:text-2xl lg:text-3xl font-bold">{t('what.commitment.subtitle')}</div>
                                            </div>
                                        </div>
                                        <div className="border-t border-white border-opacity-20 pt-3">
                                            <div className="flex items-center gap-2 text-xs">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className="opacity-90">{t('what.commitment.description')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </NoSSR>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div 
                            className="absolute -top-6 -right-6 w-28 h-28 bg-blue-300 rounded-full opacity-20 blur-3xl pointer-events-none"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div 
                            className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-300 rounded-full opacity-20 blur-3xl pointer-events-none"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}