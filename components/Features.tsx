
import React from 'react';
import { 
  Award, 
  Clock, 
  Heart, 
  Car, 
  CheckCircle2, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Hoog slagingspercentage',
      desc: 'Onze leerlingen slagen vaak in één keer door onze doelgerichte training.',
      icon: Award
    },
    {
      title: 'Betrouwbare begeleiding',
      desc: 'Wij staan bekend om onze eerlijke en professionele instructeurs.',
      icon: ShieldCheck
    },
    {
      title: 'Persoonlijke aanpak',
      desc: 'Iedere leerling is anders. Wij passen onze lessen aan op jouw tempo.',
      icon: UserCheck
    },
    {
      title: 'Flexibele lestijden',
      desc: 'Lessen wanneer het jou uitkomt, ook in de avonduren of op zaterdag.',
      icon: Clock
    },
    {
      title: 'Moderne lesauto',
      desc: 'Leer rijden in een comfortabele, veilige en moderne Volkswagen Golf.',
      icon: Car
    },
    {
      title: 'Geduldige instructeurs',
      desc: 'Geen stress achter het stuur. Wij blijven altijd rustig en geduldig.',
      icon: Heart
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
          Waarom kiezen voor Rijschool Warda?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Wij bieden kwalitatieve rijlessen in een vertrouwde omgeving, zodat jij met een veilig gevoel je rijbewijs haalt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
              <f.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
            <p className="text-slate-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Een comfortabele leeromgeving</h3>
          <p className="text-slate-400 max-w-md">Leer rijden in een ontspannen sfeer waarin fouten maken mag, want daar leer je het meeste van.</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="text-sky-400" size={20} />
            <span className="font-medium">Direct starten</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="text-sky-400" size={20} />
            <span className="font-medium">Geen wachtlijst</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
