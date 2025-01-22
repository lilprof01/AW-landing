import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: 'Emily R.', feedback: 'AutoWorld made buying my first car so easy! I couldn’t be happier with my purchase.' },
    { name: 'Mark T.', feedback: 'The team was incredibly helpful and found me the perfect truck for my business needs.' },
    { name: 'Sophia L.', feedback: 'Their financing options made it possible for me to upgrade to a newer model. Highly recommend!' },
  ];

  return (
    <section id="testimonials" className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-800">Customer Reviews</h2>
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 rounded-lg bg-gray-100 shadow-md">
            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            <p className="mt-4 text-right text-gray-800 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;