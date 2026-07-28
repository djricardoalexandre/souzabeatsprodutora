import { Mic } from 'lucide-react';

export default function VoiceBank() {
  return (
    <section className="voice-bank-section py-16 px-4 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 border-y border-amber-500/50">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mic className="w-8 h-8 text-amber-400" style={{ animation: 'blink 1.5s ease-in-out infinite' }} />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500">
              Banco de Vozes
            </h2>
            <Mic className="w-8 h-8 text-amber-500" style={{ animation: 'blink 1.5s ease-in-out infinite 0.75s' }} />
          </div>

          <p className="text-gray-200 mb-2 max-w-2xl mx-auto text-lg font-semibold">
            100 Vozes Exclusivas da Souza Beats
          </p>
          <p className="text-gray-300 mb-4 max-w-3xl mx-auto text-base italic">
            Encontre a voz perfeita para o seu projeto e transforme sua ideia em uma produção de alto impacto.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm">
            O banco de vozes da Souza Beats reúne talentos profissionais para produções publicitárias que valorizam a sua marca.
          </p>

          <a
            href="https://vozessouzabeatsprodutora.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[#0a0f1d] font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/50"
          >
            Acessar Banco de Vozes
          </a>
        </div>
      </div>
    </section>
  );
}
