import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp, ArrowRight, Calendar, MapPin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      logo: "GE",
      name: "Green Exam",
      color: "#22c55e", // Green
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      logo: "ALMS",
      name: "Admission Lifecycle Management System",
      color: "#502bc9", // Purple
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      logo: "AMS",
      name: "Academic Assessment Management System",
      color: "#2D5A95", // Blue
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      logo: "PLAT",
      name: "Progressive Learning Ability Test",
      color: "#7c3aed", // Purple
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      logo: "CRI",
      name: "Career Readiness Index",
      color: "#dc2626", // Red
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      logo: "FBP",
      name: "Fresher Job Portal",
      color: "#059669", // Green
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      comingSoon: true
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 50); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  const timeline = [{
    year: "2018",
    title: "Foundation",
    description: "Offee Technologies founded with a mission to bridge the skill gap in higher education",
    milestone: "Started with 5 colleges"
  }, {
    year: "2019",
    title: "CIF Framework Development",
    description: "Developed the comprehensive CIF (Cognitive, Functional, Adaptive, Social-Emotional, Literacy) framework",
    milestone: "Research validated with 10K+ students"
  }, {
    year: "2020",
    title: "AI Integration",
    description: "Launched AI-powered assessment engine for personalized skill evaluation and improvement",
    milestone: "Patent filed for adaptive learning algorithm"
  }, {
    year: "2021",
    title: "Scale & Recognition",
    description: "Expanded to 25+ colleges and received recognition for innovation in educational technology",
    milestone: "50K+ students assessed"
  }, {
    year: "2022",
    title: "Industry Partnerships",
    description: "Formed strategic partnerships with leading recruiters and industry bodies",
    milestone: "500+ recruiting partners onboarded"
  }, {
    year: "2023",
    title: "NAAC Alignment",
    description: "Achieved full compliance with NAAC and NEP 2020 requirements for outcome-based education",
    milestone: "NAAC scores improved by avg 18%"
  }, {
    year: "2024",
    title: "Market Leadership",
    description: "Became the leading platform for career readiness assessment in Indian higher education",
    milestone: "1L+ students, 50+ colleges"
  }, {
    year: "2025",
    title: "Global Expansion",
    description: "Preparing for international expansion and next-generation AI features",
    milestone: "Vision: 10L+ students globally"
  }];
  const team = [{
    name: "Amit Shah",
    position: "CEO & Co-Founder",
    background: "Former Director at IIM Mumbai, 15+ years in education leadership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Priya Sharma",
    position: "CTO & Co-Founder",
    background: "Ex-Google, AI/ML expert with 12+ years in edtech innovation",
    image: "https://images.unsplash.com/photo-1494790108755-2616b48ae2d6?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Dr. Amit Patel",
    position: "Chief Academic Officer",
    background: "Former Dean at JBIMS, expert in outcome-based education",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Sneha Desai",
    position: "VP of Growth",
    background: "Ex-Byju's, specialist in scaling educational platforms",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }];
  const values = [{
    icon: Target,
    title: "Student-Centric",
    description: "Every feature we build is designed to improve student outcomes and career readiness"
  }, {
    icon: Award,
    title: "Evidence-Based",
    description: "All our methodologies are backed by rigorous research and validated by real-world results"
  }, {
    icon: Users,
    title: "Collaborative",
    description: "We work closely with institutions, students, and employers to create win-win outcomes"
  }, {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "We constantly evolve our technology to stay ahead of changing industry requirements"
  }];
  const stats = [{
    value: "25766",
    label: "Students Transformed"
  }, {
    value: "50+",
    label: "Partner Colleges"
  }, {
    value: "300+",
    label: "Recruiting Partners"
  }, {
    value: "18%",
    label: "Average Placement Increase"
  }];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Orage Digital</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming higher education through AI-powered career readiness assessment and outcome-based learning
            </p>
          </div>

          {/* Product Carousel */}
          <div className="relative mb-16">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Carousel container */}
            <div 
              ref={carouselRef}
              className="flex space-x-6 overflow-x-auto scroll-smooth"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
              }}
            >
              {products.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-80 my-8">
                  <Card className="bg-white hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <div 
                        className="w-20 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.logo}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                      {product.comingSoon && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
              
              {/* Duplicate cards for seamless loop */}
              {products.map((product, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 my-8">
                  <Card className="bg-white hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <div 
                        className="w-20 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.logo}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                      {product.comingSoon && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We empower teachers to unlock student potential through smarter assessment and upskilling.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Empower students with clear visibility into their career readiness</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Help institutions improve placement outcomes and NAAC scores</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Enable employers to identify truly job-ready candidates</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
              To become the global standard for career readiness assessment, enabling every student to achieve their full potential and every institution to demonstrate measurable outcomes that align with 21st-century skill requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From startup to market leader: 7 years of transforming education
            </p>
          </div>
           <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-blue-300"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <span className="text-sm font-medium text-blue-800">{item.milestone}</span>
                        </div>
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
       </section> */}

      {/* Team */}
      

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
            const Icon = value.icon;
            return <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Be part of the transformation in higher education. Let's work together to prepare students for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
              Partner with Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
              Explore Careers
             </Button> */}
          </div>
        </div>
      </section>
    </div>;
};
export default About;