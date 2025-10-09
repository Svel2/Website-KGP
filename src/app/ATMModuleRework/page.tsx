'use client';
import OurService from "../../Product-Services/ATMModuleRework/OurService";
import HeroUPSRework from "../../Product-Services/ATMModuleRework/hero";
import { useTranslation } from 'react-i18next';


export default function ATMModuleRework() {
  const { t } = useTranslation('services');

  return (
    <>
      <HeroUPSRework />
      <OurService
        title={t('ourService.title')}
        description={t('ourService.description')}
        contactUs={t('ourService.contactUs')}
        learnMore={t('ourService.learnMore')}
      />
    </>
  );
}