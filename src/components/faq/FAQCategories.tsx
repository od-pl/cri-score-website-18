
import React from 'react';
import { MessageCircle, Building2, Users, Settings } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQCategories = () => {
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

  return (
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
  );
};

export default FAQCategories;
