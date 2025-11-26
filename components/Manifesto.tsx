import React from 'react';
import { MANIFESTO_POINTS } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Header Statement - Monolithic & Tight */}
      <div className="mb-24 animate-fade-in text-center md:text-left border-l-2 border-bronze pl-6 md:pl-8">
        <h1 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85] text-white mb-8">
          Authenticity <br/>
          <span className="text-bronze">Ain’t Optional.</span>
        </h1>
        <p className="font-mono text-stone text-xs md:text-sm uppercase tracking-[0.2em] max-w-xl">
          Manual for a movement forged in trauma. Built on resonance. Fueled by resistance.
        </p>
      </div>

      {/* The Doctrine Grid - Tactical & Sharp */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/20 border border-stone/20">
        {MANIFESTO_POINTS.map((point, idx) => (
          <div 
            key={idx} 
            className="group relative bg-void border border-transparent hover:border-bronze/50 transition-colors duration-0 p-8 flex flex-col justify-between min-h-[280px]"
          >
            <div>
                {/* Tactical Index */}
                <div className="flex justify-between items-start mb-8">
                    <div className="font-mono text-xs text-stone group-hover:text-bronze transition-colors">
                    0{idx + 1} // DOCTRINE
                    </div>
                    {/* Status Light */}
                    <div className="w-1 h-1 bg-stone group-hover:bg-bronze transition-colors" />
                </div>
                
                <h3 className="font-display text-3xl text-white mb-4 tracking-tight uppercase">
                {point.title}
                </h3>
                <p className="font-sans text-mist leading-relaxed text-sm group-hover:text-gray-400 transition-colors">
                {point.description}
                </p>
            </div>
            
            {/* Hover Indicator */}
            <div className="w-0 h-[2px] bg-bronze mt-6 group-hover:w-12 transition-all duration-300 ease-out" />
          </div>
        ))}
      </div>

      {/* Quote Section - The Footer Signal */}
      <div className="mt-32 border-t border-stone/30 pt-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <blockquote className="font-display text-2xl md:text-4xl uppercase tracking-tighter text-stone hover:text-white transition-colors duration-300 cursor-default max-w-2xl leading-none">
          "Grace forgives weakness, but grace don’t trust masks."
        </blockquote>
        <div className="font-mono text-[10px] text-stone uppercase tracking-widest text-right">
          Binary Law // Zero Tolerance<br/>
          Est. 2024
        </div>
      </div>

    </div>
  );
};

export default Manifesto;