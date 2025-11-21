import React from 'react';
import { MapPin, Clock, Phone, Instagram, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Info Section */}
        <div className="lg:w-1/2 p-12 lg:p-24 bg-kopitiam-brown text-kopitiam-cream flex flex-col justify-center">
          <div className="max-w-md mx-auto lg:mx-0">
            <h4 className="text-kopitiam-gold font-bold tracking-widest text-xs uppercase mb-4">Get in Touch</h4>
            <h2 className="font-serif text-4xl md:text-5xl mb-12">Visit Us Today</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="mt-1 text-kopitiam-gold">
                   <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 group-hover:text-kopitiam-gold transition-colors">Location</h4>
                  <p className="text-gray-300 leading-relaxed font-light">
                    123, Jalan Warisan,<br />
                    Taman Melawati,<br />
                    53100 Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="mt-1 text-kopitiam-gold">
                   <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 group-hover:text-kopitiam-gold transition-colors">Hours</h4>
                  <div className="flex justify-between w-48 text-gray-300 font-light">
                     <span>Mon - Sun</span>
                     <span>7:30 - 18:00</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="mt-1 text-kopitiam-gold">
                   <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-4 group-hover:text-kopitiam-gold transition-colors">Contact</h4>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/60123456789" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors flex items-center gap-2 text-sm"
                    >
                      WhatsApp Us <ArrowUpRight size={16} />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-6 py-3 border border-white/20 hover:border-white/50 rounded-full transition-colors flex items-center gap-2 text-sm"
                    >
                      <Instagram size={16} /> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="lg:w-1/2 h-[400px] lg:h-auto bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5366417736067!2d101.74865531475766!3d3.215488997660213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3843bfb69c63%3A0x365271c658717d52!2sMelawati%20Mall!5e0!3m2!1sen!2smy!4v1646214234561!5m2!1sen!2smy" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy"
             title="Google Maps"
             className="w-full h-full"
           ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;