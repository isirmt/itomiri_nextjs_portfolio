'use client';
import { useState } from 'react';
import Hamburger from './hamburger/hamburger';
import NavLink from './navLink';
import { lineSeed } from '@/libs/fonts';

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
    <ul className={`flex flex-col gap-4 ${lineSeed.className} w-full`}>
      {pageLists.map((page) => (
        <li key={page.path} className="block w-full relative">
          <NavLink href={page.path} className="relative w-full block px-6 py-3 group">
            <span className="absolute top-0 left-0 z-[55] w-0 h-full bg-rose-500 transition-all duration-300 [clip-path:polygon(0%_0%,calc(100%_-_1.5rem)_0%,100%_50%,calc(100%_-_1.5rem)_100%,0%_100%)] group-hover:w-[calc(100%_+_1.5rem)]" />
            <span className="relative z-[57] block text-2xl">
              <span className="block text-rose-500">
                {page.label}
              </span>
              <span className="absolute inset-0 z-[60] text-white overflow-hidden w-0 transition-all duration-300 group-hover:w-[calc(100%_+_1.5rem)]" >
                {page.label}
              </span>
            </span>
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
          <nav className="pt-20 pr-6">
            {renderNavigationItems()}
          </nav>
        </div>
      </div>

      {/* デスクトップ用サイドバー */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64 z-50 bg-white border-r border-rose-500">
        <div className="p-6">
          <NavLink href="/" className="text-2xl font-bold block mb-8">
            井筒ミリ
          </NavLink>
        </div>
        <nav className='w-full'>
          {renderNavigationItems()}
        </nav>
      </div>
    </>
  );
}