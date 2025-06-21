
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillRadarChart = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-64"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid 
              stroke={isHovered ? "#3b82f6" : "#e5e7eb"} 
              strokeWidth={isHovered ? 1.5 : 1}
            />
            <PolarAngleAxis 
              dataKey="skill" 
              className="text-sm font-medium cursor-pointer hover:text-blue-600"
              onClick={(e) => handleSkillClick(e.value)}
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
                dot={{ 
                  fill: '#3b82f6', 
                  strokeWidth: 2, 
                  r: isHovered ? 6 : 4,
                  cursor: 'pointer'
                }}
                animationBegin={500}
                animationDuration={1500}
              />
            </motion.g>
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Interactive Tooltip */}
      {activeSkill && activeSkillData && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-0 left-0 right-0 bg-white border-2 border-blue-200 rounded-lg p-4 shadow-lg z-10"
        >
          <div className="text-center">
            <h4 className="font-semibold text-blue-900 mb-1">{activeSkillData.skill}</h4>
            <p className="text-sm text-gray-600 mb-2">{activeSkillData.description}</p>
            <div className="text-lg font-bold text-blue-600">
              Score: {activeSkillData.score}/100
            </div>
          </div>
        </motion.div>
      )}

      {/* Instruction text */}
      <motion.p 
        className="text-xs text-gray-500 text-center mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Click on skill labels or hover to interact
      </motion.p>
    </div>
  );
};

export default SkillRadarChart;
