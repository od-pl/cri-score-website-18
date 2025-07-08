
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhyPlat from "./pages/WhyPlat";
import HowItWorks from "./pages/HowItWorks";
import CriScorecard from "./pages/CriScorecard";
import CifFramework from "./pages/CifFramework";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import ScrollToTop from "./components/ScrollToTop";
import ChatbotWidget from "./components/ChatbotWidget";
import AdminContacts from "./pages/AdminContacts";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50">
          <Navigation />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/why-plat" element={<WhyPlat />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/cri-scorecard" element={<CriScorecard />} />
              <Route path="/cif-framework" element={<CifFramework />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/admin/contacts" element={<AdminContacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <FloatingCTA />
          <ChatbotWidget />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
