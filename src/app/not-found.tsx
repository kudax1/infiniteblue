import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 72px)', marginBottom: '24px', color: 'var(--color-primary)' }}>404</h1>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: '16px' }}>Page not found</h2>
        <p style={{ color: 'var(--color-text-main)', fontSize: '18px', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn't exist.
        </p>
        <Link href="/" className="btn">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
