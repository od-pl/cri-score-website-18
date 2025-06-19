import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, IndianRupee, Shield, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How is CRI different from CGPA or traditional grades?",
      answer: "CGPA reflects how well a student performs academically in specific subjects. In contrast, CRI (Career Readiness Index) measures holistic job readiness across five critical skill domains: Cognitive, Socio-Emotional, Adaptive, Practical, and Entrepreneurial skills. These are the competencies employers value most in real-world roles. Unlike grades, which often fail to capture workplace potential, CRI offers a multidimensional profile that better predicts success in dynamic, professional environments.",
      icon: HelpCircle
    },
    {
      question: "Is PLAT compliant with NAAC and NEP 2020 requirements?",
      answer: "Yes, PLAT is fully aligned with NAAC's student outcome assessment criteria and NEP 2020's emphasis on skill-based education. Our framework helps institutions demonstrate measurable student outcomes, which is crucial for NAAC accreditation. Many of our partner colleges have seen significant improvements in their NAAC grades after implementing PLAT.",
      icon: Shield
    },
    {
      question: "What is the cost structure for implementing PLAT?",
      answer: "PLAT offers flexible pricing based on your institution's size, requirements, and scale of implementation. We provide per-student pricing with volume-based discounts and also offer free pilot programs to help institutions evaluate our impact. Get in touch with us for a customised quote that suits your needs.",
      icon: IndianRupee
    },
    {
      question: "What kind of support do you provide during implementation?",
      answer: "We provide comprehensive support to ensure seamless implementation and long-term value realisation. This includes faculty training, student orientation programs, technical assistance, customised reporting, and regular progress reviews in collaboration with your Training & Placement (T&P) cell. As part of our partnership model, we help form a PLAT Committee within your institution. This committee acts as a vital link between your team and ours - facilitating feedback, ensuring contextual alignment, and driving continuous improvement in student outcomes.",
      icon: Phone
    },
    {
      question: "How long does it take to see results?",
      answer: "Institutions often begin to see initial insights and engagement shifts within the first few months of implementation. Tangible improvements in student self-awareness, career clarity, and placement preparedness typically follow as the program gains traction. The overall impact depends on how actively PLAT is embedded into academic and placement workflows - but early momentum is visible quickly when the institution is engaged.",
      icon: MessageCircle
    },
    {
      question: "Can PLAT integrate with our existing systems (LMS, ERP)?",
      answer: "While PLAT is a standalone platform, we offer the ability to integrate PLAT scores and insights into your existing LMS or ERP systems, if required. This enables institutions to view career readiness data alongside academic records within their current infrastructure. Additionally, we are developing a dedicated CRI System Dashboard that will consolidate PLAT data with academic results and student profiles—including co-curricular and extracurricular pursuits - for a comprehensive view of student development. Our team works closely with your IT stakeholders to enable smooth and secure data integration.",
      icon: Shield
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We follow rigorous data privacy and security standards to protect institutional and student information. PLAT is certified under ISO/IEC 27001:2022 for Information Security Management, ISO 9001:2015 for Quality Management, and has undergone a Web Application Security Audit (WASA) by a CERT-IN empanelled auditor. All data is encrypted, securely stored, and access is role-based and tightly controlled. We also offer on-premises deployment options for institutions with advanced security policies.",
      icon: Shield
    },
    {
      question: "What makes PLAT different from other assessment tools?",
      answer: "PLAT is unique because it: 1) Uses AI-powered assessment for accurate skill mapping, 2) Provides actionable improvement paths through micro-learning, 3) Offers real-time tracking and progress monitoring, 4) Aligns with Indian regulatory requirements (NAAC, NEP), 5) Includes employer validation and job matching features, 6) Focuses on outcome-based education rather than just assessment.",
      icon: HelpCircle
    }
  ];

  const supportChannels = [
    {
      title: "Email Support",
      description: "Get detailed answers to your questions",
      contact: "support@platskills.com",
      icon: Mail,
      availability: "24/7 Response"
    }
    // , {
    //   title: "Phone Support",
    //   description: "Speak directly with our experts",
    //   contact: "+91 98765 43210",
    //   icon: Phone,
    //   availability: "Mon-Fri, 9 AM - 6 PM"
    // }, {
    //   title: "Live Chat",
    //   description: "Instant help when you need it",
    //   contact: "Available on our website",
    //   icon: MessageCircle,
    //   availability: "Mon-Fri, 9 AM - 6 PM"
    // }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about PLAT, CRI, and implementing outcome-based education at your institution
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="ml-14 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600">
              Our support team is here to help you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 mb-4">{channel.description}</p>
                    <div className="font-semibold text-blue-600 mb-2">{channel.contact}</div>
                    <div className="text-sm text-gray-500">{channel.availability}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">Explore our comprehensive documentation and guides</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Guide</h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step guide to implementing PLAT at your institution, including best practices and common pitfalls to avoid.
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Stay Tuned!</Button>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Research Papers</h3>
                <p className="text-gray-600 mb-6">
                  Academic research backing the CIF framework and outcome-based education methodology used in PLAT.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">Something's Brewing</Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Video Tutorials</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive video library covering platform usage, interpretation of results, and student engagement strategies.
                </p>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">We're Almost Ready</Button>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Webinar Series</h3>
                <p className="text-gray-600 mb-6">
                  Regular webinars featuring success stories, new features, and expert discussions on outcome-based education.
                </p>
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">Sneak Peek Soon</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Schedule a demo to see how PLAT can transform your institution's outcomes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#send-message">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
                Schedule Demo
              </Button>
            </Link>
            {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
              Contact Sales Team
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
