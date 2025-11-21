import React, { useState } from 'react';
import { Sparkles, MessageCircle, Coffee } from 'lucide-react';
import { getMenuRecommendation } from '../services/geminiService';

const AiWaiter: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setLoading(true);
    setRecommendation('');
    
    const result = await getMenuRecommendation(mood);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-12 bg-kopitiam-brown text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-kopitiam-gold opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-kopitiam-green opacity-20 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 mb-4 text-kopitiam-gold">
            <Sparkles size={24} />
            <h3 className="font-bold uppercase tracking-widest text-sm">AI Waiter</h3>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Not sure what to eat?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Tell our digital waiter how you're feeling (e.g., "Sleepy," "Super hungry," "Need something sweet"), and we'll recommend the perfect Kopitiam fix.
          </p>

          <form onSubmit={handleAsk} className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="I'm feeling..."
              className="flex-1 px-6 py-4 rounded-lg bg-white/90 text-kopitiam-brown placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kopitiam-gold"
            />
            <button
              type="submit"
              disabled={loading || !mood}
              className="px-8 py-4 bg-kopitiam-gold hover:bg-yellow-600 disabled:bg-gray-500 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? 'Asking Chef...' : 'Recommend Me'} <Coffee size={20} />
            </button>
          </form>

          {recommendation && (
            <div className="bg-white/95 text-kopitiam-brown p-6 rounded-lg shadow-lg border-l-4 border-kopitiam-green animate-fade-in">
              <div className="flex gap-3 items-start">
                <MessageCircle className="text-kopitiam-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-serif font-medium text-lg italic">"{recommendation}"</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiWaiter;