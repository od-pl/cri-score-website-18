import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, Star, Award, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  const painPoints = [{
    icon: "❌",
    stat: "54%",
    text: "of employers don't trust marksheets",
    subtitle: "India Skills Report 2024",
    color: "bg-red-50 border-red-200"
  }, {
    icon: "😕",
    stat: "72%",
    text: "of students miss key workplace skills",
    subtitle: "AICTE-NEAT Report 2023",
    color: "bg-orange-50 border-orange-200"
  }, {
    icon: "⏰",
    stat: "37 days",
    text: "average hiring delay",
    subtitle: "LinkedIn India, 2023",
    color: "bg-yellow-50 border-yellow-200"
  }];
  const steps = [{
    title: "Test",
    description: "Comprehensive skill assessment",
    icon: "📝"
  }, {
    title: "Micro Tasks",
    description: "Targeted skill building",
    icon: "💪"
  }, {
    title: "Skill Improvement",
    description: "Measurable progress",
    icon: "📈"
  }, {
    title: "CRI Score",
    description: "Career readiness index",
    icon: "🏆"
  }];
  const testimonials = [{
    name: "Priya Sharma",
    role: "CSE Student, JBIMS",
    quote: "PLAT helped me identify my weak areas and get placed at Google!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b48ae2d6?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Rahul Verma",
    role: "MCA Student, SNDT",
    quote: "The CRI score made all the difference in my job interviews.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Ananya Patel",
    role: "IT Student, SKN",
    quote: "Got 3 job offers after improving my CRI score from 6.2 to 8.4!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Vikram Singh",
    role: "ECE Student, KMC",
    quote: "PLAT's personalized learning path was exactly what I needed.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }];
  const colleges = ["JBIMS", "SNDT", "SKN", "Jondhale", "KMC", "VESIT", "DJSCE", "KJSCE"];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Shortcut to Better{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    'NAAC Student Outcomes'
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  AI-powered analytics to uncover hidden skill gaps and boost placement rates for your college.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto">
                  Book Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                  Download PLAT Report
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>25k+ Students Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>300+ Recruiters</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <img alt="Students looking at PLAT AI dashboard" className="rounded-lg w-full h-64 object-cover" src="/lovable-uploads/86a57270-710b-43ab-a414-56c58b29425d.png" />
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Career Readiness Index</span>
                    <span className="text-2xl font-bold text-green-600">840/900</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Hidden Crisis in Higher Education
            </h2>
            <p className="text-xl text-gray-600">
              Traditional assessment methods are failing students and employers alike
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => <Card key={index} className={`${point.color} border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{point.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{point.stat}</div>
                  <p className="text-gray-700 font-medium">{point.text}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How PLAT Transforms Students
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-powered process identifies gaps and builds real-world skills
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => <div key={index} className="relative">
                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>}
              </div>)}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Learn More About Our Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Leading Colleges
            </h2>
            <p className="text-xl text-blue-100">
              <span className="text-yellow-300 font-bold">18% Placement-Rate Jump</span> at our partner Colleges
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {colleges.map((college, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                <Building2 className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="font-semibold text-sm">{college}</div>
              </div>)}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">25766</div>
              <div className="text-blue-100">Students Assessed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">300+</div>
              <div className="text-blue-100">Recruiters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">85%</div>
              <div className="text-blue-100">Placement Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from students who transformed their careers with PLAT
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-gray-700 text-sm italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Read More Success Stories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Boost Your College's Placement Rate?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join leading colleges already using PLAT to improve NAAC outcomes and student success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
              Reach out to us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
          </div>

          <div className="mt-8 text-blue-200 text-sm">
            ✓ Try our Pilot Program ✓ Analyse reports ✓ Full support included
          </div>
        </div>
      </section>
    </div>;
};
export default Index;