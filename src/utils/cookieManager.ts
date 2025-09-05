export interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: string;
}

export interface ConsentRecord {
  id?: string;
  user_id?: string;
  essential_cookies: boolean;
  analytics_cookies: boolean;
  marketing_cookies: boolean;
  consent_timestamp: string;
  consent_version: string;
  user_agent: string;
  ip_address?: string;
}

const CONSENT_STORAGE_KEY = 'plat_cookie_consent';
const CONSENT_VERSION = '1.0';
const CONSENT_EXPIRY_DAYS = 365;

// Default consent preferences (all false except essential)
export const getDefaultConsent = (): ConsentPreferences => ({
  essential: true, // Always required
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
  version: CONSENT_VERSION,
});

// Get stored consent preferences
export const getStoredConsent = (): ConsentPreferences | null => {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    
    const consent = JSON.parse(stored) as ConsentPreferences;
    
    // Check if consent is expired or version mismatch
    const isExpired = Date.now() - consent.timestamp > CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    const isOldVersion = consent.version !== CONSENT_VERSION;
    
    if (isExpired || isOldVersion) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    
    return consent;
  } catch (error) {
    console.error('Error reading consent preferences:', error);
    return null;
  }
};

// Store consent preferences
export const storeConsent = (preferences: Partial<ConsentPreferences>): ConsentPreferences => {
  const consent: ConsentPreferences = {
    ...getDefaultConsent(),
    ...preferences,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch (error) {
    console.error('Error storing consent preferences:', error);
  }
  
  return consent;
};

// Clear stored consent
export const clearStoredConsent = (): void => {
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing consent preferences:', error);
  }
};

// Check if consent is required (no stored consent or expired)
export const isConsentRequired = (): boolean => {
  return getStoredConsent() === null;
};

// Get accept all preferences
export const getAcceptAllConsent = (): ConsentPreferences => ({
  essential: true,
  analytics: true,
  marketing: true,
  timestamp: Date.now(),
  version: CONSENT_VERSION,
});

// Get reject all preferences (only essential)
export const getRejectAllConsent = (): ConsentPreferences => ({
  essential: true,
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
  version: CONSENT_VERSION,
});
