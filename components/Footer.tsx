import React from 'react';
import { Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kopitiam-brown text-white/80 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
           <div className="p-3 bg-white/5 rounded-full mb-6">
             <Coffee className="text-kopitiam-gold" size={32} />
           </div>
           <h2 className="font-serif text-3xl text-white mb-2">Kopi Kenangan Lama</h2>
           <p className="text-sm tracking-widest uppercase opacity-50">Est. 2024 • Kuala Lumpur</p>
        </div>
        
        <div className="w-full h-px bg-white/10 mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} Kopi Kenangan Lama. All rights reserved.
          </div>
          
          <div className="flex gap-8 text-sm font-medium tracking-wide">
            <a href="#home" className="hover:text-kopitiam-gold transition-colors">Home</a>
            <a href="#menu" className="hover:text-kopitiam-gold transition-colors">Menu</a>
            <a href="#about" className="hover:text-kopitiam-gold transition-colors">Story</a>
            <a href="#contact" className="hover:text-kopitiam-gold transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;