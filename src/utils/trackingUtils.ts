
export interface TrackingData {
  source_page: string;
  campaign_id?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer_url: string;
  user_agent: string;
  device_type: string;
  browser: string;
  clarity_session_id?: string;
  source_type: string;
}

export interface LocationData {
  ip_address?: string;
  location_city?: string;
  location_country?: string;
}

// Get device type based on screen width and user agent
export const getDeviceType = (): string => {
  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (width <= 768 || /mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    return 'Mobile';
  } else if (width <= 1024 || /tablet|ipad/i.test(userAgent)) {
    return 'Tablet';
  }
  return 'Desktop';
};

// Get browser name from user agent
export const getBrowserName = (): string => {
  const userAgent = navigator.userAgent;
  
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
  if (userAgent.includes('Edg')) return 'Edge';
  if (userAgent.includes('Opera')) return 'Opera';
  
  return 'Other';
};

// Get UTM parameters from URL
export const getUTMParameters = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    campaign_id: urlParams.get('campaign_id') || undefined,
  };
};

// Determine source type based on referrer and UTM parameters
export const getSourceType = (referrer: string, utmSource?: string): string => {
  if (utmSource) {
    if (['google', 'bing', 'yahoo'].includes(utmSource.toLowerCase())) return 'Paid';
    if (['facebook', 'twitter', 'linkedin', 'instagram'].includes(utmSource.toLowerCase())) return 'Social';
    if (utmSource.toLowerCase() === 'email') return 'Email';
    return 'Campaign';
  }
  
  if (!referrer || referrer.includes(window.location.hostname)) return 'Direct';
  
  const referrerHost = new URL(referrer).hostname.toLowerCase();
  if (['google.com', 'bing.com', 'yahoo.com', 'duckduckgo.com'].some(search => referrerHost.includes(search))) {
    return 'Organic';
  }
  
  return 'Referral';
};

// Get MS Clarity session ID
export const getClaritySessionId = (): string | undefined => {
  try {
    // @ts-ignore - Clarity is loaded via script tag
    return window.clarity ? window.clarity('getUserId') : undefined;
  } catch (error) {
    console.log('Clarity not available:', error);
    return undefined;
  }
};

// Gather all tracking data
export const gatherTrackingData = (): TrackingData => {
  const utmParams = getUTMParameters();
  const referrer = document.referrer || '';
  
  return {
    source_page: window.location.pathname,
    ...utmParams,
    referrer_url: referrer,
    user_agent: navigator.userAgent,
    device_type: getDeviceType(),
    browser: getBrowserName(),
    clarity_session_id: getClaritySessionId(),
    source_type: getSourceType(referrer, utmParams.utm_source),
  };
};

// Fetch location data from IP
export const fetchLocationData = async (): Promise<LocationData> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    return {
      ip_address: data.ip,
      location_city: data.city,
      location_country: data.country_name,
    };
  } catch (error) {
    console.log('Failed to fetch location data:', error);
    return {};
  }
};

// Track user interactions
export const trackUserInteraction = (eventType: string, eventData?: any) => {
  try {
    console.log('User interaction tracked:', {
      event_type: eventType,
      event_data: eventData,
      timestamp: new Date().toISOString(),
      tracking_data: gatherTrackingData()
    });
    
    // Here you could add additional tracking logic like sending to analytics services
    // For now, we're just logging to console
  } catch (error) {
    console.log('Error tracking user interaction:', error);
  }
};
