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
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src="/lovable-uploads/b0551156-51e1-4790-a52b-5b424414ebda.png" 
                alt="PLAT Logo" 
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2 xl:px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-sm px-3 xl:px-4 py-2"
                onClick={() => setShowReportModal(true)}
              >
                View Report
              </Button>
              <Link to="/contact#send-message">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 xl:px-6 text-sm py-2">
                  Book Demo
                </Button>
              </Link>
              {/* <Link to="/admin/contacts">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-4 xl:px-6 text-sm py-2">
                  Admin Console
                </Button>
              </Link> */}
            </div>

            {/* Mobile CTA + Menu */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 h-8 w-8"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <div className="px-2 py-4 space-y-1 max-h-96 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors touch-manipulation ${
                      isActive(item.path)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                  <Link to="/contact#send-message" className="w-full block" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 touch-manipulation">
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
