
import { Card, CardContent } from "@/components/ui/card";
import { Star, Building2, TrendingUp, Users, Award } from "lucide-react";

const Testimonials = () => {
  const caseStudies = [
    {
      logo: "JBIMS",
      collegeName: "Jamnalal Bajaj Institute of Management Studies",
      location: "Mumbai",
      keyMetric: "+22% Placement Rate",
      description: "Leading business school increased final placement percentage from 78% to 95% using PLAT's CRI-based preparation program.",
      quote: "PLAT helped us identify exactly which students needed what kind of support. The targeted interventions based on CRI scores resulted in our best placement season ever.",
      author: "Dr. Rajesh Kumar",
      position: "Director, Training & Placement",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      metrics: [
        { label: "Placement Rate", before: "78%", after: "95%" },
        { label: "Average Package", before: "₹8.2L", after: "₹12.4L" },
        { label: "Top Recruiters", before: "45", after: "78" }
      ]
    },
    {
      logo: "SNDT",
      collegeName: "SNDT Women's University",
      location: "Mumbai",
      keyMetric: "+31% CRI Improvement",
      description: "Comprehensive skill development program helped students achieve significant career readiness improvements across all departments.",
      quote: "The CRI framework gave our students clear visibility into their strengths and areas for development. The improvement in confidence and job readiness is remarkable.",
      author: "Prof. Meera Desai",
      position: "Head, Career Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b48ae2d6?w=150&h=150&fit=crop&crop=face",
      metrics: [
        { label: "Avg CRI Score", before: "6.2", after: "8.1" },
        { label: "Students Placed", before: "65%", after: "87%" },
        { label: "Industry Partnerships", before: "12", after: "34" }
      ]
    },
    {
      logo: "SKN",
      collegeName: "SKN Sinhgad College of Engineering",
      location: "Pune",
      keyMetric: "+18% Technical Skills",
      description: "Engineering college used PLAT to bridge the gap between academic learning and industry requirements.",
      quote: "PLAT's technical skill assessment revealed gaps we didn't even know existed. The targeted micro-learning modules helped our students become truly industry-ready.",
      author: "Dr. Amit Patil",
      position: "HOD, Computer Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      metrics: [
        { label: "Technical Proficiency", before: "6.8", after: "8.2" },
        { label: "Coding Interviews", before: "42%", after: "78%" },
        { label: "Industry Projects", before: "8", after: "23" }
      ]
    },
    {
      logo: "KMC",
      collegeName: "KMC College",
      location: "Chennai",
      keyMetric: "+4.2 NAAC Score",
      description: "Liberal arts college improved NAAC student outcomes criteria significantly through systematic skill development.",
      quote: "PLAT's outcome-based approach aligned perfectly with NAAC requirements. Our accreditation score improved dramatically, and more importantly, our students are getting better jobs.",
      author: "Dr. Priya Nair",
      position: "Vice Principal",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      metrics: [
        { label: "NAAC Score", before: "2.8", after: "4.1" },
        { label: "Student Satisfaction", before: "72%", after: "91%" },
        { label: "Alumni Success", before: "3.2", after: "4.6" }
      ]
    }
  ];

  const studentStories = [
    {
      name: "Arjun Mehta",
      college: "VESIT",
      course: "Computer Engineering",
      initialCRI: 6.4,
      finalCRI: 8.7,
      placement: "Software Engineer at Google",
      story: "I was struggling with technical interviews despite having good grades. PLAT's assessment showed I was weak in system design and problem-solving. The targeted micro-tasks helped me improve systematically.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sneha Patel",
      college: "DJSCE",
      course: "Information Technology",
      initialCRI: 5.8,
      finalCRI: 8.3,
      placement: "Product Manager at Flipkart",
      story: "My communication skills were holding me back. PLAT identified this gap and provided specific exercises. The confidence I gained helped me excel in group discussions and interviews.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b48ae2d6?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rahul Sharma",
      college: "KJSCE",
      course: "Electronics Engineering",
      initialCRI: 7.1,
      finalCRI: 8.9,
      placement: "Data Scientist at Microsoft",
      story: "I wanted to transition from electronics to data science. PLAT's skill mapping showed me exactly what I needed to learn. The personalized learning path made the transition smooth.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Kavya Iyer",
      college: "Jondhale College",
      course: "Commerce",
      initialCRI: 6.0,
      finalCRI: 8.5,
      placement: "Business Analyst at Deloitte",
      story: "Coming from a commerce background, I felt intimidated by analytical roles. PLAT's step-by-step skill building gave me the confidence to pursue my dream job in consulting.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { icon: Users, value: "1L+", label: "Students Assessed" },
    { icon: Building2, value: "50+", label: "Partner Colleges" },
    { icon: TrendingUp, value: "18%", label: "Avg Placement Increase" },
    { icon: Award, value: "85%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success Stories &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results from colleges and students who transformed their outcomes with PLAT
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* College Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              College Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              How leading institutions transformed their placement outcomes
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* College Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <Building2 className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{study.logo}</div>
                          <div className="text-sm text-gray-600">{study.location}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{study.collegeName}</h3>
                      <div className="text-2xl font-bold text-green-600 mb-4">{study.keyMetric}</div>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      
                      {/* Testimonial */}
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <p className="text-gray-700 italic mb-3">"{study.quote}"</p>
                        <div className="flex items-center">
                          <img 
                            src={study.image} 
                            alt={study.author}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{study.author}</div>
                            <div className="text-sm text-gray-600">{study.position}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-6">Key Improvements</h4>
                      <div className="space-y-6">
                        {study.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center justify-between">
                            <span className="text-gray-700 font-medium">{metric.label}</span>
                            <div className="flex items-center space-x-4">
                              <div className="text-center">
                                <div className="text-sm text-gray-500">Before</div>
                                <div className="text-lg font-bold text-red-600">{metric.before}</div>
                              </div>
                              <div className="text-gray-400">→</div>
                              <div className="text-center">
                                <div className="text-sm text-gray-500">After</div>
                                <div className="text-lg font-bold text-green-600">{metric.after}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Student Transformation Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real students who achieved their dream placements with PLAT
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {studentStories.map((student, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={student.image} 
                      alt={student.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
                      <p className="text-gray-600">{student.course}</p>
                      <p className="text-sm text-gray-500">{student.college}</p>
                    </div>
                  </div>

                  {/* CRI Improvement */}
                  <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">CRI Improvement</span>
                      <span className="text-lg font-bold text-green-600">
                        +{(student.finalCRI - student.initialCRI).toFixed(1)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Initial</div>
                        <div className="text-xl font-bold text-red-600">{student.initialCRI}</div>
                      </div>
                      <div className="flex-1 h-2 bg-gradient-to-r from-red-300 to-green-300 rounded-full"></div>
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Final</div>
                        <div className="text-xl font-bold text-green-600">{student.finalCRI}</div>
                      </div>
                    </div>
                  </div>

                  {/* Placement */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="text-sm font-medium text-blue-600 mb-1">Placed at</div>
                    <div className="text-lg font-bold text-blue-900">{student.placement}</div>
                  </div>

                  {/* Story */}
                  <p className="text-gray-700 italic">"{student.story}"</p>

                  {/* Rating */}
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">Highly Satisfied</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join the colleges and students already transforming their outcomes with PLAT
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg font-semibold transition-colors">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg transition-colors">
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
