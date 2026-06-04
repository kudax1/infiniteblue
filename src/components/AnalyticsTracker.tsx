"use client";
import { useEffect } from 'react';
import { initAnalytics } from '@/lib/firebase';

export default function AnalyticsTracker() {
  useEffect(() => {
    // Only initialize analytics if the user has already consented
    const consent = localStorage.getItem('ib_cookie_consent');
    if (consent === 'true') {
      initAnalytics();
    }
  }, []);

  return null;
}
