'use client'
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function HeroLogistic(){
    const { t } = useTranslation('services');

    return(
        <section id="heroMecha" className="relative">
            <div className="absolute inset-0">
                <Image
                    src="/images/logistic-bg.jpg"
                    alt="Logistic Warehouse Background"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                    sizes="100vw"
                />
            </div>
            <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 bg-black/10 backdrop-brightness-50">
                {/* Title */}
                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        {t('hero.logisticWarehouse.title')}
                    </h1>
                </div>
                {/* End Title */}

                <div className="max-w-3xl text-center mx-auto">
                    <p className="text-lg text-white/70">{t('hero.logisticWarehouse.description')}</p>
                </div>
            </div>
        </section>
    )
}