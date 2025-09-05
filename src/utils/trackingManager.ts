import type { ConsentPreferences } from './cookieManager';

// Google Analytics consent management
export const updateGoogleAnalyticsConsent = (consent: ConsentPreferences): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': consent.analytics ? 'granted' : 'denied',
      'ad_storage': consent.marketing ? 'granted' : 'denied',
      'ad_user_data': consent.marketing ? 'granted' : 'denied',
      'ad_personalization': consent.marketing ? 'granted' : 'denied',
    });
  }
};

// Initialize Google Analytics with default consent
export const initializeGoogleAnalyticsConsent = (): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'wait_for_update': 500,
    });
  }
};

// Microsoft Clarity consent management
export const updateClarityConsent = (consent: ConsentPreferences): void => {
  if (typeof window !== 'undefined' && window.clarity) {
    if (consent.analytics) {
      // Enable Clarity tracking
      window.clarity('set', 'consent', true);
    } else {
      // Disable Clarity tracking
      window.clarity('set', 'consent', false);
    }
  }
};

// Google Tag Manager consent management
export const updateGTMConsent = (consent: ConsentPreferences): void => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'consent_update',
      analytics_consent: consent.analytics ? 'granted' : 'denied',
      marketing_consent: consent.marketing ? 'granted' : 'denied',
    });
  }
};

// Master function to update all tracking consents
export const updateAllTrackingConsent = (consent: ConsentPreferences): void => {
  updateGoogleAnalyticsConsent(consent);
  updateClarityConsent(consent);
  updateGTMConsent(consent);
  
  console.log('Tracking consent updated:', {
    analytics: consent.analytics,
    marketing: consent.marketing,
    timestamp: new Date().toISOString(),
  });
};

// Initialize all tracking with denied consent
export const initializeTrackingConsent = (): void => {
  initializeGoogleAnalyticsConsent();
  
  // Initialize GTM with denied consent
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'consent_default',
      analytics_consent: 'denied',
      marketing_consent: 'denied',
    });
  }
  
  console.log('Tracking consent initialized with denied defaults');
};

// Declare global window extensions for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    clarity: (action: string, ...args: any[]) => any;
  }
}
