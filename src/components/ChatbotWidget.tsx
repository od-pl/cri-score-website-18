
import { useState } from "react";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ReportViewModal from "./ReportViewModal";
import PlatReportModal from "./PlatReportModal";

interface Message {
  id: string;
  text: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");
  const [isPlatReportModalOpen, setIsPlatReportModalOpen] = useState(false);
  const [isReportViewModalOpen, setIsReportViewModalOpen] = useState(false);

  const GEMINI_API_KEY = 'AIzaSyDi86gmWYmteG9pdnRxedfbqjcBLtICC8g';
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  // Comprehensive PLAT knowledge base
  const knowledgeBase = `
  You are PLAT-Bot, an intelligent AI assistant for PLAT (Progressive Learning Ability Test). You are helpful, decisive, and use Grade-8 English. Your core belief: "Students are more than their marksheets."

  CORE PRODUCT INFO:
  • PLAT is the "CIBIL Score for Careers" - Career Readiness Index (CRI) on 0-900 scale
  • 1,52,483 students assessed across 50+ partner colleges (JBIMS, SNDT, Somaiya, Xavier's)
  • 350+ recruiters accept CRI scores for campus hiring
  • Average 18% placement uplift within one academic cycle
  • NAAC grade impact: B+ → A (+2.3 grade points typical)
  • 75-minute adaptive assessment per semester
  • Skills measured: Cognitive, Practical, Adaptive, Socio-Emotional, Entrepreneurship
  • NEP 2020, NAAC Criterion 2 & 3, UGC 2024 compliant
  • Free pilot for first cohort

  CRI SCORING:
  • CRI 0-900 = Academic GPA (normalized) + PLAT Skill Score + Verified Upskill Effort
  • Bands: <450 Needs Development | 450-650 Developing | 650-800 Proficient | 800-900 Excellent

  ASSESSMENT CYCLE:
  1. Test: 75-min AI-adaptive assessment (secure offline IoT or online)
  2. Micro-Tasks: 10-min daily challenges via LMS
  3. Progress Check: Next semester CRI update with real-time dashboards

  STAKEHOLDER BENEFITS:
  • Vice-Chancellors: Boost NAAC outcomes by 18%, automated evidence for auditors
  • Deans/HoDs: Course-level gap reports, data-driven syllabus improvements
  • T&P Officers: CRI-based student ranking, 37-day faster hiring cycles
  • Students: Early strength identification, LinkedIn-ready CRI scores
  • Recruiters: Filter 1000→50 pre-qualified candidates instantly

  SECURITY & COMPLIANCE:
  • ISO/IEC 27001:2022, GDPR-ready, Cert-In WASA audited
  • Data never leaves India, encrypted at rest and in transit
  • Air-gapped mesh for offline mode, AES-256 encryption

  PRICING & PILOT:
  • First cohort pilot completely free
  • Post-pilot: <₹300 per student per semester
  • ROI: Average ₹1.7L CTC increase = 28× return on investment

  COMMON OBJECTIONS HANDLED:
  • "No time for more tests" → 75-min runs alongside existing exams
  • "NAAC impact?" → +2.3 grade points, auto-generates Criteria 2&3 evidence
  • "Data privacy?" → ISO certified, India-only storage, GDPR compliant
  • "Student pushback?" → 90% positive feedback, directly improves placement odds
  • "vs AMCAT/competitors?" → Longitudinal CRI vs one-off snapshots, NEP/NAAC aligned

  KEY CTAS:
  • Book 15-min NAAC Boost Call
  • Secure Free Pilot Cohort  
  • Download Sample CRI PDF
  • View Live Dashboard Demo

  Always prioritize understanding user needs, provide specific data points, and guide toward appropriate CTAs. Be conversational but authoritative.
  `;

