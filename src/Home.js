import React from 'react';
import '../src/App.css';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
