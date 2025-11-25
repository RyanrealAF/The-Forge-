import React, { useState } from 'react';
import Layout from './components/Layout';
import Manifesto from './components/Manifesto';
import OracleChat from './components/OracleChat';
import Archive from './components/Archive';
import Protocols from './components/Protocols';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.MANIFESTO);

  const renderView = () => {
    switch (currentView) {
      case ViewState.MANIFESTO:
        return <Manifesto />;
      case ViewState.PROTOCOLS:
        return <Protocols />;
      case ViewState.ORACLE:
        return <OracleChat />;
      case ViewState.ARCHIVE:
        return <Archive />;
      default:
        return <Manifesto />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

export default App;