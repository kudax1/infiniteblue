"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { initAnalytics } from '@/lib/firebase';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('ib_cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('ib_cookie_consent', 'true');
        initAnalytics();
        setIsVisible(false);
    };

    const dismissBanner = () => {
        // Dismissing without accepting does NOT grant consent or init analytics
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            right: '24px',
            maxWidth: '400px',
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0,0,0,0.05)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }} role="dialog" aria-label="Cookie consent">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-primary)' }}>Cookie Consent</h4>
                <button 
                    onClick={dismissBanner}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-main)', padding: '4px' }}
                    aria-label="Dismiss cookie banner"
                >
                    <X size={16} />
                </button>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                We use cookies and analytics to enhance your experience and analyze site traffic. By clicking &quot;Accept All&quot; you consent to our use of cookies per our <Link href="/privacy" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Privacy Policy</Link>.
            </p>
            <button 
                onClick={acceptCookies}
                className="btn"
                style={{ width: '100%', padding: '10px' }}
            >
                Accept All
            </button>
        </div>
    );
};

export default CookieBanner;
