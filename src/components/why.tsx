'use client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import NoSSR from './NoSSR';

export default function Why() {
    const { t } = useTranslation('homepage');
    const cards = t("whyChooseUs.cards", { returnObjects: true });

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <NoSSR fallback={
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A357D] mb-12">
                            Why Choose Us
                        </h2>
                    }>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A357D] mb-12">
                            {t("whyChooseUs.title")}
                        </h2>
                    </NoSSR>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.values(cards).map((card: any, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(26,53,125,0.1)]"
                        >
                            <h3 className="text-xl font-semibold text-[#1A357D] mb-4 font-['Inter',sans-serif]">
                                {card.title}
                            </h3>
                            <p className="text-[#374151] leading-relaxed font-['Inter',sans-serif] text-sm">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}