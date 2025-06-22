
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Cog, Zap, Heart, BookOpen, ArrowRight, Download, TrendingUp, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import SkillRadarChart from "@/components/SkillRadarChart";
import AnimatedCounter from "@/components/AnimatedCounter";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from "react-router-dom";
import ReportViewModal from "@/components/ReportViewModal";
import { useState, useEffect } from "react";

const CriScorecard = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "CRI Scorecard: CIBIL for Careers";

  // Typewriter effect for hero title
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

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

  // Floating elements data
  const floatingElements = [
    { text: "Problem Solving", delay: 0, x: "10%", y: "20%" },
    { text: "Communication", delay: 1, x: "85%", y: "25%" },
    { text: "Leadership", delay: 2, x: "15%", y: "70%" },
    { text: "Innovation", delay: 1.5, x: "80%", y: "60%" },
    { text: "Creativity", delay: 0.5, x: "50%", y: "15%" },
    { text: "Strategy", delay: 2.5, x: "90%", y: "80%" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Enhanced Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Enhanced floating elements with staggered animations */}
          {floatingElements.map((element, index) => (
            <motion.div
              key={index}
              className="absolute text-white opacity-60 pointer-events-none"
              style={{ left: element.x, top: element.y }}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ 
                opacity: [0.3, 0.7, 0.3], 
                scale: [0.8, 1.2, 0.8], 
                y: [-10, 10, -10],
                x: [-5, 5, -5] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: element.delay,
                ease: "easeInOut"
              }}
            >
              <motion.span 
                className="text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20"
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                {element.text}
              </motion.span>
            </motion.div>
          ))}

          {/* Animated particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {typedText}
              </span>
              <motion.span
                className="inline-block w-1 h-12 bg-cyan-400 ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A comprehensive Career Readiness Index that gives students and employers a skill-first perspective of Employability
            </motion.p>
          </div>

          {/* Enhanced CRI Dial with new animations */}
          <motion.div 
            className="max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 border border-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
              
              <CardContent className="p-12 text-center relative z-10">
                {/* Lottie Speedometer with enhanced container */}
                <motion.div 
                  className="flex justify-center items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full max-w-[384px] aspect-[2/1] relative">
                    <DotLottieReact
                      src="https://lottie.host/d12b42c9-dc95-44fe-b161-271dd451c3f3/NQFnfnRf0e.lottie"
                      loop
                      autoplay
                    />
                    {/* Sparkle effects around the dial */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          left: `${20 + Math.cos(i * Math.PI / 4) * 40}%`,
                          top: `${40 + Math.sin(i * Math.PI / 4) * 30}%`
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.25
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Enhanced counter with pulse effect */}
                <motion.div 
                  className="flex items-center justify-center gap-2 mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl font-bold text-green-400">
                    <AnimatedCounter end={overallCRI} duration={2} />/10
                  </span>
                  <motion.span 
                    className="text-2xl font-bold text-green-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                  >
                    {criLabel}
                  </motion.span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-semibold text-white mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Career Readiness Index
                </motion.h3>

                <div className="flex justify-between text-xs text-blue-200 max-w-80 mx-auto">
                  <motion.span
                    whileHover={{ scale: 1.1, color: "#ff6b6b" }}
                  >Needs Work</motion.span>
                  <motion.span
                    whileHover={{ scale: 1.1, color: "#ffd93d" }}
                  >Good</motion.span>
                  <motion.span
                    whileHover={{ scale: 1.1, color: "#6bcf7f" }}
                  >Excellent</motion.span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced 5 Skill Categories */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Five Dimensions of Career Readiness
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive evaluation across all critical skill areas
            </p>
          </motion.div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="grid lg:grid-cols-3 gap-8 items-center">
                        {/* Enhanced Category Info */}
                        <div className="flex items-center space-x-6">
                          <motion.div 
                            className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center relative`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className={`w-8 h-8 ${category.color}`} />
                            {/* Pulse ring */}
                            <motion.div
                              className={`absolute inset-0 rounded-full border-2 ${category.color.replace('text-', 'border-')} opacity-50`}
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                          <div>
                            <motion.h3 
                              className="text-2xl font-bold text-gray-900"
                              whileHover={{ scale: 1.05 }}
                            >
                              {category.name}
                            </motion.h3>
                            <p className="text-gray-600 mt-1">{category.description}</p>
                            <motion.div 
                              className={`text-3xl font-bold ${category.color} mt-2`}
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <AnimatedCounter end={category.score} duration={2} />/10
                            </motion.div>
                          </div>
                        </div>

                        {/* Enhanced Progress Visualization */}
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Overall Score</span>
                            <motion.span 
                              className="font-bold text-yellow-600"
                              whileHover={{ scale: 1.1 }}
                            >
                              <AnimatedCounter end={category.score} duration={2} />/10
                            </motion.span>
                          </div>
                          <motion.div
                            className="h-4 bg-gray-200 rounded-full overflow-hidden relative"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full relative overflow-hidden"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${category.score * 10}%` }}
                              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                              viewport={{ once: true }}
                            >
                              {/* Animated shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              />
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Enhanced Sub-skills */}
                        <div className="space-y-3">
                          {category.subSkills.map((skill, skillIndex) => (
                            <motion.div 
                              key={skillIndex} 
                              className="flex justify-between items-center group"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: skillIndex * 0.1 + 1 }}
                              viewport={{ once: true }}
                              whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                            >
                              <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                                {skill.name}
                              </span>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 bg-gray-200 rounded-full h-2 overflow-hidden">
                                  <motion.div 
                                    className={`h-2 rounded-full bg-gradient-to-r ${category.color.replace('text-', 'from-')}${category.color.replace('text-', '')} ${category.color.replace('text-', 'to-')}${category.color.replace('text-', '')}`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.score * 10}%` }}
                                    transition={{ duration: 1.5, delay: skillIndex * 0.1 + 1.2 }}
                                    viewport={{ once: true }}
                                  />
                                </div>
                                <motion.span 
                                  className="text-sm font-medium text-gray-600 w-8"
                                  whileHover={{ scale: 1.1, color: category.color.replace('text-', '#') }}
                                >
                                  <AnimatedCounter end={skill.score} duration={1.5} />
                                </motion.span>
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

      {/* Sample Scorecard with enhanced animations */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
              backgroundSize: '50px 50px'
            }}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sample CRI Scorecard
            </h2>
            <p className="text-xl text-gray-600">
              See how the comprehensive report looks for students and employers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
          >
            <Card className="bg-white shadow-2xl border-2 border-blue-100 relative overflow-hidden">
              {/* Document scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0"
                animate={{ 
                  x: ['-100%', '100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              />

              <CardContent className="p-8 relative z-10">
                {/* Header with enhanced animations */}
                <motion.div 
                  className="border-b pb-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900">Priya Sharma</h3>
                      <p className="text-gray-600">Computer Science Engineering</p>
                      <p className="text-gray-600">KJ Somaiya College of Engineering, Mumbai | Final Year</p>
                    </motion.div>
                    <motion.div 
                      className="text-right"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl font-bold text-green-600">
                        <AnimatedCounter end={overallCRI} duration={2} />/10
                      </div>
                      <div className="text-sm text-gray-600">Career Readiness Index</div>
                      <div className="text-xs text-gray-500 mt-1">Updated: March 2024</div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Enhanced Radar Chart and Recommendations */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">Skill Radar</h4>
                    <motion.div 
                      className="bg-white rounded-lg p-4 shadow-inner border-2 border-gray-100"
                      whileHover={{ boxShadow: "inset 0 4px 8px rgba(0,0,0,0.1)" }}
                    >
                      <SkillRadarChart />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">Recommended Actions</h4>
                    <div className="space-y-3">
                      {[
                        { title: "Strengthen Literacy Skills", desc: "Focus on advanced research and digital literacy skills", color: "blue" },
                        { title: "Improve Communication", desc: "Practice presentation and public speaking", color: "yellow" },
                        { title: "Leadership Experience", desc: "Take on project management roles", color: "green" }
                      ].map((action, index) => (
                        <motion.div 
                          key={index}
                          className={`bg-${action.color}-50 border border-${action.color}-200 rounded-lg p-4 cursor-pointer`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.02, 
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            y: -2
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <h5 className={`font-medium text-${action.color}-900`}>{action.title}</h5>
                          <p className={`text-sm text-${action.color}-700 mt-1`}>{action.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced CRI Band with interactive animations */}
                <motion.div 
                  className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-gray-900 mb-4">CRI Band Classification</h4>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    {[
                      { range: "0-4", label: "Needs Development", color: "red" },
                      { range: "4-6", label: "Developing", color: "yellow" },
                      { range: "6-8", label: "Proficient", color: "blue" },
                      { range: "8-10", label: "Excellent", color: "green" }
                    ].map((band, index) => (
                      <motion.div 
                        key={index}
                        className={`bg-${band.color}-100 rounded-lg p-3 cursor-pointer ${band.color === 'green' ? 'ring-2 ring-green-500' : ''}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                          y: -3
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div 
                          className={`text-${band.color}-600 font-bold`}
                          animate={band.color === 'green' ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {band.range}
                        </motion.div>
                        <div className={`text-xs text-${band.color}-700`}>{band.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mr-4 relative overflow-hidden group"
              onClick={() => setShowReportModal(true)}
            >
              {/* Button shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <Download className="w-4 h-4 mr-2" />
              View Report
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Give Your Students a Competitive Edge
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start measuring and improving career readiness with CRI scorecards
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact#send-message">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Partner with us</span>
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
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
