import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-8 lg:rounded-tr-full bg-white ring-8 ring-red-600">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-800">About Us</h2>
      <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
        At AutoWorld, we pride ourselves on offering the best selection of new and pre-owned vehicles. With decades of experience, 
        our mission is to help you find the perfect car that fits your lifestyle and budget. Our team is dedicated to ensuring a 
        smooth buying experience, providing honest advice, and exceptional post-sale service. We strive to build long-term 
        relationships with our customers through transparency, reliability, and a commitment to quality. Whether you’re looking 
        for your dream car or a reliable service center, AutoWorld is here for you every step of the way.
      </p>
    </section>
  );
}

export default About;