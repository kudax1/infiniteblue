import { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with InfiniteBlue to discuss your next software project. We respond within 24 hours.',
  alternates: { canonical: 'https://infiniteblue.africa/contact' },
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
