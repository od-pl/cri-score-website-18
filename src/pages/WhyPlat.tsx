import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Award, ArrowRight, Building2, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
const WhyPlat = () => {
  const problems = [{
    title: "Marksheets Don't Equal Skills",
    description: "85% CGPA students often lack industry-ready skills while 65% CGPA students with strong practical skills get overlooked.",
    icon: AlertTriangle,
    color: "text-red-600"
  }, {
    title: "Employer Trust Gap",
    description: "54% of employers don't trust traditional academic scores as indicators of job readiness.",
    icon: Users,
    color: "text-orange-600"
  }, {
    title: "Hidden Skill Gaps",
    description: "68% of students graduate without knowing their actual strengths and improvement areas.",
    icon: BookOpen,
    color: "text-yellow-600"
  }];
  const regulations = [{
    year: "2020",
    title: "NEP 2020",
    description: "Emphasis on skill-based education and outcome measurement",
    logo: "🇮🇳"
  }, {
    year: "2023",
    title: "NAAC Guidelines",
    description: "Mandatory student outcome tracking for accreditation",
    logo: "🎓"
  }, {
    year: "2024",
    title: "UGC Mandate",
    description: "Colleges must demonstrate measurable student outcomes",
    logo: "📊"
  }];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Traditional Assessment is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Failing Students
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The disconnect between academic scores and industry requirements is creating a crisis in higher education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">😵</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Confused Graduates</div>
                      <div className="text-gray-600">High GPA, low employability</div>
                    </div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I scored 9.2 CGPA but couldn't clear a single technical interview. 
                      I had no idea where I stood compared to industry expectations."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- Final year CS student</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Employed Graduates</div>
                      <div className="text-gray-600">CRI-verified skills</div>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-gray-700 italic">
                      "My CRI score of 8.4 helped me get placed at Microsoft. 
                      Recruiters could see exactly what I was capable of."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- PLAT success story</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Three Critical Problems
            </h2>
            <p className="text-xl text-gray-600">
              Understanding why traditional methods aren't working
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => {
            const Icon = problem.icon;
            return <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${problem.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Regulatory Pressure */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Regulatory Pressure is Building
            </h2>
            <p className="text-xl text-gray-600">
              Government mandates are pushing colleges toward outcome-based education
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-blue-300"></div>
            
            <div className="space-y-8">
              {regulations.map((reg, index) => <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="text-3xl mr-4">{reg.logo}</div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{reg.year}</div>
                            <div className="text-xl font-semibold text-gray-900">{reg.title}</div>
                          </div>
                        </div>
                        <p className="text-gray-600">{reg.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Early Mover Advantage */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Take the Lead </h2>
              <p className="text-xl text-green-100 leading-relaxed">Colleges using outcome-based assessments are now reporting:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-yellow-300">+18%</div>
                  <div className="text-green-100">Placement Rate Increase</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-yellow-300">+2.3</div>
                  <div className="text-green-100">NAAC Score Improvement</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-yellow-300">85%</div>
                  <div className="text-green-100">Student Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-yellow-300">3x</div>
                  <div className="text-green-100">Industry Partnerships</div>
                </div>
              </div>
              
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                See How CRI Helps
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">NAAC Grade Improvement</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Before PLAT</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-white/20 rounded-full h-3">
                      <div className="bg-red-400 h-3 rounded-full w-3/5"></div>
                    </div>
                    <span className="font-bold">2.8</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>After PLAT</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-white/20 rounded-full h-3">
                      <div className="bg-green-400 h-3 rounded-full w-5/6"></div>
                    </div>
                    <span className="font-bold">4.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Don't Wait for Your Competition to Catch Up</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">Join the colleges already transforming student outcomes, boosting employability, and earning recruiter trust with PLAT</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/how-it-works">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto">
                See How PLAT Works
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
          </div>
        </div>
      </section>
    </div>;
};
export default WhyPlat;