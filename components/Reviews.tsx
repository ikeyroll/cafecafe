import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-kopitiam-cream border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-kopitiam-brown mb-4">Customer Love</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative group">
              <div className="absolute top-6 left-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-kopitiam-gold" />
              </div>
              
              <div className="flex gap-1 mb-6 text-kopitiam-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic font-serif text-lg leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="mt-auto">
                <h5 className="font-bold text-kopitiam-brown uppercase tracking-wider text-sm">{review.name}</h5>
                <span className="text-xs text-gray-400 mt-1 block">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;