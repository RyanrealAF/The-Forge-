import React from 'react';
import { PROTOCOL_DATA } from '../constants';

const Protocols: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-20 animate-fade-in border-b border-bronze/30 pb-10">
        <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-stone"></div>
            <span className="text-bronze font-mono text-xs uppercase tracking-[0.3em]">System Architecture</span>
            <div className="h-px flex-1 bg-stone"></div>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-6 text-center">
          The Ecosystem
        </h1>
        <p className="font-sans text-mist text-center max-w-3xl mx-auto leading-relaxed">
          Not a toolset, but a <span className="text-white">sophisticated, multi-agent operational framework</span>. 
          Engineered as an instrument of built-from-scratch warfare. 
          The grind became scripture. The setbacks were sparks.
        </p>
      </div>

      <div className="space-y-24">
        {PROTOCOL_DATA.map((section, index) => (
          <div key={section.id} className="relative group">
            <div className="absolute -left-4 md:-left-12 top-0 text-stone/20 font-display text-8xl md:text-9xl font-bold -z-10 select-none">
              {section.id}
            </div>
            
            <div className="pl-4 md:pl-12 border-l border-stone group-hover:border-bronze transition-colors duration-500">
              <h3 className="font-mono text-bronze text-sm tracking-widest mb-2 uppercase">
                {section.subtitle}
              </h3>
              <h2 className="font-display text-3xl md:text-5xl text-white mb-8 uppercase tracking-wide">
                {section.title}
              </h2>

              <div className="space-y-4 mb-8">
                {section.content.map((para, i) => (
                  <p key={i} className="text-mist font-light leading-relaxed max-w-3xl">
                    {para}
                  </p>
                ))}
              </div>

              {section.roles && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {section.roles.map((role, rIdx) => (
                    <div key={rIdx} className="bg-void-light border border-stone p-6 hover:border-bronze/50 transition-all">
                      <div className="text-bronze font-display text-lg mb-2 uppercase tracking-wider">
                        {role.name}
                      </div>
                      <div className="text-stone text-xs font-mono leading-relaxed">
                        {role.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-8 border border-stone bg-void-light text-center">
        <h4 className="text-white font-display text-2xl uppercase tracking-widest mb-4">
          The Final Command
        </h4>
        <p className="text-mist text-sm font-mono max-w-2xl mx-auto">
          "The ultimate purpose is to turn chaos into clarity, threats into testimony, and struggle into scripture."
        </p>
      </div>

    </div>
  );
};

export default Protocols;