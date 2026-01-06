import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1920&auto=format&fit=crop" 
          alt="Traditional Malaysian Coffee" 
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          style={{ animationDuration: '30s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-kopitiam-brown/90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-32 md:mt-0">
        <div className="mb-4 md:mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards] delay-300">
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2 border border-white/20 bg-white/5 backdrop-blur-md text-white text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase rounded-full shadow-xl">
            <span className="w-2 h-2 bg-kopitiam-gold rounded-full animate-pulse"></span>
            <span>Est. 2024 • Authentic Flavors</span>
          </div>
        </div>
        
        <h1 className="font-serif text-2xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-3 md:mb-6 leading-[1.1] tracking-tight opacity-0 animate-[fadeInUp_1s_ease-out_forwards] delay-500 drop-shadow-2xl">
          Taste the Local <br/>
          <span className="font-display italic text-kopitiam-gold">Comfort</span>
        </h1>
        
        <p className="text-white/80 text-xs sm:text-lg md:text-2xl mb-4 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light opacity-0 animate-[fadeInUp_1s_ease-out_forwards] delay-700 drop-shadow-md">
          A quiet corner for your morning Kopi O and kaya toast. 
          Where memories are brewed and time slows down.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards] delay-1000">
          <a 
            href="#menu" 
            className="group relative px-8 md:px-10 py-3 md:py-4 bg-kopitiam-gold text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-[0_0_50px_-10px_rgba(197,160,101,0.6)] hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-3 text-base md:text-lg">
              View Our Menu <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
          
          <a 
            href="#contact" 
            className="px-6 md:px-8 py-3 md:py-4 text-white border border-white/30 rounded-full hover:bg-white/10 hover:border-white transition-all hover:-translate-y-1 font-medium tracking-wide backdrop-blur-sm text-sm md:text-base"
          >
            Visit Location
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;