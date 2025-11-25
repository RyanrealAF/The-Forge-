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
        {/* Background decorative elements */}
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[-1] overflow-hidden">
           <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-bronze/5 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-stone/20 rounded-full blur-[100px]" />
        </div>
        
        {children}
      </main>

      <footer className="border-t border-stone py-8 text-center">
        <p className="font-mono text-[10px] text-stone uppercase tracking-widest">
          RyanrealAF © 2024 // Authenticity Ain't Optional // System Online
        </p>
      </footer>
    </div>
  );
};

export default Layout;