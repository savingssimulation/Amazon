import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-xl font-bold">
          Fixed-term delivery
        </Link>
      </div>
    </header>
  );
};

export default Header;