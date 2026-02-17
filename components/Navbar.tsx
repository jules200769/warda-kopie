
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

// Added NavbarProps interface to fix type error in App.tsx where onContactClick is passed
interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Waarom', href: '#waarom' },
    { name: 'Pakketten', href: '#pakketten' },
    { name: 'Geslaagden', href: '#geslaagden' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Sluit mobiel menu direct
      setIsOpen(false);
      
      // Gebruik scrollIntoView met offset handling via CSS scroll-margin-top
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#home" onClick={handleLogoClick} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">W</div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Rijschool <span className="text-sky-500">Warda</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 hover:text-sky-500 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          {/* Use the passed onContactClick handler if needed, or keep standard tel link */}
          <a 
            href="tel:0649674309" 
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-sky-100"
          >
            <Phone size={18} />
            <span>Bel Nu</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900 p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Menu openen">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 transform origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-bold text-slate-700 hover:text-sky-500 p-4 hover:bg-sky-50 rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:0649674309" 
            className="bg-sky-500 text-white p-5 rounded-2xl font-black flex items-center justify-center gap-3 mt-4 shadow-xl active:scale-95 transition-transform"
          >
            <Phone size={22} />
            BEL DIRECT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
