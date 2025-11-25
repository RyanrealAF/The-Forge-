import React, { useState } from 'react';
import Layout from './components/Layout';
import Manifesto from './components/Manifesto';
import Archive from './components/Archive';
import Protocols from './components/Protocols';
import { ViewState } from './types';
import OracleChat from './components/OracleChat';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.MANIFESTO);

  const renderView = () => {
    switch (currentView) {
      case ViewState.MANIFESTO:
        return <Manifesto />;
      case ViewState.PROTOCOLS:
        return <Protocols />;
      case ViewState.ARCHIVE:
        return <Archive />;
      case ViewState.ORACLE:
        return <OracleChat />;
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