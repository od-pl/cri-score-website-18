
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Clock, Star, Building, Target, Zap, Brain, BookOpen, Shield, BarChart3, Search, PieChart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CollegeCarousel from "@/components/CollegeCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
import NaacGradeChart from "@/components/NaacGradeChart";

const Index = () => {
  const stats = [
    { 
      icon: Users, 
      value: 152.5, 
      suffix: "K+", 
      label: "Students Assessed",
      color: "text-blue-600"
    },
    { 
      icon: Building, 
      value: 300, 
      suffix: "+", 
      label: "Recruiters Trust CRI",
      color: "text-green-600"
    },
    { 
      icon: TrendingUp, 
      value: 84.2, 
      suffix: "%", 
      label: "Placement Success",
      color: "text-purple-600"
    },
    { 
      icon: Award, 
      value: 840, 
      suffix: "/900", 
      label: "Average CRI Score",
      color: "text-orange-600"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Skill Assessment",
      description: "Comprehensive evaluation across 5 critical career readiness dimensions"
    },
    {
      icon: Target,
      title: "CRI Score (0-900)",
      description: "Industry-trusted metric that predicts job placement success"
    },
    {
      icon: BarChart3,
      title: "Real-time Progress Tracking",
      description: "Monitor student development with actionable insights and recommendations"
    }
  ];

  const problems = [
    {
      icon: "😕",
      title: "54% of employers don't trust marksheets",
      subtitle: "India Skills Report 2024"
    },
    {
      icon: "⏰",
      title: "72% of students miss key workplace skills",
      subtitle: "AICTE-NEAT Report 2023"
    },
    {
      icon: "📊",
      title: "37 days average hiring delay",
      subtitle: "LinkedIn India, 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Zap className="w-4 h-4 mr-2" />
                Your Shortcut to Better 'NAAC Student Outcomes'
              </Badge>
              
              <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered analytics to uncover{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  hidden skill gaps
                </span>{" "}
                and boost placement rates for your college
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your institution's outcomes with data-driven insights that help students succeed and meet NAAC requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/contact#send-message">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    One Test
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/cri-scorecard">
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg font-semibold">
                    View Sample Report
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-4`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={stat.value} duration={2} />
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Reality Check
            </h2>
            <p className="text-xl text-gray-600">
              Traditional assessments don't reflect real-world readiness
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-red-100">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{problem.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {problem.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How PLAT Transforms Students */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How PLAT Transforms Students
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "📝", title: "Test", description: "Comprehensive skill assessment" },
              { icon: "💪", title: "Micro Tasks", description: "Targeted skill building" },
              { icon: "📈", title: "Skill Improvement", description: "Measurable progress" },
              { icon: "🏆", title: "CRI Score", description: "Career Readiness Index" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl text-white mb-4 mx-auto shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Traditional Assessment is Failing Students */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Traditional Assessment is 
              <br />
              <span className="text-red-600">Failing Students</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: "📊",
                  title: "Grades Don't Predict Success",
                  description: "A 9.5 CGPA student can still struggle in interviews because academic scores don't measure workplace skills"
                },
                {
                  icon: "🎭",
                  title: "Skills Gap Crisis",
                  description: "70% of students lack critical thinking, communication, and problem-solving abilities required by employers"
                },
                {
                  icon: "⏰",
                  title: "Outdated Evaluation Methods",
                  description: "Traditional exams test memory, not real-world application or career readiness"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  NAAC Grade Distribution
                </h3>
                <NaacGradeChart />
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Most colleges struggle with Grade A due to poor student outcome tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Leading Colleges Choose PLAT
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solution for outcome-based education
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted by Leading Colleges */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Colleges
            </h2>
            <p className="text-xl text-gray-600">
              Join institutions already improving their NAAC outcomes
            </p>
          </div>
          
          <CollegeCarousel />
        </div>
      </section>

      {/* Ready to Boost Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
              ✓ Free Pilot Cohort — keep it only if the Skill-Intelligence Dashboard wows you
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Boost Your College's Placement Rate?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact#send-message">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold shadow-lg">
                One Test
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                Learn How It Works
              </Button>
            </Link>
          </div>
          
          <p className="text-blue-100 text-sm font-medium">
            Join leading colleges already using PLAT to improve NAAC outcomes and student success
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
