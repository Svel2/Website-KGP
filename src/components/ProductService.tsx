'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export default function ProductService() {
    const { t, i18n } = useTranslation('productServices');
    const router = useRouter();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <section className='bg-white pt-16 pb-0' id='Product-Service'>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {/* Section Header with Language Switcher */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                        {t('subtitle')}
                    </p>  
                </div>

                {/* Moving Cards */}
                <div className="h-[12rem] md:h-[20rem]  flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={services}
                        direction="right"
                        speed="slow"
                        onCardClick={(url) => router.push(url)}
                    />
                </div>
            </div>
        </section>
    );
}

const services = [
  {
    quote: "services.mechanicalElectrical.description",
    name: "mechanicalElectrical",
    title: "infrastructure",
    url: "/mechanical-electrical",
  },
  {
    quote: "services.logisticWarehouse.description",
    name: "logisticWarehouse",
    title: "logistics",
    url: "/logistic-warehouse",
  },
  {
    quote: "services.upsRework.description",
    name: "upsRework",
    title: "powerSystem",
    url: "/UPS-Rework",
  },
  {
    quote: "services.customerSupportEngineer.description",
    name: "customerSupportEngineer",
    title: "technicalSupport",
    url: "/CustomerSupportEngineer",
  },
  {
    quote: "services.callCenter.description",
    name: "callCenter",
    title: "customerService",
    url: "/CallCenter",
  },
  {
    quote: "services.monitoring.description",
    name: "monitoring",
    title: "systemMonitoring",
    url: "/Monitoring",
  },
  {
    quote: "services.ductingSystem.description",
    name: "ductingSystem",
    title: "coolingSystem",
    url: "/DuctingSystem",
  },
  {
    quote: "services.workshopMaintenanceLCD.description",
    name: "workshopMaintenanceLCD",
    title: "displayMaintenance",
    url: "/WorkshopMaintenanceLCD",
  },
  {
    quote: "services.cassetteRework.description",
    name: "cassetteRework",
    title: "cassetteRepair",
    url: "/CassetteRework",
  },
  {
    quote: "services.atmModuleRework.description",
    name: "atmModuleRework",
    title: "atmRepair",
    url: "/ATMModuleRework",
  },
  {
    quote: "services.plumbing.description",
    name: "plumbing",
    title: "plumbingSystem",
    url: "/Plumbing",
  },
];