import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600">
      <div className="container mx-auto px-4 py-4 text-center">
        &copy; {new Date().getFullYear()} Fixed-term delivery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;