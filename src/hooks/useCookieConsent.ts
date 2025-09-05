import { useState, useEffect, useCallback } from 'react';
import { 
  ConsentPreferences, 
  getStoredConsent, 
  storeConsent, 
  isConsentRequired,
  getDefaultConsent,
  getAcceptAllConsent,
  getRejectAllConsent,
  ConsentRecord
} from '@/utils/cookieManager';
import { updateAllTrackingConsent } from '@/utils/trackingManager';
import { supabase } from '@/integrations/supabase/client';

export interface UseCookieConsentReturn {
  consent: ConsentPreferences;
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  updateConsent: (preferences: Partial<ConsentPreferences>) => void;
  openSettings: () => void;
  closeSettings: () => void;
  closeBanner: () => void;
  hasConsented: boolean;
}

export const useCookieConsent = (): UseCookieConsentReturn => {
  const [consent, setConsent] = useState<ConsentPreferences>(getDefaultConsent());
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [autoAcceptTimer, setAutoAcceptTimer] = useState<NodeJS.Timeout | null>(null);

  // Log consent to Supabase for compliance
  const logConsentToDatabase = useCallback(async (consentData: ConsentPreferences) => {
    try {
      const record: Omit<ConsentRecord, 'id'> = {
        essential_cookies: consentData.essential,
        analytics_cookies: consentData.analytics,
        marketing_cookies: consentData.marketing,
        consent_timestamp: new Date().toISOString(),
        consent_version: consentData.version,
        user_agent: navigator.userAgent,
      };

      const { error } = await supabase
        .from('contact_submissions')
        .insert([record as any]); // Type assertion as the table structure might differ

      if (error) {
        console.error('Error logging consent:', error);
      }
    } catch (error) {
      console.error('Error logging consent to database:', error);
    }
  }, []);

  // Initialize consent state
  useEffect(() => {
    const storedConsent = getStoredConsent();
    
    if (storedConsent) {
      setConsent(storedConsent);
      setHasConsented(true);
      updateAllTrackingConsent(storedConsent);
    } else {
      setShowBanner(true);
      // Start 60-second auto-accept timer
      const timer = setTimeout(() => {
        const autoConsent = getAcceptAllConsent();
        setConsent(autoConsent);
        storeConsent(autoConsent);
        updateAllTrackingConsent(autoConsent);
        logConsentToDatabase(autoConsent);
        setShowBanner(false);
        setHasConsented(true);
      }, 60000);
      
      setAutoAcceptTimer(timer);
    }

    return () => {
      if (autoAcceptTimer) {
        clearTimeout(autoAcceptTimer);
      }
    };
  }, [logConsentToDatabase]);

  // Clear auto-accept timer when user interacts
  const clearAutoAcceptTimer = useCallback(() => {
    if (autoAcceptTimer) {
      clearTimeout(autoAcceptTimer);
      setAutoAcceptTimer(null);
    }
  }, [autoAcceptTimer]);

  const acceptAll = useCallback(() => {
    clearAutoAcceptTimer();
    const newConsent = getAcceptAllConsent();
    setConsent(newConsent);
    storeConsent(newConsent);
    updateAllTrackingConsent(newConsent);
    logConsentToDatabase(newConsent);
    setShowBanner(false);
    setShowSettings(false);
    setHasConsented(true);
  }, [clearAutoAcceptTimer, logConsentToDatabase]);

  const rejectAll = useCallback(() => {
    clearAutoAcceptTimer();
    const newConsent = getRejectAllConsent();
    setConsent(newConsent);
    storeConsent(newConsent);
    updateAllTrackingConsent(newConsent);
    logConsentToDatabase(newConsent);
    setShowBanner(false);
    setShowSettings(false);
    setHasConsented(true);
  }, [clearAutoAcceptTimer, logConsentToDatabase]);

  const updateConsent = useCallback((preferences: Partial<ConsentPreferences>) => {
    clearAutoAcceptTimer();
    const newConsent = storeConsent({ ...consent, ...preferences });
    setConsent(newConsent);
    updateAllTrackingConsent(newConsent);
    logConsentToDatabase(newConsent);
    setShowBanner(false);
    setShowSettings(false);
    setHasConsented(true);
  }, [consent, clearAutoAcceptTimer, logConsentToDatabase]);

  const openSettings = useCallback(() => {
    clearAutoAcceptTimer();
    setShowSettings(true);
  }, [clearAutoAcceptTimer]);

  const closeSettings = useCallback(() => {
    setShowSettings(false);
  }, []);

  const closeBanner = useCallback(() => {
    clearAutoAcceptTimer();
    setShowBanner(false);
  }, [clearAutoAcceptTimer]);

  return {
    consent,
    showBanner,
    showSettings,
    acceptAll,
    rejectAll,
    updateConsent,
    openSettings,
    closeSettings,
    closeBanner,
    hasConsented,
  };
};
