
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/AnimatedCounter";

const Testimonials = () => {
  const stats = [
    {
      icon: Users,
      value: 25.8,
      suffix: "K+",
      label: "Students Assessed",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      value: 82,
      suffix: "%",
      label: "Students Leveling Up",
      color: "text-green-600"
    },
    {
      icon: Award,
      value: 300,
      suffix: "+",
      label: "Partner Colleges",
      color: "text-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Vice Principal",
      institution: "Mumbai Institute of Technology",
      rating: 5,
      content: "PLAT has revolutionized how we track student outcomes. Our NAAC grade improved from B+ to A within 18 months of implementation. The detailed CRI reports give us actionable insights we never had before.",
      image: "/lovable-uploads/77469080-a44e-47f0-9c8b-4342ab72624c.png"
    },
    {
      name: "Prof. Anita Sharma",
      role: "Head of Placements",
      institution: "Delhi College of Engineering",
      rating: 5,
      content: "Our placement success rate jumped from 68% to 89% after implementing PLAT. Recruiters now specifically ask for CRI scores because they trust the comprehensive skill assessment.",
      image: "/lovable-uploads/654a569e-f847-4312-9c16-a4c9ee9ae604.png"
    },
    {
      name: "Dr. Priya Menon",
      role: "Dean of Student Affairs",
      institution: "Bangalore Technology Institute",
      rating: 5,
      content: "The micro-learning modules and personalized development paths have transformed our students' confidence. We can now clearly demonstrate measurable skill improvement to our accreditation body.",
      image: "/lovable-uploads/572a2911-60c9-4661-956e-57f7170076b3.png"
    },
    {
      name: "Arjun Patel",
      role: "Final Year Student",
      institution: "Computer Science Engineering",
      rating: 5,
      content: "My CRI score of 8.3 helped me land interviews at top companies. The detailed feedback showed exactly which skills I needed to improve, and the targeted practice modules made all the difference.",
      image: "/lovable-uploads/43a1e86e-242e-4145-b2a0-5200d685ffa4.png"
    },
    {
      name: "Sneha Reddy",
      role: "HR Manager",
      institution: "TechCorp Solutions",
      rating: 5,
      content: "CRI scores have become our primary screening tool. Students with high CRI scores consistently perform better in our technical interviews and adapt faster to our work environment.",
      image: "/lovable-uploads/42b1b0fa-e77f-4826-a701-5cce9896cef6.png"
    },
    {
      name: "Dr. Vikram Singh",
      role: "Principal",
      institution: "Pune Engineering College",
      rating: 5,
      content: "PLAT's comprehensive reporting helped us identify curriculum gaps and improve our teaching methodology. The correlation between CRI scores and actual job performance is remarkable.",
      image: "/lovable-uploads/130e619f-7a64-4f1d-8a21-8a2b557c05a3.png"
    }
  ];

  const caseStudies = [
    {
      title: "KJ Somaiya College of Engineering",
      subtitle: "Improved NAAC Grade from B+ to A",
      metrics: [
        { label: "Students Assessed", value: "2,400+" },
        { label: "Placement Rate Increase", value: "+23%" },
        { label: "Average CRI Score", value: "820/900" }
      ],
      challenge: "Struggling to demonstrate measurable student outcomes for NAAC accreditation",
      solution: "Implemented PLAT across all final-year programs with comprehensive skill tracking",
      result: "Achieved Grade A in NAAC assessment with documented evidence of student skill development",
      image: "/lovable-uploads/90f6b6c5-316c-4b86-b836-d9dc027672c3.png"
    },
    {
      title: "Symbiosis Institute of Technology",
      subtitle: "Enhanced Industry Partnerships",
      metrics: [
        { label: "Industry Partners", value: "50+" },
        { label: "Direct Placements", value: "340+" },
        { label: "Salary Increase", value: "+35%" }
      ],
      challenge: "Disconnect between curriculum and industry expectations",
      solution: "Used CRI insights to align programs with industry skill requirements",
      result: "Established direct recruitment partnerships with major tech companies",
      image: "/lovable-uploads/2d1d7361-b7f9-4197-a6b1-1eab125e093b.png"
    },
    {
      title: "VIT Chennai",
      subtitle: "Student Success Transformation",
      metrics: [
        { label: "Students Tracked", value: "3,200+" },
        { label: "Skill Improvement", value: "+42%" },
        { label: "Interview Success", value: "91%" }
      ],
      challenge: "High academic performers failing in job interviews",
      solution: "Personalized skill development based on individual CRI assessments",
      result: "Students now demonstrate both academic excellence and workplace readiness",
      image: "/lovable-uploads/8b4f03fb-6be1-4f08-be07-463b3e918634.png"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              <Star className="w-4 h-4 mr-2" />
              Success Stories & Case Studies
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transforming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Student Outcomes
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Real stories from institutions and students who've experienced remarkable improvements with PLAT
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Impact at Scale
            </h2>
            <p className="text-xl text-gray-600">
              Measurable results across our partner institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-6">
                    <Icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={stat.value} duration={2} />
                    <span className="text-3xl">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Institution Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              How leading colleges transformed their outcomes with PLAT
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-8 lg:p-12">
                        <div className="mb-6">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                            {study.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold">
                            {study.subtitle}
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="text-2xl font-bold text-gray-900 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-sm text-gray-600">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Result:</h4>
                            <p className="text-gray-600">{study.result}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from educators, students, and industry partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="relative mb-6">
                      <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                      <p className="text-gray-700 leading-relaxed pl-6">
                        {testimonial.content}
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-blue-600">
                          {testimonial.institution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Transform your institution's outcomes with data-driven insights and comprehensive skill development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#send-message">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
                One Test
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/cri-scorecard">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                View Sample CRI Report
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
