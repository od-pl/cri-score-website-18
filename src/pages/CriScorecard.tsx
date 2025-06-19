import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Cog, Zap, Heart, BookOpen, ArrowRight, Download, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SkillRadarChart from "@/components/SkillRadarChart";
import AnimatedCounter from "@/components/AnimatedCounter";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from "react-router-dom";
import ReportViewModal from "@/components/ReportViewModal";
import { useState } from "react";

const CriScorecard = () => {
  const [showReportModal, setShowReportModal] = useState(false);

  const skillCategories = [
    {
      name: "Cognitive",
      score: 8.2,
      icon: Brain,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Communication, Problem-Solving, Cognitive Abilities",
      subSkills: [
        { name: "Communication", score: 8.5 },
        { name: "Problem Solving", score: 7.8 },
        { name: "Cognitive Abilities", score: 8.3 }
      ]
    },
    {
      name: "Practical",
      score: 7.6,
      icon: Cog,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Literacy Skills, Productivity, Decision Making",
      subSkills: [
        { name: "Literacy Skills", score: 7.9 },
        { name: "Productivity", score: 7.2 },
        { name: "Decision Making", score: 7.7 }
      ]
    },
    {
      name: "Adaptive",
      score: 8.7,
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Creativity, Growth perspective, Learning Agility",
      subSkills: [
        { name: "Creativity", score: 9.1 },
        { name: "Growth perspective", score: 8.4 },
        { name: "Learning Agility", score: 8.6 }
      ]
    },
    {
      name: "Socio-Emotional",
      score: 8.0,
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
      description: "Collaboration, Leadership, Emotional Intelligence",
      subSkills: [
        { name: "Collaboration", score: 8.2 },
        { name: "Leadership", score: 7.9 },
        { name: "Emotional Intelligence", score: 7.9 }
      ]
    },
    {
      name: "Entrepreneurship",
      score: 8.4,
      icon: BookOpen,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: "Innovation, Strategy, Leadership",
      subSkills: [
        { name: "Innovation", score: 8.8 },
        { name: "Strategy", score: 8.1 },
        { name: "Leadership", score: 8.3 }
      ]
    }
  ];
  const overallCRI = 8.2;
  const criColor = overallCRI >= 8 ? "text-green-600" : overallCRI >= 6 ? "text-yellow-600" : "text-red-600";
  const criLabel = overallCRI >= 8 ? "Excellent" : overallCRI >= 6 ? "Good" : "Needs Improvement";
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Enhanced Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
          {/* Animated floating elements */}
          <motion.div
            className="absolute top-20 left-10 text-blue-200 opacity-60"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Problem Solving</span>
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-purple-200 opacity-60"
            animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            <span className="text-sm font-medium">Communication</span>
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-20 text-green-200 opacity-60"
            animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          >
            <span className="text-sm font-medium">Leadership</span>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              CRI Scorecard:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                CIBIL for Careers
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive Career Readiness Index that gives students and employers a skill-first perspective of Employability
            </p>
          </div>

          {/* Enhanced CRI Dial */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="bg-white shadow-2xl">
              <CardContent className="p-12 text-center">
                {/* Lottie Speedometer */}
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-[384px] aspect-[2/1]">
                    <DotLottieReact
                      src="https://lottie.host/d12b42c9-dc95-44fe-b161-271dd451c3f3/NQFnfnRf0e.lottie"
                      loop
                      autoplay
                    />
                  </div>
                </div>
                
                {/* Counter Text - All inline */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className={`text-2xl font-bold ${criColor}`}>
                    <AnimatedCounter end={overallCRI} duration={2} />/10
                  </span>
                  <span className={`text-2xl font-bold ${criColor}`}>{criLabel}</span>
                </div>
                
                {/* Title below counter */}
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Career Readiness Index</h3>

                <div className="flex justify-between text-xs text-gray-500 max-w-80 mx-auto">
                  <span>Needs Work</span>
                  <span>Good</span>
                  <span>Excellent</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5 Skill Categories with Enhanced Progress Bars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Five Dimensions of Career Readiness
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive evaluation across all critical skill areas
            </p>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Category Info */}
                      <div className="flex items-center space-x-6">
                        <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center`}>
                          <Icon className={`w-8 h-8 ${category.color}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                          <p className="text-gray-600 mt-1">{category.description}</p>
                          <div className={`text-3xl font-bold ${category.color} mt-2`}>
                            {category.score}/10
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Progress Visualization */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Overall Score</span>
                          <span className="font-bold text-yellow-600">{category.score}/10</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${category.score * 10}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-3 bg-yellow-500 rounded-full"
                          style={{ width: `${category.score * 10}%` }}
                        />
                      </div>

                      {/* Sub-skills remain unchanged */}
                      <div className="space-y-3">
                        {category.subSkills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${category.color.replace('text-', 'bg-')}`} 
                                  style={{ width: `${skill.score * 10}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-600 w-8">
                                {skill.score}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample Scorecard with Radar Chart */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sample CRI Scorecard
            </h2>
            <p className="text-xl text-gray-600">
              See how the comprehensive report looks for students and employers
            </p>
          </div>

          <Card className="bg-white shadow-2xl">
            <CardContent className="p-8">
              {/* Header */}
              <div className="border-b pb-6 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Priya Sharma</h3>
                    <p className="text-gray-600">Computer Science Engineering</p>
                    <p className="text-gray-600">KJ Somaiya College of Engineering, Mumbai | Final Year</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">{overallCRI}/10</div>
                    <div className="text-sm text-gray-600">Career Readiness Index</div>
                    <div className="text-xs text-gray-500 mt-1">Updated: March 2024</div>
                  </div>
                </div>
              </div>

              {/* Radar Chart and Recommendations */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Skill Radar</h4>
                  <SkillRadarChart />
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Recommended Actions</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h5 className="font-medium text-blue-900">Strengthen Literacy Skills</h5>
                      <p className="text-sm text-blue-700 mt-1">Focus on advanced research and digital literacy skills</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h5 className="font-medium text-yellow-900">Improve Communication</h5>
                      <p className="text-sm text-yellow-700 mt-1">Practice presentation and public speaking</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h5 className="font-medium text-green-900">Leadership Experience</h5>
                      <p className="text-sm text-green-700 mt-1">Take on project management roles</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CRI Band */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">CRI Band Classification</h4>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="bg-red-100 rounded-lg p-3">
                    <div className="text-red-600 font-bold">0-4</div>
                    <div className="text-xs text-red-700">Needs Development</div>
                  </div>
                  <div className="bg-yellow-100 rounded-lg p-3">
                    <div className="text-yellow-600 font-bold">4-6</div>
                    <div className="text-xs text-yellow-700">Developing</div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="text-blue-600 font-bold">6-8</div>
                    <div className="text-xs text-blue-700">Proficient</div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3 ring-2 ring-green-500">
                    <div className="text-green-600 font-bold">8-10</div>
                    <div className="text-xs text-green-700">Excellent</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mr-4"
              onClick={() => setShowReportModal(true)}
            >
              <Download className="w-4 h-4 mr-2" />
              View Report
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Give Your Students a Competitive Edge
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Start measuring and improving career readiness with CRI scorecards
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#send-message">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
                Schedule a Pilot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ReportViewModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
      />
    </div>
  );
};

export default CriScorecard;
