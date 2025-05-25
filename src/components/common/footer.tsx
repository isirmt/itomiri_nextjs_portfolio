import Link from "next/link";

export default function Footer() {
  return (
    <footer className="lg:ml-64 mt-auto py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">&copy; 井筒ミリ / <Link className="underline" target="_blank" rel="noopener noreferrer" href="https://isirmt.com">isirmt</Link></p>
      </div>
    </footer>
  );
}