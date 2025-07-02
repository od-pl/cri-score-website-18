import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Brain, MessageCircle, Zap, Target, RotateCcw, Shield, Cloud, Server, ArrowRight, Eye, Users, BarChart3, User, Book, Lightbulb, TrendingUp, RefreshCw, Globe, Lock, FileText, Search, ChevronRight, Calendar, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      step: "STEP 1",
      title: "Test",
      description: "AI Skill X-Ray pinpoints hidden gaps",
      icon: "📝"
    },
    {
      step: "STEP 2",
      title: "Micro-Tasks",
      description: "Daily 3-min challenges close those gaps fast",
      icon: "💪"
    },
    {
      step: "STEP 3",
      title: "Skill Lift",
      description: "Average CRI jumps +120 points by next semester",
      icon: "📈"
    },
    {
      step: "STEP 4",
      title: "CRI Score",
      description: "Recruiter-trusted Career Readiness Index, shareable on LinkedIn",
      icon: "🏆"
    }
  ];

  const skillLevels = [
    {
      level: "Level 1",
      title: "Foundational Assessment",
      description: "Assesses fundamental concepts and basic skills, establishing a crucial foundation for skill development",
      icon: Brain,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      level: "Level 2",
      title: "Intermediate Assessment",
      description: "Deepens understanding and application of knowledge, presenting moderate challenges to bridge foundational skills with advanced problem-solving",
      icon: Target,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      level: "Level 3",
      title: "Career Readiness Assessment",
      description: "Evaluates alignment with industry-demanded skills, preparing students for the professional world",
      icon: Zap,
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    }
  ];

  const lifecycleSteps = [
    {
      name: "Initial Assessment",
      icon: FileText,
      color: "bg-blue-500",
      angle: 0,
      description: "Risk heat-map in 24 h"
    },
    {
      name: "Gap Analysis",
      icon: Search,
      color: "bg-green-500",
      angle: 72,
      description: "Auto-generated for every student"
    },
    {
      name: "Personal Up-Skilling",
      icon: Target,
      color: "bg-yellow-500",
      angle: 144,
      description: "10-min/day tasks in LMS"
    },
    {
      name: "Progress Tracking",
      icon: BarChart3,
      color: "bg-purple-500",
      angle: 216,
      description: "CRI jumps visibly next semester"
    },
    {
      name: "CRI Score Update",
      icon: RefreshCw,
      color: "bg-red-500",
      angle: 288,
      description: "Shareable certificate, recruiter API"
    }
  ];

  const dashboards = [
    {
      role: "VICE-CHANCELLOR",
      icon: Eye,
      features: ["Campus-wide skill heat-map", "NAAC Criterion 2 reports", "ROI calculator"],
      description: "Strategic overview of institutional outcomes"
    },
    {
      role: "HOD",
      icon: Users,
      features: ["Course-level gap list", "Suggested syllabus tweaks"],
      description: "Departmental management and improvement"
    },
    {
      role: "T&P OFFICER",
      icon: BarChart3,
      features: ["Ranked CRI list", "Recruiter filter", "Offer-rate tracker"],
      description: "Training and placement optimization"
    },
    {
      role: "STUDENT",
      icon: User,
      features: ["Personal radar chart", "Micro-task queue", "CRI growth bar"],
      description: "Personal skill development and progress tracking"
    }
  ];

  const complianceFeatures = [
    {
      title: "WASA",
      description: "Web Application Security Audit (Cert-In)",
      icon: Globe
    },
    {
      title: "ISO 9001:2015",
      description: "Quality Management",
      icon: Shield
    },
    {
      title: "ISO/IEC 27001:2022",
      description: "Information Security Management",
      icon: Lock
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Life Cycle{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Assessment to Upskilling</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive system that measures, improves, and tracks student career readiness through AI-powered analytics
              </p>
            </div>
          </div>
        </section>

        {/* 4-Step How PLAT Transforms Students */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                4-step "How PLAT Transforms Students"
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Co-created by psychometricians and industry leaders, PLAT uses AI to identify skill gaps and nurture real-world competencies
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 touch-manipulation h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                      <div className="text-xs font-bold text-blue-600 mb-2">{step.step}</div>
                      <div className="text-3xl lg:text-4xl mb-4">{step.icon}</div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
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
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Problem */}
              <Card className="bg-red-50 border-red-200 border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">High GPA ≠ Job Readiness</h3>
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "I scored 9.2 CGPA and still failed every tech interview."
                  </blockquote>
                  <p className="text-gray-600">— Final-year CS student</p>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card className="bg-green-50 border-green-200 border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">CRI-Verified Talent Wins Offers</h3>
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "My 8.4 CRI score landed me at Microsoft; recruiters saw exactly what I can do."
                  </blockquote>
                  <p className="text-gray-600">— PLAT Success Story</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 3-Level Skill Assessment */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                3-Level Skill Assessment
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive Evaluation across Cognitive, Applied, and Industry-Ready Skills
              </p>
            </div>

            {/* Desktop Staircase Layout */}
            <div className="hidden md:block relative">
              <div className="relative flex items-end justify-center space-x-8 mb-16">
                {skillLevels.map((level, index) => {
                  const Icon = level.icon;
                  const marginBottom = index === 0 ? 'mb-0' : index === 1 ? 'mb-20' : 'mb-40';
                  return (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <div className={`relative ${marginBottom}`}>
                          <Card className={`${level.bgColor} ${level.borderColor} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-80 cursor-pointer`}>
                            <CardContent className="p-8">
                              <div className="flex items-center mb-4">
                                <div className={`w-12 h-12 rounded-full ${level.color} flex items-center justify-center mr-4`}>
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{level.level}</div>
                                  <h3 className="text-xl font-bold text-gray-900">{level.title}</h3>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm leading-relaxed">{level.description}</p>
                            </CardContent>
                          </Card>
                          
                          <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-6 ${level.color} rounded-t-lg flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{level.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>

            {/* Mobile Vertical Stack */}
            <div className="md:hidden space-y-6">
              {skillLevels.map((level, index) => {
                const Icon = level.icon;
                return (
                  <Card key={index} className={`${level.bgColor} ${level.borderColor} border-2`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full ${level.color} flex items-center justify-center mr-4`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{level.level}</div>
                          <h3 className="text-lg font-bold text-gray-900">{level.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{level.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Assessment to Upskilling Lifecycle */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Assessment to Upskilling Lifecycle
              </h2>
              <p className="text-xl text-gray-600">
                From Entry Assessment to Career Readiness and Continuous Growth
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                  <p className="text-sm text-gray-600">Risk heat-map in 24 h</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Gap Analysis</h3>
                  <p className="text-sm text-gray-600">Auto-generated for every student</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Up-Skilling</h3>
                  <p className="text-sm text-gray-600">10-min/day tasks in LMS</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                  <p className="text-sm text-gray-600">CRI jumps visibly next semester</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RefreshCw className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">CRI Score Update</h3>
                  <p className="text-sm text-gray-600">Shareable certificate, recruiter API</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-slate-300">
                We maintain the highest standards of data protection and compliance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">WASA</h3>
                  <p className="text-slate-300">Web Application Security Audit (Cert-In)</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">ISO 9001:2015</h3>
                  <p className="text-slate-300">Quality Management</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">ISO/IEC 27001:2022</h3>
                  <p className="text-slate-300">Information Security Management</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stakeholder Dashboards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Stakeholder Dashboards
              </h2>
              <p className="text-xl text-gray-600">
                Tailored insights for every role in your institution
              </p>
            </div>

            <Tabs defaultValue="vc" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="vc">Vice Chancellor</TabsTrigger>
                <TabsTrigger value="hod">HOD</TabsTrigger>
                <TabsTrigger value="tp">T&P Officer</TabsTrigger>
                <TabsTrigger value="student">Student</TabsTrigger>
              </TabsList>

              {dashboards.map((dashboard, index) => {
                const Icon = dashboard.icon;
                const tabValue = index === 0 ? 'vc' : index === 1 ? 'hod' : index === 2 ? 'tp' : 'student';
                const dashboardImage = index === 0 ? '/lovable-uploads/ad9fd5d4-e263-45b5-bde2-867b14c3b35e.png' : index === 1 ? '/lovable-uploads/d5b7ad41-dd4d-42fc-ba47-84ff6d7230fc.png' : index === 2 ? '/lovable-uploads/ad9fd5d4-e263-45b5-bde2-867b14c3b35e.png' : '/lovable-uploads/a2e906e2-57ef-4a11-bc41-adf34f73645f.png';
                return <TabsContent key={index} value={tabValue} className="mt-8">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{dashboard.role}</h3>
                          <p className="text-gray-600">{dashboard.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900 text-lg">Key Features</h4>
                          <ul className="space-y-3">
                            {dashboard.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{feature}</span>
                              </li>)}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="text-sm text-gray-500 mb-4 font-medium">Dashboard Preview</div>
                          <div className="bg-white rounded-lg border overflow-hidden shadow-sm">
                            <img src={dashboardImage} alt={`${dashboard.role} Dashboard`} className="w-full h-48 object-cover object-top" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>;
              })}
            </Tabs>

            {/* CTA for Technical Deck */}
            <div className="text-center mt-12">
              <Link to="/contact#send-message">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto font-semibold">
                  Request Technical Deck
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
              Ready to Transform Your Students?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              See PLAT in action with a personalized demo for your institution
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
    </TooltipProvider>
  );
};

export default HowItWorks;
