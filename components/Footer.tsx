
import React from 'react';
import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center text-white font-bold">C</div>
              <span className="text-white font-bold text-xl tracking-tight">
                Rijschool <span className="text-sky-500">Caran</span>
              </span>
            </div>
            <p className="mb-6 leading-relaxed">
              Al jaren bied ik professionele rijopleidingen in de regio. Jouw veiligheid en succes zijn mijn hoogste prioriteit.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <WhatsAppIcon size={18} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                <a 
                  href="https://wa.me/31655775696" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: 06 55775696
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail size={18} className="text-sky-500 group-hover:scale-110 transition-transform mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@rijschoolcaran.nl" className="hover:text-white transition-colors break-all">info@rijschoolcaran.nl</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-sky-500" />
                <span>Nederland</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Openingstijden</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Ma t/m Vr:</span>
                <span className="text-white">09:00 – 17:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Zaterdag:</span>
                <span className="text-white">09:00 – 17:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Zondag:</span>
                <span className="text-sky-400">Gesloten</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-white hover:pl-2 transition-all">Home</a></li>
              <li><a href="#waarom" onClick={(e) => handleScroll(e, '#waarom')} className="hover:text-white hover:pl-2 transition-all">Over Mij</a></li>
              <li><a href="#pakketten" onClick={(e) => handleScroll(e, '#pakketten')} className="hover:text-white hover:pl-2 transition-all">Lespakketten</a></li>
              <li><a href="#geslaagden" onClick={(e) => handleScroll(e, '#geslaagden')} className="hover:text-white hover:pl-2 transition-all">Geslaagden</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-white hover:pl-2 transition-all font-semibold text-sky-500">Gratis Proefles</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} Rijschool Caran. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Algemene Voorwaarden</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Gemaakt met liefde en plezier door{' '}
            <a href="https://www.nickvd-websites.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">
              www.nickvd-websites.com
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
