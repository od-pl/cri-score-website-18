
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ReportViewModal from "@/components/ReportViewModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/why-plat", label: "Why PLAT" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/cri-scorecard", label: "CRI Score" },
    { path: "/testimonials", label: "Success Stories" },
    { path: "/faq", label: "FAQ" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src="/lovable-uploads/b0551156-51e1-4790-a52b-5b424414ebda.png" 
                alt="PLAT Logo" 
                className="h-8 lg:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-sm px-4"
                onClick={() => setShowReportModal(true)}
              >
                View Report
              </Button>
              <Link to="/contact#send-message">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 lg:px-6 text-sm">
                  Book Demo
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <div className="px-4 py-6 space-y-1 max-h-96 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 font-medium"
                    onClick={() => {
                      setShowReportModal(true);
                      setIsOpen(false);
                    }}
                  >
                    View Report
                  </Button>
                  <Link to="/contact#send-message" className="w-full" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                      Book Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <ReportViewModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
      />
    </>
  );
};

export default Navigation;
