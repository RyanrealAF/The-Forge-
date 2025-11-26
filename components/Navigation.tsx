import React from 'react';
import { ViewState } from '../types';
import BrandLogo from './BrandLogo';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { label: 'MANIFESTO', value: ViewState.MANIFESTO },
    { label: 'PROTOCOLS', value: ViewState.PROTOCOLS },
    { label: 'ARCHIVE', value: ViewState.ARCHIVE },
    { label: 'ORACLE', value: ViewState.ORACLE },
  ];

  return (
    // Tactical Minimalism: Solid opaque background, no blur. 
    // "Command Center" feel.
    <nav className="fixed top-0 left-0 w-full z-50 bg-void border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group hover:opacity-100 opacity-90 transition-opacity" 
          onClick={() => setView(ViewState.MANIFESTO)}
        >
          <BrandLogo className="h-12 w-auto text-bronze drop-shadow-none" />
        </div>

        <div className="flex items-center gap-12 hidden md:flex">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setView(item.value)}
              className={`
                text-xs font-mono font-bold tracking-[0.15em] transition-colors duration-100 relative py-2
                ${currentView === item.value ? 'text-bronze' : 'text-stone hover:text-white'}
              `}
            >
              {/* Tactical Indicator */}
              {currentView === item.value && (
                <span className="absolute top-1/2 -left-3 w-1 h-1 bg-bronze transform -translate-y-1/2" />
              )}
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu - simplified */}
        <div className="md:hidden flex gap-4">
           {navItems.map((item) => (
             <button
               key={item.value}
               onClick={() => setView(item.value)}
               className={`text-[10px] font-mono font-bold tracking-widest uppercase ${currentView === item.value ? 'text-bronze' : 'text-stone'}`}
             >
               {item.label.slice(0, 3)}
             </button>
           ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;