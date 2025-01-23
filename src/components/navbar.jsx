import { useState } from "react";
import React from 'react';
import Mobilenav from "./mobilenav";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav((prev) => !prev);
  }

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg bg-red-700 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl lg:text-3xl font-bold">A.W</div>
      <ul className="hidden sm:flex space-x-4">
        <li><a href="#about" className="link">About</a></li>
        <li><a href="#features" className="link">Services</a></li>
        <li><a href="#testimonials" className="link">Reviews</a></li>
        <li><a href="#footer" className="link">Contact</a></li>
      </ul>

      {/* hamburger and mobile nav menu*/}
      <div onClick={toggleNav} className="flex flex-col items-center align-middle sm:hidden hover:cursor-pointer">
        <div className={`h-1 w-8 rounded-md mb-1 bg-[black] ${nav ? 'burger1' : 'burger-1'}`}></div>
        <div className={`h-1 w-8 rounded-md bg-[black] ${nav ? 'invisible' : 'show'}`}></div>
        <div className={`h-1 w-8 rounded-md mt-1 bg-[black] ${nav ? 'burger2' : 'burger-2'}`}></div>
      </div>

      <Mobilenav nav={nav} />
    </nav>
  );
}

export default Navbar;