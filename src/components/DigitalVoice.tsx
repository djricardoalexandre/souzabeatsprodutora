import { ShieldCheck, FileText, Cpu, Radio } from 'lucide-react';

export default function DigitalVoice() {
  const features = [
    {
      icon: FileText,
      title: 'Outorgas & Legalização',
      description: 'Processos completos junto ao Ministério das Comunicações para Rádio FM e TV.',
    },
    {
      icon: ShieldCheck,
      title: 'Consultoria Jurídica',
      description: 'Assessoria especializada e segura para a regularização da sua emissora.',
    },
    {
      icon: Cpu,
      title: 'Engenharia e Radiodifusão',
      description: 'Soluções técnicas completas e avançadas para colocar sua rádio no ar.',
    },
    {
      icon: Radio,
      title: 'Emissora Pronta para Operar',
      description: 'Da documentação à infraestrutura, tudo o que sua emissora precisa em um só lugar.',
    },
  ];

  const whatsappMessage = encodeURIComponent(
    'Olá Ricardo, vi a seção de Radiodifusão no site e quero uma análise gratuita para o meu projeto de rádio.'
  );

  return (
    <section className="section-padding bg-gradient-to-b from-[#080b16] to-[#0a0f1d]">
      <div className="container mx-auto px-4">
        {/* Logomarca do Souza Beats Radiodifusão com link para o site */}
        <div className="flex justify-center mb-6">
          <a 
            href="https://souzabeatsradiofusao.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="https://www.dropbox.com/scl/fi/bxdp2bkvj0ls8xle6c8dc/LOGO-MARCA-CONSULTORIA.png?rlkey=6y63afp0s1bduu8qi7zhmpbji&st=feqqsuzv&raw=1" 
              alt="Logo Souza Beats Radiodifusão" 
              className="h-20 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            />
          </a>
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-400 to-amber-500">
            Radiodifusão e Soluções Completa para Rádio e TV
          </h2>
          <p className="text-2xl font-semibold text-white mb-4">
            Transformamos seu projeto em uma emissora no ar.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            Da documentação à emissora pronta para operar. Especialistas em assessoria técnica e jurídica em processos de legalização e outorgas.
          </p>
          
          {/* Link de referência direto para a plataforma */}
          <div>
            <a
              href="https://souzabeatsradiofusao.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-base underline underline-offset-4 transition-colors"
            >
              Conheça a Plataforma Completa Souza Beats Radiodifusão &rarr;
            </a>
          </div>
        </div>

        {/* Cards atualizados com os pilares da Imagem 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 group"
            >
              <div className="mb-4 inline-block p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg group-hover:from-amber-500/40 group-hover:to-amber-600/40 transition-all">
                <feature.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Botão de Ação direcionando para o site ou WhatsApp */}
        <div className="text-center flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://souzabeatsradiofusao.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[#0a0f1d] font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/50"
          >
            CONHEÇA NOSSAS SOLUÇÕES
          </a>
          <a
            href={`https://wa.me/5531983532534?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-transparent border-2 border-amber-500 hover:bg-amber-500/10 text-amber-400 font-bold rounded-lg transition-all duration-300 hover:scale-105"
          >
            SOLICITE UMA ANÁLISE GRATUITA
          </a>
        </div>
      </div>
    </section>
  );
}
