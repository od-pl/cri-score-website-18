import { Card, CardContent } from "@/components/ui/card";
import { Star, Building2, TrendingUp, Users, Award } from "lucide-react";

const Testimonials = () => {
  const caseStudies = [
    {
      logo: "JBIMS",
      collegeName: "Jamnalal Bajaj Institute of Management Studies (JBIMS)",
      location: "Mumbai",
      keyMetric: "20% Improved Placement Preparedness ",
      description: "As one of India's leading business schools, JBIMS adopted PLAT to enhance career readiness across its MBA cohort. By integrating CRI-based insights into its student development strategy, the institute was able to better align training efforts with individual student needs—leading to stronger interview performance and more focused preparation across key functional areas.",
      quote: "PLAT gave us structured, actionable data that we had not accessed before. It helped faculty and placement teams work more precisely with students, resulting in improved preparedness and greater confidence during placements.",
      author: "Dr. Kavita R. Laghate",
      position: "Director",
      image: "https://jbims.edu/beta/uploads/director/Mrs__Laghate_Maam.JPG",
      metrics: [
        { label: "Placement Preparedness", before: "12%", after: "20%" },
        { label: "Average Package", before: "₹8.2L", after: "₹12.4L" },
        { label: "Top Recruiters", before: "45", after: "78" }
      ]
    },
    {
      logo: "SNDT",
      collegeName: "SNDT Women's University",
      location: "Mumbai",
      keyMetric: "32% of Career Clarity Increased",
      description: "SNDT Women's University partnered with PLAT to introduce a structured, multi-departmental skill development initiative. The CRI framework enabled students to gain clarity on their strengths and development areas, resulting in measurable improvements in confidence, self-awareness, and employability.",
      quote: "The CRI framework gave our students clear visibility into their strengths and areas for development. The improvement in confidence and job readiness across departments has been encouraging.",
      author: "Dr. Ruby Ojha",
      position: "Pro-Vice-Chancellor",
      image: "https://brandnew.sndt.ac.in/wp-content/uploads/2024/10/Ruby-Ojha.jpg",
      metrics: [
        { label: "Career Readiness Score", before: "6.2", after: "8.1" },
        { label: "Students Placed", before: "65%", after: "73%" },
        { label: "Students Placed", before: "12", after: "23" } 
      ]
    },
    {
      logo: "Xavier's",
      collegeName: "St. Xavier's College",
      location: "Mumbai",
      keyMetric: "58% Improved Core Skills Identification",
      description: "St. Xavier's College began with a pilot of PLAT to explore student skills beyond academic performance. The results were transformative—58% of students identified their core strengths through PLAT's structured skill-mapping. This shift in visibility led to full-scale adoption across the student body.",
      quote: "We realised our students are much more than their report cards. PLAT gave us a deeper understanding of their capabilities, and helped us bring skill-based development to the centre of our academic experience.",
      author: "Dr. Rajendra Shinde",
      position: "Principal",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhGMA7hFvUHKFBcWqyNak-4HvGaeG8w7yeQ&s",
      metrics: [
        { label: "Students Identifying Core Skill Areas", before: "42%", after: "68%" },
        { label: "Faculty-Led Skill Mentorship Engagement", before: "8 departments", after: "11 departments" },
        { label: "Career Guidance Participation Rate", before: "38%", after: "62%" }
      ]
    },
    {
      logo: "Somaiya",
      collegeName: "KJ Somaiya College of Engineering",
      location: "Mumbai",
      keyMetric: "68% of Students Upskilled",
      description: "At KJ Somaiya College of Engineering, PLAT was implemented to align student skills with core industry demands. Post-assessment insights revealed a marked improvement in problem-solving and communication, two areas critical for engineering placements. These insights also helped departments tailor effective mentoring and pre-placement interventions.",
      quote: "PLAT gave our students a structured way to assess their readiness for the workplace. The insights have helped guide both student preparation and faculty mentoring in a more focused and strategic manner.  ",
      author: "Dr. Suresh Ukarande",
      position: "Director",
      image: "https://sc.kjsieit.in/About_Us/principal.jpg",
      metrics: [
        { label: "Students Demonstrating Skill Gains", before: "40%", after: "67%" },
        { label: "Structured Mentoring Adoption", before: "4 departments", after: "9 departments" },
        { label: "Placement-Ready Student Confidence", before: "46%", after: "71%" }
      ]
    }
  ];

  const studentStories = [
    {
      name: "Sachin Sengar",
      course: "Computer Science Engineering",
      initialCRI: 6.4,
      finalCRI: 8.7,
      placement: "Founder of GreenMentor",
      story: "When I saw innovation and environmental reasoning as my top skill areas, it gave me the confidence to pursue an idea I was unsure about. That led to building a carbon footprint calculator and, eventually, to global recognition. PLAT was the nudge that made me believe the idea was worth building.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sandip Kathiriya",
      course: "Information Technology",
      initialCRI: 5.8,
      finalCRI: 8.3,
      placement: "Partner at Amazon India Ltd",
      story: "There's so much advice out there—it's overwhelming. What PLAT gave me was a clear, personalised snapshot of where I truly excel. I used that to focus my efforts during placements and choose roles that fit. That clarity shaped the way I prepared, interviewed, and now operate in my role at Amazon.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b48ae2d6?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Yash Kothari",
      course: "Cyber Security",
      initialCRI: 7.1,
      finalCRI: 8.9,
      placement: "Head of Network Engineering Operations at Comcast Inc",
      story: "I already knew I was technically inclined, but PLAT showed me I also had strengths in team coordination and decision-making. That changed the way I approached career planning—I didn't just apply for jobs, I looked for leadership tracks. That strategic mindset has made a big difference early in my journey.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ananya Patel",
      course: "MBA",
      initialCRI: 6.0,
      finalCRI: 8.5,
      placement: "Jr. Strategy Analyst at Accenture Strategy",
      story: "PLAT helped me decode my strengths and blind spots with precision. The skill insights weren't generic—they showed me exactly where I needed to improve to match industry expectations. That confidence translated directly into how I pitched myself to recruiters and chose the right role to start my career.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { icon: Users, value: "25766", label: "Students Assessed" },
    { icon: Building2, value: "50+", label: "Partner Colleges" },
    { icon: TrendingUp, value: "18%", label: "Average Placement Increase" },
    { icon: Award, value: "85%", label: "Student Engagement" }
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
