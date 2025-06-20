
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, Star, Award, Building2, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import PlatReportModal from "@/components/PlatReportModal";
import AnimatedCounter from "@/components/AnimatedCounter";
import CollegeCarousel from "@/components/CollegeCarousel";
import ReportViewModal from "@/components/ReportViewModal";

const Index = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [showViewReportModal, setShowViewReportModal] = useState(false);

  const painPoints = [
    {
      icon: "❌",
      stat: "54%",
      text: "of employers don't trust marksheets",
      source: "India Skills Report 2024",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: "😕",
      stat: "72%",
      text: "of students miss key workplace skills",
      source: "AICTE-NEAT Report 2023",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: "⏰",
      stat: "37 days",
      text: "average hiring delay",
      source: "LinkedIn India, 2023",
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  const steps = [
    {
      title: "Test",
      description: "Comprehensive skill assessment",
      icon: "📝"
    },
    {
      title: "Micro Tasks",
      description: "Targeted skill building",
      icon: "💪"
    },
    {
      title: "Skill Improvement",
      description: "Measurable progress",
      icon: "📈"
    },
    {
      title: "CRI Score",
      description: "Career Readiness Index",
      icon: "🏆"
    }
  ];

  const testimonials = [
    {
      name: "Sachin Sengar",
      role: "Founder, GreenMentor",
      quote: "PLAT didn't just assess me—it validated my potential to solve real problems.",
      rating: 5,
      image: "/lovable-uploads/795ddc5d-6585-4836-9198-93ae9e030d42.png"
    },
    {
      name: "Sandip Kathiriya",
      role: "Partner, Amazon India Ltd",
      quote: "PLAT helped me filter out the noise and focus on what I'm naturally good at.",
      rating: 4.5,
      image: "/lovable-uploads/77469080-a44e-47f0-9c8b-4342ab72624c.png"
    },
    {
      name: "Yash Kothari",
      role: "Head of Network Engineering Operations, Comcast",
      quote: "PLAT helped me think beyond technical skills and recognise my path early.",
      rating: 5,
      image: "/lovable-uploads/74959d43-794e-4d8d-b8f9-2b9a1819bf7c.png"
    },
    {
      name: "Ananya Patel",
      role: "Jr.Strategy Analyst, Accenture Strategy",
      quote: "Increased my CRI score from 312 to 624—and secured 3 offers during final placements.",
      rating: 5,
      image: "/lovable-uploads/e4b8e8c9-b0e6-499c-932b-11952dd7ecfe.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Shortcut to Better{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    'NAAC Student Outcomes'
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  AI-powered analytics to uncover hidden skill gaps and boost placement rates for your college.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact#send-message">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto">
                    Book Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto"
                  onClick={() => setShowViewReportModal(true)}
                >
                  View Report
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 justify-center lg:justify-start">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>25k+ Students Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>300+ Recruiters</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border">
                <img alt="Students looking at PLAT AI dashboard" className="rounded-lg w-full h-48 sm:h-64 object-cover" src="/lovable-uploads/86a57270-710b-43ab-a414-56c58b29425d.png" />
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Career Readiness Index</span>
                    <span className="text-xl lg:text-2xl font-bold text-green-600">840/900</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Hidden Crisis in Higher Education
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Traditional assessment methods are failing students and employers alike
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className={`${point.color} border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="text-3xl lg:text-4xl mb-4">{point.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{point.stat}</div>
                  <p className="text-gray-700 font-medium mb-1 text-sm lg:text-base">{point.text}</p>
                  <p className="text-gray-500 text-xs lg:text-sm italic">{point.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How PLAT Transforms Students
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Co-created by psychometricians and industry leaders, PLAT uses AI to identify skill gaps and nurture real-world competencies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl lg:text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm lg:text-base">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <Link to="/how-it-works">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Learn More About Our Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Hear from students who transformed their careers with PLAT
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm lg:text-base">{testimonial.name}</div>
                      <div className="text-xs lg:text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-xs lg:text-sm italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Read More Success Stories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-12 lg:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Leading Colleges
            </h2>
            <p className="text-lg sm:text-xl text-blue-100">
              <span className="text-yellow-300 font-bold">18% Placement-Rate Jump</span> at our partner Colleges
            </p>
          </div>

          <CollegeCarousel />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300">
                <AnimatedCounter end={25766} />
              </div>
              <div className="text-blue-100 text-sm lg:text-base">Students Assessed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300">
                <AnimatedCounter end={300} suffix="+" />
              </div>
              <div className="text-blue-100 text-sm lg:text-base">Recruiters</div>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300">
                <AnimatedCounter end={85} suffix="%" />
              </div>
              <div className="text-blue-100 text-sm lg:text-base">Placement Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
            Ready to Boost Your College's Placement Rate?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Join leading colleges already using PLAT to improve NAAC outcomes and student success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#send-message">
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
                Reach out to us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-blue-200 text-sm">
            ✓ Try our Pilot Program ✓ Analyse reports ✓ Full support included
          </div>
        </div>
      </section>

      <PlatReportModal 
        isOpen={showReportModal} 
        onClose={() => setShowReportModal(false)} 
        onViewReport={() => setShowViewReportModal(true)}
      />
      <ReportViewModal isOpen={showViewReportModal} onClose={() => setShowViewReportModal(false)} />
    </div>
  );
};

export default Index;
