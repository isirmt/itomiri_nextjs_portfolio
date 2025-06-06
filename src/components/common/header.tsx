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
        <li key={page.path} onClick={() => setIsOpen(false)} className="block w-full relative">
          <NavLink href={page.path} className="relative w-full block px-6 py-3 group">
            <span className="absolute top-0 left-0 z-[55] w-0 h-full bg-rose-500 transition-all duration-300 [clip-path:polygon(0%_0%,calc(100%_-_1.5rem)_0%,100%_50%,calc(100%_-_1.5rem)_100%,0%_100%)] group-hover:w-[calc(100%_+_1.5rem)]" />
            <span className="relative z-[57] block text-2xl">
              <span className="block text-rose-500">
                {page.label}
              </span>
              <span className="absolute inset-0 z-[60] text-white overflow-hidden w-0 transition-all duration-300 delay-[30ms] group-hover:w-[calc(100%_+_1.5rem)]" >
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
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex justify-between items-center h-16 px-6">
          <NavLink href="/" className="text-xl font-bold block group w-64 relative">
            <div className='bg-rose-500 delay-[0ms] group-hover:delay-[400ms] transition-all w-0 h-full absolute left-0  [clip-path:polygon(0%_0%,calc(100%_-_1.5rem)_0%,100%_50%,calc(100%_-_1.5rem)_100%,0%_100%)] group-hover:w-[calc(100%_+_1.5rem)]' />
            <div className='p-1 py-2 relative'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 1698.67 247.67">
                <line className="transition-all group-hover:opacity-0 delay-[385ms] group-hover:delay-[15ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="2.83" y1="2.83" x2="167.46" y2="2.83" />
                <line className="transition-all group-hover:opacity-0 delay-[270ms] group-hover:delay-[130ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="85.15" y1="2.83" x2="85.15" y2="204.83" />
                <line className="transition-all group-hover:opacity-0 delay-[370ms] group-hover:delay-[30ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="2.83" y1="204.83" x2="167.83" y2="204.83" />
                <line className="transition-all group-hover:opacity-0 delay-[310ms] group-hover:delay-[90ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1530.83" y1="2.83" x2="1695.46" y2="2.83" />
                <line className="transition-all group-hover:opacity-0 delay-[330ms] group-hover:delay-[70ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1613.15" y1="2.83" x2="1613.15" y2="204.83" />
                <line className="transition-all group-hover:opacity-0 delay-[220ms] group-hover:delay-[180ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1530.83" y1="204.83" x2="1695.83" y2="204.83" />
                <line className="transition-all group-hover:opacity-0 delay-[400ms] group-hover:delay-[0ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1044.83" y1="2.83" x2="1209.46" y2="2.83" />
                <line className="transition-all group-hover:opacity-0 delay-[340ms] group-hover:delay-[60ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1127.15" y1="2.83" x2="1127.15" y2="204.83" />
                <line className="transition-all group-hover:opacity-0 delay-[250ms] group-hover:delay-[150ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1044.83" y1="204.83" x2="1209.83" y2="204.83" />
                <line className="group-hover:stroke-white group-hover:translate-x-52 group-hover:stroke-[20px] transform group-hover:delay-[400ms] translate-y-0 transition-all fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="237.84" y1="2.83" x2="398.02" y2="2.83" />
                <line className="group-hover:stroke-white group-hover:translate-x-52 group-hover:stroke-[20px] transform group-hover:delay-[400ms] translate-y-0 transition-all fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="317.93" y1="2.83" x2="317.93" y2="204.83" />
                <line className="transition-all group-hover:opacity-0 delay-[340ms] group-hover:delay-[60ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1046.84" y1="2.83" x2="1207.02" y2="2.83" />
                <circle className="group-hover:stroke-white group-hover:translate-x-72 group-hover:stroke-[20px] transform group-hover:delay-[400ms] translate-y-0 transition-all fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" cx="583.83" cy="103.83" r="101" />
                <polyline className="transition-all group-hover:opacity-0 delay-[320ms] group-hover:delay-[80ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" points="792.83 204.83 792.83 2.83 875.15 154.83 956.83 2.83 957.83 204.83" />
                <line className="group-hover:stroke-white group-hover:-translate-x-28 group-hover:stroke-[20px] transform group-hover:delay-[400ms] translate-y-0 transition-all fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1291.83" y1="2.83" x2="1291.83" y2="204.83" />
                <path className="group-hover:stroke-white group-hover:-translate-x-28 group-hover:stroke-[20px] transform group-hover:delay-[400ms] translate-y-0 transition-all fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" d="M1396.83,2.83c32.31,0,60,26.61,60,59.12s-26.19,58.87-58.5,58.87" />
                <line className="group-hover:stroke-white group-hover:-translate-x-28 group-hover:stroke-[20px] transform group-hover:delay-[400ms] translate-y-0 transition-all fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1398.33" y1="120.83" x2="1291.83" y2="120.83" />
                <line className="group-hover:stroke-white group-hover:-translate-x-28 group-hover:stroke-[20px] transform group-hover:delay-[400ms] translate-y-0 transition-all fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1397.33" y1="2.83" x2="1291.33" y2="2.83" />
                <line className="transition-all group-hover:opacity-0 delay-[300ms] group-hover:delay-[100ms] fill-none stroke-rose-500 stroke-[10px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1456.83" y1="204.83" x2="1373.49" y2="121.49" />
              </svg>
            </div>
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
        <NavLink href="/" className="text-2xl font-bold block my-8 group relative">
          <div className='bg-rose-500 delay-[0ms] group-hover:delay-[400ms] transition-all w-0 h-full absolute left-0  [clip-path:polygon(0%_0%,calc(100%_-_1.5rem)_0%,100%_50%,calc(100%_-_1.5rem)_100%,0%_100%)] group-hover:w-[calc(100%_+_1.5rem)]' />
          <div className='p-6 relative'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 916.67 552.67">
              <line className="transition-all group-hover:opacity-0 delay-[385ms] group-hover:delay-[15ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="2.83" y1="2.83" x2="167.46" y2="2.83" />
              <line className="transition-all group-hover:opacity-0 delay-[270ms] group-hover:delay-[130ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="85.15" y1="2.83" x2="85.15" y2="204.83" />
              <line className="transition-all group-hover:opacity-0 delay-[370ms] group-hover:delay-[30ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="2.83" y1="204.83" x2="167.83" y2="204.83" />
              <line className="transition-all group-hover:opacity-0 delay-[310ms] group-hover:delay-[90ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="748.83" y1="347.83" x2="913.46" y2="347.83" />
              <line className="transition-all group-hover:opacity-0 delay-[330ms] group-hover:delay-[70ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="831.15" y1="347.83" x2="831.15" y2="549.83" />
              <line className="transition-all group-hover:opacity-0 delay-[220ms] group-hover:delay-[180ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="748.83" y1="549.83" x2="913.83" y2="549.83" />
              <line className="transition-all group-hover:opacity-0 delay-[400ms] group-hover:delay-[0ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="235.83" y1="347.83" x2="400.46" y2="347.83" />
              <line className="transition-all group-hover:opacity-0 delay-[340ms] group-hover:delay-[60ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="318.15" y1="347.83" x2="318.15" y2="549.83" />
              <line className="transition-all group-hover:opacity-0 delay-[250ms] group-hover:delay-[150ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="235.83" y1="549.83" x2="400.83" y2="549.83" />
              <line className="group-hover:stroke-[20px] transform group-hover:translate-y-40 group-hover:-translate-x-36  group-hover:delay-[400ms] translate-y-0 transition-all fill-none group-hover:stroke-white stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="237.84" y1="2.83" x2="398.02" y2="2.83" />
              <line className="group-hover:stroke-[20px] transform group-hover:translate-y-40 group-hover:-translate-x-36  group-hover:delay-[400ms] translate-y-0 transition-all fill-none group-hover:stroke-white stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="317.93" y1="2.83" x2="317.93" y2="204.83" />
              <circle className="group-hover:stroke-[20px] transform group-hover:translate-y-40 group-hover:-translate-x-32  group-hover:delay-[400ms] translate-y-0 transition-all fill-none group-hover:stroke-white stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" cx="583.83" cy="103.83" r="101" />
              <polyline className="transition-all group-hover:opacity-0 delay-[320ms] group-hover:delay-[80ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" points="2.83 549.83 2.83 347.83 85.15 499.83 166.83 347.83 167.83 549.83" />
              <line className="group-hover:stroke-[20px] transform group-hover:-translate-y-44 group-hover:translate-x-40  group-hover:delay-[400ms] translate-y-0 transition-all fill-none group-hover:stroke-white stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="501.83" y1="347.83" x2="501.83" y2="549.83" />
              <path className="group-hover:stroke-[20px] transform group-hover:-translate-y-44 group-hover:translate-x-40  group-hover:delay-[400ms] translate-y-0 transition-all fill-none group-hover:stroke-white stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" d="M606.83,347.83c32.31,0,60,26.61,60,59.12s-26.19,58.87-58.5,58.87" />
              <line className="group-hover:stroke-[20px] transform group-hover:-translate-y-44 group-hover:translate-x-40  group-hover:delay-[400ms] translate-y-0 transition-all fill-none group-hover:stroke-white stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="608.33" y1="465.83" x2="501.83" y2="465.83" />
              <line className="group-hover:stroke-[20px] transform group-hover:-translate-y-44 group-hover:translate-x-40  group-hover:delay-[400ms] translate-y-0 transition-all fill-none group-hover:stroke-white stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="607.33" y1="347.83" x2="501.33" y2="347.83" />
              <line className="transition-all group-hover:opacity-0 delay-[300ms] group-hover:delay-[100ms] fill-none stroke-rose-500 stroke-[5.67px] [stroke-linecap:round] [stroke-linejoin:round]" x1="666.83" y1="549.83" x2="583.49" y2="466.49" />
            </svg>
          </div>
        </NavLink>
        <nav className='w-full'>
          {renderNavigationItems()}
        </nav>
      </div>
    </>
  );
}