
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Brain, MessageCircle, Zap, Target, RotateCcw, Shield, Cloud, Server, ArrowRight, Eye, Users, BarChart3, User, Book, Lightbulb, TrendingUp, RefreshCw, Globe, Lock, FileText, Search, ChevronRight, Calendar, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  const steps = [{
    step: "STEP 1",
    title: "Test", 
    description: "AI Skill X-Ray pinpoints hidden gaps",
    icon: "📝"
  }, {
    step: "STEP 2",
    title: "Micro-Tasks",
    description: "Daily 3-min challenges close those gaps fast",
    icon: "💪"
  }, {
    step: "STEP 3", 
    title: "Skill Lift",
    description: "Average CRI jumps +120 points by next semester",
    icon: "📈"
  }, {
    step: "STEP 4",
    title: "CRI Score",
    description: "Recruiter-trusted Career Readiness Index, shareable on LinkedIn",
    icon: "🏆"
  }];

  const skillLevels = [{
    level: "Level 1",
    title: "Foundational Assessment",
    description: "Assesses fundamental concepts and basic skills, establishing a crucial foundation for skill development",
    icon: Brain,
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  }, {
    level: "Level 2",
    title: "Intermediate Assessment", 
    description: "Deepens understanding and application of knowledge, presenting moderate challenges to bridge foundational skills with advanced problem-solving",
    icon: Target,
    color: "bg-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  }, {
    level: "Level 3",
    title: "Career Readiness Assessment",
    description: "Evaluates alignment with industry-demanded skills, preparing students for the professional world",
    icon: Zap,
    color: "bg-yellow-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  }];

  const lifecycleSteps = [{
    name: "Initial Assessment",
    icon: FileText,
    color: "bg-blue-500",
    bgColor: "bg-blue-100",
    textColor: "text-blue-500",
    description: "Risk heat-map in 24 h"
  }, {
    name: "Gap Analysis",
    icon: Search,
    color: "bg-green-500",
    bgColor: "bg-green-100",
    textColor: "text-green-500",
    description: "Auto-generated for every student"
  }, {
    name: "Personal Up-Skilling",
    icon: Clock,
    color: "bg-yellow-500",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-500",
    description: "10-min/day tasks in LMS"
  }, {
    name: "Progress Tracking",
    icon: BarChart3,
    color: "bg-purple-500",
    bgColor: "bg-purple-100",
    textColor: "text-purple-500",
    description: "CRI jumps visibly next semester"
  }, {
    name: "CRI Score Update",
    icon: RefreshCw,
    color: "bg-red-500",
    bgColor: "bg-red-100",
    textColor: "text-red-500",
    description: "Shareable certificate, recruiter API"
  }];

  const dashboards = [{
    role: "VICE-CHANCELLOR",
    icon: Eye,
    features: ["Campus-wide skill heat-map", "NAAC Criterion 2 reports", "ROI calculator"],
    description: "Strategic overview of institutional outcomes"
  }, {
    role: "HOD",
    icon: Users,
    features: ["Course-level gap list", "Suggested syllabus tweaks"],
    description: "Departmental management and improvement"
  }, {
    role: "T&P OFFICER",
    icon: BarChart3,
    features: ["Ranked CRI list", "Recruiter filter", "Offer-rate tracker"],
    description: "Training and placement optimization"
  }, {
    role: "STUDENT",
    icon: User,
    features: ["Personal radar chart", "Micro-task queue", "CRI growth bar"],
    description: "Personal skill development and progress tracking"
  }];

  const complianceFeatures = [{
    title: "WASA",
    description: "Web Application Security Audit (Cert-In)",
    icon: Globe
  }, {
    title: "ISO 9001:2015",
    description: "Quality Management",
    icon: Shield
  }, {
    title: "ISO/IEC 27001:2022",
    description: "Information Security Management",
    icon: Lock
  }];

  return <TooltipProvider>
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

        {/* Highlight Card Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl shadow-xl p-8 sm:p-12 text-center">
              <div className="inline-block px-4 py-2 bg-white/50 rounded-full mb-6">
                <span className="font-semibold text-indigo-900">Our Belief</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
                Students Are More Than Marksheets
              </h2>
              <p className="text-lg text-gray-800 max-w-3xl mx-auto">
                PLAT makes their true potential visible—to faculty, recruiters, and themselves.
              </p>
            </div>
          </div>
        </section>

        {/* 4-Step How PLAT Transforms Students */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                4-step "How PLAT Transforms Students"
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Co-created by psychometricians and industry leaders, PLAT uses AI to identify skill gaps and nurture real-world competencies.
              </p>
            </div>

            {/* Steps Row */}
            <div className="relative flex flex-col md:flex-row items-stretch justify-center md:items-center gap-y-8 md:gap-y-0">

              {/* Step 1 */}
              <div className="flex-1 w-full px-2">
                <div className="relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 h-full min-h-[220px]">
                  <div className="text-5xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Test</h3>
                  <p className="text-gray-600">AI Skill X-Ray pinpoints hidden gaps</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center px-2 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="flex md:hidden items-center justify-center my-2 text-blue-600 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex-1 w-full px-2">
                <div className="relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 h-full min-h-[220px]">
                  <div className="text-5xl mb-4">💪</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Micro-Tasks</h3>
                  <p className="text-gray-600">Daily 3-min challenges close those gaps fast</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center px-2 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="flex md:hidden items-center justify-center my-2 text-blue-600 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex-1 w-full px-2">
                <div className="relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 h-full min-h-[220px]">
                  <div className="text-5xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Skill Lift</h3>
                  <p className="text-gray-600">Average CRI jumps +120 points by next semester</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center px-2 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="flex md:hidden items-center justify-center my-2 text-blue-600 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
              </div>

              {/* Step 4 */}
              <div className="flex-1 w-full px-2">
                <div className="relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 h-full min-h-[220px]">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CRI Score</h3>
                  <p className="text-gray-600">Recruiter-trusted Career Readiness Index, shareable on LinkedIn</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Problem */}
              

              {/* Solution */}
              
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
                return <Tooltip key={index}>
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
                    </Tooltip>;
              })}
              </div>
            </div>

            {/* Mobile Vertical Stack */}
            <div className="md:hidden space-y-6">
              {skillLevels.map((level, index) => {
              const Icon = level.icon;
              return <Card key={index} className={`${level.bgColor} ${level.borderColor} border-2`}>
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
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Assessment to Upskilling Lifecycle */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Assessment to Upskilling Lifecycle
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                From Entry Assessment to Career Readiness and Continuous Growth
              </p>
            </div>

            {/* Lifecycle Steps Container */}
            <div className="mt-20">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">

                {lifecycleSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === lifecycleSteps.length - 1;
                  
                  return (
                    <div key={index} className="flex flex-col items-center text-center relative">
                      <div className={`flex items-center justify-center w-20 h-20 ${step.bgColor} rounded-full`}>
                        <Icon className={`w-10 h-10 ${step.textColor}`} />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.name}</h3>
                      <p className="mt-1 text-sm text-gray-500 max-w-[170px]">{step.description}</p>
                      
                      {/* Arrow - only show if not last item */}
                      {!isLast && (
                        <>
                          {/* Arrow (Desktop) */}
                          <div className="hidden md:block absolute left-full top-10 transform translate-x-2 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                          </div>
                          {/* Arrow (Mobile) */}
                          <div className="block md:hidden text-gray-300 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}

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
    </TooltipProvider>;
};

export default HowItWorks;
