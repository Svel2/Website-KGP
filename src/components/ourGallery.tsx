"use client";

import { tr } from "motion/react-client";
import CardSwap, { Card } from "./ui/card-swap";
import { useTranslation } from "react-i18next";
import NoSSR from "./NoSSR";
import Image from "next/image";

export default function OurGallery() {
  const { t } = useTranslation('homepage');

  return (
    <section id="our-gallery" className="bg-[#191547] lg:pb-40 overflow-hidden">
      <div className="content-section py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          {/* Left copy (light mode) */}
          <div className="px-2  ">
            <NoSSR fallback={
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#FF662D]">
                Galeri Kami
                <br /><span className="text-white">PT. Kevin Guna Pratama</span>
              </h2>
            }>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#FF662D]">
                {t('gallery.title')}
                <br /><span className="text-white">{t('gallery.subtitle')}</span>
              </h2>
            </NoSSR>
            <NoSSR fallback={
              <p className="mt-6 text-lg text-neutral-300">Lihat saja bagaimana karya ini berjalan!</p>
            }>
              <p className="mt-6 text-lg text-neutral-300">{t('gallery.description')}</p>
            </NoSSR>
          </div>

          {/* Right: CardSwap showcase (clip to section on all sizes) */}
          <div className="relative w-full h-[520px] rounded-xl">
            <CardSwap cardDistance={35} verticalDistance={115} delay={3000} pauseOnHover={false}>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden ">
                <div className="flex h-full w-full flex-col">
                  <NoSSR fallback={
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Galeri 1</h3>
                  }>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('gallery.gallery1')}</h3>
                  </NoSSR>
                  <div className="flex-1 mt-2 relative rounded-lg border border-gray-200 overflow-hidden p-2">
                    <Image
                      src="/images/image1v.jpg"
                      alt={t('gallery.gallery1')}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden ">
                <div className="flex h-full w-full flex-col">
                  <NoSSR fallback={
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Galeri 2</h3>
                  }>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('gallery.gallery2')}</h3>
                  </NoSSR>
                  <div className="flex-1 mt-2 relative rounded-lg border border-gray-200 overflow-hidden p-2">
                    <Image
                      src="/images/image2v.jpg"
                      alt={t('gallery.gallery2')}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden">
                <div className="flex h-full w-full flex-col">
                  <NoSSR fallback={
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Galeri 3</h3>
                    }>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('gallery.gallery3')}</h3>
                    </NoSSR>
                  <div className="flex-1 mt-2 relative rounded-lg border border-gray-200 overflow-hidden p-2">
                    <Image
                      src="/images/image3v.jpg"
                      alt={t('gallery.gallery3')}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden">
                <div className="flex h-full w-full flex-col">
                  <NoSSR fallback={
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Galeri 4</h3>
                    }>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('gallery.gallery4')}</h3>
                    </NoSSR>
                  <div className="flex-1 mt-2 relative rounded-lg border border-gray-200 overflow-hidden p-2">
                    <Image
                      src="/images/image4v.jpg"
                      alt={t('gallery.gallery4')}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden">
                <div className="flex h-full w-full flex-col">
                  <NoSSR fallback={
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Galeri 5</h3>
                    }>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('gallery.gallery5')}</h3>
                    </NoSSR>
                  <div className="flex-1 mt-2 relative rounded-lg border border-gray-200 overflow-hidden p-2">
                    <Image
                      src="/images/image5v.jpg"
                      alt={t('gallery.gallery5')}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden">
                <div className="flex h-full w-full flex-col">
                  <NoSSR fallback={
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Galeri 6</h3>
                    }>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('gallery.gallery6')}</h3>
                    </NoSSR>
                  <div className="flex-1 mt-2 relative rounded-lg border border-gray-200 overflow-hidden p-2">
                    <Image
                      src="/images/image6v.jpg"
                      alt={t('gallery.gallery6')}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </Card>
              <Card className="shadow-xl bg-white p-6 border border-gray-200 overflow-hidden">
                <div className="flex h-full w-full flex-col">
                  <NoSSR fallback={
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Galeri 7</h3>
                    }>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('gallery.gallery7')}</h3>
                    </NoSSR>
                  <div className="flex-1 mt-2 relative rounded-lg border border-gray-200 overflow-hidden p-2">
                    <Image
                      src="/images/image7v.jpg"
                      alt={t('gallery.gallery7')}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
