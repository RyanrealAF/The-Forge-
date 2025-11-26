import React from 'react';
import { ARCHIVE_DATA } from '../constants';

const Archive: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-stone/30 pb-6">
        <div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none">
            Breadcrumb<br/>Web
            </h2>
        </div>
        <div className="text-right mt-4 md:mt-0">
            <h3 className="font-mono text-bronze uppercase tracking-widest text-xs">
            Content as Record
            </h3>
            <p className="font-mono text-stone text-[10px] uppercase tracking-widest mt-1">
            Decentralized // Immutable
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ARCHIVE_DATA.map((item) => (
          <div 
            key={item.id}
            className="group bg-void-light border border-stone/30 hover:border-bronze transition-colors duration-0 flex flex-col h-72 relative overflow-hidden"
          >
            {/* Header Data */}
            <div className="flex justify-between items-start p-4 border-b border-stone/10 bg-void">
              <span className="font-mono text-[9px] text-bronze border border-bronze/30 px-1 py-px">
                REF_{item.id}
              </span>
              <span className="font-mono text-[9px] text-stone group-hover:text-white transition-colors">
                {item.timestamp}
              </span>
            </div>

            {/* Main Body */}
            <div className="p-5 flex flex-col justify-between h-full relative z-10">
               <div>
                  <span className="text-[9px] font-bold text-stone group-hover:text-bronze uppercase tracking-[0.2em] mb-3 block transition-colors">
                    [{item.category}]
                  </span>
                  <h4 className="font-display text-2xl text-white uppercase tracking-tight leading-none group-hover:text-bronze transition-colors duration-0">
                    {item.title}
                  </h4>
               </div>
               
               <p className="text-mist text-xs font-mono mt-4 line-clamp-3 leading-relaxed border-l border-stone/50 pl-2 group-hover:border-bronze group-hover:text-gray-300 transition-colors">
                 {item.content}
               </p>
            </div>

            {/* Tactical Grid Overlay on Hover */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjQ0Q3RjMyIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-0" />
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
         <button className="border border-stone text-stone hover:bg-bronze hover:text-black hover:border-bronze px-10 py-4 font-mono uppercase tracking-[0.2em] text-[10px] transition-colors duration-0">
           Load Full Database
         </button>
      </div>
    </div>
  );
};

export default Archive;