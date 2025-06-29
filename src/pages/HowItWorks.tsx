
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Target, BarChart3, Brain, Zap, BookOpen, Award, TrendingUp, Clock, Star, Building2, Lightbulb, Shield, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Student Assessment",
      description: "Comprehensive evaluation across 5 skill dimensions using AI-powered testing",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      details: [
        "Cognitive skills assessment",
        "Practical application tests",
        "Socio-emotional evaluation",
        "Adaptive thinking challenges",
        "Entrepreneurial mindset analysis"
      ]
    },
    {
      number: "02", 
      title: "CRI Score Generation",
      description: "Generate Career Readiness Index (0-900) that employers trust",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      details: [
        "Weighted scoring algorithm",
        "Industry-validated metrics",
        "Comparative benchmarking",
        "Skill gap identification",
        "Growth trajectory mapping"
      ]
    },
    {
      number: "03",
      title: "Personalized Development",
      description: "AI-recommended learning paths to improve specific skill areas",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      details: [
        "Targeted skill improvement",
        "Micro-learning modules",
        "Practice exercises",
        "Progress tracking",
        "Mentor guidance"
      ]
    },
    {
      number: "04",
      title: "Placement Success",
      description: "Higher placement rates with CRI-verified talent matching",
      icon: Award,
      color: "from-orange-500 to-red-500",
      details: [
        "Employer trust in CRI scores",
        "Skill-based job matching",
        "Interview preparation",
        "Career pathway guidance",
        "Success tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                PLAT Works
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your students from grade-focused to career-ready with our comprehensive skill development platform
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">PROBLEM</h2>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                High GPA ≠ Job Readiness
              </h3>
              <div className="bg-white/70 rounded-2xl p-6 border border-red-200">
                <p className="text-lg text-gray-700 italic mb-4">
                  "I scored 9.2 CGPA and still failed every tech interview."
                </p>
                <p className="text-red-600 font-semibold">
                  — Final-year CS student
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">SOLUTION</h2>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                CRI-Verified Talent Wins Offers
              </h3>
              <div className="bg-white/70 rounded-2xl p-6 border border-green-200">
                <p className="text-lg text-gray-700 italic mb-4">
                  "My 8.4 CRI score landed me at Microsoft; recruiters saw exactly what I can do."
                </p>
                <p className="text-green-600 font-semibold">
                  — PLAT Success Story
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Level Skill Assessment */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              3-Level Skill Assessment
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive Evaluation across Cognitive, Applied, and Industry-Ready Skills
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                level: "Level 1",
                title: "Foundational Assessment",
                description: "Assesses fundamental concepts and basic skills, establishing a crucial foundation for skill development",
                number: "1",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50"
              },
              {
                level: "Level 2", 
                title: "Intermediate Assessment",
                description: "Deepens understanding and application of knowledge, presenting moderate challenges to bridge foundational skills with advanced problem-solving",
                number: "2",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50"
              },
              {
                level: "Level 3",
                title: "Career Readiness Assessment", 
                description: "Evaluates alignment with industry-demanded skills, preparing students for the professional world",
                number: "3",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50"
              }
            ].map((assessment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${assessment.bgColor} rounded-3xl p-8 border border-white/50 shadow-lg`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${assessment.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {assessment.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{assessment.level}</h3>
                      <div className="h-px bg-gray-300 flex-1" />
                      <h4 className="text-xl font-bold text-gray-800">{assessment.title}</h4>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {assessment.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to transform your students' career readiness
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <span className="text-4xl font-black text-gray-200">{step.number}</span>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 text-white`}>
                        <div className="text-center">
                          <Icon className="w-24 h-24 mx-auto mb-6 opacity-80" />
                          <h4 className="text-2xl font-bold mb-4">Step {step.number}</h4>
                          <p className="text-lg opacity-90">{step.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <ArrowRight className="w-8 h-8 text-gray-400 transform rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Students?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join leading institutions using PLAT to improve student outcomes and placement success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#send-message">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
                One Test
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/cri-scorecard">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                See Sample CRI Report
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
