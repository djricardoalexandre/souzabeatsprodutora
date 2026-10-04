import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Demonstrativos', href: '#demonstrativos' },
  { label: 'Banco de Vozes', href: '#banco-de-vozes' },
  { label: 'Radiofusão', href: '#radiodifusao' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-fixed">
      <div className="container mx-auto px-4">
        <div className="header-inner">
          <a href="#inicio" className="header-logo-link">
            <img
              src="/nova_logo_souza_beats-300x300.jpg"
              alt="Souza Beats Logo"
              className="header-logo"
            />
          </a>

          <button
            className="header-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className={`header-nav ${menuOpen ? 'header-nav-open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="header-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
