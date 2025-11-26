import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { createBrandChat, sendMessageToOracle } from '../services/geminiService';
import { ChatMessage } from '../types';

const OracleChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const session = createBrandChat();
      setChatSession(session);
      setMessages([
        {
          id: 'init',
          role: 'model',
          text: "Enter the lore. Speak truth or stay silent. What's on your mind?",
          timestamp: new Date()
        }
      ]);
    } catch (e) {
      console.error("Failed to init chat", e);
      setMessages([{
        id: 'error',
        role: 'model',
        text: "SYSTEM FAILURE: API KEY MISSING OR INVALID. SECURE CONNECTION FAILED.",
        timestamp: new Date()
      }]);
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToOracle(chatSession, userMsg.text);
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "TRANSMISSION ERROR: The Oracle is unresponsive. Check console for details.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-screen pt-24 pb-6 px-4 md:px-0 max-w-4xl mx-auto flex flex-col">
      {/* Header - Terminal Style */}
      <div className="flex-none mb-8 border-b border-stone pb-2 flex justify-between items-end">
        <div>
            <h2 className="font-display text-4xl text-white tracking-tighter uppercase">
            The Oracle
            </h2>
            <div className="flex gap-2 mt-1">
                <span className="w-2 h-2 bg-green-900 animate-pulse"></span>
                <p className="text-[10px] font-mono text-bronze uppercase tracking-[0.2em]">
                System Online
                </p>
            </div>
        </div>
        <div className="text-right hidden md:block">
            <p className="text-[10px] font-mono text-stone uppercase tracking-widest">
                Secure Channel // Encrypted
            </p>
        </div>
      </div>

      {/* Chat Stream */}
      <div className="flex-grow overflow-y-auto space-y-6 pr-4 custom-scrollbar">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`
                max-w-[90%] md:max-w-[80%] p-6 border relative
                ${msg.role === 'user' 
                  ? 'bg-stone/10 border-stone text-mist' 
                  : 'bg-void border-bronze/40 text-bronze'
                }
              `}
            >
              {/* Tactical Corner */}
              <div className={`absolute top-0 w-2 h-2 border-t border-l ${msg.role === 'user' ? 'left-0 border-stone' : 'left-0 border-bronze'}`}></div>
              <div className={`absolute bottom-0 w-2 h-2 border-b border-r ${msg.role === 'user' ? 'right-0 border-stone' : 'right-0 border-bronze'}`}></div>

              <div className="flex justify-between items-center mb-4 border-b border-dashed border-white/5 pb-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-stone">
                    {msg.role === 'user' ? 'OPERATOR' : 'ORACLE_AI'}
                </span>
                <span className="text-[9px] font-mono text-stone/50">
                    {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}
                </span>
              </div>
              
              <p className="font-sans text-sm md:text-base whitespace-pre-wrap leading-relaxed">
                {msg.text}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-void border border-stone/50 px-4 py-2 text-bronze font-mono text-[10px] uppercase tracking-widest animate-pulse">
               > Processing_Truth...
             </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Area - Command Line */}
      <div className="flex-none mt-8">
        <div className="relative flex items-stretch border border-stone bg-void focus-within:border-bronze transition-colors duration-0">
          <div className="flex items-center pl-4 pr-2 bg-stone/10 border-r border-stone/30">
             <span className="text-bronze font-mono text-sm">></span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="INPUT DIRECTIVE..."
            className="w-full bg-transparent text-white font-mono text-sm p-4 focus:outline-none resize-none h-16 custom-scrollbar placeholder-stone/50"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-8 bg-stone/20 hover:bg-bronze hover:text-black text-bronze font-mono uppercase tracking-[0.2em] text-xs transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-bronze border-l border-stone/30"
          >
            EXEC
          </button>
        </div>
      </div>
    </div>
  );
};

export default OracleChat;