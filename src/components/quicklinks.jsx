import React, { useState } from 'react';

function QuickLinks() {
  const links = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#features' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#footer' },
  ];

  const socials = [
    { label: 'Facebook', href: 'https://facebook.com', icon: '📘' },
    { label: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
    { label: 'Instagram', href: 'https://instagram.com', icon: '📸' },
  ];

  return (
    <section id="quicklinks" className="py-16 lg:px-8 bg-red-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-red-800">Quick Links</h2>
      <div className="flex justify-around">
      <div className='flex flex-col gap-2 w-[20%]'>
        <h3 className='text-lg sm:text-2xl font-bold text-red-800'>
          AutoWorld
        </h3>
        <p className='text-sm sm:text-base'>
          Your dream car at the press of a Button
        </p>
      </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Site Links</h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link text-red-700 text-sm sm:text-base">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="footer-link text-red-700 text-sm sm:text-base">
                  {social.icon} {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default QuickLinks;