import React from 'react';
import { ARCHIVE_DATA } from '../constants';

const Archive: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="mb-16 border-l-4 border-bronze pl-6">
        <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tighter">
          Breadcrumb Web
        </h2>
        <h3 className="font-sans text-stone uppercase tracking-widest mt-2 text-sm">
          Content as Record // Decentralized Memory
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARCHIVE_DATA.map((item) => (
          <div 
            key={item.id}
            className="group bg-noise bg-void-light border border-stone hover:border-bronze transition-all duration-300 flex flex-col h-64 overflow-hidden relative cursor-crosshair"
          >
            {/* Metadata overlay */}
            <div className="absolute top-0 left-0 w-full flex justify-between p-4 z-10">
              <span className="font-mono text-[10px] text-bronze border border-bronze px-1">
                {item.id}
              </span>
              <span className="font-mono text-[10px] text-stone group-hover:text-mist transition-colors">
                {item.timestamp}
              </span>
            </div>

            {/* Content Content */}
            <div className="p-8 mt-4 flex flex-col justify-between h-full relative z-0">
               <div>
                  <span className="text-[10px] font-bold text-oak uppercase tracking-[0.2em] mb-2 block">
                    {item.category}
                  </span>
                  <h4 className="font-display text-xl text-white uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h4>
               </div>
               
               <p className="text-mist text-sm font-light mt-4 line-clamp-3 group-hover:text-white transition-colors duration-300">
                 {item.content}
               </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-stone group-hover:border-bronze transition-colors duration-300" />
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
         <button className="border border-stone text-stone hover:border-bronze hover:text-bronze px-8 py-3 font-display uppercase tracking-widest text-xs transition-all">
           Access Full Database
         </button>
      </div>
    </div>
  );
};

export default Archive;