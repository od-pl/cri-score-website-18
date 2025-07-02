
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const certificates = [
    {
      title: "ISO/IEC 27001:2022 Information Security Management System",
      description: "Certified for comprehensive information security management and data protection standards",
      image: "/lovable-uploads/d8386571-da63-4b6a-91cc-9ca4464155ab.png",
      certNumber: "30502506057415",
      validUntil: "4th June 2028",
      authority: "QRO Certification LLP"
    },
    {
      title: "ISO 9001:2015 Quality Management Systems",
      description: "Certified for maintaining the highest quality standards in our educational technology solutions",
      image: "/lovable-uploads/3885b940-ff2d-446c-815d-83c02ff81a3b.png",
      certNumber: "E2025022547",
      validUntil: "13/02/2028",
      authority: "Royal Assessments Pvt. Ltd."
    }
  ];

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
              Certifications &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is validated by internationally recognized certifications and quality standards
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {certificates.map((cert, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100">
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Certificate Number:</span>
                      <span className="text-sm font-semibold text-gray-900">{cert.certNumber}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Valid Until:</span>
                      <span className="text-sm font-semibold text-gray-900">{cert.validUntil}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium text-gray-500">Certified By:</span>
                      <span className="text-sm font-semibold text-gray-900">{cert.authority}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={() => window.open(cert.image, '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    View Full Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-12 h-12 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Quality & Compliance</h2>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            PLAT maintains the highest standards of security, quality, and compliance to ensure your institution's data 
            and students' information are protected with enterprise-grade security measures.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Information Security</h3>
              <p className="text-gray-600 text-sm">ISO/IEC 27001:2022 certified for comprehensive data protection and security management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Management</h3>
              <p className="text-gray-600 text-sm">ISO 9001:2015 certified for consistent quality in our educational technology solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
