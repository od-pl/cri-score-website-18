
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Career Readiness Assessment in Higher Education",
      excerpt: "Discover how AI-powered assessment platforms are revolutionizing the way institutions measure and improve student career readiness.",
      author: "PLAT Team",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Industry Insights"
    },
    {
      title: "Understanding CRI: Beyond Traditional Academic Metrics",
      excerpt: "Learn how Career Readiness Index provides a comprehensive view of student capabilities that employers actually value.",
      author: "Dr. Sarah Johnson",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Assessment Science"
    },
    {
      title: "NAAC Compliance Made Simple: Using Data-Driven Student Outcomes",
      excerpt: "A comprehensive guide on how PLAT helps institutions achieve better NAAC ratings through measurable student outcome data.",
      author: "PLAT Research Team",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Compliance"
    },
    {
      title: "From Assessment to Employment: Success Stories from Leading Institutions",
      excerpt: "Real case studies showing how institutions have improved placement rates by 18% using PLAT's comprehensive assessment platform.",
      author: "Marketing Team",
      date: "November 28, 2024",
      readTime: "8 min read",
      category: "Case Studies"
    },
    {
      title: "The Psychology Behind Skill Assessment: Why Traditional Tests Fall Short",
      excerpt: "Explore the scientific foundation of modern skill assessment and why holistic evaluation matters more than ever.",
      author: "Dr. Michael Chen",
      date: "November 20, 2024",
      readTime: "9 min read",
      category: "Research"
    },
    {
      title: "Building Industry-Ready Graduates: A 2025 Roadmap for Institutions",
      excerpt: "Strategic insights and actionable steps for educational institutions to prepare students for the evolving job market.",
      author: "Strategy Team",
      date: "November 15, 2024",
      readTime: "10 min read",
      category: "Strategy"
    }
  ];

  const categories = ["All", "Industry Insights", "Assessment Science", "Compliance", "Case Studies", "Research", "Strategy"];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link to="/faq" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to FAQ
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              PLAT{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Insights, research, and best practices for transforming student outcomes and career readiness
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full px-6 py-2 ${
                  index === 0 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium">{post.readTime}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated with PLAT Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get the latest research, case studies, and best practices delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
