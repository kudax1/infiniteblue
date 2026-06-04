import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="brand">
                            <Image src="/logo.webp" alt="InfiniteBlue" width={140} height={28} style={{ height: '28px', width: 'auto' }} />
                        </Link>
                        <p style={{ color: 'var(--color-text-main)' }}>
                            Software infrastructure for ambitious businesses.<br />
                            Co-creating exceptional digital solutions.
                        </p>
                        <div style={{ marginTop: '24px' }}>
                            <a href="mailto:info@infinitebluelabs.com" style={{ color: 'var(--color-text-dark)', fontWeight: 600 }}>
                                info@infinitebluelabs.com
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link href="/services">Cloud Architecture</Link></li>
                            <li><Link href="/services">Mobile Development</Link></li>
                            <li><Link href="/services">Web Platforms</Link></li>
                            <li><Link href="/services">AI Integration</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/company">About Us</Link></li>
                            <li><Link href="/company">Careers</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="/company">Privacy Policy</Link></li>
                            <li><Link href="/company">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>&copy; {new Date().getFullYear()} InfiniteBlue. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-main)' }} aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
