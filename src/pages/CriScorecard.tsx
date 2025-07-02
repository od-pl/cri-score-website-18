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
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { BrainCircuit, Wrench, GitBranch, Users as UsersIcon, Lightbulb, Presentation, Flag, Trophy, PlusCircle, Sparkles, User } from 'lucide-react';

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

  // Data for the components
  const radarChartData = [
    { subject: 'Cognitive', A: 80, fullMark: 100 },
    { subject: 'Practical', A: 90, fullMark: 100 },
    { subject: 'Adaptive', A: 85, fullMark: 100 },
    { subject: 'Socio-Emotional', A: 65, fullMark: 100 },
    { subject: 'Entrepreneurship', A: 75, fullMark: 100 },
  ];

  const skillBarsData = [
    { name: 'Cognitive', value: 82, color: 'bg-purple-500', icon: <BrainCircuit className="h-5 w-5 text-purple-700" /> },
    { name: 'Practical', value: 78, color: 'bg-teal-500', icon: <Wrench className="h-5 w-5 text-teal-700" /> },
    { name: 'Adaptive', value: 85, color: 'bg-amber-500', icon: <GitBranch className="h-5 w-5 text-amber-700" /> },
    { name: 'Socio-Emotional', value: 79, color: 'bg-yellow-400', icon: <UsersIcon className="h-5 w-5 text-yellow-600" /> },
    { name: 'Entrepreneurship', value: 81, color: 'bg-red-400', icon: <Lightbulb className="h-5 w-5 text-red-600" /> },
  ];

  const criBandsData = [
    { range: '<450', label: 'Needs Development', color: 'bg-red-100 text-red-800' },
    { range: '450-650', label: 'Developing', color: 'bg-yellow-100 text-yellow-800' },
    { range: '650-800', label: 'Proficient', color: 'bg-blue-100 text-blue-800' },
    { range: '800-900', label: 'Excellent', color: 'bg-green-200 text-green-800', active: true },
  ];

  const recommendedActionsData = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Strengthen Literacy Skills',
      subtitle: 'advanced research & digital-literacy drills',
      progress: 65,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      progressColor: 'bg-blue-400'
    },
    {
      icon: <Presentation className="h-8 w-8 text-yellow-600" />,
      title: 'Sharpen Presentation Skills',
      subtitle: 'weekly peer talks + Toastmasters',
      progress: 80,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400',
      progressColor: 'bg-yellow-500',
      active: true
    },
    {
      icon: <Flag className="h-8 w-8 text-green-600" />,
      title: 'Lead a Capstone Team',
      subtitle: 'practice decision-making under deadlines',
      progress: 90,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      progressColor: 'bg-green-500'
    }
  ];

  // --- Sub-components ---

  const SkillRadar = () => (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          Skill Radar
        </h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center">
          Explore Skills
        </button>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
            <defs>
              <radialGradient id="skillGradient">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
              </radialGradient>
            </defs>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 14 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar name="Skills" dataKey="A" stroke="#8b5cf6" fill="url(#skillGradient)" fillOpacity={0.8} />
            <Tooltip contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const SkillBars = () => (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillBarsData.map((skill, index) => (
        <div key={index}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 p-1 rounded-md">{skill.icon}</div>
              <span className="font-semibold text-gray-700">{skill.name}</span>
            </div>
            <span className="font-bold text-gray-800">{skill.value}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`${skill.color} h-2.5 rounded-full`} style={{ width: `${skill.value}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );

  const CRIBand = () => (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Trophy className="h-6 w-6 text-amber-500 mr-2" />
        CRI Band Classification
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {criBandsData.map((band, index) => (
          <div key={index} className={`p-4 rounded-lg text-center relative ${band.color} ${band.active ? 'border-2 border-green-500' : ''}`}>
            <p className="font-bold text-lg">{band.range}</p>
            <p className="text-sm">{band.label}</p>
            {band.active && (
              <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-1">
                <PlusCircle className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const RecommendedActions = () => (
    <div className="bg-white p-6 rounded-2xl shadow-md h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <div className="h-2 w-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
        Recommended Actions
      </h2>
      <div className="space-y-4">
        {recommendedActionsData.map((action, index) => (
          <div key={index} className={`p-4 rounded-xl border-2 ${action.active ? action.borderColor : 'border-transparent'} ${action.bgColor} ${action.active ? 'shadow-lg' : ''}`}>
            <div className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">{action.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.subtitle}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${action.progressColor} h-2 rounded-full`} style={{ width: `${action.progress}%` }}></div>
              </div>
              <span className="font-semibold text-gray-700 text-sm">{action.progress}%</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        <button className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
          Start Development Plan
          <ArrowRight className="h-5 w-5" />
        </button>
        <button className="w-full bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
          View Detailed Report
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                CRI Scorecard
              </span>{" "}
              <br />
              <span className="text-gray-900">
              The CIBIL Score for Careers
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              One number recruiters trust, five skill pillars students can grow.
            </p>
          </div>

          {/* Enhanced CRI Dial */}
          <div className="max-w-2xl mx-auto mb-8">
            <Card className="bg-white/80 backdrop-blur-sm border shadow-xl">
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
                  <span className="text-2xl font-bold text-green-600">
                    <AnimatedCounter end={overallCRI} duration={2} />/10
                  </span>
                  <span className="text-2xl font-bold text-green-600">{criLabel}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Career Readiness Index</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW WE CALCULATE CRI Section */}
      <section className="pt-6 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              HOW WE CALCULATE CRI
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <div className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    Career Readiness Index
                  </span>
                  <br />
                  PLAT Skill Score + Academic Scores + Upskill + Co-Curricular Activity
                </div>
                <p className="text-sm text-gray-600 italic">
                  *Upskill includes internships, on-job training, certified courses and extra-curricular impact, all verified by our API hooks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Dimensions of Career Readiness */}
      <section className="py-16 bg-white relative z-10">
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

      {/* New Sample CRI Scorecard Section - Replaced with SkillRadar */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            SAMPLE CRI SCORECARD
          </h2>
          <p className="text-xl text-gray-600">
            See how the comprehensive report looks for students and employers
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <SkillRadar />
              <SkillBars />
              <CRIBand />
            </div>
            <div className="lg:col-span-1">
              <RecommendedActions />
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mr-4" 
            onClick={() => setShowReportModal(true)}
          >
            <Download className="w-4 h-4 mr-2" />
            View CRI Report
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative z-10">
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
