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

  // Updated PLAT knowledge base with concise information
  const knowledgeBase = `
  PLAT: Career Readiness Platform for Colleges
  
  Key Features:
  - AI-powered skill assessment across 5 dimensions
  - CRI Score (0-900) - Career Readiness Index
  - 152.5K+ students assessed, 84.2% placement success
  - Helps colleges improve NAAC outcomes
  
  Benefits:
  - Identifies skill gaps and provides targeted improvement
  - Trusted by 300+ recruiters
  - Improves placement rates significantly
  - Supports outcome-based education requirements
  
  Quick Actions:
  - Type 'demo' to schedule a demo
  - Type 'report' to view sample CRI report
  `;

  const initializeChat = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: `👋 Hi! I'm Nisha, your PLAT assistant.<br><br>🎯 PLAT helps colleges boost placement rates with AI-powered skill assessment.<br><br>✨ Key highlights:<br>• 152.5K+ students assessed<br>• 84.2% placement success<br>• CRI Score trusted by 300+ recruiters<br><br>How can I help? Try 'demo' or 'report'!`,
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

    // Quick responses for common queries
    const demoKeywords = ['demo', 'book demo', 'schedule demo', 'show demo'];
    const reportKeywords = ['report', 'view report', 'sample report', 'cri report'];
    const isDemo = demoKeywords.some(k => currentInput.toLowerCase().includes(k));
    const isReport = reportKeywords.some(k => currentInput.toLowerCase().includes(k));

    if (isDemo) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: `Great! Let's schedule your demo. 📅<br><br><a href="/contact#send-message" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">Click here to book your demo →</a>`,
        type: 'bot',
        timestamp: new Date()
      }]);
      return;
    }

    if (isReport) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: `Here's a sample PLAT CRI report: <button class="text-blue-600 underline bg-transparent border-none cursor-pointer font-semibold" onclick="window.openReportModal()">View Sample Report →</button>`,
        type: 'bot',
        timestamp: new Date()
      }]);
      
      (window as any).openReportModal = () => {
        setIsPlatReportModalOpen(true);
      };
      
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ 
            parts: [{ 
              text: `You are Nisha, PLAT's helpful assistant. Keep responses concise (max 2-3 sentences). Use this info: ${knowledgeBase}. User asks: ${currentInput}` 
            }]
          }]
        })
      });
      
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      let botResponse = data.candidates[0].content.parts[0].text;

      // Keep responses concise and add helpful prompts
      if (botResponse.length > 150) {
        botResponse = botResponse.substring(0, 150) + "...";
      }

      botResponse += `<br><br>💡 Quick actions: Type 'demo' or 'report'`;

      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        text: botResponse, 
        type: 'bot', 
        timestamp: new Date() 
      }]);
    } catch (err) {
      setError("Sorry, I'm having trouble connecting. Please try again!");
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
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-lg flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">🌟 Nisha</h3>
              <p className="text-sm opacity-90">Your PLAT Assistant</p>
            </div>
            <div className="flex gap-2">
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
              <Input value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder="Ask about PLAT... Try 'demo' or 'report'" onKeyPress={e=>e.key==='Enter'&&sendMessage()} className="flex-1 text-sm" />
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
