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
    'fixed inset-0 z-50 h-[calc(100dvh_-_4rem)] lg:h-dvh w-svw lg:w-[calc(100svw_-_16rem)] top-16 lg:top-0 flex-col gap-10 flex items-center justify-center bg-rose-400 transform transition-transform duration-500 ease-in-out select-none [clip-path:polygon(10%_0%,100%_0%,calc(100%_-_10%)_50%,100%_100%,10%_100%,0%_50%)] lg:[clip-path:polygon(6rem_0%,100%_0%,calc(100%_-_6rem)_50%,100%_100%,6rem_100%,0%_50%)]';
  const initialStyle = 'translate-x-full';
  const enterStyle = 'translate-x-0 lg:translate-x-[16rem] ease-out';
  const exitStyle = '-translate-x-full ease-in';

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
