
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSupport = () => {
  const contactMethods = [
    {
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      icon: Mail,
      contact: "support@platskills.com",
      color: "bg-blue-50"
    },
    {
      title: "Live Chat",
      description: "Instant assistance for quick queries",
      icon: MessageCircle,
      contact: "Available 24/7",
      color: "bg-purple-50"
    }
  ];

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600">
              Our support team is here to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 justify-items-center">
            {contactMethods.map((method, index) => {
              const MethodIcon = method.icon;
              return (
                <Card key={index} className={`${method.color} border-2 hover:shadow-lg transition-all duration-300 max-w-md w-full`}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                      <MethodIcon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                    <p className="font-semibold text-gray-900">{method.contact}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto font-semibold">
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Student Outcomes?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join leading institutions already using PLAT to improve placement rates and student success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#send-message">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
                Take One Test
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSupport;
