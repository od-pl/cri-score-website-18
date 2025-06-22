
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SkillRadarChart = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const data = [
    { 
      skill: 'Cognitive', 
      score: 82, 
      fullMark: 100,
      description: 'Problem-solving, critical thinking, and analytical abilities'
    },
    { 
      skill: 'Practical', 
      score: 76, 
      fullMark: 100,
      description: 'Hands-on skills, technical proficiency, and application abilities'
    },
    { 
      skill: 'Adaptive', 
      score: 87, 
      fullMark: 100,
      description: 'Flexibility, learning agility, and change management'
    },
    { 
      skill: 'Socio-Emotional', 
      score: 80, 
      fullMark: 100,
      description: 'Emotional intelligence, teamwork, and interpersonal skills'
    },
    { 
      skill: 'Entrepreneurship', 
      score: 84, 
      fullMark: 100,
      description: 'Innovation, leadership, and business acumen'
    },
  ];

  const handleSkillClick = (skillName: string) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  const activeSkillData = data.find(item => item.skill === activeSkill);

  return (
    <TooltipProvider>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-80"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} margin={{ top: 40, right: 80, bottom: 40, left: 80 }}>
              <PolarGrid 
                stroke={isHovered ? "#3b82f6" : "#e5e7eb"} 
                strokeWidth={isHovered ? 1.5 : 1}
              />
              <PolarAngleAxis 
                dataKey="skill" 
                className="text-sm font-medium cursor-pointer hover:text-blue-600"
                onClick={(e) => handleSkillClick(e.value)}
                tick={{ fontSize: 12, fill: '#374151', fontWeight: 500 }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10 }}
                axisLine={false}
              />
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Radar
                  name="Skills"
                  dataKey="score"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={isHovered ? 0.4 : 0.3}
                  strokeWidth={isHovered ? 3 : 2}
                  dot={(props) => {
                    const { cx, cy, payload } = props;
                    return (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.circle
                            cx={cx}
                            cy={cy}
                            r={hoveredPoint === payload.skill ? 8 : 5}
                            fill="#3b82f6"
                            stroke="#ffffff"
                            strokeWidth={2}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredPoint(payload.skill)}
                            onMouseLeave={() => setHoveredPoint(null)}
                            onClick={() => handleSkillClick(payload.skill)}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                              scale: hoveredPoint === payload.skill ? 1.2 : 1,
                              rotate: isHovered ? 360 : 0
                            }}
                            transition={{ 
                              scale: { duration: 0.2 },
                              rotate: { duration: 2, repeat: Infinity, ease: "linear" }
                            }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="text-center">
                            <p className="font-semibold">{payload.skill}</p>
                            <p className="text-sm text-gray-600">{payload.description}</p>
                            <p className="font-bold text-blue-600">{payload.score}/100</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  }}
                  animationBegin={500}
                  animationDuration={1500}
                />
              </motion.g>
              
              {/* Animated pulse rings */}
              {isHovered && (
                <motion.g>
                  {[1, 2, 3].map((ring) => (
                    <motion.circle
                      key={ring}
                      cx="50%"
                      cy="50%"
                      r={20 * ring}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth={1}
                      opacity={0.3}
                      initial={{ scale: 0, opacity: 0.6 }}
                      animate={{ 
                        scale: [0, 1.5, 0],
                        opacity: [0.6, 0.2, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: ring * 0.2,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </motion.g>
              )}
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Interactive Tooltip */}
        {activeSkill && activeSkillData && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-0 left-0 right-0 bg-white border-2 border-blue-200 rounded-lg p-4 shadow-lg z-10"
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h4 
                className="font-semibold text-blue-900 mb-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                {activeSkillData.skill}
              </motion.h4>
              <p className="text-sm text-gray-600 mb-2">{activeSkillData.description}</p>
              <motion.div 
                className="text-lg font-bold text-blue-600"
                animate={{ 
                  scale: [1, 1.1, 1],
                  color: ["#2563eb", "#1d4ed8", "#2563eb"]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Score: {activeSkillData.score}/100
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Instruction text with animation */}
        <motion.p 
          className="text-xs text-gray-500 text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05, color: "#3b82f6" }}
        >
          Click on skill labels or hover over points to interact
        </motion.p>
      </div>
    </TooltipProvider>
  );
};

export default SkillRadarChart;
