
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="brand">
                            <img src="/logo.webp" alt="InfiniteBlue" style={{ height: '28px' }} />
                        </Link>
                        <p style={{ color: 'var(--color-text-main)' }}>
                            Software infrastructure for ambitious businesses.<br />
                            Co-creating exceptional digital solutions.
                        </p>
                        <div style={{ marginTop: '24px' }}>
                            <a href="mailto:info@infiniteblue.africa" style={{ color: 'var(--color-text-dark)', fontWeight: 600 }}>
                                info@infiniteblue.africa
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
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>&copy; {new Date().getFullYear()} InfiniteBlue. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="https://linkedin.com/company/infinite-blue-placeholder" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-main)' }} aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
