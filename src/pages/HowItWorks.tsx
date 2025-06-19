
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, MessageCircle, Zap, Target, RotateCcw, Shield, Cloud, Server, ArrowRight, Eye, Users, BarChart3, User, Book, Lightbulb, TrendingUp, RefreshCw, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
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
    { name: "Foundational 1", icon: Book, color: "bg-blue-500" },
    { name: "Foundational 2", icon: Brain, color: "bg-blue-600" },
    { name: "Intermediate 1", icon: Target, color: "bg-green-500" },
    { name: "Intermediate 2", icon: Lightbulb, color: "bg-green-600" },
    { name: "CRI Score", icon: TrendingUp, color: "bg-purple-500" }
  ];

  const loopSteps = [
    { name: "Upskill", icon: RefreshCw, color: "bg-orange-500" },
    { name: "Report", icon: BarChart3, color: "bg-indigo-500" }
  ];

  const dashboards = [
    {
      role: "Vice Chancellor",
      icon: Eye,
      features: ["Institution-wide analytics", "Placement trends", "Department comparisons", "ROI metrics"],
      description: "Strategic overview of institutional outcomes"
    },
    {
      role: "HOD", 
      icon: Users,
      features: ["Department performance", "Student progress tracking", "Faculty insights", "Curriculum gaps"],
      description: "Departmental management and improvement"
    },
    {
      role: "T&P Officer",
      icon: BarChart3,
      features: ["Placement readiness", "Recruiter matching", "Success predictions", "Industry alignment"],
      description: "Training and placement optimization"
    },
    {
      role: "Student",
      icon: User,
      features: ["Individual Analysis", "Semester-wise Analysis", "Level-Up MicroTasks", "Real AI Feedback", "Class Leaderboard"],
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">PLAT Works</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive system that measures, improves, and tracks student career readiness through AI-powered analytics
            </p>
          </div>
        </div>
      </section>

      {/* 3-Level Skill Assessment - Staircase */}
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
                  <div key={index} className={`relative ${marginBottom}`}>
                    <Card className={`${level.bgColor} ${level.borderColor} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-80`}>
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
                    
                    {/* Step indicator */}
                    <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-6 ${level.color} rounded-t-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
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
            <p className="text-xl text-gray-600">From Entry Assessment to Career Readiness and Continuous Growth</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Linear Flow */}
            <div className="flex flex-wrap justify-center items-center space-x-4">
              {lifecycleSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center">
                    <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900">{step.name}</h3>
                      </CardContent>
                    </Card>
                    {index < lifecycleSteps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Curved Arrow to Loop */}
            <div className="flex items-center">
              <div className="w-16 h-16 border-4 border-dashed border-purple-300 rounded-full flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-purple-600" />
              </div>
            </div>

            {/* Circular Loop */}
            <div className="relative">
              <div className="w-32 h-32 border-4 border-purple-300 rounded-full flex items-center justify-center relative">
                {loopSteps.map((step, index) => {
                  const Icon = step.icon;
                  const position = index === 0 ? 'absolute -top-8 left-1/2 transform -translate-x-1/2' : 'absolute -bottom-8 left-1/2 transform -translate-x-1/2';
                  return (
                    <div key={index} className={position}>
                      <Card className="bg-white shadow-md">
                        <CardContent className="p-3 text-center">
                          <div className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center mx-auto mb-1`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-gray-900">{step.name}</span>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
                <div className="text-purple-600 font-semibold text-sm text-center">
                  Continuous<br />Improvement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Dashboards */}
      <section className="py-16 bg-white">
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
              const dashboardImage = index === 0 ? '/lovable-uploads/ad9fd5d4-e263-45b5-bde2-867b14c3b35e.png' : 
                                  index === 1 ? '/lovable-uploads/d5b7ad41-dd4d-42fc-ba47-84ff6d7230fc.png' :
                                  index === 2 ? '/lovable-uploads/ad9fd5d4-e263-45b5-bde2-867b14c3b35e.png' :
                                  '/lovable-uploads/a2e906e2-57ef-4a11-bc41-adf34f73645f.png';
              
              return (
                <TabsContent key={index} value={tabValue} className="mt-8">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{dashboard.role}</h3>
                          <p className="text-gray-600">{dashboard.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {dashboard.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-500 mb-2">Dashboard Preview</div>
                          <div className="bg-white rounded border overflow-hidden">
                            <img 
                              src={dashboardImage} 
                              alt={`${dashboard.role} Dashboard`}
                              className="w-full h-48 object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
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
              return (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </CardContent>
                </Card>
              );
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
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
