import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuCategory } from '../types';
import { Star } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.DRINKS);
  
  const categories = Object.values(MenuCategory);
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-kopitiam-cream relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-paper opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-kopitiam-green font-bold tracking-widest text-sm uppercase mb-3">Authentic Flavors</h4>
          <h2 className="font-serif text-5xl md:text-6xl text-kopitiam-brown mb-6">Our Menu</h2>
          <p className="text-gray-500 max-w-xl mx-auto italic font-serif">
            "Classic recipes passed down through generations, served with a modern touch."
          </p>
        </div>

        {/* Signature Spotlight Section */}
        <div className="mb-24 bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-kopitiam-beige relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-kopitiam-gold/10 rounded-bl-full -mr-16 -mt-16 z-0"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-kopitiam-brown rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1000&auto=format&fit=crop" 
                alt="Signature Nasi Lemak" 
                className="relative rounded-2xl shadow-lg w-full h-[400px] object-cover transform group-hover:-translate-y-2 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-xl w-24 h-24 flex items-center justify-center border-4 border-kopitiam-cream z-20">
                <div className="text-center">
                  <span className="block text-xs font-bold text-gray-400 uppercase">Only</span>
                  <span className="block font-serif text-xl text-kopitiam-brown font-bold">RM 3.50</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-kopitiam-green/10 text-kopitiam-green rounded-full mb-6">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-bold uppercase tracking-wider">Chef's Recommendation</span>
              </div>
              <h3 className="font-serif text-4xl text-kopitiam-brown mb-6">Traditional Nasi Lemak Bungkus</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                Our signature breakfast. Fragrant rice steamed with fresh coconut milk and pandan leaves, served with our spicy-sweet sambal, crispy anchovies, roasted peanuts, and a slice of hard-boiled egg. Wrapped in banana leaf for that authentic aroma.
              </p>
              <div className="flex gap-4">
                 <div className="flex flex-col border-l-2 border-kopitiam-gold pl-4">
                   <span className="font-serif text-2xl text-kopitiam-brown">Fresh</span>
                   <span className="text-xs text-gray-500 uppercase tracking-wider">Coconut Milk</span>
                 </div>
                 <div className="flex flex-col border-l-2 border-kopitiam-gold pl-4">
                   <span className="font-serif text-2xl text-kopitiam-brown">Homemade</span>
                   <span className="text-xs text-gray-500 uppercase tracking-wider">Sambal Ikan Bilis</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-nowrap justify-center gap-1 md:gap-12 mb-16 border-b border-gray-300 pb-1 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-3 md:pb-4 px-1.5 md:px-4 font-medium transition-all duration-300 text-xs md:text-lg tracking-normal md:tracking-wide relative whitespace-nowrap ${
                activeCategory === category
                  ? 'text-kopitiam-green scale-105 md:scale-110'
                  : 'text-gray-400 hover:text-kopitiam-brown'
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-kopitiam-green rounded-t-full animate-[width_0.3s]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl p-3 md:p-5 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] mb-3 md:mb-6 overflow-hidden rounded-xl bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                {item.popular && (
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-kopitiam-gold text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-lg">
                    <span className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase">Popular</span>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-start mb-2 md:mb-3">
                <h3 className="font-serif text-sm md:text-xl text-kopitiam-brown leading-tight group-hover:text-kopitiam-gold transition-colors">
                  {item.name}
                </h3>
                <span className="font-sans font-bold text-kopitiam-green text-sm md:text-lg whitespace-nowrap bg-kopitiam-green/5 px-1.5 md:px-2 py-0.5 md:py-1 rounded-lg">
                  <span className="text-[10px] md:text-xs align-top mr-0.5">RM</span>{item.price.toFixed(2)}
                </span>
              </div>
              
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-2 font-light mb-2 md:mb-4">
                {item.description}
              </p>
              
              <button className="w-full py-1.5 md:py-2 border border-gray-200 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:border-kopitiam-brown group-hover:text-kopitiam-brown transition-all">
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;