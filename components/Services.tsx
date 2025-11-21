import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-kopitiam-green text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute right-0 top-0 w-96 h-96 bg-kopitiam-gold rounded-full filter blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute left-0 bottom-0 w-96 h-96 bg-kopitiam-cream rounded-full filter blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          
          <div className="md:w-1/2">
             <h4 className="text-kopitiam-gold font-bold tracking-widest text-sm uppercase mb-4">Services</h4>
             <h2 className="font-serif text-4xl md:text-5xl mb-8">Events & Catering</h2>
             <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
               Whether it's a warm breakfast for your office team or a private birthday gathering, we bring the authentic taste of Malaysia to your table.
             </p>
             <a href="#contact" className="text-white border-b border-kopitiam-gold pb-1 hover:text-kopitiam-gold transition-colors inline-block">
               Inquire availability
             </a>
          </div>

          <div className="md:w-1/2 space-y-8">
            <div className="flex gap-6">
               <div className="text-5xl font-serif text-kopitiam-gold opacity-50">01</div>
               <div>
                 <h3 className="text-xl font-bold mb-2">Mini Catering</h3>
                 <p className="text-gray-300 font-light text-sm leading-relaxed">
                   Nasi Lemak Bungkus packages, Kuih Muih platters, and coffee pots delivered to your venue.
                 </p>
               </div>
            </div>
            
            <div className="w-full h-px bg-white/10"></div>

            <div className="flex gap-6">
               <div className="text-5xl font-serif text-kopitiam-gold opacity-50">02</div>
               <div>
                 <h3 className="text-xl font-bold mb-2">Private Booking</h3>
                 <p className="text-gray-300 font-light text-sm leading-relaxed">
                   Reserve our space for up to 40 pax. Customizable menus available for tea time or lunch.
                 </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;