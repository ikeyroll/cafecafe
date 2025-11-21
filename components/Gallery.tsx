import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl text-kopitiam-brown mb-2">Our Gallery</h2>
            <p className="text-gray-500 font-light">Snapshots of daily life at the Kopitiam.</p>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden md:block text-kopitiam-green hover:text-kopitiam-brown transition-colors text-sm font-bold uppercase tracking-widest">
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={img.id} 
              className={`relative group overflow-hidden rounded-lg ${
                index === 0 ? 'md:col-span-2 md:row-span-2 h-full' : 
                index === 3 ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-kopitiam-green font-bold uppercase tracking-widest text-sm">
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;