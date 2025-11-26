import React from 'react';
import { ViewState } from '../types';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  return (
    <div className="min-h-screen bg-noise bg-void text-mist font-sans selection:bg-bronze selection:text-black">
      <Navigation currentView={currentView} setView={setView} />
      
      <main className="relative z-0">
        {/* Background - Ambient Precision Only. Minimal visual noise. */}
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[-1] overflow-hidden">
           {/* Extremely subtle ambient light, almost imperceptible */}
           <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-bronze/5 rounded-full blur-[150px] opacity-10" />
        </div>
        
        {children}
      </main>

      <footer className="border-t border-stone/50 py-12 text-center bg-void mt-20">
        <p className="font-mono text-[10px] text-stone uppercase tracking-[0.2em]">
          RyanrealAF © 2024 // Authenticity Ain't Optional // System Online
        </p>
      </footer>
    </div>
  );
};

export default Layout;