import React from 'react';
import './App.css';
import { HashRouter as Router, useLocation } from 'react-router-dom';

import Hero from './components/Hero/Hero';
// import Family from './components/Family/Family';
import Ceremony from './components/Ceremony/Ceremony';
import Confirmation from './components/Confirmation/Confirmation';
import DressCode from './components/DressCode/DressCode';
// import InspirationBoard from './components/InspirationBoard/InspirationBoard';
import FAQ from './components/FAQ/FAQ';
// import PDFGenerator from './components/PDFGenerator/PDFGenerator';
import Versiculo from './components/Versiculo/Versiculo';
// import Footer from './components/Footer/Footer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const query = useQuery();

  const view = query.get('view');
  if (view === 'participacion') {
    return (
      <>
        <Hero />
        <Versiculo />
        <Confirmation />
      </>
    );
  }

  return (
    <>
      <Hero />
      {/* <Family /> */}
      <Ceremony />
      <Versiculo />
      <Confirmation />
      <DressCode />
      {/* <InspirationBoard /> */}
      <FAQ />
      {/* <PDFGenerator /> */}
      {/* <Footer /> */}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
