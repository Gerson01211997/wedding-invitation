import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Family from './components/Family/Family';
import Ceremony from './components/Ceremony/Ceremony';
import Confirmation from './components/Confirmation/Confirmation';
import DressCode from './components/DressCode/DressCode';
import InspirationBoard from './components/InspirationBoard/InspirationBoard';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      {/* <Family /> */}
      <Ceremony />
      <Confirmation />
      <DressCode />
      {/* <InspirationBoard /> */}
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
}

export default App;