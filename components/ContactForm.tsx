
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface ServiceInfo {
  title: string;
  price: string;
  description: string;
}

interface ContactFormProps {
  initialMessage?: string;
  isModal?: boolean;
  serviceInfo?: ServiceInfo;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialMessage = '', isModal = false, serviceInfo }) => {
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
      <div className={`${isModal ? 'bg-transparent' : 'bg-white'} p-8 rounded-3xl text-center py-16 ${isModal ? '' : 'border border-emerald-100 shadow-xl'}`}>
        <div className={`w-20 h-20 ${isModal ? 'bg-emerald-500/30' : 'bg-emerald-100'} ${isModal ? 'text-emerald-200' : 'text-emerald-600'} rounded-full flex items-center justify-center mx-auto mb-6`}>
          <CheckCircle size={40} />
        </div>
        <h3 className={`text-2xl font-bold ${isModal ? 'text-white' : 'text-slate-900'} mb-2`}>Aanvraag ontvangen!</h3>
        <p className={isModal ? 'text-slate-200' : 'text-slate-600'}>Ik neem binnen 24 uur contact met je op.</p>
      </div>
    );
  }

  return (
    <div className={`${isModal ? 'bg-transparent' : 'bg-white'} p-8 rounded-3xl relative overflow-hidden ${!isModal && 'shadow-xl border border-slate-100'}`}>
      {loading && (
        <div className={`absolute inset-0 ${isModal ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'} z-10 flex items-center justify-center`}>
          <Loader2 className={`w-12 h-12 ${isModal ? 'text-white' : 'text-sky-500'} animate-spin`} />
        </div>
      )}

      {serviceInfo && (
        <div className={`${isModal ? 'bg-emerald-500/20 backdrop-blur-sm border-emerald-300/30' : 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-200'} rounded-2xl p-6 mb-6 border`}>
          <h4 className={`text-xl font-bold ${isModal ? 'text-white' : 'text-slate-900'} mb-2`}>{serviceInfo.title}</h4>
          <div className="flex items-baseline gap-2 mb-3">
            <span className={`text-2xl font-bold ${isModal ? 'text-emerald-200' : 'text-emerald-600'}`}>€</span>
            <span className={`text-4xl font-extrabold ${isModal ? 'text-emerald-200' : 'text-emerald-600'}`}>{serviceInfo.price}</span>
          </div>
          <p className={`${isModal ? 'text-slate-100' : 'text-slate-700'} text-sm leading-relaxed mb-2`}>{serviceInfo.description}</p>
          <p className={`${isModal ? 'text-slate-200' : 'text-slate-600'} text-xs italic`}>
            Perfect om je voor te bereiden op het echte examen en je zelfvertrouwen te vergroten!
          </p>
        </div>
      )}

      <h3 className={`text-2xl font-bold ${isModal ? 'text-white' : 'text-slate-900'} mb-6`}>
        {isModal ? (serviceInfo ? 'Aanmelden voor Tussentijdse Toets' : 'Gratis proefles aanvragen') : 'Plan je proefles'}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required type="text" placeholder="Naam" className={`w-full px-4 py-3 rounded-xl ${isModal ? 'bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-slate-300 focus:ring-2 focus:ring-white/50' : 'bg-white border-slate-200 focus:ring-2 focus:ring-sky-500'} focus:outline-none transition-all`} />
          <input required type="tel" placeholder="Telefoon" className={`w-full px-4 py-3 rounded-xl ${isModal ? 'bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-slate-300 focus:ring-2 focus:ring-white/50' : 'bg-white border-slate-200 focus:ring-2 focus:ring-sky-500'} focus:outline-none transition-all`} />
        </div>
        <input required type="email" placeholder="Email" className={`w-full px-4 py-3 rounded-xl ${isModal ? 'bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-slate-300 focus:ring-2 focus:ring-white/50' : 'bg-white border-slate-200 focus:ring-2 focus:ring-sky-500'} focus:outline-none transition-all`} />
        <textarea 
          rows={3} 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Je bericht..."
          className={`w-full px-4 py-3 rounded-xl ${isModal ? 'bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-slate-300 focus:ring-2 focus:ring-white/50' : 'bg-white border-slate-200 focus:ring-2 focus:ring-sky-500'} focus:outline-none transition-all resize-none`}
        ></textarea>
        <button type="submit" className="w-full bg-sky-500 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-sky-600 transition-all flex items-center justify-center gap-2">
          Versturen <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
