
import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  MessageCircle,
  X
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import SuccessGallery from './components/SuccessGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollCar from './components/ScrollCar';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const openTrialModal = () => {
    setModalMessage('Ik wil me graag aanmelden voor een gratis proefles.');
    setIsModalOpen(true);
  };

  const handleSelectPackage = (packageName: string) => {
    setModalMessage(`Ik wil me graag aanmelden voor: ${packageName}`);
    setIsModalOpen(true);
  };

  return (
    <div className="relative overflow-hidden">
      <Navbar onContactClick={openTrialModal} />
      
      <main>
        <div id="home">
          <Hero onTrialClick={openTrialModal} />
        </div>
        
        <section id="waarom" className="py-20 bg-white">
          <Features />
        </section>

        <section id="pakketten" className="py-20 baby-blue-gradient">
          <Pricing onSelectPackage={handleSelectPackage} />
        </section>

        <section id="geslaagden" className="py-20 bg-white">
          <SuccessGallery />
        </section>

        <section id="contact" className="py-20 baby-blue-gradient">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Neem contact op</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Heb je vragen over onze lessen of wil je direct een afspraak maken? Wij staan voor je klaar via WhatsApp en e-mail.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="bg-emerald-100 p-3 rounded-full text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <MessageCircle size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">WhatsApp</p>
                        <a 
                          href="https://wa.me/31649674309" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-lg font-semibold hover:text-emerald-600 transition-colors"
                        >
                          06 49674309
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-sky-100 p-3 rounded-full text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all mt-1">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">E-mail</p>
                        <a href="mailto:Autorijschoolwarda@hotmail.com" className="text-lg font-semibold hover:text-sky-600 transition-colors block">Autorijschoolwarda@hotmail.com</a>
                        <a href="mailto:info@rijschoolwarda.nl" className="text-lg font-semibold hover:text-sky-600 transition-colors block">info@rijschoolwarda.nl</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="bg-sky-100 p-3 rounded-full text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Locatie</p>
                        <p className="text-lg font-semibold">Udenhout, Nederland</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ContactForm />
             </div>
          </div>
        </section>
      </main>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-modal">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="max-h-[90vh] overflow-y-auto">
              <ContactForm initialMessage={modalMessage} isModal={true} />
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
