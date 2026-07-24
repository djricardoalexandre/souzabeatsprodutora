export default function About() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#080b16] to-[#0a0f1d]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Sobre Nós</h2>
        <div className="max-w-4xl mx-auto">
          <div className="about-card p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 shadow-2xl">
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500 font-bold">Souza Beats Produtora</span> e a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500 font-bold">Souza Beats Radiodifusão</span> formam uma central completa de inteligência criativa e técnica.
              Unimos a potência do áudio profissional, desenvolvimento web e soluções especializadas em outorgas, engenharia e legalização junto ao Ministério das Comunicações.
              Nossa missão é transformar projetos em emissoras prontas para operar e elevar marcas a referências no mercado através de produções sonoras e infraestrutura de elite.
            </p>
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 mt-6 text-center">
              Criatividade que conecta, tecnologia e radiodifusão que escalam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
