"use client";
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const SCROLL_THRESHOLD = 20;

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > SCROLL_THRESHOLD);
        };
        window.addEventListener('scroll', handleScroll);
        // Call it once on mount to get initial scroll position
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const isDarkNav = pathname === '/' && !scrolled;

    return (
        <nav className={`navbar ${isDarkNav ? 'navbar-dark' : ''}`} style={{ background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent', borderBottomColor: scrolled ? 'rgba(0,0,0,0.05)' : 'transparent' }}>
            <div className="container navbar-container">
                <a href="/" className="brand">
                    <img src="/logo.webp" alt="Infinite Blue" style={{ height: '32px' }} />
                </a>
                
                {/* Desktop Nav */}
                <div className="nav-links">
                    <a href="/services">Services</a>
                    <a href="/#features">Features</a>
                    <a href="/company">Company</a>
                </div>
                <div className="nav-cta">
                    <a href="/contact" className="btn btn-secondary">Contact Sales &rarr;</a>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {mobileMenuOpen && (
                <div className="mobile-nav">
                    <div className="mobile-nav-links">
                        <a href="/services" onClick={toggleMobileMenu}>Services</a>
                        <a href="/#features" onClick={toggleMobileMenu}>Features</a>
                        <a href="/company" onClick={toggleMobileMenu}>Company</a>
                        <a href="/contact" className="btn btn-secondary" onClick={toggleMobileMenu} style={{marginTop: '16px'}}>Contact Sales &rarr;</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
