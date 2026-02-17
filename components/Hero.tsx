
import React from 'react';
import { ArrowRight, MessageCircle, Star, Mail } from 'lucide-react';

interface HeroProps {
  onTrialClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTrialClick }) => {
  return (
    <div className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Achtergrondafbeelding – plaats je eigen afbeelding in de projectmap als hero-achtergrond.jpg (of .png) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./hero-achtergrond.jpg" 
          alt="Rijschool Warda Lesauto" 
          className="w-full h-full object-cover object-center lg:object-[80%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 backdrop-blur-sm text-sky-600 text-sm font-bold mb-6 border border-sky-200">
            Sinds 2009 • Nu beschikbaar in Udenhout
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-6">
            Rijbewijs halen? <br />
            <span className="text-sky-500">Warda helpt je!</span>
          </h1>
          
          <p className="text-xl text-slate-700 font-medium mb-10 max-w-lg leading-relaxed">
            Leer autorijden in onze moderne Volkswagen Golf. Al sinds 2009 bieden wij persoonlijke en geduldige begeleiding voor alle leerlingen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button 
              onClick={onTrialClick}
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-sky-200 flex items-center justify-center gap-2 transition-all hover:-translate-y-1 active:scale-95"
            >
              Gratis proefles aanvragen
              <ArrowRight size={22} />
            </button>
            
            <div className="flex gap-3">
              <a 
                href="https://wa.me/31649674309" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all flex items-center gap-2 pr-6"
              >
                <MessageCircle size={24} />
                <span className="font-bold">WhatsApp</span>
              </a>
              <a href="mailto:Autorijschoolwarda@hotmail.com" className="bg-white text-slate-900 p-4 rounded-full shadow-lg border hover:scale-110 transition-all"><Mail size={24} /></a>
            </div>
          </div>
          
          <div className="mt-14 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/100/100?random=${i + 40}`} 
                  alt="Tevreden leerling" 
                  className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-md" 
                />
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className="text-sm text-slate-700 font-bold uppercase tracking-wider">Topbeoordeling sinds 2009</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
