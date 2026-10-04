import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5531983532534?text=Olá!%20Vi%20o%20site%20da%20Souza%20Beats%20e%20quero%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="whatsapp-tooltip">
        Solicite um orçamento
      </span>
    </a>
  );
}
