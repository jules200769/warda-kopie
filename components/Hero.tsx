
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface HeroProps {
  onTrialClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTrialClick }) => {
  return (
    <div className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Achtergrondafbeelding – plaats je eigen afbeelding in de projectmap als hero-achtergrond.jpg (of .png) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-achtergrond.jpg" 
          alt="Rijschool Caran Lesauto" 
          className="w-full h-full object-cover object-center lg:object-[80%_center]"
        />
        <div className="absolute inset-0 bg-blue-900/50" aria-hidden />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            Rijbewijs halen? <br />
            <span className="text-sky-300">Caran helpt je!</span>
          </h1>
          
          <p className="text-xl text-white/95 font-medium mb-10 max-w-lg leading-relaxed">
            Leer autorijden in mijn moderne Volkswagen Golf.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button 
              onClick={onTrialClick}
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-sky-200 flex items-center justify-center gap-2 transition-all hover:-translate-y-1 active:scale-95 animate-sky-glow"
            >
              Gratis proefles aanvragen
              <ArrowRight size={22} />
            </button>
            
            <div className="flex gap-3">
              <a 
                href="https://wa.me/31649674309" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-500 text-white p-4 rounded-full shadow-lg animate-green-glow hover:scale-110 transition-all flex items-center gap-2 pr-6"
              >
                <WhatsAppIcon size={24} />
                <span className="font-bold">WhatsApp</span>
              </a>
              <a href="mailto:info@rijschoolcaran.nl" className="bg-white text-slate-900 p-4 rounded-full shadow-lg border hover:scale-110 transition-all"><Mail size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
