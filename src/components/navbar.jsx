import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg bg-red-700 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl lg:text-3xl font-bold">A.W</div>
      <ul className="hidden sm:flex space-x-4">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#features" className="hover:underline">Services</a></li>
        <li><a href="#testimonials" className="hover:underline">Reviews</a></li>
        <li><a href="#footer" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;