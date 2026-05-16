import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<{ role: "user" | "model", parts: { text: string }[] }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    setMessage("");
    setIsLoading(true);

    const newHistory = [...history, { role: "user", parts: [{ text: userMessage }] }];
    setHistory(newHistory as any);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history }),
      });

      const data = await response.json();
      if (data.text) {
        setHistory(prev => [...prev, { role: "model", parts: [{ text: data.text }] }] as any);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setHistory(prev => [...prev, { role: "model", parts: [{ text: "I'm sorry, I encountered an error. Please try again later." }] }] as any);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group"
      >
        <MessageSquare className="w-8 h-8 group-hover:hidden" />
        <Bot className="w-8 h-8 hidden group-hover:block" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white animate-pulse" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-140px)] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-xl">
                  <Bot className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Vision Assistant</h3>
                  <p className="text-xs text-slate-300">Available 24/7 for your questions</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                title="Close Assistant"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4">
              {history.length === 0 && (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Welcome to Global Vision!</h4>
                  <p className="text-sm text-slate-500 max-w-[200px] mx-auto leading-relaxed">
                    How can I help you today? Ask me about admissions, fees, or our programs.
                  </p>
                </div>
              )}
              {history.map((msg, idx) => (
                <div key={idx} className={cn(
                  "flex gap-3",
                  msg.role === "user" ? "flex-row-reverse" : ""
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    msg.role === "user" ? "bg-secondary text-primary" : "bg-primary text-secondary"
                  )}>
                    {msg.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm max-w-[80%]",
                    msg.role === "user" ? "bg-slate-100 text-slate-900 rounded-tr-none" : "bg-primary/5 text-slate-800 rounded-tl-none border border-primary/5"
                  )}>
                    <div className="markdown-body">
                      <ReactMarkdown>
                        {msg.parts[0].text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center">
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </div>
                  <div className="bg-primary/5 p-4 rounded-2xl rounded-tl-none border border-primary/5">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-slate-100">
              <div className="relative">
                <input 
                  autoFocus
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your question..."
                  className="w-full bg-slate-100 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={!message.trim() || isLoading}
                  className="absolute right-2 top-2 p-3 bg-primary text-white rounded-full hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shadow-md"
                  title="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-4 font-medium uppercase tracking-widest">
                AI Powered by Google Gemini
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
