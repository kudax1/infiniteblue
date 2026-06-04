"use client";
import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';

export default function AnalyticsTracker() {
  useEffect(() => {
    // If analytics initialized successfully, we're good
    if (analytics) {
      console.log('Firebase Analytics initialized successfully.');
    }
  }, []);

  return null;
}
