import React from 'react';
import '../src/App.css';
import Cards from './components/Cards';
// import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <Carousel />
      <Cards />
  
      <Footer />
    </>
  );
}

export default Home;
