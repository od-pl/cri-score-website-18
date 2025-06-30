
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, Quote, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/AnimatedCounter";

const Testimonials = () => {
  const testimonials = [{
    name: "Sachin Sengar",
    role: "Founder, GreenMentor",
    quote: "PLAT didn't just assess me—it validated my potential to solve real problems.",
    rating: 5,
    image: "/lovable-uploads/795ddc5d-6585-4836-9198-93ae9e030d42.png"
  }, {
    name: "Sandip Kathiriya",
    role: "Partner, Amazon India Ltd",
    quote: "PLAT helped me filter out the noise and focus on what I'm naturally good at.",
    rating: 5,
    image: "/lovable-uploads/77469080-a44e-47f0-9c8b-4342ab72624c.png"
  }, {
    name: "Yash Kothari",
    role: "Head of Network Engineering Operations, Comcast",
    quote: "PLAT helped me think beyond technical skills and recognise my path early.",
    rating: 5,
    image: "/lovable-uploads/74959d43-794e-4d8d-b8f9-2b9a1819bf7c.png"
  }, {
    name: "Ananya Patel",
    role: "Jr.Strategy Analyst, Accenture Strategy",
    quote: "Increased my CRI score from 312 to 624—and secured 3 offers during final placements.",
    rating: 5,
    image: "/lovable-uploads/e4b8e8c9-b0e6-499c-932b-11952dd7ecfe.png"
  }, {
    name: "Rohit Sharma",
    role: "Software Engineer, Google",
    quote: "PLAT's assessment helped me identify my leadership potential alongside my technical skills.",
    rating: 5,
    image: "/lovable-uploads/86a57270-710b-43ab-a414-56c58b29425d.png"
  }, {
    name: "Priya Singh",
    role: "Product Manager, Flipkart",
    quote: "The CRI scorecard gave me confidence in interviews and helped me land my dream job.",
    rating: 5,
    image: "/lovable-uploads/90f6b6c5-316c-4b86-b836-d9dc027672c3.png"
  }];

  const detailedStories = [
    {
      title: "From 312 to 624: Ananya's Journey",
      student: "Ananya Patel",
      college: "BIT Mesra",
      improvement: "CRI Score: 312 → 624",
      outcome: "3 Job Offers including Accenture Strategy",
      story: "Ananya started with a low CRI score but through targeted skill development and PLAT's personalized learning path, she improved dramatically. Her growth in problem-solving and communication skills made her stand out to recruiters.",
      image: "/lovable-uploads/e4b8e8c9-b0e6-499c-932b-11952dd7ecfe.png"
    },
    {
      title: "Technical Excellence Meets Leadership",
      student: "Rohit Sharma",
      college: "IIT Delhi",
      improvement: "Discovered Leadership Potential",
      outcome: "Software Engineer at Google",
      story: "While Rohit excelled in technical skills, PLAT helped him discover his natural leadership abilities. This balanced profile caught Google's attention during campus placements.",
      image: "/lovable-uploads/86a57270-710b-43ab-a414-56c58b29425d.png"
    },
    {
      title: "Product Management Success",
      student: "Priya Singh",
      college: "BITS Pilani",
      improvement: "Strategic Thinking Enhanced",
      outcome: "Product Manager at Flipkart",
      story: "PLAT's comprehensive assessment revealed Priya's strength in strategic thinking and user empathy, leading her to pivot from engineering to product management successfully.",
      image: "/lovable-uploads/90f6b6c5-316c-4b86-b836-d9dc027672c3.png"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success Stories &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Real students, real transformations, real career outcomes
            </p>
            
            {/* Updated Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">152.5K</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">82%</div>
                <div className="text-gray-600">Students Leveling Up</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
                <div className="text-gray-600">Recruiters Trust CRI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-400 mb-2" />
                  <p className="text-gray-700 italic text-sm">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Detailed Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              In-depth case studies of student transformations
            </p>
          </div>

          <div className="space-y-8">
            {detailedStories.map((story, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {story.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <span className="text-sm text-gray-500">Student:</span>
                          <div className="font-semibold">{story.student}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">College:</span>
                          <div className="font-semibold">{story.college}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Improvement:</span>
                          <div className="font-semibold text-green-600">{story.improvement}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Outcome:</span>
                          <div className="font-semibold text-blue-600">{story.outcome}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {story.story}
                      </p>
                    </div>
                    <div className="text-center">
                      <img
                        src={story.image}
                        alt={story.student}
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Success Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Institutional Success
            </h2>
            <p className="text-xl text-gray-600">
              See how PLAT is transforming colleges and universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  18% Placement Rate Increase
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Colleges using PLAT have seen an average placement rate
                  increase of 18% within one academic year.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Improved NAAC Scores
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Institutions leveraging PLAT for outcome-based education have
                  reported significant improvements in NAAC scores.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enhanced Recruiter Engagement
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  PLAT-certified students attract more attention from top
                  recruiters, leading to increased internship and job
                  opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Unlock Your Students' Potential
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join the growing number of institutions using PLAT to drive student
            success and improve career outcomes
          </p>
          <Link to="/contact#send-message">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
              Take One Test
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
