import React from 'react';
import { Wifi, Armchair, Sun, Music } from 'lucide-react';

const Ambience: React.FC = () => {
  return (
    <section id="ambience" className="py-24 bg-kopitiam-beige relative">
      <div className="absolute inset-0 bg-vintage-pattern opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
             <h4 className="text-kopitiam-gold font-bold tracking-widest text-sm uppercase mb-3">Our Space</h4>
             <h2 className="font-serif text-4xl md:text-5xl text-kopitiam-brown mb-6">A Place to Pause</h2>
             <p className="text-gray-600 text-lg font-light leading-relaxed">
               Designed with nostalgia in mind. From the marble tables to the rattan chairs, every corner tells a story of the past while offering the comforts of today.
             </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
           
           {/* Large Feature Image */}
           <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden shadow-lg">
             <img 
               src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop" 
               alt="Main Ambience" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
               <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-serif text-3xl mb-2">The Main Hall</h3>
                  <p className="text-white/80 font-light max-w-md">High ceilings and natural light create an airy, welcoming atmosphere for breakfast or afternoon tea.</p>
               </div>
             </div>
           </div>

           {/* Top Right - Feature Block */}
           <div className="bg-kopitiam-green text-white p-8 rounded-3xl flex flex-col justify-center shadow-lg relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
             <div className="relative z-10">
               <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                 <Armchair size={24} />
               </div>
               <h3 className="font-serif text-2xl mb-2">Vintage Comfort</h3>
               <p className="text-white/70 text-sm leading-relaxed">Restored rattan chairs and solid marble tables sourced from local antique dealers.</p>
             </div>
           </div>

           {/* Bottom Right - Image */}
           <div className="relative group rounded-3xl overflow-hidden shadow-lg">
             <img 
               src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
               alt="Coffee Detail" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
             <div className="absolute bottom-6 left-6 text-white">
               <span className="text-xs font-bold uppercase tracking-widest bg-kopitiam-gold px-2 py-1 rounded-md">Vibe</span>
             </div>
           </div>

        </div>

        {/* Amenities Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: Wifi, label: "Free Fast WiFi" },
            { icon: Sun, label: "Outdoor Patio" },
            { icon: Music, label: "Relaxing Jazz" },
            { icon: Armchair, label: "Child Friendly" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/50 p-4 rounded-2xl flex items-center gap-3 border border-white/50 hover:bg-white transition-colors">
              <item.icon size={18} className="text-kopitiam-brown" />
              <span className="text-sm font-medium text-kopitiam-brown">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambience;