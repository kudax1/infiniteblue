import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTABanner = () => {
    return (
        <section className="cta-banner">
            <div className="container">
                <div className="cta-banner-content">
                    <h2>Ready to build something exceptional?</h2>
                    <p>Let&apos;s discuss how we can help bring your vision to life. Our team of experts is ready to architect your next digital success.</p>
                    <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--color-primary)' }}>
                        Start the conversation <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
