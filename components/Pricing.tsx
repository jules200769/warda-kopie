
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  const { ref: gridRef, isInView } = useInView({ threshold: 0.1 });
  const packs = [
    {
      name: "Losse Rijles",
      price: "62",
      lessons: "1 les van 60 min",
      popular: false,
      features: ["Betaling per les", "Flexibel inplannen", "Moderne lesauto", "Geduldige instructeur"]
    },
    {
      name: "Pakket 1",
      price: "1510",
      lessons: "20 Lessen",
      popular: false,
      features: ["Inclusief praktijkexamen", "Voordeliger tarief", "Vaste begeleiding", "Persoonlijk lesplan"]
    },
    {
      name: "Pakket 2",
      price: "2090",
      lessons: "30 Lessen",
      popular: true,
      features: ["Inclusief praktijkexamen", "Meest gekozen", "Inclusief lesmateriaal", "Optimale voorbereiding"]
    },
    {
      name: "Pakket 3",
      price: "2670",
      lessons: "40 Lessen",
      popular: false,
      features: ["Inclusief praktijkexamen", "Complete ontzorging", "Hoogste slaagkans", "Volledig pakket"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Onze Tarieven</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Kies het pakket dat het beste bij jouw leerstijl past. Alle prijzen zijn inclusief BTW en het praktijkexamen.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packs.map((pack, i) => (
          <div 
            key={i} 
            className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl flex flex-col ${pack.popular ? 'border-sky-500 scale-105 z-10' : 'border-transparent'} ${!isInView ? 'opacity-0' : 'animate-in-view'}`}
            style={isInView ? { animationDelay: `${i * 120}ms` } : undefined}
          >
            {pack.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                Populairst
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{pack.name}</h3>
              <p className="text-sky-500 font-semibold">{pack.lessons}</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-slate-900">€</span>
                <span className="text-5xl font-extrabold text-slate-900">{pack.price}</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {pack.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                  <Check size={18} className="text-sky-500 shrink-0 mt-0.5" />
                  <span className={f.includes("praktijkexamen") ? "font-bold text-slate-900" : ""}>{f}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => onSelectPackage(pack.name)}
              className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${pack.popular ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}
            >
              Aanmelden
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block bg-white p-6 rounded-2xl border border-sky-100 shadow-sm">
          <p className="text-slate-600 font-medium">
            Het praktijkexamen t.w.v. <span className="text-sky-600 font-bold">€350</span> is bij Pakket 1, 2 en 3 <span className="text-emerald-600 font-bold italic">reeds inbegrepen</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
