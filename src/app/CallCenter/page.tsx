'use client';
import OurService from "../../Product-Services/CallCenter/OurService";
import HeroUPSRework from "../../Product-Services/CallCenter/hero";
import { useTranslation } from 'react-i18next';


export default function CallCenter() {
  const { t } = useTranslation('services');

  return (
    <>
      <HeroUPSRework />
      <OurService />
    </>
  );
}