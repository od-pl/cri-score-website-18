
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, BookOpen, Download, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const SupportResources = () => {
  const supportResources = [
    {
      title: "Awards & Recognition",
      description: "View our prestigious awards, government recognitions, and achievements in transforming education",
      icon: ImageIcon,
      buttonText: "View Awards",
      color: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:from-amber-100 hover:to-orange-100",
      link: "/gallery"
    },
    {
      title: "Video Tutorials",
      description: "Comprehensive video library covering platform usage, interpretation of results, and student engagement strategies",
      icon: Play,
      buttonText: "Watch Videos",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      title: "Blog",
      description: "Latest insights, best practices, and thought leadership articles",
      icon: BookOpen,
      buttonText: "Read Blog",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      link: "/blog"
    },
    {
      title: "Sample Reports",
      description: "Download sample CRI reports and dashboard previews",
      icon: Download,
      buttonText: "Get Samples",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Additional Resources
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive support materials to help you succeed with PLAT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportResources.map((resource, index) => {
            const ResourceIcon = resource.icon;
            const CardWrapper = (
              <Card className={`${resource.color} border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col cursor-pointer`}>
                <CardContent className="p-8 text-center flex flex-col h-full justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                      <ResourceIcon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
                  </div>
                  <Button className="w-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 mt-6">
                    {resource.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );

            return resource.link ? (
              <Link key={index} to={resource.link} target="_blank" rel="noopener noreferrer">
                {CardWrapper}
              </Link>
            ) : (
              <div key={index}>
                {CardWrapper}
              </div>
            );
          })}
        </div>

        {/* Awards Gallery Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our Achievements & Recognition
            </h3>
            <p className="text-lg text-gray-600">
              Celebrating our journey of transforming education and student outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="/lovable-uploads/af6f122f-6e6f-4b3e-9e99-6b8afb67d750.png" 
                alt="Maharashtra Startup Week Winner Award"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Maharashtra Startup Week</h4>
                <p className="text-sm text-gray-600">Winner Award Recognition</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="/lovable-uploads/53b8a51b-8e41-43f3-a26d-46eada189225.png" 
                alt="GITEX Global Award - North Star Mumbai Roadshow"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">GITEX Global Award</h4>
                <p className="text-sm text-gray-600">North Star Mumbai Roadshow Winner</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="/lovable-uploads/6babc33a-b3bf-41ce-bd54-01a2addfc96e.png" 
                alt="AEGIS Graham Bell Awards"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">AEGIS Graham Bell Awards</h4>
                <p className="text-sm text-gray-600">Excellence in Innovation</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="/lovable-uploads/1b717109-c16f-4c74-87bd-c7eebe8a59f6.png" 
                alt="Industry Recognition and Collaboration"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Industry Collaboration</h4>
                <p className="text-sm text-gray-600">Government & Industry Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportResources;
