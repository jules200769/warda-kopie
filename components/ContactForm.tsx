
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  initialMessage?: string;
  isModal?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialMessage = '', isModal = false }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    setMessage(initialMessage);
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className={`bg-white p-8 rounded-3xl text-center py-16 border border-emerald-100 ${!isModal && 'shadow-xl'}`}>
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Aanvraag ontvangen!</h3>
        <p className="text-slate-600">We nemen binnen 24 uur contact met je op.</p>
      </div>
    );
  }

  return (
    <div className={`bg-white p-8 rounded-3xl relative overflow-hidden ${!isModal && 'shadow-xl border border-slate-100'}`}>
      {loading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-sky-500 animate-spin" />
        </div>
      )}

      <h3 className="text-2xl font-bold text-slate-900 mb-6">
        {isModal ? 'Gratis proefles aanvragen' : 'Plan je proefles'}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required type="text" placeholder="Naam" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all" />
          <input required type="tel" placeholder="Telefoon" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all" />
        </div>
        <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all" />
        <textarea 
          rows={3} 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Je bericht..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all resize-none"
        ></textarea>
        <button type="submit" className="w-full bg-sky-500 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-sky-600 transition-all flex items-center justify-center gap-2">
          Versturen <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
