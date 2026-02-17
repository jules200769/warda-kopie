import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeaturesProps {
  onTrialClick: () => void;
}

const Features: React.FC<FeaturesProps> = ({ onTrialClick }) => {
  const handleScrollToPakketten = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#pakketten');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pl-4 pr-0 lg:pl-8 xl:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-stretch">
        {/* Linkerkolom: tekst + knoppen */}
        <div className="flex flex-col justify-center max-w-2xl">
          <div className="bg-sky-500/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-sky-200/50 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Over Mij
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Sinds 2009 ben ik jouw betrouwbare rij-instructeur in Udenhout en omgeving. Met jarenlange ervaring en een passie voor lesgeven, help ik je op een persoonlijke en geduldige manier naar je rijbewijs. Ik werk met een moderne Volkswagen Golf en zorg voor een veilige, ontspannen leeromgeving waar jij je op je gemak voelt. Mijn doel is niet alleen dat je slaagt voor je examen, maar ook dat je een zelfverzekerde en veilige bestuurder wordt. Geen wachtlijsten, directe aandacht en een aanpak die bij jou past — dat is wat je van mij kunt verwachten.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              onClick={onTrialClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors animate-orange-glow"
            >
              Gratis Proefles
              <ArrowRight size={20} />
            </button>
            <a
              href="#pakketten"
              onClick={handleScrollToPakketten}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold rounded-xl transition-colors animate-sky-glow"
            >
              Tarieven
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Rechterkolom: afbeelding – grenst aan rechterzijde van de site */}
        <div className="relative min-h-[420px] lg:min-h-[520px] rounded-l-2xl overflow-hidden">
          <img
            src="/waarom-achtergrond.jpg"
            alt="Interieur lesauto Rijschool Warda"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
