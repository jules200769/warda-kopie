
import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  X
} from 'lucide-react';
import WhatsAppIcon from './components/WhatsAppIcon';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerCarousel from './components/TickerCarousel';
import Features from './components/Features';
import Pricing from './components/Pricing';
import GoogleReviews from './components/GoogleReviews';
import SuccessGallery from './components/SuccessGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollCar from './components/ScrollCar';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [serviceInfo, setServiceInfo] = useState<{ title: string; price: string; description: string } | undefined>(undefined);

  const openTrialModal = () => {
    setModalMessage('Ik wil me graag aanmelden voor een gratis proefles.');
    setServiceInfo(undefined);
    setIsModalOpen(true);
  };

  const handleSelectPackage = (packageName: string) => {
    setModalMessage(`Ik wil me graag aanmelden voor: ${packageName}`);
    setServiceInfo(undefined);
    setIsModalOpen(true);
  };

  const handleReadMoreTussentijdseToets = () => {
    setModalMessage('Ik wil me graag aanmelden voor de Tussentijdse Toets.');
    setServiceInfo({
      title: 'Tussentijdse Toets',
      price: '280',
      description: 'Oefen het echte examen en vergroot je slagingskans. De tussentijdse toets is een perfecte manier om te ervaren hoe het echte examen verloopt en waar je nog extra aandacht aan moet besteden.'
    });
    setIsModalOpen(true);
  };

  return (
    <div className="relative overflow-hidden">
      <Navbar onContactClick={openTrialModal} />
      
      <main>
        <div id="home">
          <Hero onTrialClick={openTrialModal} />
        </div>

        <TickerCarousel />

        <section id="waarom" className="py-20 bg-white">
          <Features onTrialClick={openTrialModal} />
        </section>

        <div className="page-gradient-white-to-blue">
          <section id="pakketten" className="pt-20 pb-10 bg-transparent">
            <Pricing onSelectPackage={handleSelectPackage} onReadMore={handleReadMoreTussentijdseToets} />
          </section>

          <section id="reviews" className="py-10 bg-transparent">
            <GoogleReviews />
          </section>

          <section id="geslaagden" className="pt-10 pb-20 bg-transparent">
            <SuccessGallery />
          </section>

          <section id="contact" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Neem contact op</h2>
                    <p className="text-lg text-slate-200 mb-8">
                      Heb je vragen over mijn lessen of wil je direct een afspraak maken? Ik sta voor je klaar via WhatsApp en e-mail.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 group">
                        <div className="bg-emerald-500/20 p-3 rounded-full text-emerald-300 group-hover:bg-emerald-500/40 transition-all">
                          <WhatsAppIcon size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">WhatsApp</p>
                          <a 
                            href="https://wa.me/31655775696" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-lg font-semibold text-white hover:text-emerald-300 transition-colors"
                          >
                            06 55775696
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 group">
                        <div className="bg-sky-500/20 p-3 rounded-full text-sky-300 group-hover:bg-sky-500/40 transition-all mt-1">
                          <Mail size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">E-mail</p>
                          <a href="mailto:autorijschoolcaran@hotmail.nl" className="text-lg font-semibold text-white hover:text-sky-300 transition-colors block">autorijschoolcaran@hotmail.nl</a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 group">
                        <div className="bg-sky-500/20 p-3 rounded-full text-sky-300 group-hover:bg-sky-500/40 transition-all">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Locatie</p>
                          <p className="text-lg font-semibold text-white">Nederland</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ContactForm />
               </div>
            </div>
          </section>
        </div>
      </main>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-white/10 backdrop-blur-xl w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-modal border border-white/20">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-slate-200 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="max-h-[90vh] overflow-y-auto">
              <ContactForm initialMessage={modalMessage} isModal={true} serviceInfo={serviceInfo} />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <ScrollCar />
    </div>
  );
};

export default App;