  const detectUserIntent = (input: string) => {
    const lower = input.toLowerCase();
    
    // High-intent phrases
    if (/\b(interested|sounds good|like to know|want to|need|help|start|begin)\b/.test(lower)) {
      return 'high-intent';
    }
    
    // Demo requests
    if (/\b(demo|demonstration|show|preview|see how)\b/.test(lower)) {
      return 'demo';
    }
    
    // Report requests  
    if (/\b(report|sample|example|pdf|download)\b/.test(lower)) {
      return 'report';
    }
    
    // NAAC/Accreditation
    if (/\b(naac|accreditation|nirf|outcome|grade|audit)\b/.test(lower)) {
      return 'naac';
    }
    
    // Pricing
    if (/\b(cost|price|pricing|fee|expensive|cheap|budget)\b/.test(lower)) {
      return 'pricing';
    }
    
    // Technical/Security
    if (/\b(security|data|privacy|technical|integration|system)\b/.test(lower)) {
      return 'technical';
    }
    
    return 'general';
  };

  const generateContextualResponse = (intent: string, input: string) => {
    const responses = {
      'high-intent': `Great to hear your interest! 🎯 PLAT has helped 50+ colleges achieve an average 18% placement increase. Our free pilot lets you see real results with your first cohort.<br><br>Would you like to <strong>book a 15-min demo call</strong> or <strong>download our sample CRI report</strong>?`,
      
      'demo': `Perfect! I'd love to show you PLAT in action. 📊<br><br>Our live demo covers:<br>• Real CRI dashboard with student analytics<br>• NAAC compliance documentation<br>• Placement outcome improvements<br><br><a href="/contact#send-message" target="_blank" class="text-blue-600 underline">Book your 15-minute demo here</a>`,
      
      'report': `Here's your sample CRI report! 📋 <button class="text-blue-600 underline bg-transparent border-none cursor-pointer" onclick="window.openReportModal()">View Sample Report</button><br><br>This shows how we convert student assessments into actionable CRI scores (0-900 scale) that recruiters trust and NAAC auditors love.`,
      
      'naac': `Excellent question! 🏆 PLAT directly supports NAAC Criterion 2 & 3:<br>• Auto-generates student outcome evidence<br>• Tracks skill development longitudinally<br>• Typical grade improvement: B+ → A (+2.3 points)<br><br>50+ colleges report significantly easier NAAC audits. <strong>Free pilot</strong> available!`,
      
      'pricing': `Smart question! 💰 Here's the full picture:<br>• First cohort pilot: Completely FREE<br>• Post-pilot: <₹300 per student per semester<br>• Average CTC increase: ₹1.7L (28× ROI)<br>• Many colleges absorb cost in T&P budget<br><br>Want to start with the free pilot?`,
      
      'technical': `Security is our top priority! 🔒<br>• ISO/IEC 27001:2022 certified<br>• Data never leaves India<br>• GDPR compliant, Cert-In WASA audited<br>• Offline IoT option (air-gapped, AES-256)<br>• API integration with most LMS platforms<br><br>Need detailed technical specs?`
    };
    
    return responses[intent as keyof typeof responses] || '';
  };

  const initializeChat = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: `👋 Hello! I'm <strong>PLAT-Bot</strong>, your intelligent assistant for career readiness solutions.<br><br>🎯 <strong>Quick Stats:</strong><br>• 1.52L+ students assessed<br>• 50+ partner colleges<br>• 18% avg placement increase<br>• CRI scores trusted by 350+ recruiters<br><br>How can I help you transform student outcomes today?<br><br>💡 Try: <strong>"Tell me about NAAC benefits"</strong> or <strong>"Show me a demo"</strong>`,
      type: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  const newChat = () => {
    setMessages([]);
    setError("");
    initializeChat();
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      type: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);
    setError("");

    // Detect user intent and provide contextual responses
    const intent = detectUserIntent(currentInput);
    const contextualResponse = generateContextualResponse(intent, currentInput);

    // Handle special keywords
    const demoKeywords = ['demo', 'book demo', 'schedule demo', 'show demo'];
    const reportKeywords = ['report', 'view report', 'sample report', 'download report'];
    const isDemo = demoKeywords.some(k => currentInput.toLowerCase().includes(k));
    const isReport = reportKeywords.some(k => currentInput.toLowerCase().includes(k));

