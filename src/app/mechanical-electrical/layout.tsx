import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import I18nProvider from '@/components/I18nProvider';

export const metadata: Metadata = {
  title: 'Mechanical Electrical - PT. Kevin Guna Pratama',
  description: 'Professional Mechanical & Electrical services by PT. Kevin Guna Pratama',
};

export default function MechanicalElectricalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        {children}
      </div>
    </I18nProvider>
  );
}