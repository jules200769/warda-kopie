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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Rijles Udenhout
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Bij Rijschool Warda krijg je kwalitatieve rijlessen in een vertrouwde omgeving. Sinds 2009 helpen wij leerlingen uit Udenhout en omgeving met een persoonlijke aanpak, zodat jij met een veilig gevoel je rijbewijs haalt.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Wij bereiden je doelgericht voor op het CBR-examen, met ervaren en geduldige instructeurs en een moderne Volkswagen Golf. Geen wachtlijst — je kunt direct starten.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Benieuwd of rijles bij ons bij je past? Vraag een gratis proefles aan of bekijk onze tarieven.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onTrialClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
            >
              Gratis Proefles
              <ArrowRight size={20} />
            </button>
            <a
              href="#pakketten"
              onClick={handleScrollToPakketten}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold rounded-xl transition-colors"
            >
              Tarieven
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Rechterkolom: afbeelding – grenst aan rechterzijde van de site */}
        <div className="relative min-h-[420px] lg:min-h-[520px] rounded-l-2xl overflow-hidden">
          <img
            src="./waarom-achtergrond.jpg"
            alt="Interieur lesauto Rijschool Warda"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
