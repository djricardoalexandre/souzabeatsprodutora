import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import VoiceBank from './components/VoiceBank';
import Portfolio from './components/Portfolio';
import MoreSolutions from './components/MoreSolutions';
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
      <Ecosystem />
      <VoiceBank />
      <Portfolio />
      <MoreSolutions />
      <DigitalVoice />
      <ServicesWeb />
      <About />
      <WhatsAppButton />

      <footer className="footer-section">
        <div className="container mx-auto px-4">
          <div className="footer-grid">
            <div className="footer-brand">
              <img
                src="/nova_logo_souza_beats-300x300.jpg"
                alt="Souza Beats Logo"
                className="footer-logo"
              />
              <p className="footer-brand-text">
                Um ecossistema completo de soluções em áudio, vídeo, radiodifusão, equipamentos e marketing digital.
              </p>
            </div>

            <div className="footer-links">
              <h4 className="footer-links-title">Navegação</h4>
              <a href="#inicio" className="footer-link">Início</a>
              <a href="#ecossistema" className="footer-link">Ecossistema</a>
              <a href="#demonstrativos" className="footer-link">Demonstrativos</a>
              <a href="#banco-de-vozes" className="footer-link">Banco de Vozes</a>
              <a href="#radiodifusao" className="footer-link">Radiofusão</a>
              <a href="#contato" className="footer-link">Contato</a>
            </div>

            <div className="footer-links">
              <h4 className="footer-links-title">Ecossistema</h4>
              <a href="#demonstrativos" className="footer-link">Produtora</a>
              <a href="https://souzabeatsradiofusao.netlify.app/" target="_blank" rel="noopener noreferrer" className="footer-link">Radiofusão</a>
              <a href="https://catalogosouzabeats.netlify.app/" target="_blank" rel="noopener noreferrer" className="footer-link">Equipamentos</a>
              <a href="https://souzabeatsmarketing.netlify.app/" target="_blank" rel="noopener noreferrer" className="footer-link">Marketing</a>
              <a href="https://vozessouzabeatsprodutora.netlify.app" target="_blank" rel="noopener noreferrer" className="footer-link">Banco de Vozes</a>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div className="footer-social">
              <a href="https://instagram.com/SEU_USUARIO" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Instagram size={26} />
              </a>
              <a href="https://facebook.com/SEU_USUARIO" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Facebook size={26} />
              </a>
              <a href="https://youtube.com/SEU_CANAL" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Youtube size={26} />
              </a>
            </div>
            <p className="footer-copy">
              © 2026 Souza Beats - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
