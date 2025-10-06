import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Contact Us - PT. Kevin Guna Pratama',
  description: 'Get in touch with PT. Kevin Guna Pratama for professional ATM maintenance and services across Indonesia.',
  keywords: 'contact, ATM maintenance, customer service, Indonesia',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}