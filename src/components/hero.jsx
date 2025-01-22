import React from "react";

function HeroSection() {
  return (
    <section className="flex flex-col align-middle items-center justify-center h-screen mt-12 img text-white text-center py-20">
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
