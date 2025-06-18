import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, MessageCircle, Zap, Target, RotateCcw, Shield, Cloud, Server, ArrowRight, Eye, Users, BarChart3 } from "lucide-react";
const HowItWorks = () => {
  const skillLevels = [{
    level: "Level 1",
    title: "Cognitive & Communication",
    description: "Foundation skills: logical thinking, problem-solving, and communication abilities",
    icon: Brain,
    color: "bg-blue-100 text-blue-600",
    skills: ["Logical Reasoning", "Verbal Communication", "Written Communication", "Critical Thinking"]
  }, {
    level: "Level 2",
    title: "Applied Thinking",
    description: "Practical application: domain knowledge and analytical thinking",
    icon: Target,
    color: "bg-green-100 text-green-600",
    skills: ["Technical Knowledge", "Analytical Thinking", "Problem Solving", "Decision Making"]
  }, {
    level: "Level 3",
    title: "Industry Readiness",
    description: "Real-world preparation: collaboration, leadership, and adaptability",
    icon: Zap,
    color: "bg-purple-100 text-purple-600",
    skills: ["Leadership", "Teamwork", "Adaptability", "Industry Awareness"]
  }];
  const processSteps = [{
    step: "1",
    title: "Initial Assessment",
    description: "Comprehensive skill testing across all CIF dimensions",
    icon: "📝",
    time: "60 minutes"
  }, {
    step: "2",
    title: "Gap Analysis",
    description: "AI identifies specific areas needing improvement",
    icon: "🔍",
    time: "Instant"
  }, {
    step: "3",
    title: "Personalized Learning",
    description: "Micro-tasks and exercises targeting weak areas",
    icon: "🎯",
    time: "2-4 weeks"
  }, {
    step: "4",
    title: "Progress Tracking",
    description: "Regular mini-assessments to measure improvement",
    icon: "📈",
    time: "Ongoing"
  }, {
    step: "5",
    title: "CRI Score Update",
    description: "Updated Career Readiness Index reflecting growth",
    icon: "⭐",
    time: "Monthly"
  }];
  const dashboards = [{
    role: "Vice Chancellor",
    icon: Eye,
    features: ["Institution-wide analytics", "Placement trends", "Department comparisons", "ROI metrics"],
    description: "Strategic overview of institutional outcomes"
  }, {
    role: "HOD",
    icon: Users,
    features: ["Department performance", "Student progress tracking", "Faculty insights", "Curriculum gaps"],
    description: "Departmental management and improvement"
  }, {
    role: "T&P Officer",
    icon: BarChart3,
    features: ["Placement readiness", "Recruiter matching", "Success predictions", "Industry alignment"],
    description: "Training and placement optimization"
  }];
  const securityFeatures = [{
    title: "AES-256 Encryption",
    description: "Military-grade encryption for all student data",
    icon: Shield
  }, {
    title: "ISO 27001 Compliant",
    description: "International security management standards",
    icon: Cloud
  }, {
    title: "On-Premises Compatible",
    description: "Deploy within your infrastructure if needed",
    icon: Server
  }];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                PLAT Works
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive system that measures, improves, and tracks student career readiness through AI-powered analytics
            </p>
          </div>
        </div>
      </section>

      {/* 3-Level Skill Testing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              3-Level Skill Assessment
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive evaluation across cognitive, applied, and industry-ready skills
            </p>
          </div>

          <div className="relative">
            {/* Pyramid Structure */}
            <div className="space-y-8">
              {skillLevels.map((level, index) => {
              const Icon = level.icon;
              const width = index === 0 ? 'max-w-6xl' : index === 1 ? 'max-w-4xl' : 'max-w-2xl';
              return <div key={index} className={`${width} mx-auto`}>
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className={`w-16 h-16 rounded-full ${level.color} flex items-center justify-center mr-6`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{level.level}</div>
                            <h3 className="text-2xl font-bold text-gray-900">{level.title}</h3>
                            <p className="text-gray-600 mt-2">{level.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {level.skills.map((skill, skillIndex) => <div key={skillIndex} className="bg-gray-50 rounded-lg p-3 text-center">
                              <span className="text-sm font-medium text-gray-700">{skill}</span>
                            </div>)}
                        </div>
                      </CardContent>
                    </Card>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Semester-Based Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Continuous Improvement Loop
            </h2>
            <p className="text-xl text-gray-600">From First Semester to First Job — We’re With You All the Way</p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => <div key={index} className="relative">
                  <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                        {step.step}
                      </div>
                      <div className="text-3xl mb-4">{step.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                      <div className="bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded">
                        {step.time}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Circular Arrow for Loop */}
                  {index === processSteps.length - 1 && <div className="hidden md:block absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 border-4 border-blue-300 rounded-full flex items-center justify-center">
                        <RotateCcw className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>}
                </div>)}
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

          <Tabs defaultValue="vc" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="vc">Vice Chancellor</TabsTrigger>
              <TabsTrigger value="hod">HOD</TabsTrigger>
              <TabsTrigger value="tp">T&P Officer</TabsTrigger>
            </TabsList>
            
            {dashboards.map((dashboard, index) => {
            const Icon = dashboard.icon;
            const tabValue = index === 0 ? 'vc' : index === 1 ? 'hod' : 'tp';
            return <TabsContent key={index} value={tabValue} className="mt-8">
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
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {dashboard.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700">{feature}</span>
                              </li>)}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="text-sm text-gray-500 mb-2">Sample Dashboard</div>
                          <div className="bg-white rounded border-2 border-dashed border-gray-300 h-32 flex items-center justify-center">
                            <span className="text-gray-400">Interactive Dashboard Preview</span>
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

      {/* Data Security */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-slate-300">
              Your student data is protected with the highest security standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
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

          <div className="text-center mt-12">
            <div className="inline-flex space-x-6 text-sm text-slate-400">
              <span className="bg-slate-800 px-3 py-1 rounded">🔒 GDPR Compliant</span>
              <span className="bg-slate-800 px-3 py-1 rounded">🛡️ SOC 2 Type II</span>
              <span className="bg-slate-800 px-3 py-1 rounded">📋 ISO 27001</span>
            </div>
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
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
              View CRI Scorecard
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default HowItWorks;