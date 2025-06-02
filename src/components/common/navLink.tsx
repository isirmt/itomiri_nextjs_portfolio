'use client';

import { useRouter, usePathname } from 'next/navigation';
import { MouseEvent, ReactNode, useTransition } from 'react';
import { useNavStatus } from './navigationProgress';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className }: NavLinkProps) {
  const router = useRouter();
  const currentPathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  const { setIsNavigating } = useNavStatus();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 同ページの場合は無効
    if (href === currentPathname) {
      return;
    }
    setIsNavigating(true);

    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
