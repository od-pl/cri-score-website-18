
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Clock, Send, Calendar, Users, Building2, BookOpen } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    enquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      enquiryType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Our Team
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Ready to transform your institution's outcomes? Get in touch with our experts today
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <h2 id="send-message" className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@college.edu"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Role
                        </label>
                        <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                          <SelectTrigger>
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
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization/College *
                      </label>
                      <Input
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Your college or institution name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enquiry Type
                      </label>
                      <Select value={formData.enquiryType} onValueChange={(value) => handleInputChange('enquiryType', value)}>
                        <SelectTrigger>
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us more about your requirements, number of students, current challenges, etc."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
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
                            <Icon className="w-6 h-6 text-blue-600" />
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
                    <Calendar className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Schedule Demo</div>
                      <div className="text-sm text-gray-600">Book a personalized 30-min demo</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <BookOpen className="w-5 h-5 mr-3" />
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
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Before You Contact Us</h2>
            <p className="text-lg sm:text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
