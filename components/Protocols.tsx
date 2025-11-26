import React from 'react';
import { PROTOCOL_DATA } from '../constants';

const Protocols: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      
      {/* Header - Technical Specs */}
      <div className="mb-32 animate-fade-in border-b border-stone/20 pb-12">
        <div className="flex items-center gap-4 mb-4">
            <span className="text-bronze font-mono text-[10px] uppercase tracking-[0.3em] font-bold">System Architecture</span>
            <div className="h-px flex-1 bg-stone/30"></div>
            <span className="text-stone font-mono text-[10px] uppercase tracking-[0.3em]">v1.0 // Classified</span>
        </div>
        <h1 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-6 leading-[0.85]">
          The Ecosystem
        </h1>
        <p className="font-mono text-stone text-xs max-w-xl leading-relaxed uppercase tracking-wide border-l border-bronze pl-6 pt-1">
          Instrument of built-from-scratch warfare. <br/>
          Multi-agent operational framework.
        </p>
      </div>

      <div className="space-y-40">
        {PROTOCOL_DATA.map((section, index) => (
          <div key={section.id} className="relative group">
            
            {/* Tactical Sidebar Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-stone/20 group-hover:bg-bronze transition-colors duration-300"></div>
            
            <div className="pl-8 md:pl-16 relative">
              {/* Meta Data Header */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-4xl text-stone/40 font-bold tracking-tighter group-hover:text-bronze transition-colors duration-300">
                  {section.id}
                </span>
                <h3 className="font-mono text-bronze text-[10px] tracking-[0.3em] uppercase">
                   // {section.subtitle}
                </h3>
              </div>

              {/* Main Title */}
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-10 uppercase tracking-tighter leading-[0.9] max-w-4xl">
                {section.title}
              </h2>

              {/* Content Block */}
              <div className="space-y-6 mb-12 max-w-3xl">
                {section.content.map((para, i) => (
                  <p key={i} className="text-mist font-sans font-light leading-relaxed text-base md:text-lg border-l-2 border-transparent hover:border-stone pl-0 hover:pl-6 transition-all duration-300 ease-out">
                    {para}
                  </p>
                ))}
              </div>

              {/* Roles Module - Rigid Grid */}
              {section.roles && (
                <div className="border border-stone/20 bg-void-light mt-12">
                   {/* Module Header */}
                   <div className="bg-stone/10 px-4 py-2 border-b border-stone/20">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-stone">Active Agents</span>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone/20">
                    {section.roles.map((role, rIdx) => (
                      <div key={rIdx} className="p-6 hover:bg-stone/5 transition-colors group/role">
                        <div className="text-white font-display text-xl mb-2 uppercase tracking-wide group-hover/role:text-bronze transition-colors">
                          {role.name}
                        </div>
                        <div className="text-stone text-[11px] font-mono leading-relaxed uppercase tracking-wider">
                          {role.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 border-t border-stone/30 pt-12 flex flex-col items-center text-center">
        <h4 className="text-white font-display text-2xl uppercase tracking-widest mb-2">
          Final Command
        </h4>
        <div className="w-12 h-1 bg-bronze mb-4"></div>
        <p className="text-stone text-[10px] font-mono uppercase tracking-[0.3em]">
          Turn chaos into clarity. Threats into testimony.
        </p>
      </div>

    </div>
  );
};

export default Protocols;