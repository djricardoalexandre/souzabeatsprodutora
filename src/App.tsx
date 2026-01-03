import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import News from './components/News';
import ServicesWeb from './components/ServicesWeb';
import About from './components/About';
import WhatsAppButton from './components/WhatsAppButton';
import { Instagram, Facebook, Youtube } from 'lucide-react'; // Importando os ícones

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#0a0a0a] to-[#0a0a0a] text-white">
      <Header />
      <Hero />
      <Portfolio />
      <News />
      <ServicesWeb />
      <About />
      <WhatsAppButton />

      {/* Rodapé Adicionado aqui no final */}
      <footer className="py-12 border-t border-gray-800 bg-black/40 text-center mt-10">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 mb-6 font-medium">Siga o DJ Ricardo Souza</p>
          
          <div className="flex justify-center gap-10">
            {/* Instagram */}
            <a 
              href="https://instagram.com/SEU_USUARIO" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition-all hover:scale-110"
            >
              <Instagram size={30} />
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com/SEU_USUARIO" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-all hover:scale-110"
            >
              <Facebook size={30} />
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com/SEU_CANAL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-600 transition-all hover:scale-110"
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
