import React from 'react';
import { Link } from 'react-router-dom';

// Viteの環境変数を使い、正しいベースパスを取得
const baseUrl = import.meta.env.BASE_URL;

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-xl font-bold flex items-center">
          {/* ★★★ ここが、全てを解決する最後の修正です ★★★ */}
          {/* publicフォルダにあるlogo.svgを、正しいパスで参照します */}
          <img src={`${baseUrl}logo.svg`} alt="savingssimulation ロゴ" className="h-8 mr-3" />
          savingssimulation
        </Link>
      </div>
    </header>
  );
};

export default Header;
