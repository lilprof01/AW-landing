import React from "react";
import car6 from "../assets/images/car6.jpg";
import car3 from "../assets/images/car3.jpg";
import car5 from '../assets/images/car5.jpg';

function FeaturesNew() {
  const features = [
    {
      title: "Wide Selection of Vehicles",
      frontImage: `url(${car3})`,
      backContent:
        "Choose from a variety of new and pre-owned vehicles to suit your needs.",
    },
    {
      title: "Flexible Financing Options",
      frontImage: `url(${car5})`,
      backContent:
        "Affordable rates and terms tailored to your financial situation.",
    },
    {
      title: "Certified Service Center",
      frontImage: `url(${car6})`,
      backContent:
        "Skilled technicians ensure your vehicle stays in top condition.",
    },
  ];

  return (
    <section id="features" className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-800">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div
                className="flip-card-front bg-cover bg-center bounce-up"
                style={{ backgroundImage: feature.frontImage }}
              >
                <h3 className="text-xl font-semibold text-white p-4 bg-black bg-opacity-50">
                  {feature.title}
                </h3>
              </div>
              {/* Back Side */}
              <div className="flip-card-back bg-red-600 text-white flex items-center justify-center p-4">
                <p className="text-xl">{feature.backContent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesNew;
