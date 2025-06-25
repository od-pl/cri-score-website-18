import { useState } from "react";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

  // Updated PLAT marketing knowledge base
  const knowledgeBase = `
  Your Shortcut to Better 'NAAC Student Outcomes'\n
  AI-powered analytics to uncover hidden skill gaps and boost placement rates for your college.\n
  • 25k+ Students Tested\n  • 300+ Recruiters\n  • Career Readiness Index: 840/900\n
  Metrics:\n  ❌ 54% of employers don't trust marksheets (India Skills Report 2024)\n  😕 72% of students miss key workplace skills (AICTE-NEAT Report 2023)\n  ⏰ 37 days average hiring delay (LinkedIn India, 2023)\n
  How PLAT Transforms Students:\n  📝 Test – Comprehensive skill assessment\n  💪 Micro Tasks – Targeted skill building\n  📈 Skill Improvement – Measurable progress\n  🏆 CRI Score – Career Readiness Index\n
  Call-to-Actions:\n  • Book Demo\n  • View Report
  `;

  const initializeChat = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: `👋 Welcome! I'm Nisha, your PLAT AI assistant.<br><br>🔹 AI-powered analytics to uncover hidden skill gaps<br>🔹 25k+ Students Tested & 300+ Recruiters<br>🔹 CRI Score: 840/900<br><br>How can I help you today? <strong>Type 'demo' to book a demo</strong> or <strong>'report'</strong> to view a sample report!`,
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

    const demoKeywords = ['demo', 'book demo', 'schedule demo'];
    const reportKeywords = ['report', 'view report', 'sample report'];
    const isDemo = demoKeywords.some(k => currentInput.toLowerCase().includes(k));
    const isReport = reportKeywords.some(k => currentInput.toLowerCase().includes(k));

    if (isDemo) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: `Great! Let's book your demo now. 📅 <a href="/contact#send-message" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Click here to book a demo</a>`,
        type: 'bot',
        timestamp: new Date()
      }]);
      return;
    }

    if (isReport) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: `Here's a link to view a sample PLAT report: <a href="#" class="text-blue-600 underline">View Report</a>`,
        type: 'bot',
        timestamp: new Date()
      }]);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `You are Nisha, an AI assistant for PLAT. Use this marketing info: ${knowledgeBase}. User asks: ${currentInput}` }]}]
        })
      });
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      let botResponse = data.candidates[0].content.parts[0].text;

      if (/demo|report|how/i.test(botResponse)) {
        botResponse += `<br><br>💡 Type 'demo' to book a demo or 'report' to view a sample.`;
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), text: botResponse, type: 'bot', timestamp: new Date() }]);
    } catch (err) {
      setError("Sorry, something went wrong. Please try again.");
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
          className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg z-50 p-0"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      )}
      {isOpen && (
        <Card className="fixed bottom-6 left-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-lg flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">🌟 Nisha</h3>
              <p className="text-sm opacity-90">Your PLAT AI Assistant</p>
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
              <Input value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder="Ask about PLAT… 'demo' or 'report'" onKeyPress={e=>e.key==='Enter'&&sendMessage()} className="flex-1 text-sm" />
              <Button onClick={sendMessage} disabled={!inputValue.trim()||isTyping} className="bg-blue-500 hover:bg-blue-600 ml-2">
                <Send className="w-4 h-4 text-white" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatbotWidget;
