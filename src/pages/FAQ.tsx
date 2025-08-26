import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Book, Video, FileText, Download, Mail, MessageCircle, Clock, CheckCircle, Users, Award, Building2, TrendingUp, Target, Search, Settings, Shield, Globe, BarChart3, BookOpen, Play, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General",
      icon: MessageCircle,
      faqs: [
        {
          question: "What is PLAT and how does it work?",
          answer: "PLAT (Platform for Learning and Assessment Technology) is an AI-powered assessment platform that measures career readiness through comprehensive skill evaluation. It uses advanced psychometric algorithms to assess students across five key dimensions: Cognitive, Practical, Adaptive, Socio-Emotional, and Entrepreneurship skills."
        },
        {
          question: "How is CRI different from traditional academic grades?",
          answer: "Unlike traditional grades that focus on theoretical knowledge, CRI (Career Readiness Index) measures practical, industry-relevant skills that employers actually value. It combines academic performance with real-world competencies, providing a more holistic view of a student's career readiness."
        },
        {
          question: "Which colleges are currently using PLAT?",
          answer: "PLAT is trusted by 50+ leading institutions across India, including top engineering colleges, business schools, and universities. Our partner institutions have reported an average 18% increase in placement rates."
        }
      ]
    },
    {
      category: "For Institutions",
      icon: Building2,
      faqs: [
        {
          question: "How does PLAT help improve NAAC ratings?",
          answer: "PLAT directly supports NAAC Criterion 2 (Teaching-Learning and Evaluation) by providing measurable student outcome data, skill tracking, and evidence-based improvement reports. Our platform generates comprehensive documentation required for accreditation."
        },
        {
          question: "What is the implementation timeline?",
          answer: "PLAT can be deployed within 2-4 weeks. The process includes: Initial setup (3-5 days), Faculty training (1 week), Student onboarding (1 week), and full rollout with ongoing support."
        },
        {
          question: "How do we measure ROI from PLAT?",
          answer: "ROI is measured through: Increased placement rates (avg. 18% improvement), Higher average salary packages, Improved NAAC scores, Reduced recruitment costs, and Enhanced institutional reputation with industry partners."
        }
      ]
    },
    {
      category: "For Students",
      icon: Users,
      faqs: [
        {
          question: "How long does the assessment take?",
          answer: "The initial comprehensive assessment takes 45-60 minutes. Daily micro-learning tasks take just 3-5 minutes each. Progress assessments are conducted monthly to track improvement."
        },
        {
          question: "How can I improve my CRI score?",
          answer: "Your CRI score improves through: Completing personalized micro-learning tasks, Participating in skill-building activities, Taking additional assessments, Engaging in real-world projects, and Consistent practice based on your personalized development plan."
        },
        {
          question: "Is my CRI score recognized by employers?",
          answer: "Yes! Over 300+ recruiters and companies recognize CRI scores. Many leading organizations use CRI scores for screening candidates, and the score is becoming an industry standard for measuring career readiness."
        }
      ]
    },
    {
      category: "Technical",
      icon: Settings,
      faqs: [
        {
          question: "What are the technical requirements?",
          answer: "PLAT is a cloud-based platform requiring: Internet connection (minimum 2 Mbps), Modern web browser (Chrome, Firefox, Safari, Edge), Standard computer or mobile device, and Basic IT infrastructure for institutional deployment."
        },
        {
          question: "How secure is student data?",
          answer: "PLAT maintains the highest security standards with ISO/IEC 27001:2022 certification, WASA compliance, end-to-end encryption, regular security audits, and GDPR-compliant data handling practices."
        },
        {
          question: "Can PLAT integrate with our existing systems?",
          answer: "Yes! PLAT offers API integrations with most LMS platforms, student information systems, and HR management tools. Our technical team provides full support for seamless integration."
        }
      ]
    }
  ];

  const supportResources = [
    {
      title: "Gallery",
      description: "View our awards, achievements, certifications, and strategic partnerships showcase",
      icon: ImageIcon,
      buttonText: "View Gallery",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      link: "/gallery"
    },
    {
      title: "Video Tutorials",
      description: "Comprehensive video library covering platform usage, interpretation of results, and student engagement strategies",
      icon: Play,
      buttonText: "Watch Videos",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      title: "Blog",
      description: "Latest insights, best practices, and thought leadership articles",
      icon: BookOpen,
      buttonText: "Read Blog",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      link: "/blog"
    },
    {
      title: "Sample Reports",
      description: "Download sample CRI reports and dashboard previews",
      icon: Download,
      buttonText: "Get Samples",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      icon: Mail,
      contact: "support@platskills.com",
      color: "bg-blue-50"
    },
    {
      title: "Live Chat",
      description: "Instant assistance for quick queries",
      icon: MessageCircle,
      contact: "Available 24/7",
      color: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about PLAT, CRI scores, and transforming student outcomes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={categoryIndex} className="space-y-6">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border rounded-lg">
                        <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50">
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support materials to help you succeed with PLAT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportResources.map((resource, index) => {
              const ResourceIcon = resource.icon;
              const CardWrapper = (
                <Card className={`${resource.color} border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col cursor-pointer`}>
                  <CardContent className="p-8 text-center flex flex-col h-full justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                        <ResourceIcon className="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
                    </div>
                    <Button className="w-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 mt-6">
                      {resource.buttonText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );

              return resource.link ? (
                <Link key={index} to={resource.link}>
                  {CardWrapper}
                </Link>
              ) : (
                <div key={index}>
                  {CardWrapper}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600">
              Our support team is here to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 justify-items-center">
            {contactMethods.map((method, index) => {
              const MethodIcon = method.icon;
              return (
                <Card key={index} className={`${method.color} border-2 hover:shadow-lg transition-all duration-300 max-w-md w-full`}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                      <MethodIcon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                    <p className="font-semibold text-gray-900">{method.contact}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto font-semibold">
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Student Outcomes?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join leading institutions already using PLAT to improve placement rates and student success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#send-message">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
                Take One Test
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
