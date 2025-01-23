import React, { useEffect, useState } from "react";
import car2 from '../assets/images/car2.jpg';
import car3 from '../assets/images/car3.jpg';
import car4 from '../assets/images/car4.jpg';
import car5 from '../assets/images/car5.jpg';
import car6 from '../assets/images/car6.jpg';

function HeroSection() {
  const bgImg = [
    `url(${car2})`,
    `url(${car3})`,
    `url(${car4})`,
    `url(${car5})`,
    `url(${car6})`,
  ]
  const [bg, setBg] = useState(bgImg[3]);

  useEffect (() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * bgImg.length);
      setBg(bgImg[randomIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, [bgImg]);


  return (
    <section style={{
      backgroundImage: bg,
    }} className={`flex flex-col align-middle items-center justify-center h-screen mt-12 img text-white text-center py-20 bg-cover bg-center bg-fixed`}>
      <div className="img-cover"></div>
      <h1 className="z-10 text-4xl md:text-6xl font-bold mb-6">
        Welcome to AutoWorld
      </h1>
      <p className="z-10 text-lg md:text-xl mb-8">
        Your trusted destination for quality cars and unmatched service.
      </p>
      <button className="flex gap-2 z-10 bg-red-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-500 transition-transform transform hover:scale-105">
        Explore Inventory <span className="bounce">&rarr;</span>
      </button>
    </section>
  );
}

export default HeroSection;
