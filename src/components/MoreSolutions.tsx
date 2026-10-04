import { Headphones, TrendingUp, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const solutions = [
  {
    icon: Headphones,
    title: 'Equipamentos',
    description: 'Encontre equipamentos e soluções para seu projeto.',
    buttonText: 'Acessar Catálogo',
    href: 'https://catalogosouzabeats.netlify.app/',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Leve sua marca para o digital com soluções completas de marketing.',
    buttonText: 'Acessar Souza Beats Marketing',
    href: 'https://souzabeatsmarketing.netlify.app/',
  },
];

export default function MoreSolutions() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#080b16] to-[#0a0f1d]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Mais Soluções Souza Beats</h2>
        <p className="section-subtitle mb-12">
          Tudo o que sua marca precisa, em um só lugar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map((sol) => (
            <TiltCard key={sol.title} className="ecosystem-card">
              <div className="ecosystem-icon-wrapper">
                <sol.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                {sol.title}
              </h3>
              <p className="text-gray-400 text-center text-base leading-relaxed mb-6 flex-1">
                {sol.description}
              </p>
              <a
                href={sol.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ecosystem-button"
              >
                {sol.buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
