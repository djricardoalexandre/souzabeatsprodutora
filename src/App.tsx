import Header from './components/Header';
import Hero from './components/Hero';
import VoiceBank from './components/VoiceBank';
import Portfolio from './components/Portfolio';
import News from './components/News';
import DigitalVoice from './components/DigitalVoice';
import ServicesWeb from './components/ServicesWeb';
import About from './components/About';
import WhatsAppButton from './components/WhatsAppButton';
import { Instagram, Facebook, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1d] via-[#080b16] to-[#0a0f1d] text-white">
      <Header />
      <Hero />
      <VoiceBank />
      <Portfolio />
      <News />
      <DigitalVoice />
      <ServicesWeb />
      <About />
      <WhatsAppButton />

      <footer className="py-12 border-t border-amber-500/20 bg-[#080b16]/60 text-center mt-10">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 mb-6 font-medium">Siga o DJ Ricardo Souza</p>

          <div className="flex justify-center gap-10">
            <a
              href="https://instagram.com/SEU_USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-all hover:scale-110"
            >
              <Instagram size={30} />
            </a>

            <a
              href="https://facebook.com/SEU_USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-all hover:scale-110"
            >
              <Facebook size={30} />
            </a>

            <a
              href="https://youtube.com/SEU_CANAL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-all hover:scale-110"
            >
              <Youtube size={30} />
            </a>
          </div>

          <p className="mt-10 text-xs text-gray-600 uppercase tracking-widest">
            © 2026 Souza Beats - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
