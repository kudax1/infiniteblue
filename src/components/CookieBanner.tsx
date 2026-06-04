"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('ib_cookie_consent');
        if (!consent) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('ib_cookie_consent', 'true');
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
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-primary)' }}>Cookie Consent</h4>
                <button 
                    onClick={() => setIsVisible(false)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-main)', padding: '4px' }}
                    aria-label="Close"
                >
                    <X size={16} />
                </button>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                We use cookies and reCAPTCHA to enhance your experience, ensure security, and analyze site traffic. By continuing to use this site, you consent to our use of cookies and our <Link href="/privacy" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Privacy Policy</Link>.
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
