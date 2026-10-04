import { Mic2, Radio, Headphones, TrendingUp, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const areas = [
  {
    icon: Mic2,
    title: 'Produtora',
    description: 'Produção de áudio para sua marca, sua rádio e seus projetos.',
    buttonText: 'Conheça a Produtora',
    href: '#demonstrativos',
    internal: true,
  },
  {
    icon: Radio,
    title: 'Radiofusão',
    description:
      'Consultoria, projetos técnicos e soluções para rádio, TV, RadCom e telecomunicações.',
    buttonText: 'Acessar Radiofusão',
    href: 'https://souzabeatsradiofusao.netlify.app/',
    internal: false,
  },
  {
    icon: Headphones,
    title: 'Equipamentos',
    description:
      'Equipamentos e soluções para áudio, rádio e produção profissional.',
    buttonText: 'Ver Equipamentos',
    href: 'https://catalogosouzabeats.netlify.app/',
    internal: false,
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description:
      'Marketing digital, sites, campanhas, vídeos, redes sociais e soluções para sua marca.',
    buttonText: 'Conhecer Marketing',
    href: 'https://souzabeatsmarketing.netlify.app/',
    internal: false,
  },
];

export default function Ecosystem() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0f1d] to-[#080b16]" id="ecossistema">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-amber-400 font-semibold tracking-widest text-sm uppercase mb-3">
            Um ecossistema. Quatro soluções.
          </p>
          <h2 className="section-title">O Ecossistema Souza Beats</h2>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            A Souza Beats reúne diferentes soluções em um único ecossistema, conectando produção de áudio, radiodifusão, equipamentos e marketing para entregar mais praticidade e possibilidades para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {areas.map((area) => (
            <TiltCard key={area.title} className="ecosystem-card">
              <div className="ecosystem-icon-wrapper">
                <area.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                {area.title}
              </h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed mb-6 flex-1">
                {area.description}
              </p>
              <a
                href={area.href}
                {...(area.internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="ecosystem-button"
              >
                {area.buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </TiltCard>
          ))}
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500 mb-4">
            Mais do que uma produtora.
          </h3>
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-6">
            Uma estrutura completa para o seu projeto.
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Da produção de áudio ao marketing digital. Da radiodifusão aos equipamentos. Tudo conectado em um único ecossistema.
          </p>
        </div>
      </div>
    </section>
  );
}
