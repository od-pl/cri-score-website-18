import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from "lucide-react";
const Footer = () => {
  return <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/lovable-uploads/b0551156-51e1-4790-a52b-5b424414ebda.png" alt="PLAT Logo" className="h-8 w-auto brightness-0 invert" />
            <p className="text-slate-300 text-sm">
              AI-powered analytics to uncover hidden skill gaps and boost placement rates for colleges and students.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Globe className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/why-plat" className="text-slate-300 hover:text-white transition-colors">Why PLAT</Link></li>
              <li><Link to="/how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/cri-scorecard" className="text-slate-300 hover:text-white transition-colors">CRI Scorecard</Link></li>
              <li><Link to="/cif-framework" className="text-slate-300 hover:text-white transition-colors">CIF Framework</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/testimonials" className="text-slate-300 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Offee</Link></li>
              <li><Link to="/legal" className="text-slate-300 hover:text-white transition-colors">Privacy & Terms</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-slate-300">hello@offee.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-slate-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-slate-300">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2025 Offee Technologies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;