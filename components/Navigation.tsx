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
    <nav className="fixed top-0 left-0 w-full z-50 bg-void/90 backdrop-blur-md border-b border-stone/50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity" 
          onClick={() => setView(ViewState.MANIFESTO)}
        >
          <BrandLogo className="h-16 w-auto text-bronze drop-shadow-[0_0_8px_rgba(205,127,50,0.2)]" />
        </div>

        <div className="flex items-center gap-8 hidden md:flex">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setView(item.value)}
              className={`
                text-sm font-display tracking-widest transition-all duration-300 relative
                ${currentView === item.value ? 'text-bronze' : 'text-mist hover:text-white'}
              `}
            >
              {item.label}
              {currentView === item.value && (
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-bronze animate-pulse-slow" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile menu icon placeholder - simplistic for tactical feel */}
        <div className="md:hidden flex gap-4">
           {navItems.map((item) => (
             <button
               key={item.value}
               onClick={() => setView(item.value)}
               className={`text-[10px] font-bold tracking-widest ${currentView === item.value ? 'text-bronze' : 'text-stone'}`}
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