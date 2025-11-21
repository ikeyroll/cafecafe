import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Ambience', href: '#ambience' },
    { name: 'Visit Us', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 relative flex items-center h-12">
        
        {/* Animated Logo / Title */}
        <a 
          href="#home" 
          className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-3 group z-50
            ${isScrolled 
              ? 'top-1/2 -translate-y-1/2 left-6 translate-x-0 scale-100' 
              : 'top-[35vh] left-1/2 -translate-x-1/2 scale-[1.8] md:scale-[2.5]'
            }
          `}
        >
          <div className={`p-2 rounded-full transition-colors duration-500 ${isScrolled ? 'bg-kopitiam-brown text-white' : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'}`}>
            <Coffee size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col items-start">
            <h1 className={`font-serif text-xl tracking-wide whitespace-nowrap transition-colors duration-500 ${isScrolled ? 'text-kopitiam-brown' : 'text-white drop-shadow-lg'}`}>
              Kopi Kenangan Lama
            </h1>
          </div>
        </a>

        {/* Desktop Nav - Pushed to right */}
        <div className="flex items-center gap-10 ml-auto">
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`font-medium text-sm tracking-widest uppercase hover:text-kopitiam-gold transition-colors relative group ${
                  isScrolled ? 'text-kopitiam-brown' : 'text-white/90'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kopitiam-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="text-kopitiam-brown" />
            ) : (
              <Menu size={28} className={isScrolled ? 'text-kopitiam-brown' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-kopitiam-cream/95 backdrop-blur-xl z-40 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-serif text-3xl text-kopitiam-brown hover:text-kopitiam-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;