import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-xl font-bold flex items-center">
          
          {/* ★★★ これが、全てを解決する最後の修正です ★★★ */}
          {/* publicフォルダ直下のlogo.svgを、最もシンプルな絶対パスで参照します */}
          <img src="/logo.svg" alt="savingssimulation ロゴ" className="h-8 mr-3" />

          savingssimulation
        </Link>
      </div>
    </header>
  );
};

export default Header;
