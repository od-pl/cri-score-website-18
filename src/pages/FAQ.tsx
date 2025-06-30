
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Book, Video, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | undefined>("item-1");
  const faqs = [{
    question: "What is PLAT?",
    answer: "PLAT is an AI-powered platform that helps colleges measure and improve student career readiness. It provides a Career Readiness Index (CRI) for each student, which is a comprehensive score that reflects their skills and competencies."
  }, {
    question: "How does PLAT work?",
    answer: "PLAT uses AI to assess students' skills and identify areas where they need improvement. It then provides personalized learning paths and micro-tasks to help students develop those skills. The platform also tracks students' progress and provides feedback to help them stay on track."
  }, {
    question: "What is the Career Readiness Index (CRI)?",
    answer: "The Career Readiness Index (CRI) is a comprehensive score that reflects a student's skills and competencies. It is based on a variety of factors, including academic performance, skills assessment results, and participation in extracurricular activities."
  }, {
    question: "How can PLAT help my college?",
    answer: "PLAT can help your college improve student career readiness, increase placement rates, and attract more recruiters. The platform also provides valuable data and insights that can be used to improve curriculum and instruction."
  }, {
    question: "How much does PLAT cost?",
    answer: "PLAT offers a variety of pricing plans to meet the needs of different colleges. Please contact us for more information."
  }, {
    question: "Is PLAT easy to implement?",
    answer: "Yes, PLAT is easy to implement. The platform is cloud-based and requires no special hardware or software. We also provide comprehensive training and support to help you get started."
  }];
  
  const additionalResources = [{
    title: "Gallery",
    description: "Explore a visual gallery showcasing the PLAT implementation process, offering valuable resources, case studies, and expert insights to guide your institution's success.",
    icon: FileText,
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    link: "/how-it-works"
  }, {
    title: "Blog",
    description: "Stay informed with our insightful blog, featuring success stories, product updates, and expert commentary on the evolving landscape of outcome-based education.",
    icon: Book,
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    link: "/testimonials"
  }, {
    title: "Video Tutorials",
    description: "Comprehensive video library covering platform usage, interpretation of results, and student engagement strategies.",
    icon: Video,
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    link: "/contact"
  }, {
    title: "Expert Consultation",
    description: "Schedule a personalized consultation with our education specialists to discuss your specific needs and implementation strategy.",
    icon: Users,
    color: "bg-green-500",
    bgColor: "bg-green-50",
    link: "/contact"
  }];
  
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about PLAT and how it can help your
              institution
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="font-semibold text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Additional Resources Section - Updated with Video Tutorials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore more ways to understand and implement PLAT
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalResources.map((resource, index) => {
              const Icon = resource.icon;
              return <Card key={index} className={`${resource.bgColor} border-2 hover:shadow-lg transition-all duration-300 group cursor-pointer`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${resource.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{resource.description}</p>
                    <Link to={resource.link}>
                      <Button variant="outline" className="group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>;
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Students?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get started with PLAT today and see the difference it can make
          </p>
          <Link to="/contact#send-message">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
              Take One Test
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default FAQ;
