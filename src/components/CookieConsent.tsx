import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { X, Settings, Cookie, Shield, BarChart3, Target } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { cn } from '@/lib/utils';

const CookieConsent: React.FC = () => {
  const {
    consent,
    showBanner,
    showSettings,
    acceptAll,
    rejectAll,
    updateConsent,
    openSettings,
    closeSettings,
    closeBanner,
  } = useCookieConsent();

  const [localAnalytics, setLocalAnalytics] = useState(false);
  const [localMarketing, setLocalMarketing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  // Update local state when consent changes
  useEffect(() => {
    setLocalAnalytics(consent.analytics);
    setLocalMarketing(consent.marketing);
  }, [consent]);

  // Listen for custom event from footer
  useEffect(() => {
    const handleOpenSettings = () => {
      openSettings();
    };

    window.addEventListener('openCookieSettings', handleOpenSettings);
    
    return () => {
      window.removeEventListener('openCookieSettings', handleOpenSettings);
    };
  }, [openSettings]);

  // Countdown timer for auto-accept
  useEffect(() => {
    if (showBanner && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showBanner, timeLeft]);

  const handleSavePreferences = () => {
    updateConsent({
      analytics: localAnalytics,
      marketing: localMarketing,
    });
  };

  // Settings Modal
  const SettingsModal = () => (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Cookie Settings</h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeSettings}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-2 mt-1">
                <Shield className="w-4 h-4 text-green-600" />
                <Checkbox 
                  checked 
                  disabled 
                  className="h-4 w-4 !h-4 !w-4 min-h-0 min-w-0" 
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Essential Cookies</h3>
                <p className="text-sm text-gray-600">
                  Required for basic website functionality, security, and remembering your preferences. These cannot be disabled.
                </p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-2 mt-1">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <Checkbox
                  checked={localAnalytics}
                  onCheckedChange={(checked) => setLocalAnalytics(!!checked)}
                  className="h-4 w-4 !h-4 !w-4 min-h-0 min-w-0"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Analytics Cookies</h3>
                <p className="text-sm text-gray-600">
                  Help us understand how visitors use our website through Google Analytics and Microsoft Clarity. 
                  All data is anonymized and aggregated for statistical analysis. No personal information is collected.
                </p>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-2 mt-1">
                <Target className="w-4 h-4 text-purple-600" />
                <Checkbox
                  checked={localMarketing}
                  onCheckedChange={(checked) => setLocalMarketing(!!checked)}
                  className="h-4 w-4 !h-4 !w-4 min-h-0 min-w-0"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Marketing Cookies</h3>
                <p className="text-sm text-gray-600">
                  Used to track visitors across websites for advertising purposes through Google Tag Manager and social media platforms. 
                  Data is anonymized and used for targeted advertising without identifying individual users.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button
              onClick={() => {
                setLocalAnalytics(true);
                setLocalMarketing(true);
              }}
              variant="outline"
              className="flex-1"
            >
              Accept All
            </Button>
            <Button
              onClick={() => {
                setLocalAnalytics(false);
                setLocalMarketing(false);
              }}
              variant="outline"
              className="flex-1"
            >
              Reject All
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Banner Component
  const Banner = () => (
    <div className="fixed bottom-4 left-4 z-50">
      <Card className="w-auto max-w-md bg-white border-t-2 border-blue-600 shadow-lg">
        <CardContent className="p-4 relative">
          {/* Close button in top-right corner */}
          <Button
            variant="ghost"
            size="sm"
            onClick={closeBanner}
            className="absolute top-2 right-2 h-6 w-6 p-0"
          >
            <X className="w-3 h-3" />
          </Button>
          
          <div className="flex items-start gap-3 pr-8">
            <Cookie className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 text-sm mb-1">We use cookies to improve your experience</h3>
              <p className="text-xs text-gray-500 mb-1">
                Auto-accept in {timeLeft}s - all cookies will be enabled
              </p>
              <p className="text-xs text-gray-400 mb-2">
                Cookie settings available in website footer anytime
              </p>
              <p className="text-xs text-gray-600 mb-3">
                Essential cookies required. Optional analytics and marketing cookies can be customized.
              </p>
              
              <div className="flex gap-2">
                <Button
                  onClick={acceptAll}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 h-8 font-medium flex-1 shadow-md"
                >
                  ✓ Accept All
                </Button>
                <Button
                  onClick={rejectAll}
                  variant="outline"
                  size="sm"
                  className="text-xs px-3 py-1 h-7"
                >
                  Reject All
                </Button>
                <Button
                  onClick={openSettings}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 text-xs px-3 py-1 h-7"
                >
                  <Settings className="w-3 h-3" />
                  Customize
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (!showBanner && !showSettings) {
    return null;
  }

  return (
    <>
      {showBanner && <Banner />}
      {showSettings && <SettingsModal />}
    </>
  );
};

export default CookieConsent;
