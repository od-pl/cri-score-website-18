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
    angle: 0,
    description: "Risk heat-map in 24 h"
  }, {
    name: "Gap Analysis",
    icon: Search,
    color: "bg-green-500",
    angle: 72,
    description: "Auto-generated for every student"
  }, {
    name: "Personal Up-Skilling",
    icon: Target,
    color: "bg-yellow-500",
    angle: 144,
    description: "10-min/day tasks in LMS"
  }, {
    name: "Progress Tracking",
    icon: BarChart3,
    color: "bg-purple-500",
    angle: 216,
    description: "CRI jumps visibly next semester"
  }, {
    name: "CRI Score Update",
    icon: RefreshCw,
    color: "bg-red-500",
    angle: 288,
    description: "Shareable certificate, recruiter API"
  }];
  const processSteps = [{
    title: "Test",
    description: "Comprehensive skill assessment",
    icon: FileText,
    color: "bg-blue-500"
  }, {
    title: "Micro Tasks",
    description: "Targeted skill building",
    icon: Target,
    color: "bg-orange-500"
  }, {
    title: "Skill Improvement",
    description: "Measurable progress",
    icon: TrendingUp,
    color: "bg-green-500"
  }, {
    title: "CRI Score",
    description: "Career Readiness Index",
    icon: BarChart3,
    color: "bg-purple-500"
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
  const criticalProblems = [{
    title: "Marksheets ≠ Skills",
    stat: "78%",
    description: "young professionals struggle on the job.",
    impact: "Costs recruiters ₹1.2 Cr/year in churn.",
    color: "bg-red-50 border-red-200"
  }, {
    title: "Employer Trust Gap",
    stat: "49%",
    description: "of hiring managers reject on-campus toppers.",
    impact: "Damages college placement reputation.",
    color: "bg-orange-50 border-orange-200"
  }, {
    title: "Hidden Skill Gaps",
    stat: "65%",
    description: "of graduates don't know their own strengths.",
    impact: "Leads to mis-aligned career paths and lower CTCs.",
    color: "bg-yellow-50 border-yellow-200"
  }];
  const regulatoryTimeline = [{
    year: "NEP 2020",
    description: "Mandates skill-based learning",
    status: "completed"
  }, {
    year: "NAAC 2023",
    description: "Compulsory outcome tracking",
    status: "completed"
  }, {
    year: "UGC 2024",
    description: "Evidence of measurable student skills",
    status: "current"
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

        {/* Problem/Solution Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Problem */}
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                <div className="text-red-600 font-bold text-sm uppercase tracking-wide mb-4">PROBLEM</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">High GPA ≠ Job Readiness</h3>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "I scored 9.2 CGPA and still failed every tech interview."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">— Final-year CS student</p>
              </div>

              {/* Solution */}
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="text-green-600 font-bold text-sm uppercase tracking-wide mb-4">SOLUTION</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CRI-Verified Talent Wins Offers</h3>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "My 8.4 CRI score landed me at Microsoft; recruiters saw exactly what I can do."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">— PLAT Success Story</p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Critical Problems */}
        

        {/* Regulatory Timeline */}
        

        {/* Assessment to Upskilling Lifecycle */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Assessment to Upskilling Lifecycle
              </h2>
              <p className="text-xl text-gray-600">From Entry Assessment to Career Readiness and Continuous Growth</p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full z-0" style={{
                pointerEvents: 'none'
              }}>
                  <circle cx="192" cy="192" r="160" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="10,5" style={{
                  animation: 'rotate 30s linear infinite',
                  transformOrigin: '192px 192px'
                }} />
                </svg>

                {/* Central text */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">PLAT</h3>
                    <p className="text-lg text-gray-600">ASSESSMENT</p>
                    <p className="text-lg text-gray-600">LIFECYCLE</p>
                  </div>
                </div>

                {/* Circular steps */}
                {lifecycleSteps.map((step, index) => {
                const Icon = step.icon;
                const radius = 160;
                const centerX = 192;
                const centerY = 192;
                const x = centerX + radius * Math.cos((step.angle - 90) * Math.PI / 180);
                const y = centerY + radius * Math.sin((step.angle - 90) * Math.PI / 180);
                return <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <motion.div className="absolute z-20 cursor-pointer" style={{
                      left: x - 40,
                      top: y - 40
                    }} initial={{
                      opacity: 0,
                      scale: 0
                    }} animate={{
                      opacity: 1,
                      scale: 1
                    }} transition={{
                      delay: index * 0.2,
                      duration: 0.5
                    }} whileHover={{
                      scale: 1.2
                    }}>
                          <Card className="w-20 h-20 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                              <div className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center mb-1`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                            </CardContent>
                          </Card>
                          <div className="text-xs text-center mt-2 font-medium text-gray-700 max-w-20">
                            {step.name}
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="max-w-48">
                          <p className="font-semibold">{step.name}</p>
                          <p className="text-sm">{step.description}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>;
              })}
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholder Dashboards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Stakeholder Dashboards Teasers
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

        {/* 3-Level Skill Assessment */}
        <section className="py-16 bg-gray-50">
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
              {complianceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return <Card key={index} className="bg-slate-800 border-slate-700">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-slate-300">{feature.description}</p>
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
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">See PLAT in action with a personalized demo for your institution</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#send-message">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
                  Show Me the 7-Min Walkthrough
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