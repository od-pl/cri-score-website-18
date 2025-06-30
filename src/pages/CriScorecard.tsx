
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
import SkillRadar from "@/components/SkillRadar";
import { useState } from "react";

const CriScorecard = () => {
  const [showReportModal, setShowReportModal] = useState(false);

  const skillCategories = [{
    name: "Cognitive",
    score: 8.2,
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Communication, Problem-Solving, Cognitive Abilities",
    subSkills: [{
      name: "Communication",
      score: 8.5
    }, {
      name: "Problem Solving",
      score: 7.8
    }, {
      name: "Cognitive Abilities",
      score: 8.3
    }]
  }, {
    name: "Practical",
    score: 7.6,
    icon: Cog,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Literacy Skills, Productivity, Decision Making",
    subSkills: [{
      name: "Literacy Skills",
      score: 7.9
    }, {
      name: "Productivity",
      score: 7.2
    }, {
      name: "Decision Making",
      score: 7.7
    }]
  }, {
    name: "Adaptive",
    score: 8.7,
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Creativity, Growth perspective, Learning Agility",
    subSkills: [{
      name: "Creativity",
      score: 9.1
    }, {
      name: "Growth perspective",
      score: 8.4
    }, {
      name: "Learning Agility",
      score: 8.6
    }]
  }, {
    name: "Socio-Emotional",
    score: 8.0,
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "Collaboration, Leadership, Emotional Intelligence",
    subSkills: [{
      name: "Collaboration",
      score: 8.2
    }, {
      name: "Leadership",
      score: 7.9
    }, {
      name: "Emotional Intelligence",
      score: 7.9
    }]
  }, {
    name: "Entrepreneurship",
    score: 8.4,
    icon: BookOpen,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "Innovation, Strategy, Leadership",
    subSkills: [{
      name: "Innovation",
      score: 8.8
    }, {
      name: "Strategy",
      score: 8.1
    }, {
      name: "Leadership",
      score: 8.3
    }]
  }];

  const overallCRI = 8.2;
  const criColor = overallCRI >= 8 ? "text-green-600" : overallCRI >= 6 ? "text-yellow-600" : "text-red-600";
  const criLabel = overallCRI >= 8 ? "Excellent" : overallCRI >= 6 ? "Good" : "Needs Improvement";

  const floatingSkills = [
    { name: "Problem Solving", delay: 0, x: 10, y: -20 },
    { name: "Communication", delay: 1, x: -10, y: -15 },
    { name: "Leadership", delay: 2, x: 15, y: -25 },
    { name: "Creativity", delay: 1.5, x: -15, y: -18 },
    { name: "Analytics", delay: 0.5, x: 12, y: -22 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {floatingSkills.map((skill, index) => (
            <motion.div 
              key={index}
              className={`absolute text-blue-300 opacity-60 ${
                index === 0 ? 'top-20 left-10' : 
                index === 1 ? 'top-40 right-20' : 
                index === 2 ? 'bottom-40 left-20' :
                index === 3 ? 'top-60 left-1/4' :
                'bottom-20 right-1/4'
              }`}
              animate={{
                y: [0, skill.y, 0],
                x: [0, skill.x, 0]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                delay: skill.delay
              }}
            >
              <span className="text-sm font-medium text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              CRI Scorecard — The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                CIBIL Score
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                for Careers
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
                    <DotLottieReact src="https://lottie.host/d12b42c9-dc95-44fe-b161-271dd451c3f3/NQFnfnRf0e.lottie" loop autoplay />
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
                  Career Readiness Index (0–900)
                  <br />
                  = PLAT Skill Score + Academic Scores + Upskill Effort + Co-Curriculum
                </div>
                <p className="text-sm text-gray-600 italic">
                  *Upskill effort includes internships, on-job training, certified courses and extra-curricular impact, all verified by our API hooks.
                </p>
              </div>
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
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                  viewport={{
                    once: true
                  }}
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
                            initial={{
                              width: 0
                            }}
                            whileInView={{
                              width: "100%"
                            }}
                            transition={{
                              duration: 1,
                              delay: 0.5
                            }}
                            viewport={{
                              once: true
                            }}
                          >
                            <motion.div 
                              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                              initial={{
                                width: 0
                              }}
                              whileInView={{
                                width: `${category.score * 10}%`
                              }}
                              transition={{
                                duration: 1.5,
                                delay: 0.8,
                                ease: "easeOut"
                              }}
                              viewport={{
                                once: true
                              }}
                            />
                          </motion.div>
                        </div>

                        <div className="space-y-3">
                          {category.subSkills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              className="flex justify-between items-center"
                              initial={{
                                opacity: 0,
                                x: 20
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0
                              }}
                              transition={{
                                duration: 0.5,
                                delay: skillIndex * 0.1 + 1
                              }}
                              viewport={{
                                once: true
                              }}
                            >
                              <span className="text-sm text-gray-700">{skill.name}</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 bg-gray-200 rounded-full h-2 overflow-hidden">
                                  <motion.div 
                                    className={`h-2 rounded-full ${category.color.replace('text-', 'bg-')}`}
                                    initial={{
                                      width: 0
                                    }}
                                    whileInView={{
                                      width: `${skill.score * 10}%`
                                    }}
                                    transition={{
                                      duration: 1,
                                      delay: skillIndex * 0.1 + 1.2
                                    }}
                                    viewport={{
                                      once: true
                                    }}
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

      {/* New Sample CRI Scorecard Section - Replaced with SkillRadar */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            SAMPLE CRI SCORECARD
          </h2>
          <p className="text-xl text-gray-600">
            See how the comprehensive report looks for students and employers
          </p>
        </div>
        
        <SkillRadar />
        
        <div className="text-center mt-8">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mr-4" onClick={() => setShowReportModal(true)}>
            <Download className="w-4 h-4 mr-2" />
            Grab Sample CRI PDF
          </Button>
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
                Take One Test
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ReportViewModal isOpen={showReportModal} onClose={() => setShowReportModal(false)} />
    </div>
  );
};

export default CriScorecard;
