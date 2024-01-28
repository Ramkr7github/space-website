import React from 'react'
import BgVideo from "./assets/earth-bg.mp4";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HeroCard from './components/HeroCard/Herocard';
import Banner from './components/Banner/Banner';
import Setelite from './components/Setelite/Setelite';
import Footer from './components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div>
      <div className='h-[700px] relative'>
      <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
         <Hero />
      </div>
      <HeroCard />
      <Banner />
      <Setelite />
      <Footer />
    </div>
  )
}

export default App