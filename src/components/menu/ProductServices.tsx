'use client';
import { HoverEffect } from "../ui/card-hover-effect";
import { useTranslation } from 'react-i18next';

export function ProductServicesMenu() {
  const { t } = useTranslation('services');

  // Process the projects array to translate titles and descriptions
  const translatedProjects = projects.map(project => ({
    ...project,
    title: t(project.title),
    description: t(project.description)
  }));

  return (
    <section className="pt-32 pb-32">
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={translatedProjects} />
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "mechanicalElectrical.name",
    description: "mechanicalElectrical.description",
    link: "/mechanical-electrical",
  },
  {
    title: "logisticWarehouse.name",
    description: "logisticWarehouse.description",
    link: "/logistic-warehouse",
  },
  {
    title: "upsRework.name",
    description: "upsRework.description",
    link: "/UPS-Rework",
  },
  {
    title: "customerSupportEngineer.name",
    description: "customerSupportEngineer.description",
    link: "/CustomerSupportEngineer",
  },
  {
    title: "callCenter.name",
    description: "callCenter.description",
    link: "/CallCenter",
  },
  {
    title: "monitoring.name",
    description: "monitoring.description",
    link: "/Monitoring",
  },
  {
    title: "ductingSystem.name",
    description: "ductingSystem.description",
    link: "/DuctingSystem",
  },
  {
    title: "workshopMaintenanceLCD.name",
    description: "workshopMaintenanceLCD.description",
    link: "/WorkshopMaintenanceLCD",
  },
  {
    title: "cassetteRework.name",
    description: "cassetteRework.description",
    link: "/CassetteRework",
  },
  {
    title: "atmModuleRework.name",
    description: "atmModuleRework.description",
    link: "/ATMModuleRework",
  },
  {
    title: "plumbing.name",
    description: "plumbing.description",
    link: "/Plumbing",
  }
];
