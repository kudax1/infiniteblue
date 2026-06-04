"use client";
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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

    const darkNavPaths = ['/', '/services', '/company'];
    const isDarkNav = darkNavPaths.includes(pathname) && !scrolled;

    return (
        <nav className={`navbar ${isDarkNav ? 'navbar-dark' : ''}`} style={{ background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent', borderBottomColor: scrolled ? 'rgba(0,0,0,0.05)' : 'transparent' }}>
            <div className="container navbar-container">
                <Link href="/" className="brand">
                    <Image src="/logo.webp" alt="InfiniteBlue" width={160} height={32} style={{ height: '32px', width: 'auto' }} priority />
                </Link>
                
                {/* Desktop Nav */}
                <div className="nav-links">
                    <Link href="/services">Services</Link>
                    <Link href="/#services">Features</Link>
                    <Link href="/company">Company</Link>
                </div>
                <div className="nav-cta">
                    <Link href="/contact" className="btn btn-secondary">Contact Sales &rarr;</Link>
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
                        <Link href="/services" onClick={toggleMobileMenu}>Services</Link>
                        <Link href="/#services" onClick={toggleMobileMenu}>Features</Link>
                        <Link href="/company" onClick={toggleMobileMenu}>Company</Link>
                        <Link href="/contact" className="btn btn-secondary" onClick={toggleMobileMenu} style={{marginTop: '16px'}}>Contact Sales &rarr;</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
