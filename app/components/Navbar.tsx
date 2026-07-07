import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          <span className="text-gradient">devlooper</span>studio
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#team" className="hover:text-white transition-colors">Team</Link>
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <Link href="#contact" className="hidden md:inline-flex bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
          Start Project
        </Link>
      </div>
    </nav>
  );
}
