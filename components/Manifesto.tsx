import React from 'react';
import { MANIFESTO_POINTS } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Header Statement */}
      <div className="mb-20 animate-fade-in text-center md:text-left">
        <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-white mb-6">
          Authenticity <br/>
          <span className="text-bronze">Ain’t Optional.</span>
        </h1>
        <p className="font-sans text-mist text-lg md:text-xl max-w-2xl border-l-2 border-bronze pl-6 py-2 mx-auto md:mx-0">
          This is the manual for a movement forged in trauma. Built on resonance. Fueled by resistance.
        </p>
      </div>

      {/* The Doctrine Grid - Now 6 Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MANIFESTO_POINTS.map((point, idx) => (
          <div 
            key={idx} 
            className="group relative bg-void-light border border-stone p-8 hover:border-bronze transition-colors duration-500 flex flex-col justify-between min-h-[240px]"
          >
            <div>
                <div className="flex justify-between items-start mb-6">
                    <div className="font-display text-4xl text-stone group-hover:text-bronze/20 transition-colors">
                    0{idx + 1}
                    </div>
                    <div className="w-2 h-2 bg-stone group-hover:bg-bronze transition-colors" />
                </div>
                
                <h3 className="font-display text-2xl text-white mb-4 tracking-wider">
                {point.title}
                </h3>
                <p className="font-sans text-mist leading-relaxed text-sm">
                {point.description}
                </p>
            </div>
            <div className="w-full h-[1px] bg-stone mt-6 group-hover:bg-bronze transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="mt-24 text-center border-t border-stone pt-12">
        <blockquote className="font-display text-2xl md:text-3xl uppercase tracking-widest text-stone hover:text-white transition-colors duration-700 cursor-default">
          "Grace forgives weakness, but grace don’t trust masks."
        </blockquote>
      </div>

    </div>
  );
};

export default Manifesto;