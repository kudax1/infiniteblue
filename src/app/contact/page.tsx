import { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Infinite Blue',
  description: 'Get in touch with Infinite Blue to discuss your next software project. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
