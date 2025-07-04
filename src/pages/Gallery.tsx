import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "4-Step Process",
      description: "Shows the complete PLAT journey with proper arrows",
      image: "/lovable-uploads/014e5f5b-9267-4dcc-bb0e-c34cf18bbbcc.png",
      category: "process",
      type: "infographic"
    },
    {
      id: 2,
      title: "Assessment to Upskilling Lifecycle", 
      description: "Displays the comprehensive process flow",
      image: "/lovable-uploads/b1029307-8f34-4d6d-a5df-595fadcee834.png",
      category: "process",
      type: "flowchart"
    },
    {
      id: 3,
      title: "CRI Score Display",
      description: "Shows the scoring visualization (842/900 format)",
      image: "/lovable-uploads/f4aeef9b-daa9-4828-9d93-7eca027f44dc.png",
      category: "scoring",
      type: "dashboard"
    },
    {
      id: 4,
      title: "Support Services",
      description: "Contact options (without phone support, email updated to support@platskills.com)",
      image: "/lovable-uploads/705f4bc1-c8c8-4d97-8200-2a45cf8548c5.png",
      category: "support",
      type: "service"
    },
    {
      id: 5,
      title: "Traditional Assessment Analysis",
      description: "Insights about assessment challenges (title updated to remove \"Why\")",
      image: "/lovable-uploads/42c91544-eef3-418b-9674-ba5cc8c4410a.png",
      category: "insights",
      type: "analysis"
    }
  ];

  const categories = [
    { id: "all", name: "All", count: galleryItems.length },
    { id: "process", name: "Process", count: galleryItems.filter(item => item.category === "process").length },
    { id: "scoring", name: "Scoring", count: galleryItems.filter(item => item.category === "scoring").length },
    { id: "support", name: "Support", count: galleryItems.filter(item => item.category === "support").length },
    { id: "insights", name: "Insights", count: galleryItems.filter(item => item.category === "insights").length }
  ];

  const filteredItems = currentCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                PLAT Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visual showcase of PLAT's comprehensive assessment platform, processes, and achievements
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={currentCategory === category.id ? "default" : "outline"}
                onClick={() => setCurrentCategory(category.id)}
                className="px-6 py-2"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => openModal(index)}
                        className="bg-white/90 hover:bg-white"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="bg-white/90 hover:bg-white"
                      >
                        <a href={item.image} download>
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full-Size Image View */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
            >
              <X className="w-6 h-6" />
            </Button>
            
            {filteredItems.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}

            <img
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="text-gray-600">
                {filteredItems[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to See PLAT in Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Experience the power of AI-driven career readiness assessment
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
    </div>
  );
};

export default Gallery;
