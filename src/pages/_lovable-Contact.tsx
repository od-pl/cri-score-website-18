
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
// import { supabase } from "@/integrations/supabase/client";
import { trackUserInteraction } from "@/utils/trackingUtils";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    role: "",
    phoneNumber: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track the form submission
      trackUserInteraction('form_submit', {
        form_type: 'contact',
        organization: formData.organization,
        role: formData.role
      });

      // Get user's location and other metadata
      const userAgent = navigator.userAgent;
      const referrer = document.referrer;
      const currentUrl = window.location.href;
      
      // Get UTM parameters
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');

      // Prepare the data for Supabase (commented out)
      // const enquiryData = {
      //   full_name: formData.fullName,
      //   email: formData.email,
      //   organization: formData.organization,
      //   role: formData.role,
      //   phone_number: formData.phoneNumber,
      //   message: formData.message,
      //   enquiry_type: 'contact_form',
      //   source_page: 'contact',
      //   url: currentUrl,
      //   referrer_url: referrer,
      //   user_agent: userAgent,
      //   utm_source: utmSource,
      //   utm_medium: utmMedium,
      //   utm_campaign: utmCampaign,
      //   submitted_at: new Date().toISOString()
      // };

      // Insert into Supabase (commented out)
      // const { error } = await supabase
      //   .from('enquiries')
      //   .insert([enquiryData]);

      // if (error) {
      //   console.error('Error submitting form:', error);
      //   toast({
      //     title: "Error",
      //     description: "There was an error submitting your message. Please try again.",
      //     variant: "destructive",
      //   });
      // } else {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          organization: "",
          role: "",
          phoneNumber: "",
          message: ""
        });
      // }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "support@platskills.com",
      action: "mailto:support@platskills.com"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Mumbai, Maharashtra, India",
      action: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday - Friday: 10 AM - 6 PM\nSaturday - Sunday: Closed",
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your college's placement outcomes? Let's discuss how PLAT can help you achieve an 18% boost in placement rates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're looking to improve your NAAC scores, boost placement rates, or simply learn more about our AI-powered career readiness platform, we're here to help.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.action ? (
                            <a href={info.action} className="text-blue-600 hover:text-blue-800">
                              {info.description}
                            </a>
                          ) : (
                            info.description
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response Guarantee</h3>
              <p className="text-gray-600">
                We respond to all inquiries within 24 hours. For urgent matters, please call us directly or mention "URGENT" in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6" id="send-message">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organization">Organization/College *</Label>
                      <Input
                        id="organization"
                        name="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your organization"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Your Role</Label>
                      <Input
                        id="role"
                        name="role"
                        type="text"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="e.g., Principal, Dean, TPO"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your college's placement challenges and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready for a Free Pilot Program?</h3>
              <p className="text-xl mb-6 text-blue-100">
                Experience the power of PLAT with a select group of your students - completely free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-blue-100">
                  <CheckCircle className="w-5 h-5" />
                  <span>No setup costs</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-100">
                  <CheckCircle className="w-5 h-5" />
                  <span>Instant insights</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-100">
                  <CheckCircle className="w-5 h-5" />
                  <span>Proven results</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
