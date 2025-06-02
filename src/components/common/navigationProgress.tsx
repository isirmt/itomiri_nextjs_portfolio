'use client';
import { createContext, ReactNode, useContext, useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

type NavStatusContextType = {
  isNavigating: boolean;
  setIsNavigating: (v: boolean) => void;
};

const NavStatusContext = createContext<NavStatusContextType | undefined>(undefined);

export function NavStatusProvider({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  return (
    <NavStatusContext.Provider value={{ isNavigating, setIsNavigating }}>
      {children}
    </NavStatusContext.Provider>
  );
}

export function useNavStatus() {
  const ctx = useContext(NavStatusContext);
  if (!ctx) throw new Error('useNavStatusはNavStatusProviderコンポーネント内にある必要があります');
  return ctx;
}

export default function NavigationProgress() {
  const { isNavigating, setIsNavigating } = useNavStatus();
  const pathname = usePathname();

  const prevPathnameRef = useRef(pathname);
  const [isVisible, setIsVisible] = useState(false);

  // initial ⇒ enter ⇒ exit
  const [stage, setStage] = useState<'initial' | 'enter' | 'exit'>('initial');

  // useNavStatusはNavLinkにて状態が変更される
  useEffect(() => {
    if (isNavigating) {
      // 初期状態へセット
      setIsVisible(true);
      setStage('initial');

      // 中央表示
      const t = setTimeout(() => {
        setStage('enter');
      }, 0);

      return () => clearTimeout(t);
    }
  }, [isNavigating]);

  useEffect(() => {
    // pathが変わり，遷移中である場合
    if (isNavigating && pathname !== prevPathnameRef.current) {
      setStage('exit');

      // 時間経過でオブジェクトを消す
      const t = setTimeout(() => {
        setIsVisible(false);
        setIsNavigating(false);
      }, 500);

      return () => clearTimeout(t);
    }

    // パスの更新
    prevPathnameRef.current = pathname;
  }, [pathname, isNavigating, setIsNavigating]);

  if (!isVisible) return null;

  const baseStyle =
    'fixed inset-0 z-50 flex-col gap-10 flex items-center justify-center bg-rose-300 transform transition-transform duration-500 ease-in-out select-none [clip-path:polygon(6rem_0%,100%_0%,calc(100%_-_6rem)_50%,100%_100%,6rem_100%,0%_50%)]';
  const initialStyle = 'translate-x-full';
  const enterStyle = 'translate-x-0';
  const exitStyle = '-translate-x-full';

  let appliedStyle = "";
  switch (stage) {
    case 'initial':
      appliedStyle = initialStyle;
      break;
    case 'enter':
      appliedStyle = enterStyle;
      break;
    case 'exit':
      appliedStyle = exitStyle;
      break;
  }

  return (
    <div className={`${baseStyle} ${appliedStyle} will-change-transform`}>
      <div className="size-16 border-4 border-white rotate-45" />
      <div className='text-3xl text-white font-black tracking-wider'>Hello World!!</div>
    </div>
  );
}
