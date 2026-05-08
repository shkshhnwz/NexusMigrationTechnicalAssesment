import { useState } from 'react';
import logoImg from '../assets/Logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Brand Colors
  const navy = "#002147";
  const gold = "#c5a059";

  return (
    <nav style={{ backgroundColor: navy }} className="text-white sticky top-0 z-50 py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col leading-tight cursor-pointer">
          <span className="text-2xl font-extrabold tracking-tighter"><img src={logoImg} alt="Logo of Nexus Migration" className="h-12 w-auto" /></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-6 text-sm font-semibold uppercase tracking-wide">
          <a href="#" className="hover:text-[#c5a059] transition-colors">Home</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">About Us</a>
          <div className="group relative cursor-pointer">
            <span className="flex items-center gap-1 hover:text-[#c5a059]">Canada ▾</span>
            <div className="absolute hidden group-hover:block bg-white text-navy-900 top-full pt-4 w-48 shadow-xl">
              <ul className="bg-white text-slate-800 p-4 space-y-3 shadow-lg border-t-2 border-[#c5a059]">
                <li className="hover:text-[#c5a059]">Express Entry</li>
                <li className="hover:text-[#c5a059]">PNP Programs</li>
              </ul>
            </div>
          </div>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Our Team</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">News & Blogs</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Success Stories</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Contact</a>
          <button style={{ backgroundColor: gold }} className="ml-2 px-6 py-2.5 rounded-sm font-bold hover:brightness-110 transition-all text-white">
            FREE ASSESSMENT
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#001a38] p-8 flex flex-col space-y-6 border-t border-white/10 shadow-2xl">
          <a href="#" className="text-lg">Home</a>
          <a href="#" className="text-lg">About Us</a>
          <a href="#" className="text-lg">Canada</a>
          <a href="#" className="text-lg">Our Team</a>
          <a href="#" className="text-lg">News & Blogs</a>
          <a href="#" className="text-lg">Success Stories</a>
          <a href="#" className="text-lg">Contact Us</a>
          <button style={{ backgroundColor: gold }} className="py-4 rounded-sm font-bold text-white">
            FREE ASSESSMENT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;