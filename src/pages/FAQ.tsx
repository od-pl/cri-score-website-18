import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, DollarSign, Shield, Phone, Mail, MessageCircle } from "lucide-react";
const FAQ = () => {
  const faqs = [{
    question: "How is CRI different from CGPA or traditional grades?",
    answer: "While CGPA measures academic performance in specific subjects, CRI evaluates career readiness across five critical dimensions: Cognitive, Functional, Adaptive, Social-Emotional, and Literacy skills. CRI provides a comprehensive view of job readiness that employers actually care about, making it a better predictor of workplace success than traditional grades.",
    icon: HelpCircle
  }, {
    question: "Is PLAT compliant with NAAC and NEP 2020 requirements?",
    answer: "Yes, PLAT is fully aligned with NAAC's student outcome assessment criteria and NEP 2020's emphasis on skill-based education. Our framework helps institutions demonstrate measurable student outcomes, which is crucial for NAAC accreditation. Many of our partner colleges have seen significant improvements in their NAAC scores after implementing PLAT.",
    icon: Shield
  }, {
    question: "What is the cost structure for implementing PLAT?",
    answer: "Our pricing is flexible and based on your institution's size and requirements. We offer per-student pricing starting from ₹299 per assessment, with significant discounts for bulk implementations. We also provide free pilot programs for institutions to evaluate our impact before full deployment. Contact us for a customized quote.",
    icon: DollarSign
  }, {
    question: "What kind of support do you provide during implementation?",
    answer: "We provide comprehensive support including: dedicated account manager, faculty training sessions, student orientation programs, technical support, regular progress reviews, and custom reporting. Our team works closely with your T&P cell to ensure smooth implementation and maximum benefit realization.",
    icon: Phone
  }, {
    question: "How long does it take to see results?",
    answer: "Most institutions see initial insights within the first month of implementation. Significant improvements in student outcomes typically become visible within one semester (3-4 months). Full transformation, including improved placement rates and NAAC scores, usually takes 6-12 months depending on the level of engagement.",
    icon: MessageCircle
  }, {
    question: "Can PLAT integrate with our existing systems (LMS, ERP)?",
    answer: "Yes, PLAT offers API-based integration with most popular LMS and ERP systems. We can seamlessly integrate with platforms like Moodle, Canvas, SAP, Oracle, and others. Our technical team handles the integration process to ensure minimal disruption to your existing workflows.",
    icon: Shield
  }, {
    question: "How do you ensure data privacy and security?",
    answer: "We take data security very seriously. PLAT uses AES-256 encryption, is ISO 27001 compliant, and follows GDPR guidelines. All student data is stored securely and access is strictly controlled. We also offer on-premises deployment options for institutions with specific security requirements.",
    icon: Shield
  }, {
    question: "What makes PLAT different from other assessment tools?",
    answer: "PLAT is unique because it: 1) Uses AI-powered assessment for accurate skill mapping, 2) Provides actionable improvement paths through micro-learning, 3) Offers real-time tracking and progress monitoring, 4) Aligns with Indian regulatory requirements (NAAC, NEP), 5) Includes employer validation and job matching features, 6) Focuses on outcome-based education rather than just assessment.",
    icon: HelpCircle
  }];
  const supportChannels = [{
    title: "Email Support",
    description: "Get detailed answers to your questions",
    contact: "support@offee.in",
    icon: Mail,
    availability: "24/7 Response"
  }, {
    title: "Phone Support",
    description: "Speak directly with our experts",
    contact: "+91 98765 43210",
    icon: Phone,
    availability: "Mon-Fri, 9 AM - 6 PM"
  }, {
    title: "Live Chat",
    description: "Instant help when you need it",
    contact: "Available on our website",
    icon: MessageCircle,
    availability: "Mon-Fri, 9 AM - 6 PM"
  }];
  return <div className="min-h-screen pt-16">
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
            return <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
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
                </AccordionItem>;
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
            return <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 mb-4">{channel.description}</p>
                    <div className="font-semibold text-blue-600 mb-2">{channel.contact}</div>
                    <div className="text-sm text-gray-500">{channel.availability}</div>
                  </CardContent>
                </Card>;
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
            <p className="text-xl text-gray-600">Something 's Brewing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Guide</h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step guide to implementing PLAT at your institution, including best practices and common pitfalls to avoid.
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Coming Soon</Button>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Research Papers</h3>
                <p className="text-gray-600 mb-6">
                  Academic research backing the CIF framework and outcome-based education methodology used in PLAT.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">Coming Soon</Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Video Tutorials</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive video library covering platform usage, interpretation of results, and student engagement strategies.
                </p>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Coming Soon</Button>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Webinar Series</h3>
                <p className="text-gray-600 mb-6">
                  Regular webinars featuring success stories, new features, and expert discussions on outcome-based education.
                </p>
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">Coming Soon</Button>
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
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
              Schedule Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default FAQ;