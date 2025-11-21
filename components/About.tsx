import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-kopitiam-beige/30 -skew-x-12 transform origin-top"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side - Layered Look */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-8 -left-8 w-full h-full bg-kopitiam-green/10 rounded-tl-[4rem] rounded-br-[4rem] z-0"></div>
            
            <div className="relative z-10 rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-2xl group">
               <img 
                 src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop" 
                 alt="Pouring Kopi O" 
                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
               <div className="absolute bottom-8 left-8 text-white">
                 <p className="font-serif text-3xl italic">"Tradition in every pour"</p>
               </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-12 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block z-20 border border-gray-100">
               <div className="flex justify-between items-end gap-8">
                 <div>
                   <span className="block text-4xl font-serif text-kopitiam-brown">25+</span>
                   <span className="text-xs text-gray-500 uppercase tracking-widest">Years Recipes</span>
                 </div>
                 <div className="h-10 w-px bg-gray-200"></div>
                 <div>
                    <span className="block text-4xl font-serif text-kopitiam-brown">100%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Local Beans</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <h4 className="text-kopitiam-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-kopitiam-gold"></span> Our Story
            </h4>
            <h2 className="font-serif text-5xl md:text-6xl text-kopitiam-brown mb-8 leading-[1.1]">
              Keeping the <br/>
              <span className="italic font-display text-kopitiam-green relative inline-block">
                Tradition Alive
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-kopitiam-gold opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg text-justify">
              <p>
                <span className="text-4xl float-left mr-2 mt-[-10px] font-serif text-kopitiam-gold">K</span>opi Kenangan Lama isn't just a café; it's a tribute to the golden days of Malaysian kopitiams. 
                We started with a simple dream: to serve the kind of breakfast that takes you back to your childhood kitchen.
              </p>
              <p>
                From the crack of the half-boiled egg to the aroma of our charcoal-roasted coffee beans sourced from Muar, 
                every detail is crafted with patience and love. We believe that good food brings people together, 
                and the best conversations happen over a cup of hot Kopi.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <button className="px-8 py-3 bg-kopitiam-brown text-white rounded-full hover:bg-kopitiam-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Read Full Story
              </button>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/id/64/50/50" alt="Founder" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <div>
                  <p className="text-sm font-bold text-kopitiam-brown">Uncle Lim</p>
                  <p className="text-xs text-gray-500">Founder & Head Brewer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;