import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-12 text-sm font-medium text-white">
      <Link to="/" className="hover:underline">홈</Link>
    </nav>
  );
};

export default Navbar;