    if (isDemo) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: `Perfect! Let's get your demo scheduled. 🚀<br><br>Our 15-minute demo covers:<br>• Live CRI dashboard walkthrough<br>• NAAC compliance benefits<br>• Real placement outcome data<br><br><a href="/contact#send-message" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">📅 Book Your Demo Here</a>`,
        type: 'bot',
        timestamp: new Date()
      }]);
      return;
    }

    if (isReport) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: `Here's your sample PLAT report! 📊<br><br><button class="text-blue-600 underline bg-transparent border-none cursor-pointer font-semibold" onclick="window.openReportModal()">📋 View Sample CRI Report</button><br><br>This shows how we convert 75-minute assessments into actionable CRI scores (0-900) that drive real placement improvements.`,
        type: 'bot',
        timestamp: new Date()
      }]);
      
      (window as any).openReportModal = () => {
        setIsPlatReportModalOpen(true);
      };
      return;
    }

    // If we have a contextual response, use it first
    if (contextualResponse) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: contextualResponse,
        type: 'bot',
        timestamp: new Date()
      }]);
      
      if (intent === 'report') {
        (window as any).openReportModal = () => {
          setIsPlatReportModalOpen(true);
        };
      }
      return;
    }

    // Fallback to AI if no contextual match
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ 
            parts: [{ 
              text: `${knowledgeBase}\n\nUser question: "${currentInput}"\n\nProvide a helpful, specific response as PLAT-Bot. Include relevant data points and guide toward appropriate next steps. Keep response conversational and under 150 words.` 
            }]
          }]
        })
      });
      
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      let botResponse = data.candidates[0].content.parts[0].text;

      // Enhance AI response with CTAs
      if (/\b(interested|help|more|learn|know)\b/i.test(botResponse)) {
        botResponse += `<br><br>🎯 <strong>Next Steps:</strong><br>• <a href="/contact#send-message" target="_blank" class="text-blue-600 underline">Book 15-min demo</a><br>• <button class="text-blue-600 underline bg-transparent border-none cursor-pointer" onclick="window.openReportModal()">View sample report</button>`;
        
        (window as any).openReportModal = () => {
          setIsPlatReportModalOpen(true);
        };
      }

      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        text: botResponse, 
        type: 'bot', 
        timestamp: new Date() 
      }]);
    } catch (err) {
      setError("I'm having trouble connecting right now. Let me help you directly - would you like to book a demo or view a sample report?");
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) initializeChat();
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={openChat}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg z-50 p-0"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      )}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col animate-slide-in-right">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-lg flex flex-row items-center justify-between pt-4">
            <div>
              <h3 className="text-lg font-semibold">🤖 PLAT-Bot</h3>
              <p className="text-sm opacity-90">Your Smart Career Readiness Assistant</p>
            </div>
            <div className="flex gap-2 ml-4">
              <Button variant="ghost" size="sm" onClick={newChat} className="text-white hover:bg-white/20 p-1 h-8 w-8">
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 p-1 h-8 w-8">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col overflow-hidden p-0">
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map(m => (
                <div key={m.id} className={`flex ${m.type==='user'?'justify-end':'justify-start'}`}>
                  <div className={`max-w-[280px] p-3 rounded-lg ${m.type==='user'?'bg-blue-500 text-white':'bg-gray-100 text-gray-900'}`}>
                    <div dangerouslySetInnerHTML={{ __html: m.text }} className="text-sm" />
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start"><div className="bg-gray-100 p-3 rounded-lg flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div></div>
              )}
            </div>
            {error && <div className="p-4 bg-red-50 text-red-600 text-sm">{error}</div>}
            <div className="p-4 border-t border-gray-200 flex">
              <Input value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder="Ask about NAAC benefits, pricing, demo..." onKeyPress={e=>e.key==='Enter'&&sendMessage()} className="flex-1 text-sm" />
              <Button onClick={sendMessage} disabled={!inputValue.trim()||isTyping} className="bg-blue-500 hover:bg-blue-600 ml-2">
                <Send className="w-4 h-4 text-white" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <PlatReportModal 
        isOpen={isPlatReportModalOpen} 
        onClose={() => setIsPlatReportModalOpen(false)}
        onViewReport={() => setIsReportViewModalOpen(true)}
      />
      
      <ReportViewModal 
        isOpen={isReportViewModalOpen} 
        onClose={() => setIsReportViewModalOpen(false)}
      />
    </>
  );
};

export default ChatbotWidget;
