'use client';
import { useState } from 'react';
import Hamburger from './hamburger/hamburger';
import NavLink from './navLink';

type PageItem = {
  path: string;
  label: string;
};

const pageLists: PageItem[] = [
  { path: '/news', label: 'News' },
  { path: '/works', label: 'Works' },
  { path: '/profile', label: 'Profile' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderNavigationItems = () => (
    <ul className="space-y-6">
      {pageLists.map((page) => (
        <li key={page.path}>
          <NavLink href={page.path} className="text-lg hover:text-gray-600">
            {page.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* モバイル用ハンバーガーメニュー */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center p-4">
          <NavLink href="/" className="text-xl font-bold">
            井筒ミリ
          </NavLink>
          <button
            onClick={toggleMenu}
            className="p-2 relative z-50"
            aria-label="メニュー"
          >
            <Hamburger isOpen={isOpen} />
          </button>
        </div>
        {/* モバイルメニュー */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="pt-20 px-6">
            {renderNavigationItems()}
          </nav>
        </div>
      </div>

      {/* デスクトップ用サイドバー */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-white shadow-md">
        <div className="p-6">
          <NavLink href="/" className="text-2xl font-bold block mb-8">
            井筒ミリ
          </NavLink>
          <nav>
            {renderNavigationItems()}
          </nav>
        </div>
      </div>
    </>
  );
}