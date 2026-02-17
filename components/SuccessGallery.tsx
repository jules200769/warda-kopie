
import React from 'react';
import { Award, Star } from 'lucide-react';

const SuccessGallery: React.FC = () => {
  // Mock data for students - user mentioned adding these later via AI Studio
  const students = [
    { name: "Sander", date: "Feb 2024", img: "https://picsum.photos/400/500?random=11" },
    { name: "Lisa", date: "Jan 2024", img: "https://picsum.photos/400/500?random=12" },
    { name: "Ahmed", date: "Dec 2023", img: "https://picsum.photos/400/500?random=13" },
    { name: "Eva", date: "Nov 2023", img: "https://picsum.photos/400/500?random=14" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Geslaagde Leerlingen</h2>
          <p className="text-lg text-slate-200">
            Bekijk de trotse gezichten van leerlingen die hun rijbewijs hebben behaald bij Rijschool Warda. Jij bent de volgende!
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
          <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white">
            <Award size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">92%</div>
            <div className="text-sm text-slate-300">Slagingspercentage</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map((s, i) => (
          <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100">
            <img 
              src={s.img} 
              alt={`Geslaagde leerling ${s.name}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 text-white font-bold text-xl mb-1">
                {s.name}
                <div className="bg-amber-400 p-1 rounded-full text-white">
                  <Star size={12} fill="currentColor" />
                </div>
              </div>
              <p className="text-white/80 text-sm">Geslaagd in {s.date}!</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sky-600 shadow-sm">
              Geslaagd! 🎉
            </div>
          </div>
        ))}
        
        {/* Empty states for new students */}
        {[1, 2, 3].map(i => (
          <div key={i} className="hidden lg:flex items-center justify-center rounded-3xl border-2 border-dashed border-white/20 bg-white/5 aspect-[4/5] group hover:border-sky-400/50 transition-colors">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-4 group-hover:text-sky-300 transition-colors">
                <Star size={24} />
              </div>
              <p className="text-slate-400 font-medium group-hover:text-sky-300 transition-colors">Jouw foto hier?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessGallery;
