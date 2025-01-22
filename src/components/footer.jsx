import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="bg-red-700 text-white py-8 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Aniyajuwon. All rights reserved.</p>
      <p className="text-sm">123 Main Street, Car City, USA | Phone: <a type='tel' href='08141745050'>(234)8141745050</a></p>
    </footer>
  );
}

export default Footer;