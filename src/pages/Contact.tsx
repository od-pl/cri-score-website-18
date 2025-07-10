import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, Calendar, Users, Building2, BookOpen, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
// import { supabase } from "@/integrations/supabase/client";
import { gatherTrackingData, fetchLocationData } from "@/utils/trackingUtils";

// TypeScript interfaces for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  enquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  role?: string;
  enquiryType?: string;
  message?: string;
}

interface LocationData {
  ip_address?: string;
  location_city?: string;
  location_country?: string;
}

// Form validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = "Full name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  } else if (data.name.trim().length > 100) {
    errors.name = "Name must be less than 100 characters";
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Phone validation
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  // Organization validation
  if (!data.organization.trim()) {
    errors.organization = "Organization is required";
  } else if (data.organization.trim().length < 2) {
    errors.organization = "Organization must be at least 2 characters long";
  } else if (data.organization.trim().length > 200) {
    errors.organization = "Organization must be less than 200 characters";
  }

  // Message validation
  if (data.message && data.message.length > 1000) {
    errors.message = "Message must be less than 1000 characters";
  }

  return errors;
};

// Debounce function
const useDebounce = (callback: Function, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback((...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => callback(...args), delay);
    setTimeoutId(newTimeoutId);
  }, [callback, delay, timeoutId]);

  return debouncedCallback;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    enquiryType: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationData, setLocationData] = useState<LocationData>({});

  // Debounced form submission
  const debouncedSubmit = useDebounce(async (formData: FormData) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setIsLoadingLocation(true);

    try {
      // Gather tracking data
      const trackingData = gatherTrackingData();
      
      // Fetch location data with fallback
      let locationResult: LocationData = {};
      try {
        locationResult = await fetchLocationData();
        setLocationData(locationResult);
      } catch (error) {
        console.warn('Failed to fetch location data, using fallback:', error);
        // Fallback: try alternative IP service
        try {
          const fallbackResponse = await fetch('https://api.ipify.org?format=json');
          const fallbackData = await fallbackResponse.json();
          locationResult = { ip_address: fallbackData.ip };
        } catch (fallbackError) {
          console.warn('Fallback location service also failed:', fallbackError);
          // Continue without location data
        }
      } finally {
        setIsLoadingLocation(false);
      }
      
      // Determine if this is a high intent enquiry
      const isHighIntent = ['demo', 'pricing'].includes(formData.enquiryType.toLowerCase());
      
      // Prepare tags based on enquiry type and high intent
      const tags = [];
      if (isHighIntent) tags.push('HighIntent');
      if (formData.enquiryType) tags.push(formData.enquiryType);

      // Send to backend API with CORS error handling
      const response = await fetch('https://platskills.com/web-api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          organization: formData.organization,
          role: formData.role || null,
          enquiry_type: formData.enquiryType || null,
          message: formData.message || null,
          source_page: trackingData.source_page,
          campaign_id: trackingData.campaign_id || null,
          utm_source: trackingData.utm_source || null,
          utm_medium: trackingData.utm_medium || null,
          utm_campaign: trackingData.utm_campaign || null,
          referrer_url: trackingData.referrer_url || null,
          user_agent: trackingData.user_agent,
          device_type: trackingData.device_type,
          browser: trackingData.browser,
          ip_address: locationResult.ip_address || null,
          location_city: locationResult.location_city || null,
          location_country: locationResult.location_country || null,
          clarity_session_id: trackingData.clarity_session_id || null,
          is_high_intent: isHighIntent,
          source_type: trackingData.source_type,
          tags: tags.length > 0 ? tags : null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Network error' }));
        
        // Handle specific error types
        if (response.status === 0 || response.status === 403) {
          throw new Error('CORS error: Unable to submit form. Please check your network connection.');
        } else if (response.status >= 500) {
          throw new Error('Server error: Please try again later.');
        } else {
          throw new Error(errorData.error || `HTTP ${response.status}: Failed to submit`);
        }
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. Our team will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        role: "",
        enquiryType: "",
        message: ""
      });
      setErrors({});
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was an issue submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, 300); // 300ms debounce

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    // Submit with debouncing
    debouncedSubmit(formData);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle Enter key for form submission
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(e as any);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["support@platskills.com"],
      availability: "24/7 Response"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Offee - Orage Digital Pvt Ltd", "306, Bhairav Milestone,", "Above Hotel Tribe, Road 16U,", "Wagle Industrial Estate,", "Thane, Maharashtra 400604"],
      availability: "Visit by appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 9 AM - 1 PM", "Sunday: Closed"],
      availability: "IST (UTC +5:30)"
    }
  ];

  const enquiryTypes = [
    { value: "demo", label: "Schedule Demo", icon: "📊" },
    { value: "pricing", label: "Pricing Information", icon: "💰" },
    { value: "implementation", label: "Implementation Support", icon: "🚀" },
    { value: "partnership", label: "Partnership Opportunities", icon: "🤝" },
    { value: "support", label: "Technical Support", icon: "🔧" },
    { value: "other", label: "Other", icon: "❓" }
  ];

  const roles = [
    "Vice Chancellor",
    "Director",
    "Dean",
    "HOD",
    "Training & Placement Officer",
    "Faculty",
    "Academic Coordinator",
    "Other"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your institution's outcomes? Get in touch with our experts today
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 id="send-message" className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6" onKeyDown={handleKeyDown}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          disabled={isSubmitting}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@college.edu"
                          required
                          disabled={isSubmitting}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          disabled={isSubmitting}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          aria-invalid={!!errors.phone}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Role
                        </label>
                        <Select 
                          value={formData.role} 
                          onValueChange={(value) => handleInputChange('role', value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger id="role" aria-describedby={errors.role ? "role-error" : undefined}>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            {roles.map((role) => (
                              <SelectItem key={role} value={role}>
                                {role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.role && (
                          <p id="role-error" className="mt-1 text-sm text-red-600" role="alert">
                            {errors.role}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                        Organization/College *
                      </label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Your college or institution name"
                        required
                        disabled={isSubmitting}
                        aria-describedby={errors.organization ? "organization-error" : undefined}
                        aria-invalid={!!errors.organization}
                      />
                      {errors.organization && (
                        <p id="organization-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.organization}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Enquiry Type
                      </label>
                      <Select 
                        value={formData.enquiryType} 
                        onValueChange={(value) => handleInputChange('enquiryType', value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger id="enquiryType" aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}>
                          <SelectValue placeholder="Select enquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {enquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              <span className="flex items-center space-x-2">
                                <span>{type.icon}</span>
                                <span>{type.label}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.enquiryType && (
                        <p id="enquiryType-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.enquiryType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us more about your requirements, number of students, current challenges, etc."
                        rows={5}
                        disabled={isSubmitting}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.message}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-gray-500">
                        {formData.message.length}/1000 characters
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={isSubmitting}
                      aria-describedby="submit-status"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    {/* Loading indicator for location data */}
                    {isLoadingLocation && (
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Gathering location data...
                      </div>
                    )}
                    
                    <div id="submit-status" className="sr-only" aria-live="polite">
                      {isSubmitting ? "Form is being submitted" : "Form is ready to submit"}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Our team is here to help you understand how PLAT can transform your institution's outcomes. 
                  Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-gray-600">{detail}</p>
                              ))}
                            </div>
                            <p className="text-sm text-blue-600 mt-2">{info.availability}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Quick Actions</h3>
                <div className="grid gap-4">
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <Calendar className="w-5 h-5 mr-3" aria-hidden="true" />
                    <div className="text-left">
                      <div className="font-medium">Schedule Demo</div>
                      <div className="text-sm text-gray-600">Book a personalized 30-min demo</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <BookOpen className="w-5 h-5 mr-3" aria-hidden="true" />
                    <div className="text-left">
                      <div className="font-medium">Download Brochure</div>
                      <div className="text-sm text-gray-600">Get detailed information packet</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Before You Contact Us</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">How long does implementation take?</h3>
                <p className="text-gray-600">Implementation typically takes 2–4 weeks from the time of agreement to go-live. This includes platform setup, faculty and student training, exam conduction, and generation of department-wise consolidated reports.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">What's included in the demo?</h3>
                <p className="text-gray-600">The demo includes a live walkthrough of the platform, sample skill reports, and an interactive Q&A session tailored to your institution's needs.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Do you offer pilot programs?</h3>
                <p className="text-gray-600">Yes, we offer pilot programs that allow institutions to evaluate PLAT's impact before full-scale deployment.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">What support do you provide?</h3>
                <p className="text-gray-600">We provide 24/7 technical assistance, comprehensive training for faculty and students, and help establish a PLAT Committee to ensure smooth coordination and feedback between your institution and the PLAT team.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
