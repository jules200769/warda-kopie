
import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/31649674309" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full animate-green-glow flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-10 duration-500 delay-1000"
      aria-label="Contact via WhatsApp"
    >
      <WhatsAppIcon size={32} />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-md whitespace-nowrap opacity-0 pointer-events-none md:group-hover:opacity-100 transition-opacity">
        WhatsApp ons!
      </span>
    </a>
  );
};

export default WhatsAppButton;
