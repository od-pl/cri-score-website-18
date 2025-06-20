
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Building2, TrendingUp, Award, CheckCircle, Star, Target, BarChart3, Zap, Globe, BookOpen, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import CollegeCarousel from "@/components/CollegeCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";

const Index = () => {
  const metrics = [
    {
      number: 25766,
      label: "Students Assessed",
      icon: Users,
      suffix: "+"
    },
    {
      number: 50,
      label: "Partner Colleges",
      icon: Building2,
      suffix: "+"
    },
    {
      number: 18,
      label: "Avg Placement Increase",
      icon: TrendingUp,
      suffix: "%"
    },
    {
      number: 85,
      label: "Student Engagement",
      icon: UserCheck,
      suffix: "%"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Skill-Based Assessment",
      description: "AI-powered evaluation of practical skills beyond traditional academic scores"
    },
    {
      icon: BarChart3,
      title: "CRI Score Analytics",
      description: "Comprehensive Competency Readiness Index for employment prediction"
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      description: "Instant feedback and recommendations for skill development"
    },
    {
      icon: Globe,
      title: "Industry Alignment",
      description: "Assessment criteria designed with leading employers and industry experts"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Placement Rates",
      description: "Colleges report average 18% increase in successful placements"
    },
    {
      icon: Award,
      title: "Better NAAC Scores",
      description: "Improved accreditation outcomes through measurable student progress"
    },
    {
      icon: Users,
      title: "Enhanced Student Confidence",
      description: "Students gain clarity on strengths and improvement areas"
    },
    {
      icon: Building2,
      title: "Employer Trust",
      description: "Recruiters gain confidence in graduate capabilities"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <Badge className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>AI-Powered Skills Assessment</span>
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Bridge the Gap Between{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Academic Scores
                  </span>{" "}
                  and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Employability
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  PLAT helps colleges identify student skill gaps, boost placement rates, and build industry-ready graduates through AI-powered CRI assessments.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact#send-message">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto font-semibold">
                    <Target className="w-5 h-5 mr-2" />
                    Book Free Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto font-semibold">
                    <BookOpen className="w-5 h-5 mr-2" />
                    How It Works
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 lg:pt-8 border-t border-gray-200">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="text-xl lg:text-2xl font-bold text-gray-900">
                          <AnimatedCounter end={metric.number} suffix={metric.suffix} />
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900">CRI Score Dashboard</h3>
                      <p className="text-gray-600 text-sm">Real-time competency analysis</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Technical Skills</span>
                      <span className="text-green-600 font-bold">8.4/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full w-4/5"></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Communication</span>
                      <span className="text-blue-600 font-bold">7.2/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full w-3/5"></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Problem Solving</span>
                      <span className="text-purple-600 font-bold">9.1/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full w-5/6"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Placement Ready</div>
                        <div className="text-sm text-gray-600">Overall CRI Score: 8.2/10</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Leading Colleges */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Colleges
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join 50+ institutions already transforming student outcomes with PLAT
            </p>
          </div>
          <CollegeCarousel />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PLAT?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets practical education solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  Proven Results for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    Colleges & Students
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Institutions using PLAT see measurable improvements in placement rates, accreditation scores, and student satisfaction.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link to="/testimonials">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 h-auto">
                  <Users className="w-5 h-5 mr-2" />
                  View Success Stories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 text-center">Impact Metrics</h3>
                
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-sm">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">
                      <AnimatedCounter end={18} suffix="%" />
                    </div>
                    <div className="text-sm text-gray-600">Placement Increase</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                      <AnimatedCounter end={85} suffix="%" />
                    </div>
                    <div className="text-sm text-gray-600">Student Satisfaction</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-sm">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Building2 className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">
                      <AnimatedCounter end={50} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-600">Partner Colleges</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-sm">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-1">
                      <AnimatedCounter end={25766} />
                    </div>
                    <div className="text-sm text-gray-600">Students Assessed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Students' Future?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Join leading colleges already using PLAT to boost placement rates and build industry-ready graduates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#send-message">
                <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto font-semibold">
                  <Target className="w-5 h-5 mr-2" />
                  Book Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto font-semibold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
