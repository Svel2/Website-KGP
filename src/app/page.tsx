'use client';
import HomeSlider from "../components/Home";
import About from "../components/About";
import Why from "../components/why";
import What from "../components/what";
import ServicePoint from "../components/sections/servicePoint";
import ProductService from "../components/ProductService";
import ImageColab from "../components/imageColab";
import OurGallery from "../components/ourGallery";
import ClientLogos from "../components/ClientLogos";
import ContactUs from "../components/ContactUs";
import NewsATMFinance from "../components/NewsATMFinance";
import ErrorBoundary from "../components/ErrorBoundary";
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { t } = useTranslation('homepage');

  return (
    <>
      <Head>
        <title>{t('hero.title')}</title>
        <meta name="description" content={t('hero.description')} />
        <meta name="keywords" content={t('hero.keywords')} />

        {/* Open Graph */}
        <meta property="og:title" content={t('hero.title')} />
        <meta property="og:description" content={t('hero.description')} />
        <meta property="og:image" content="/images/bannerGCS.jpg" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PT. Kevin Guna Pratama',
              description: 'National company specializing in ATM Maintenance & Services',
              foundingDate: '2014',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'ID',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'Indonesian',
              },
            }),
          }}
        />
      </Head>
      
      <HomeSlider />
      <ClientLogos />
      <About />
      <ServicePoint/>
      <ProductService/>
      <Why />
      <OurGallery/>
      
      

      <ErrorBoundary fallback={
        <div className="py-16 bg-gray-50">
          <div className="content-section">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">News — ATM & Finance</h2>
              <p className="text-gray-600">Mohon maaf, bagian berita sedang mengalami gangguan</p>
            </div>
          </div>
        </div>
      }>
        <NewsATMFinance/>
      </ErrorBoundary>

      <ContactUs />
    </>
  );
}
