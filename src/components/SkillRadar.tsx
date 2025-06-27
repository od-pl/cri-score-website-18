
import React, { useState, useEffect, useRef } from 'react';

const SkillRadar = () => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pulseAnimation, setPulseAnimation] = useState(false);
  const radarRef = useRef<HTMLDivElement>(null);

  const skills = [
    { 
      name: 'Cognitive', 
      value: 82, 
      color: '#6366f1', 
      gradient: 'from-indigo-500 to-purple-600',
      description: 'Problem-solving, analytical thinking, and learning agility',
      icon: '🧠'
    },
    { 
      name: 'Practical', 
      value: 78, 
      color: '#10b981', 
      gradient: 'from-emerald-500 to-teal-600',
      description: 'Technical skills, hands-on experience, and implementation',
      icon: '⚙️'
    },
    { 
      name: 'Adaptive', 
      value: 85, 
      color: '#8b5cf6', 
      gradient: 'from-violet-500 to-purple-600',
      description: 'Flexibility, resilience, and change management',
      icon: '🌟'
    },
    { 
      name: 'Socio-Emotional', 
      value: 79, 
      color: '#f59e0b', 
      gradient: 'from-amber-500 to-orange-600',
      description: 'Communication, empathy, and interpersonal skills',
      icon: '🤝'
    },
    { 
      name: 'Entrepreneurship', 
      value: 81, 
      color: '#ef4444', 
      gradient: 'from-red-500 to-pink-600',
      description: 'Innovation, risk-taking, and business acumen',
      icon: '🚀'
    }
  ];

  const centerX = 250;
  const centerY = 225;
  const maxRadius = 140;

  useEffect(() => {
    startAnimation();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (radarRef.current) {
        const rect = radarRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const radarElement = radarRef.current;
    if (radarElement) {
      radarElement.addEventListener('mousemove', handleMouseMove);
      return () => radarElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationProgress(0);
    setPulseAnimation(true);
    
    const duration = 3000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutElastic = progress === 1 ? 1 : 
        1 - Math.pow(2, -10 * progress) * Math.sin((progress * 10 - 0.75) * (2 * Math.PI) / 3);
      
      setAnimationProgress(easeOutElastic);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        setPulseAnimation(false);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const getPolygonPoints = (progress = 1) => {
    // Create points in the exact order of skills array to match the data
    const points = skills.map((skill, index) => {
      // Start from top (12 o'clock) and go clockwise
      const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
      const radius = (skill.value / 100) * maxRadius * progress;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return `${x},${y}`;
    });
    return points.join(' ');
  };

  const getLabelPosition = (index: number, skill: typeof skills[0]) => {
    // Match the exact same angle calculation as polygon points
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
    let labelRadius = maxRadius + (skill.name === 'Entrepreneurship' ? 70 : 60);
    
    const x = centerX + labelRadius * Math.cos(angle);
    const y = centerY + labelRadius * Math.sin(angle);
    return { x, y, angle };
  };

  const getSkillPointPosition = (index: number, skill: typeof skills[0]) => {
    // Use identical angle calculation to ensure perfect alignment
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
    const radius = (skill.value / 100) * maxRadius * animationProgress;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  const getGridCircles = () => {
    return [20, 40, 60, 80, 100].map(percentage => ({
      radius: (percentage / 100) * maxRadius,
      label: percentage
    }));
  };

  const getAxisLines = () => {
    // Ensure axis lines match the exact positioning of skill points and labels
    return skills.map((_, index) => {
      const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
      const x = centerX + maxRadius * Math.cos(angle);
      const y = centerY + maxRadius * Math.sin(angle);
      return { x, y };
    });
  };

  const handleSkillPointHover = (skill: typeof skills[0], index: number) => {
    setHoveredSkill(index);
  };

  const handleSkillClick = (skill: typeof skills[0], index: number) => {
    setSelectedSkill(selectedSkill === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header with glassmorphism effect */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl" />
        <div className="relative flex justify-between items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                👩‍💻
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  Priya Sharma
                </h1>
                <p className="text-xl text-gray-600 font-medium">Computer Science Engineering</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="px-3 py-1 bg-blue-100 rounded-full">KJ Somaiya College</span>
              <span>•</span>
              <span className="px-3 py-1 bg-green-100 rounded-full">Final Year</span>
              <span>•</span>
              <span>Updated: Mar 2024</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-baseline gap-2">
              <div className="text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                840
              </div>
              <div className="text-2xl text-gray-400">
                / 900
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-600 font-bold text-lg">Excellent</span>
            </div>
            <div className="text-gray-500 text-sm mt-1">Career Readiness Index</div>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Left side - Enhanced Radar Chart */}
        <div className="flex-1">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Skill Radar 
                <span className="text-lg text-gray-500 ml-2">✨</span>
              </h2>
              <button 
                onClick={startAnimation}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">🎯 Explore Skills</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
            
            <div className="relative" ref={radarRef}>
              <svg width="500" height="450" className="mx-auto drop-shadow-2xl">
                {/* Animated gradient definitions */}
                <defs>
                  <radialGradient id="radarGradient" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
                  </radialGradient>
                  {skills.map((skill, index) => (
                    <radialGradient key={index} id={`skillGradient${index}`} cx="50%" cy="50%">
                      <stop offset="0%" stopColor={skill.color} />
                      <stop offset="100%" stopColor={skill.color} stopOpacity="0.3" />
                    </radialGradient>
                  ))}
                </defs>
                
                {/* Animated background circles */}
                {getGridCircles().map((circle, index) => (
                  <circle
                    key={index}
                    cx={centerX}
                    cy={centerY}
                    r={circle.radius}
                    fill="none"
                    stroke="url(#radarGradient)"
                    strokeWidth="2"
                    opacity="0.4"
                    className="animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
                
                {/* Grid labels with glow effect */}
                {getGridCircles().map((circle, index) => (
                  <text
                    key={index}
                    x={centerX + 8}
                    y={centerY - circle.radius - 8}
                    fontSize="12"
                    fill="#6366f1"
                    textAnchor="middle"
                    className="font-medium"
                    style={{ 
                      filter: 'drop-shadow(0 0 4px rgba(99, 102, 241, 0.3))',
                      opacity: animationProgress 
                    }}
                  >
                    {circle.label}
                  </text>
                ))}
                
                {/* Axis lines with glow - aligned with skill points */}
                {getAxisLines().map((point, index) => (
                  <line
                    key={index}
                    x1={centerX}
                    y1={centerY}
                    x2={point.x}
                    y2={point.y}
                    stroke="#e0e7ff"
                    strokeWidth="2"
                    opacity="0.6"
                    style={{ filter: 'drop-shadow(0 0 2px rgba(99, 102, 241, 0.2))' }}
                  />
                ))}
                
                {/* Main skill polygon with animation */}
                <polygon
                  points={getPolygonPoints(animationProgress)}
                  fill="url(#radarGradient)"
                  stroke="#6366f1"
                  strokeWidth="3"
                  className="transition-all duration-500"
                  style={{ 
                    filter: `drop-shadow(0 0 20px rgba(99, 102, 241, ${0.3 * animationProgress}))`,
                    strokeDasharray: hoveredSkill !== null ? '10,5' : 'none'
                  }}
                />
                
                {/* Individual skill areas on hover */}
                {hoveredSkill !== null && (
                  <polygon
                    points={getPolygonPoints(animationProgress)}
                    fill={`url(#skillGradient${hoveredSkill})`}
                    stroke={skills[hoveredSkill].color}
                    strokeWidth="2"
                    opacity="0.4"
                    className="animate-pulse"
                  />
                )}
                
                {/* Skill points with enhanced interactivity */}
                {skills.map((skill, index) => {
                  const pos = getSkillPointPosition(index, skill);
                  const isHovered = hoveredSkill === index;
                  const isSelected = selectedSkill === index;
                  
                  return (
                    <g key={index}>
                      {/* Glow effect */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered || isSelected ? "20" : "12"}
                        fill={skill.color}
                        opacity="0.2"
                        className="transition-all duration-300"
                      />
                      
                      {/* Main point */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered || isSelected ? "8" : "6"}
                        fill={skill.color}
                        stroke="white"
                        strokeWidth="3"
                        className="cursor-pointer transition-all duration-300 hover:animate-bounce"
                        style={{
                          transform: `scale(${animationProgress})`,
                          transformOrigin: `${pos.x}px ${pos.y}px`,
                          filter: `drop-shadow(0 0 10px ${skill.color})`
                        }}
                        onMouseEnter={() => handleSkillPointHover(skill, index)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onClick={() => handleSkillClick(skill, index)}
                      />
                      
                      {/* Percentage display on hover */}
                      {(isHovered || isSelected) && (
                        <text
                          x={pos.x}
                          y={pos.y - 25}
                          fontSize="14"
                          fontWeight="bold"
                          fill={skill.color}
                          textAnchor="middle"
                          className="animate-bounce"
                          style={{ filter: 'drop-shadow(0 0 4px white)' }}
                        >
                          {skill.value}%
                        </text>
                      )}
                    </g>
                  );
                })}
                
                {/* Skill labels with icons */}
                {skills.map((skill, index) => {
                  const pos = getLabelPosition(index, skill);
                  
                  return (
                    <g key={index}>
                      <text
                        x={pos.x}
                        y={pos.y - 5}
                        fontSize="16"
                        fontWeight="600"
                        fill="#374151"
                        textAnchor="middle"
                        className="cursor-pointer transition-colors duration-300"
                        style={{
                          opacity: animationProgress
                        }}
                        onClick={() => handleSkillClick(skill, index)}
                      >
                        {skill.icon} {skill.name}
                      </text>
                    </g>
                  );
                })}
                
                {/* Center logo */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="20"
                  fill="url(#radarGradient)"
                  stroke="#6366f1"
                  strokeWidth="2"
                  className={pulseAnimation ? "animate-pulse" : ""}
                />
                <text
                  x={centerX}
                  y={centerY + 5}
                  fontSize="20"
                  textAnchor="middle"
                  className="font-bold"
                >
                  🎯
                </text>
              </svg>
              
              {/* Tooltip - only shows when hovering over skill points */}
              {hoveredSkill !== null && (
                <div 
                  className="absolute bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 pointer-events-none z-10 max-w-xs"
                  style={{
                    left: mousePosition.x + 20,
                    top: mousePosition.y - 60,
                    transform: 'translate(-50%, -100%)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{skills[hoveredSkill].icon}</span>
                    <span className="font-bold text-gray-900">{skills[hoveredSkill].name}</span>
                    <span className={`px-2 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${skills[hoveredSkill].gradient}`}>
                      {skills[hoveredSkill].value}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{skills[hoveredSkill].description}</p>
                </div>
              )}
            </div>

            {/* Enhanced skill breakdown */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedSkill === index 
                      ? `bg-gradient-to-r ${skill.gradient} text-white border-transparent shadow-xl scale-105` 
                      : 'bg-white/60 border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                  onClick={() => handleSkillClick(skill, index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-semibold text-sm">{skill.name}</span>
                    </div>
                    <span className="font-bold text-lg">
                      {Math.round(skill.value * animationProgress)}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${selectedSkill === index ? 'bg-white/30' : 'bg-gray-200'}`}>
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                        selectedSkill === index ? 'bg-white' : `bg-gradient-to-r ${skill.gradient}`
                      }`}
                      style={{ width: `${skill.value * animationProgress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CRI Classification with enhanced design */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                🏆 CRI Band Classification
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { range: '<450', label: 'Needs Development', color: 'red', active: false },
                  { range: '450-650', label: 'Developing', color: 'yellow', active: false },
                  { range: '650-800', label: 'Proficient', color: 'blue', active: false },
                  { range: '800-900', label: 'Excellent', color: 'green', active: true }
                ].map((band, index) => (
                  <div 
                    key={index}
                    className={`relative p-4 rounded-2xl text-center transition-all duration-500 ${
                      band.active 
                        ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-2xl scale-105 ring-4 ring-green-300 ring-opacity-50' 
                        : `bg-${band.color}-50 border-2 border-${band.color}-200 hover:shadow-lg hover:scale-102`
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {band.active && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        ⭐
                      </div>
                    )}
                    <div className={`font-bold text-lg ${band.active ? 'text-white' : `text-${band.color}-700`}`}>
                      {band.range}
                    </div>
                    <div className={`text-sm ${band.active ? 'text-white' : `text-${band.color}-600`}`}>
                      {band.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Enhanced Recommended Actions */}
        <div className="w-96">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 sticky top-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              🎯 Recommended Actions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  title: 'Strengthen Literacy Skills',
                  description: 'advanced research & digital-literacy drills',
                  icon: '📚',
                  color: 'blue',
                  progress: 65
                },
                {
                  title: 'Sharpen Presentation Skills',
                  description: 'weekly peer talks + Toastmasters',
                  icon: '🎤',
                  color: 'yellow',
                  progress: 80
                },
                {
                  title: 'Lead a Capstone Team',
                  description: 'practice decision-making under deadlines',
                  icon: '👥',
                  color: 'green',
                  progress: 90
                }
              ].map((action, index) => (
                <div 
                  key={index}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-${action.color}-50 to-${action.color}-100 border-${action.color}-200 hover:border-${action.color}-300`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-3xl p-2 rounded-xl bg-gradient-to-br from-${action.color}-400 to-${action.color}-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {action.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-${action.color}-900 mb-2 group-hover:text-${action.color}-700 transition-colors`}>
                        • {action.title}
                      </h3>
                      <p className={`text-${action.color}-700 text-sm mb-3`}>
                        {action.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className={`flex-1 h-2 bg-${action.color}-200 rounded-full overflow-hidden`}>
                          <div 
                            className={`h-full bg-gradient-to-r from-${action.color}-400 to-${action.color}-600 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${action.progress}%` }}
                          />
                        </div>
                        <span className={`text-${action.color}-700 font-bold text-sm`}>
                          {action.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-8 space-y-3">
              <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                🚀 Start Development Plan
              </button>
              <button className="w-full py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                📊 View Detailed Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRadar;
