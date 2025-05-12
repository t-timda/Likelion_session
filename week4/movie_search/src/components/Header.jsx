// src/components/Header.jsx
import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-blue text-white shadow-md sticky top-0 z-50 w-full">
      <div className="bg-slate-800 text-white shadow-md sticky top-0 z-50 w-full">
        {/* 중앙 제목 */}
        <h1 className="text-4xl font-extrabold text-center mb-4">🎬 영화/프로그램 탐색기</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;