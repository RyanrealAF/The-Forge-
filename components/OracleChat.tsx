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
    // Initialize chat session on mount
    try {
      const session = createBrandChat();
      setChatSession(session);
      
      // Initial greeting from the persona
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
      console.error(error);
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
      <div className="flex-none mb-6 border-b border-stone pb-4">
        <h2 className="font-display text-3xl text-bronze tracking-tight uppercase">
          The Oracle
        </h2>
        <p className="text-xs font-mono text-stone mt-1">
          SECURE CHANNEL // ENCRYPTED // NO FILTER
        </p>
      </div>

      <div className="flex-grow overflow-y-auto space-y-6 pr-2 custom-scrollbar">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`
                max-w-[85%] p-6 relative border
                ${msg.role === 'user' 
                  ? 'bg-stone/20 border-stone text-mist' 
                  : 'bg-void-light border-bronze/30 text-bronze shadow-[0_0_15px_rgba(205,127,50,0.1)]'
                }
              `}
            >
              {msg.role === 'model' && (
                 <div className="absolute -top-3 -left-3 w-6 h-6 bg-void border border-bronze flex items-center justify-center">
                   <div className="w-2 h-2 bg-bronze rounded-full animate-pulse" />
                 </div>
              )}
              
              <p className="font-sans text-sm md:text-base whitespace-pre-wrap leading-relaxed">
                {msg.text}
              </p>
              <span className="text-[10px] uppercase tracking-widest opacity-40 mt-4 block font-display">
                {msg.role === 'user' ? 'YOU' : 'RYANREALAF'} // {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-void border border-stone p-4 text-bronze font-mono text-xs animate-pulse">
               GENERATING_TRUTH_SEQUENCE...
             </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="flex-none mt-6">
        <div className="relative flex items-end gap-2 border border-stone bg-void-light p-2 focus-within:border-bronze transition-colors">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your truth..."
            className="w-full bg-transparent text-white font-sans text-sm p-3 focus:outline-none resize-none h-14 custom-scrollbar placeholder-stone"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="h-14 px-6 bg-stone hover:bg-bronze text-white font-display uppercase tracking-widest text-sm transition-colors disabled:opacity-50 disabled:hover:bg-stone"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default OracleChat;