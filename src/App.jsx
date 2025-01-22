import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import About from './components/abouts';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import QuickLinks from './components/quicklinks';
import FeaturesNew from './components/featuresNew';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      {/* <Features /> */}
      <FeaturesNew />
      <Testimonials />
      <QuickLinks />
      <Footer />
    </div>
  );
}

export default App;