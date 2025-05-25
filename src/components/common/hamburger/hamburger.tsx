export default function Hamburger({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-5 relative">
      <span className={`block w-full h-0.5 bg-black absolute transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
      <span className={`block w-full h-0.5 bg-black absolute top-2 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`block w-full h-0.5 bg-black absolute transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
    </div>
  );
}

