'use client';
import Link from "next/link";
import dynamic from "next/dynamic";

const ItomiriLogo = dynamic(
  () => import("./lottie/itomiriLottieLogo"),
  { ssr: false }
)

export default function Footer() {
  return (
    <footer className={`lg:ml-64 mt-auto py-6 bg-rose-100`}>
      <div className="flex items-center justify-center py-3">
        <div className="max-w-96 relative">
          <ItomiriLogo />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <p className="text-center text-rose-800">&copy; 井筒ミリ / <Link className="underline" target="_blank" rel="noopener" href="https://isirmt.com">isirmt</Link></p>
      </div>
    </footer>
  );
}