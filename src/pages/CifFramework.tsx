
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cog, Zap, Heart, BookOpen, ArrowRight, FileText, Users2, Briefcase } from "lucide-react";

const CifFramework = () => {
  const cifPillars = [
    {
      name: "Cognitive",
      icon: Brain,
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      description: "Mental processes and thinking abilities",
      skills: ["Critical Thinking", "Problem Solving", "Logical Reasoning", "Analytical Skills", "Decision Making"],
      jobAlignment: "Analytical roles, research positions, strategic planning"
    },
    {
      name: "Functional",
      icon: Cog,
      color: "bg-green-600", 
      lightColor: "bg-green-50",
      textColor: "text-green-600",
      description: "Technical and domain-specific competencies",
      skills: ["Technical Knowledge", "Industry Skills", "Tool Proficiency", "Process Understanding", "Quality Standards"],
      jobAlignment: "Technical roles, engineering positions, specialized functions"
    },
    {
      name: "Adaptive",
      icon: Zap,
      color: "bg-purple-600",
      lightColor: "bg-purple-50", 
      textColor: "text-purple-600",
      description: "Flexibility and learning agility",
      skills: ["Learning Agility", "Adaptability", "Innovation", "Change Management", "Continuous Improvement"],
      jobAlignment: "Dynamic environments, startup culture, consulting roles"
    },
    {
      name: "Social Emotional",
      icon: Heart,
      color: "bg-red-600",
      lightColor: "bg-red-50",
      textColor: "text-red-600", 
      description: "Interpersonal and emotional intelligence",
      skills: ["Emotional Intelligence", "Teamwork", "Leadership", "Communication", "Conflict Resolution"],
      jobAlignment: "Management roles, client-facing positions, team leadership"
    },
    {
      name: "Literacy",
      icon: BookOpen,
      color: "bg-orange-600",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
      description: "Communication and information processing",
      skills: ["Written Communication", "Verbal Communication", "Digital Literacy", "Information Processing", "Media Literacy"],
      jobAlignment: "Communication roles, content creation, information management"
    }
  ];

  const jobMappings = [
    {
      role: "Data Analyst",
      requiredSkills: ["Cognitive: 8+", "Functional: 7+", "Literacy: 7+"],
      icon: "📊"
    },
    {
      role: "Team Leader", 
      requiredSkills: ["Social Emotional: 8+", "Adaptive: 7+", "Literacy: 7+"],
      icon: "👥"
    },
    {
      role: "Software Engineer",
      requiredSkills: ["Functional: 8+", "Cognitive: 7+", "Adaptive: 6+"],
      icon: "💻"
    },
    {
      role: "Business Consultant",
      requiredSkills: ["Cognitive: 8+", "Social Emotional: 8+", "Adaptive: 8+"],
      icon: "💼"
    },
    {
      role: "Product Manager",
      requiredSkills: ["Adaptive: 8+", "Social Emotional: 7+", "Cognitive: 7+"],
      icon: "🚀"
    },
    {
      role: "Marketing Executive",
      requiredSkills: ["Literacy: 8+", "Social Emotional: 7+", "Adaptive: 7+"],
      icon: "📢"
    }
  ];

  const researchBodies = [
    {
      name: "National Education Policy 2020",
      logo: "🇮🇳",
      contribution: "Emphasis on 21st-century skills and holistic development"
    },
    {
      name: "World Economic Forum",
      logo: "🌍", 
      contribution: "Future of Jobs Report and skills framework"
    },
    {
      name: "UGC Guidelines",
      logo: "🎓",
      contribution: "Outcome-based education and assessment standards"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                CIF Framework
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A research-backed framework that maps the five critical dimensions of career readiness to real-world job requirements
            </p>
          </div>
        </div>
      </section>

      {/* CIF Model Explanation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Five Pillars of Career Readiness
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive skill model covering all aspects of professional success
            </p>
          </div>

          <div className="grid gap-8">
            {cifPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-4 gap-8 items-start">
                      {/* Pillar Info */}
                      <div className="lg:col-span-1">
                        <div className={`w-16 h-16 rounded-full ${pillar.lightColor} flex items-center justify-center mb-4`}>
                          <Icon className={`w-8 h-8 ${pillar.textColor}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pillar.name}</h3>
                        <p className="text-gray-600">{pillar.description}</p>
                      </div>

                      {/* Skills */}
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-900 mb-4">Key Skills</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {pillar.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className={`${pillar.lightColor} rounded-lg p-3 border-l-4 ${pillar.color.replace('bg-', 'border-')}`}>
                              <span className="text-sm font-medium text-gray-700">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Job Alignment */}
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-gray-900 mb-4">Job Alignment</h4>
                        <div className={`${pillar.lightColor} rounded-lg p-4 border border-gray-200`}>
                          <p className="text-sm text-gray-700">{pillar.jobAlignment}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skill-to-Job Mapping */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Skills-to-Jobs Mapping
            </h2>
            <p className="text-xl text-gray-600">
              See how CIF skills translate to specific job requirements in the modern workplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobMappings.map((job, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{job.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-600 mb-3">Required CIF Scores:</div>
                    {job.requiredSkills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-blue-50 border border-blue-200 rounded px-3 py-2">
                        <span className="text-sm text-blue-800">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Interactive Job Matching</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Your CIF Profile</h4>
                  <div className="space-y-3">
                    {cifPillars.slice(0, 3).map((pillar, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{pillar.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className={`h-2 rounded-full ${pillar.color} w-4/5`}></div>
                          </div>
                          <span className="text-sm font-medium">8.2</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Matching Jobs</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                      <span className="text-sm font-medium text-green-800">Data Analyst</span>
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">95% Match</span>
                    </div>
                    <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <span className="text-sm font-medium text-blue-800">Software Engineer</span>
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">88% Match</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Backing */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Research-Backed Framework
            </h2>
            <p className="text-xl text-blue-100">
              Built on global research and endorsed by leading educational bodies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchBodies.map((body, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{body.logo}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{body.name}</h3>
                  <p className="text-blue-100">{body.contribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Framework Development</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-300">50+</div>
                  <div className="text-blue-100">Research Papers Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">1000+</div>
                  <div className="text-blue-100">Industry Experts Consulted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">100K+</div>
                  <div className="text-blue-100">Students Assessed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Implement CIF Framework at Your Institution
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Start measuring and developing 21st-century skills with our comprehensive framework
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
              Schedule Framework Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
              <FileText className="mr-2 w-5 h-5" />
              Download Research Paper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CifFramework;
