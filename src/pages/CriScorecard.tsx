
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
      institution_wideIcon: Zap,
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
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <motion.div
            className="absolute top-20 left-10 text-blue-300 opacity-60"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-sm font-medium text-white">Problem Solving</span>
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-purple-300 opacity-60"
            animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            <span className="text-sm font-medium text-white">Communication</span>
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-20 text-green-300 opacity-60"
            animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          >
            <span className="text-sm font-medium text-white">Leadership</span>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              CRI Scorecard — The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                CIBIL Score for Careers
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              One number recruiters trust, five skill pillars students can grow.
            </p>
          </div>

          {/* Enhanced CRI Dial */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-[384px] aspect-[2/1]">
                    <DotLottieReact
                      src="https://lottie.host/d12b42c9-dc95-44fe-b161-271dd451c3f3/NQFnfnRf0e.lottie"
                      loop
                      autoplay
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-2xl font-bold text-green-400">
                    <AnimatedCounter end={overallCRI} duration={2} />/10
                  </span>
                  <span className="text-2xl font-bold text-green-400">{criLabel}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-6">Career Readiness Index</h3>

                <div className="flex justify-between text-xs text-blue-200 max-w-80 mx-auto">
                  <span>Needs Work</span>
                  <span>Good</span>
                  <span>Excellent</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW WE CALCULATE CRI Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              HOW WE CALCULATE CRI
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <div className="text-2xl font-bold text-gray-900 mb-6">
                  Academic Scores + PLAT Skill Score + Upskill Effort* = One trusted Career Readiness Index (0-900)
                </div>
                <p className="text-sm text-gray-600 italic">
                  *Upskill effort includes internships, on-job training, certified courses and extra-curricular impact, all verified by our API hooks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRI Bands Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              CRI Bands
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="bg-red-50 border-red-200 border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">&lt;450</div>
                  <div className="text-sm font-medium text-red-700">Needs Development</div>
                </CardContent>
              </Card>
              <Card className="bg-yellow-50 border-yellow-200 border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">450-650</div>
                  <div className="text-sm font-medium text-yellow-700">Developing</div>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200 border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">650-800</div>
                  <div className="text-sm font-medium text-blue-700">Proficient</div>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200 border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">800-900</div>
                  <div className="text-sm font-medium text-green-700">Excellent</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Five Dimensions of Career Readiness */}
      <section className="py-16 bg-gray-50">
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div className="flex items-center space-x-6">
                          <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center`}>
                            <Icon className={`w-8 h-8 ${category.color}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                            <p className="text-gray-600 mt-1">{category.description}</p>
                            <div className={`text-3xl font-bold ${category.color} mt-2`}>
                              <AnimatedCounter end={category.score} duration={2} />/10
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Overall Score</span>
                            <span className="font-bold text-yellow-600">
                              <AnimatedCounter end={category.score} duration={2} />/10
                            </span>
                          </div>
                          <motion.div
                            className="h-3 bg-gray-200 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${category.score * 10}%` }}
                              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                              viewport={{ once: true }}
                            />
                          </motion.div>
                        </div>

                        <div className="space-y-3">
                          {category.subSkills.map((skill, skillIndex) => (
                            <motion.div 
                              key={skillIndex} 
                              className="flex justify-between items-center"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: skillIndex * 0.1 + 1 }}
                              viewport={{ once: true }}
                            >
                              <span className="text-sm text-gray-700">{skill.name}</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 bg-gray-200 rounded-full h-2 overflow-hidden">
                                  <motion.div 
                                    className={`h-2 rounded-full ${category.color.replace('text-', 'bg-')}`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.score * 10}%` }}
                                    transition={{ duration: 1, delay: skillIndex * 0.1 + 1.2 }}
                                    viewport={{ once: true }}
                                  />
                                </div>
                                <span className="text-sm font-medium text-gray-600 w-8">
                                  <AnimatedCounter end={skill.score} duration={1.5} />
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample CRI Scorecard - Updated */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SAMPLE CRI SCORECARD
            </h2>
            <p className="text-xl text-gray-600">
              See how the comprehensive report looks for students and employers
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-2xl border-2 border-blue-100">
              <CardContent className="p-8">
                {/* Header */}
                <div className="border-b pb-6 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Priya Sharma — Computer Science Engineering</h3>
                      <p className="text-gray-600">KJ Somaiya College of Engineering • Final Year • Updated: Mar 2024</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">
                        <AnimatedCounter end={840} duration={2} /> / 900 (Excellent)
                      </div>
                      <div className="text-sm text-gray-600">Career Readiness Index</div>
                    </div>
                  </div>
                </div>

                {/* Skill Radar and Recommendations */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Skill Radar (click to explore)</h4>
                    <div className="bg-white rounded-lg p-4 shadow-inner border-2 border-gray-100">
                      <SkillRadarChart />
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Cognitive</span>
                        <span className="font-semibold">82%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practical</span>
                        <span className="font-semibold">78%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Adaptive</span>
                        <span className="font-semibold">85%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Socio-Emotional</span>
                        <span className="font-semibold">79%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Entrepreneurship</span>
                        <span className="font-semibold">81%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Recommended Actions</h4>
                    <div className="space-y-3">
                      <motion.div 
                        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h5 className="font-medium text-blue-900">• Strengthen Literacy Skills</h5>
                        <p className="text-sm text-blue-700 mt-1">advanced research & digital-literacy drills</p>
                      </motion.div>
                      <motion.div 
                        className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h5 className="font-medium text-yellow-900">• Sharpen Presentation Skills</h5>
                        <p className="text-sm text-yellow-700 mt-1">weekly peer talks + Toastmasters</p>
                      </motion.div>
                      <motion.div 
                        className="bg-green-50 border border-green-200 rounded-lg p-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h5 className="font-medium text-green-900">• Lead a Capstone Team</h5>
                        <p className="text-sm text-green-700 mt-1">practice decision-making under deadlines</p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* CRI Band Classification */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">CRI Band Classification</h4>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <motion.div 
                      className="bg-red-100 rounded-lg p-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-red-600 font-bold">&lt;450</div>
                      <div className="text-xs text-red-700">Needs Development</div>
                    </motion.div>
                    <motion.div 
                      className="bg-yellow-100 rounded-lg p-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-yellow-600 font-bold">450-650</div>
                      <div className="text-xs text-yellow-700">Developing</div>
                    </motion.div>
                    <motion.div 
                      className="bg-blue-100 rounded-lg p-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-blue-600 font-bold">650-800</div>
                      <div className="text-xs text-blue-700">Proficient</div>
                    </motion.div>
                    <motion.div 
                      className="bg-green-100 rounded-lg p-3 ring-2 ring-green-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-green-600 font-bold">800-900</div>
                      <div className="text-xs text-green-700">Excellent</div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="text-center mt-8">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mr-4"
              onClick={() => setShowReportModal(true)}
            >
              <Download className="w-4 h-4 mr-2" />
              Grab Sample CRI PDF
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
                Show Me the 7-Min Walkthrough
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
