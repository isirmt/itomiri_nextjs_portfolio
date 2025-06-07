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

export function NavigationProgress() {
  const { isNavigating, setIsNavigating } = useNavStatus();
  const pathname = usePathname();

  const prevPathnameRef = useRef(pathname);
  const [isVisible, setIsVisible] = useState(false);

  // initial ⇒ enter ⇒ exit
  const [stage, setStage] = useState<'initial' | 'enter' | 'exit'>('initial');

  // useNavStatusはNavLinkにて状態が変更される
  useEffect(() => {
    let enterTimer: ReturnType<typeof setTimeout>;
    if (isNavigating) {
      // 初期状態へセット
      setIsVisible(true);
      setStage('initial');
      enterTimer = setTimeout(() => setStage('enter'), 50);
    }
    return () => clearTimeout(enterTimer);
  }, [isNavigating]);

  useEffect(() => {
    let exitTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    if (isNavigating && pathname !== prevPathnameRef.current) {
      exitTimer = setTimeout(() => {
        setStage('exit');
        hideTimer = setTimeout(() => {
          setIsVisible(false);
          setIsNavigating(false);
        }, 500);
      }, 200);
    }

    // パスの更新
    prevPathnameRef.current = pathname;
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname, isNavigating, setIsNavigating]);

  if (!isVisible) return null;

  const baseStyle =
    'fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 ' +
    'h-[calc(100dvh_-_4rem)] lg:h-dvh w-svw lg:w-[calc(100svw_-_16rem)] ' +
    'top-16 lg:top-0 bg-rose-400 transform transition-transform duration-500 ease-in-out ' +
    'select-none [clip-path:polygon(10%_0%,100%_0%,calc(100%_-_10%)_50%,100%_100%,10%_100%,0%_50%)] ' +
    'lg:[clip-path:polygon(6rem_0%,100%_0%,calc(100%_-_6rem)_50%,100%_100%,6rem_100%,0%_50%)]';

  const appliedStyle =
    stage === 'initial'
      ? 'translate-x-full'
      : stage === 'enter'
        ? 'translate-x-0 lg:translate-x-[16rem] ease-out'
        : '-translate-x-full ease-in';

  return (
    <div className={`${baseStyle} ${appliedStyle} will-change-transform`}>
      <div className="size-16 border-4 border-white rotate-45" />
      <div className='text-3xl text-white font-black tracking-wider'>Hello World!!</div>
    </div>
  );
}
